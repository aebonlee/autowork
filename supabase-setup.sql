-- ============================================
-- AutoWork Board Tables & Functions
-- Run this in Supabase SQL Editor
-- ============================================

-- 게시판 테이블
CREATE TABLE IF NOT EXISTS autowork_board_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'free'
    CHECK (category IN ('notice','tip','question','free','showcase')),
  views INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 댓글 테이블
CREATE TABLE IF NOT EXISTS autowork_board_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES autowork_board_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_autowork_posts_user ON autowork_board_posts(user_id);
CREATE INDEX IF NOT EXISTS idx_autowork_posts_category ON autowork_board_posts(category);
CREATE INDEX IF NOT EXISTS idx_autowork_posts_created ON autowork_board_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_autowork_comments_post ON autowork_board_comments(post_id);

-- RLS 활성화
ALTER TABLE autowork_board_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE autowork_board_comments ENABLE ROW LEVEL SECURITY;

-- Posts RLS: 누구나 조회, 인증된 사용자 작성, 작성자만 수정/삭제
CREATE POLICY "autowork_posts_select" ON autowork_board_posts FOR SELECT USING (true);
CREATE POLICY "autowork_posts_insert" ON autowork_board_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "autowork_posts_update" ON autowork_board_posts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "autowork_posts_delete" ON autowork_board_posts FOR DELETE USING (auth.uid() = user_id);

-- Comments RLS
CREATE POLICY "autowork_comments_select" ON autowork_board_comments FOR SELECT USING (true);
CREATE POLICY "autowork_comments_insert" ON autowork_board_comments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "autowork_comments_update" ON autowork_board_comments FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "autowork_comments_delete" ON autowork_board_comments FOR DELETE USING (auth.uid() = user_id);

-- 댓글 수 자동 증감 트리거
CREATE OR REPLACE FUNCTION update_autowork_comment_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE autowork_board_posts SET comment_count = comment_count + 1 WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE autowork_board_posts SET comment_count = GREATEST(comment_count - 1, 0) WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER autowork_comment_count_trigger
  AFTER INSERT OR DELETE ON autowork_board_comments
  FOR EACH ROW EXECUTE FUNCTION update_autowork_comment_count();

-- 조회수 증가 RPC
CREATE OR REPLACE FUNCTION increment_autowork_post_views(post_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE autowork_board_posts SET views = views + 1 WHERE id = post_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
