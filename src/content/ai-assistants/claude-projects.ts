const lesson = {
  titleKo: 'Claude Projects 활용',
  titleEn: 'Claude Projects',
  contentKo: `## Claude Projects란?

Claude Projects는 Anthropic의 Claude에서 제공하는 **프로젝트 기반 AI 어시스턴트** 기능입니다. 프로젝트에 문서, 지침, 코드를 추가하면 해당 맥락을 기반으로 일관된 답변을 제공합니다.

## Projects의 핵심 장점

| 특징 | 설명 |
|------|------|
| **200K 토큰 컨텍스트** | 대용량 문서도 전부 참조 가능 |
| **Project Knowledge** | 프로젝트에 파일을 영구 저장 |
| **Custom Instructions** | 프로젝트 전용 시스템 프롬프트 |
| **팀 공유** | Pro/Team 플랜에서 팀원과 공유 |
| **Artifacts** | 코드, 문서, SVG 등 즉시 결과물 생성 |

## 프로젝트 만들기

### 1단계: 프로젝트 생성

1. [Claude](https://claude.ai) 접속
2. 좌측 **Projects** 클릭
3. **Create Project** 클릭
4. 이름과 설명 입력

### 2단계: Knowledge 추가

\`\`\`
추가 가능한 소스:
- PDF, TXT, CSV, MD 파일 (드래그 앤 드롭)
- 코드 파일 (.py, .js, .html 등)
- 웹 페이지 내용 (복사하여 텍스트로 추가)
- 최대 200K 토큰까지 추가 가능
\`\`\`

### 3단계: Custom Instructions 설정

\`\`\`
이 프로젝트는 [회사명]의 마케팅팀 업무를 지원합니다.

## 역할
- 마케팅 캠페인 기획 지원
- 카피라이팅 및 콘텐츠 제안
- 데이터 분석 보고서 작성

## 참고 자료
Project Knowledge에 포함된 문서:
- 브랜드 가이드라인.pdf
- 과거 캠페인 성과.csv
- 타겟 고객 페르소나.md

## 응답 규칙
- 브랜드 가이드라인의 톤앤매너를 준수합니다
- 숫자 데이터는 출처를 명시합니다
- 제안은 항상 3가지 이상의 옵션을 제공합니다
\`\`\`

## 실전 활용 사례

### 사례 1: 코드 리뷰 어시스턴트

Knowledge에 추가할 파일:
- 코딩 컨벤션 문서
- 프로젝트의 주요 소스 코드
- API 문서

\`\`\`
Custom Instructions:

당신은 시니어 개발자로서 코드 리뷰를 수행합니다.

## 리뷰 기준
1. 코딩 컨벤션 준수 여부
2. 성능 이슈 탐지
3. 보안 취약점 확인
4. 테스트 커버리지 제안

## 출력 형식
각 이슈는 다음 형식으로 보고:
- [심각도: 높음/중간/낮음] 파일명:라인번호
- 문제 설명
- 수정 제안 (코드 포함)
\`\`\`

### 사례 2: 사내 FAQ 챗봇

Knowledge에 추가할 파일:
- 사내 규정집 PDF
- 복리후생 안내서
- IT 도움말 문서

\`\`\`
Custom Instructions:

당신은 [회사명] 직원을 위한 사내 FAQ 어시스턴트입니다.

## 규칙
- Knowledge 문서에 있는 내용만 답변합니다
- 문서에 없는 질문은 "해당 부서에 문의해주세요"로 안내합니다
- 중요한 정책은 원문을 인용합니다

## 자주 묻는 질문 카테고리
- 인사/급여
- IT/장비
- 복리후생
- 경비 처리
\`\`\`

### 사례 3: 기술 문서 작성

Knowledge에 추가할 파일:
- 기존 기술 문서
- API 스펙 문서
- 스타일 가이드

\`\`\`
Custom Instructions:

당신은 기술 문서 작성 전문가입니다.

## 문서 작성 규칙
- Markdown 형식으로 작성합니다
- 코드 예제를 반드시 포함합니다
- 초보자도 이해할 수 있는 설명을 추가합니다
- 기존 문서의 스타일과 구조를 따릅니다
\`\`\`

## Artifacts 활용

Claude Projects에서 Artifacts를 요청하면 즉시 다운로드 가능한 결과물을 생성합니다:

- **코드**: Python, JavaScript, HTML 등 실행 가능한 코드
- **문서**: Markdown, 보고서, 제안서
- **시각화**: SVG 다이어그램, 차트
- **웹 앱**: 간단한 React 컴포넌트

## 팀 협업 팁

- **Pro 플랜**: 개인 프로젝트만 가능
- **Team 플랜**: 팀원과 프로젝트 공유, 공동 편집
- 팀원이 추가한 Knowledge와 대화도 공유됩니다
- 민감한 정보는 프로젝트 접근 권한을 제한하세요

## Custom GPTs vs Claude Projects

| 비교 항목 | Custom GPTs | Claude Projects |
|-----------|-------------|-----------------|
| **컨텍스트** | 128K 토큰 | 200K 토큰 |
| **파일 유형** | 다양한 형식 | 텍스트 기반 중심 |
| **외부 연동** | Actions (API) | 없음 |
| **결과물** | 텍스트 출력 | Artifacts (코드, SVG 등) |
| **공유** | GPT Store | Team 플랜 공유 |
| **강점** | 외부 API 연동, 배포 | 대용량 문서, 코딩 |`,
  contentEn: `## What Are Claude Projects?

Claude Projects is a **project-based AI assistant** feature from Anthropic's Claude. Add documents, instructions, and code to a project, and Claude provides consistent answers grounded in that context.

## Key Advantages of Projects

| Feature | Description |
|---------|-------------|
| **200K token context** | Reference even large documents in full |
| **Project Knowledge** | Permanently store files in projects |
| **Custom Instructions** | Project-specific system prompt |
| **Team sharing** | Share with teammates on Pro/Team plans |
| **Artifacts** | Instantly generate code, docs, SVG outputs |

## Creating a Project

### Step 1: Create Project

1. Go to [Claude](https://claude.ai)
2. Click **Projects** in left panel
3. Click **Create Project**
4. Enter name and description

### Step 2: Add Knowledge

\`\`\`
Supported sources:
- PDF, TXT, CSV, MD files (drag and drop)
- Code files (.py, .js, .html, etc.)
- Web page content (copy as text)
- Up to 200K tokens total
\`\`\`

### Step 3: Set Custom Instructions

\`\`\`
This project supports [Company]'s marketing team.

## Role
- Campaign planning assistance
- Copywriting and content suggestions
- Data analysis report generation

## Reference Materials
Project Knowledge includes:
- brand-guidelines.pdf
- past-campaign-results.csv
- target-personas.md

## Response Rules
- Follow the brand's tone and manner guidelines
- Cite sources for numerical data
- Always provide at least 3 options for suggestions
\`\`\`

## Practical Use Cases

### Case 1: Code Review Assistant

Files to add to Knowledge:
- Coding convention docs
- Key project source files
- API documentation

\`\`\`
Custom Instructions:

You are a senior developer performing code reviews.

## Review Criteria
1. Coding convention compliance
2. Performance issue detection
3. Security vulnerability check
4. Test coverage suggestions

## Output Format
Report each issue as:
- [Severity: High/Medium/Low] filename:line_number
- Problem description
- Suggested fix (with code)
\`\`\`

### Case 2: Internal FAQ Bot

Files to add to Knowledge:
- Company policy PDF
- Benefits guide
- IT help documentation

\`\`\`
Custom Instructions:

You are an internal FAQ assistant for [Company] employees.

## Rules
- Only answer from Knowledge documents
- For questions not in docs, say "Please contact the relevant department"
- Quote original text for important policies

## Common Question Categories
- HR / Payroll
- IT / Equipment
- Benefits
- Expense processing
\`\`\`

### Case 3: Technical Documentation

Files to add to Knowledge:
- Existing technical docs
- API spec documents
- Style guide

\`\`\`
Custom Instructions:

You are a technical documentation specialist.

## Writing Rules
- Write in Markdown format
- Always include code examples
- Add beginner-friendly explanations
- Follow existing document style and structure
\`\`\`

## Using Artifacts

Request Artifacts in Claude Projects to generate downloadable outputs instantly:

- **Code**: Executable Python, JavaScript, HTML
- **Documents**: Markdown, reports, proposals
- **Visualizations**: SVG diagrams, charts
- **Web apps**: Simple React components

## Team Collaboration Tips

- **Pro plan**: Personal projects only
- **Team plan**: Share projects with team, co-edit
- Knowledge and conversations added by teammates are shared
- Restrict project access for sensitive information

## Custom GPTs vs Claude Projects

| Comparison | Custom GPTs | Claude Projects |
|------------|-------------|-----------------|
| **Context** | 128K tokens | 200K tokens |
| **File types** | Various formats | Text-based focus |
| **External integration** | Actions (API) | None |
| **Outputs** | Text | Artifacts (code, SVG, etc.) |
| **Sharing** | GPT Store | Team plan sharing |
| **Strength** | API integration, deployment | Large docs, coding |`,
};

export default lesson;
