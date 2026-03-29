# AutoWork 사이드바 네비게이션 구현 (openclaw 스타일)

**작업일**: 2026-03-29

---

## 변경 요약

### 상단 메뉴 변경
- **이전**: 6개 메뉴 + 드롭다운 (hover시 카테고리 하위 메뉴 표시)
- **이후**: 6개 메뉴 깔끔한 flat 링크 (드롭다운 제거)
  - About → /intro
  - OA 업무자동화 → /lessons/basics
  - AI활용 업무자동화 → /lessons/ai
  - 실전 프로젝트 → /lessons/workflow
  - 프롬프트 학습 → /lessons/prompt
  - 커뮤니티 → /community/board

### 왼쪽 사이드바 추가 (openclaw 참고)
- 레슨 관련 페이지(/lessons/*)에서 왼쪽 sticky 사이드바 표시
- 4개 그룹(OA/AI/프로젝트/프롬프트) 하위 카테고리 → 레슨 목록 트리 구조
- 현재 카테고리 자동 확장, 현재 레슨 활성 상태 하이라이트
- 모바일: 사이드바 슬라이드 인/아웃 + 오버레이
- 클래스 네이밍: `aw-` prefix (aw = autowork)

---

## 수정 파일 목록 (6개)

### 신규
- `src/components/layout/LessonsSidebar.jsx` - openclaw 스타일 사이드바 컴포넌트

### 수정
- `src/components/layout/Navbar.jsx` - 드롭다운/아코디언 로직 전부 제거, 6개 flat Link
- `src/layouts/PublicLayout.jsx` - LessonsLayout 래퍼 추가 (사이드바 + Outlet), /lessons 중첩 라우트
- `src/styles/lessons.css` - aw-sidebar, aw-lessons-layout, aw-nav-* CSS 추가, 반응형
- `src/styles/navbar.css` - 불필요한 드롭다운/아코디언 CSS 제거

---

## 아키텍처

### 라우팅 구조 변경
```
이전:
<Route path="/lessons" element={<LessonCategories />} />
<Route path="/lessons/:categorySlug" element={<LessonList />} />
<Route path="/lessons/:categorySlug/:lessonSlug" element={<LessonDetail />} />

이후 (중첩 라우트):
<Route path="/lessons" element={<LessonsLayout />}>
  <Route index element={<LessonCategories />} />
  <Route path=":categorySlug" element={<LessonList />} />
  <Route path=":categorySlug/:lessonSlug" element={<LessonDetail />} />
</Route>
```

### LessonsLayout 구조
```
<div class="aw-lessons-layout">
  <LessonsSidebar />           ← 240px sticky 사이드바
  <div class="aw-main">
    <button class="aw-sidebar-toggle" />  ← 모바일 전용
    <Outlet />                  ← 레슨 페이지 렌더링
  </div>
</div>
```

### 사이드바 내 네비게이션 트리
```
학습 과정 (header)
├── OA 업무자동화 (그룹)
│   ├── 업무자동화 기초 (카테고리, 접기/펼치기)
│   │   └── 레슨 1, 2, 3... (링크)
│   ├── Excel/스프레드시트
│   ├── Python
│   ├── 문서/이메일
│   └── 데이터 수집/분석
├── AI활용 업무자동화 (그룹)
│   ├── AI 활용
│   ├── RPA
│   └── 노코드/로코드
├── 실전 프로젝트 (그룹)
│   ├── 워크플로우 설계
│   └── 실전 프로젝트
└── 프롬프트 학습 (그룹)
    └── 프롬프트 학습
```

---

## CSS 클래스 매핑 (openclaw → autowork)

| openclaw | autowork | 용도 |
|----------|----------|------|
| .ck-layout | .aw-lessons-layout | 전체 flex 레이아웃 |
| .ck-sidebar | .aw-sidebar | 사이드바 컨테이너 |
| .ck-sb-header | .aw-sb-header | 사이드바 헤더 |
| .ck-nav-group | .aw-nav-group | 그룹 래퍼 |
| .ck-nav-parent | .aw-nav-parent | 접기/펼치기 버튼 |
| .ck-nav-child | .aw-nav-child | 개별 레슨 링크 |
| .ck-main | .aw-main | 메인 콘텐츠 영역 |
