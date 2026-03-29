# AutoWork Supabase 설정

## 프로젝트 정보
- **공유 Supabase 프로젝트**: hcmgdztsgjtzcyxyayaj
- **테이블 접두사**: `autowork_*` (다른 프로젝트와 구분)

## 테이블 구조

### autowork_board_posts (게시판)
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | UUID (PK) | gen_random_uuid() |
| user_id | UUID (FK → auth.users) | 작성자 |
| author_name | TEXT | 작성자 이름 |
| title | TEXT (NOT NULL) | 제목 |
| content | TEXT (NOT NULL) | 내용 |
| category | TEXT | 'notice', 'tip', 'question', 'free', 'showcase' |
| views | INTEGER | 조회수 (기본 0) |
| comment_count | INTEGER | 댓글 수 (트리거 자동 관리) |
| created_at | TIMESTAMPTZ | 생성일 |
| updated_at | TIMESTAMPTZ | 수정일 |

### autowork_board_comments (댓글)
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | UUID (PK) | gen_random_uuid() |
| post_id | UUID (FK → posts) | 게시글 참조 |
| user_id | UUID (FK → auth.users) | 작성자 |
| author_name | TEXT | 작성자 이름 |
| content | TEXT (NOT NULL) | 내용 |
| created_at | TIMESTAMPTZ | 생성일 |
| updated_at | TIMESTAMPTZ | 수정일 |

## 인덱스
- `idx_autowork_posts_user` → user_id
- `idx_autowork_posts_category` → category
- `idx_autowork_posts_created` → created_at DESC
- `idx_autowork_comments_post` → post_id

## RLS 정책 (Row Level Security)

### Posts
| 정책 | 조건 |
|------|------|
| SELECT | 누구나 조회 가능 (true) |
| INSERT | auth.uid() = user_id |
| UPDATE | auth.uid() = user_id (작성자만) |
| DELETE | auth.uid() = user_id (작성자만) |

### Comments
| 정책 | 조건 |
|------|------|
| SELECT | 누구나 조회 가능 (true) |
| INSERT | auth.uid() = user_id |
| UPDATE | auth.uid() = user_id |
| DELETE | auth.uid() = user_id |

## 트리거 & 함수

### update_autowork_comment_count()
- INSERT 시 comment_count + 1
- DELETE 시 comment_count - 1 (GREATEST 0)
- SECURITY DEFINER

### increment_autowork_post_views(post_uuid UUID)
- 조회수 +1 RPC
- SECURITY DEFINER

## 인증 설정
- **PKCE Flow** (auth-code-pkce)
- **OAuth Providers**: Google, Kakao
- **Redirect URL**: https://autowork.dreamitbiz.com
- Supabase Auth에 redirect URL 등록 필요

## SQL 파일
`supabase-setup.sql`을 Supabase SQL Editor에서 실행
