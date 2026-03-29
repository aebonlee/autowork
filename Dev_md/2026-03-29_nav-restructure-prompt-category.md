# AutoWork 상단 메뉴 재정비 + 프롬프트 학습 카테고리 추가

**작업일**: 2026-03-29
**커밋**: `95ab274` - Restructure nav to 6 menus, add prompt learning category

---

## 변경 요약

### 메뉴 구조 변경
- **이전**: About / Lessons(10개 카테고리 드롭다운) / Community (3개 메뉴)
- **이후**: About / OA 업무자동화 / AI활용 업무자동화 / 실전 프로젝트 / 프롬프트 학습 / 커뮤니티 (6개 메뉴)

### 새 메뉴별 하위 카테고리

| 메뉴 | 하위 카테고리 |
|------|-------------|
| About | /intro (단독 페이지) |
| OA 업무자동화 | basics, excel, python, document, data |
| AI활용 업무자동화 | ai, rpa, nocode |
| 실전 프로젝트 | workflow, projects |
| 프롬프트 학습 | prompt (신규, 6개 레슨) |
| 커뮤니티 | /community/board (단독 페이지) |

---

## 수정 파일 목록 (15개)

### 설정/데이터
- `src/config/lessons.js` - MENU_GROUPS 추가, prompt 카테고리(id:11) 추가, getCategoriesByGroup() 함수 추가
- `src/utils/translations.js` - nav.oaAutomation, nav.aiAutomation, nav.realProjects, nav.prompt 번역 키 추가. 레슨 수 업데이트 (10→11 카테고리, 50→56 레슨)

### 신규 콘텐츠 (6개 파일)
- `src/content/prompt/prompt-basics.js` - 프롬프트 엔지니어링 기초 (LLM 동작원리, 토큰, zero/few-shot)
- `src/content/prompt/system-prompt-design.js` - 시스템 프롬프트 설계 (페르소나, SOUL.md)
- `src/content/prompt/craft-framework.js` - CRAFT 프레임워크 (Context-Role-Action-Format-Tone)
- `src/content/prompt/output-formatting.js` - 출력 형식과 검증 (JSON 출력, 파싱, 검증 파이프라인)
- `src/content/prompt/few-shot-learning.js` - Few-shot 학습과 예제 (CoT, in-context learning)
- `src/content/prompt/prompt-security.js` - 프롬프트 보안 (인젝션 방어, 가드레일)

### 컴포넌트
- `src/components/layout/Navbar.jsx` - 6개 메뉴 구조로 전면 재작성. activeDropdown 상태, MENU_GROUPS 기반 드롭다운, 모바일 4개 아코디언
- `src/components/layout/Footer.jsx` - 퀵링크에 프롬프트 학습 추가

### 페이지
- `src/pages/Home.jsx` - MENU_GROUPS별 그룹 헤더 + 카테고리 카드, 동적 stats 계산
- `src/pages/lessons/LessonCategories.jsx` - MENU_GROUPS별 그룹 표시, 프롬프트 별도 섹션

### 스타일
- `src/styles/navbar.css` - nav-dropdown-menu-sm (프롬프트 단일 컬럼), breakpoint 1200px, nav-link 패딩 축소
- `src/styles/hero.css` - ai-tools-grid/ai-tool-card CSS 정의 추가
- `src/styles/lessons.css` - category-group/category-group-title 스타일 추가

---

## 라우팅 (변경 없음)
기존 라우팅 구조 그대로 유지. 새 프롬프트 레슨은 동적 import로 자동 처리:
- `/lessons/prompt` → LessonList
- `/lessons/prompt/prompt-basics` → LessonDetail

---

## Supabase 변경 사항
lesson_categories 테이블에 prompt 카테고리 추가가 필요할 수 있음 (프론트엔드는 config/lessons.js 기반으로 동작하므로 Supabase 연동이 있는 경우에만 해당).

---

## 배포
- GitHub Pages (gh-pages) 배포 완료
- URL: https://autowork.dreamitbiz.com
