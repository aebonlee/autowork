const lesson = {
  titleKo: 'Google Gems & NotebookLM',
  titleEn: 'Google Gems & NotebookLM',
  contentKo: `## Google Gems란?

Google Gems는 Gemini에 내장된 **맞춤형 AI 어시스턴트** 기능입니다. 특정 역할이나 작업에 맞게 Gemini를 설정해두고, 필요할 때 바로 호출하여 사용할 수 있습니다.

## Gem 만들기

### 1단계: Gemini 접속

1. [Gemini](https://gemini.google.com) 접속
2. 좌측 메뉴 → **Gem manager** 클릭
3. **New Gem** 클릭

### 2단계: Gem 설정

\`\`\`
이름:     회의록 정리 도우미
아이콘:   자동 생성 (선택 가능)

Instructions:
당신은 회의록 정리 전문가입니다.

## 규칙
- 회의 내용을 구조화된 형식으로 정리합니다
- 핵심 결정사항을 먼저 요약합니다
- 액션 아이템은 담당자와 기한을 포함합니다

## 출력 형식
### 회의 요약
- 일시:
- 참석자:
- 주요 안건:

### 핵심 결정사항
1. [결정 내용] - [근거]

### 액션 아이템
| 담당자 | 작업 | 기한 |
|--------|------|------|

### 다음 회의 안건
-
\`\`\`

## Gems 활용 사례

### 1. 이메일 작성기

\`\`\`
당신은 비즈니스 이메일 작성 전문가입니다.

- 격식체와 비격식체를 상황에 맞게 사용합니다
- 요청 이메일: 배경 → 요청 사항 → 기대 일정 순서로 작성
- 보고 이메일: 결론 → 근거 → 다음 단계 순서로 작성
- 항상 명확한 제목(Subject)을 먼저 제안합니다
\`\`\`

### 2. 데이터 분석가

\`\`\`
당신은 데이터 분석 전문가입니다.

- CSV나 표 데이터를 분석하여 인사이트를 도출합니다
- 분석 결과는 항상 차트 설명과 함께 제공합니다
- 이상치나 트렌드를 자동으로 감지하여 보고합니다
\`\`\`

## NotebookLM이란?

NotebookLM은 Google이 제공하는 **문서 기반 AI 리서치 도구**입니다. 문서를 업로드하면 그 내용만을 기반으로 질문에 답변하고, 요약하고, 연관 관계를 분석합니다.

### NotebookLM의 핵심 특징

- **소스 기반 답변**: 업로드한 문서만을 근거로 답변 (할루시네이션 최소화)
- **다양한 소스**: PDF, Google Docs, 웹 URL, 텍스트, YouTube 동영상
- **Audio Overview**: AI가 문서를 팟캐스트 형식으로 요약 (영어)
- **인라인 인용**: 답변에 출처 문서와 페이지를 표시

## NotebookLM 실전 활용

### 1단계: 노트북 생성

1. [NotebookLM](https://notebooklm.google.com) 접속
2. **New Notebook** 클릭
3. 소스 추가: PDF, Docs, URL 등 업로드

### 2단계: 질문하기

\`\`\`
업무 활용 예시 질문들:

"이 계약서의 핵심 조건 3가지를 요약해줘"
"두 보고서 간의 주요 차이점은?"
"이 매뉴얼에서 에러 코드 E-401의 해결 방법은?"
"분기별 매출 트렌드를 분석해줘"
\`\`\`

### 3단계: 정리 기능 활용

NotebookLM은 자동으로 다음을 생성합니다:
- **문서 요약** (소스별)
- **핵심 주제** 자동 추출
- **FAQ** 자동 생성
- **브리핑 문서** 생성
- **타임라인** 정리

## Gems vs NotebookLM 비교

| 기능 | Gems | NotebookLM |
|------|------|------------|
| **주 용도** | 반복 작업 자동화 | 문서 분석/리서치 |
| **소스** | 대화 맥락 | 업로드 문서 기반 |
| **할루시네이션** | 일반 LLM 수준 | 매우 낮음 (소스 제한) |
| **공유** | 개인용 | 팀 공유 가능 |
| **최적 상황** | 이메일, 보고서, 번역 | 계약서, 연구, 매뉴얼 분석 |

## Google Workspace 연동 팁

- Gemini는 Gmail, Docs, Sheets, Slides와 직접 연동됩니다
- \`@Docs\`로 특정 문서를 참조하여 질문할 수 있습니다
- Google Workspace Business 이상에서 Gemini for Workspace 사용 가능`,
  contentEn: `## What Are Google Gems?

Google Gems is a **custom AI assistant** feature built into Gemini. You can pre-configure Gemini for specific roles or tasks and invoke them instantly when needed.

## Creating a Gem

### Step 1: Access Gemini

1. Go to [Gemini](https://gemini.google.com)
2. Left menu → Click **Gem manager**
3. Click **New Gem**

### Step 2: Configure the Gem

\`\`\`
Name:     Meeting Notes Organizer
Icon:     Auto-generated (customizable)

Instructions:
You are a meeting notes specialist.

## Rules
- Organize meeting content in a structured format
- Summarize key decisions first
- Action items must include owner and deadline

## Output Format
### Meeting Summary
- Date:
- Attendees:
- Key Topics:

### Key Decisions
1. [Decision] - [Rationale]

### Action Items
| Owner | Task | Deadline |
|-------|------|----------|

### Next Meeting Agenda
-
\`\`\`

## Gems Use Cases

### 1. Email Composer

\`\`\`
You are a business email writing specialist.

- Use formal or informal tone based on context
- Request emails: Background → Request → Expected timeline
- Report emails: Conclusion → Evidence → Next steps
- Always suggest a clear Subject line first
\`\`\`

### 2. Data Analyst

\`\`\`
You are a data analysis specialist.

- Analyze CSV or tabular data and extract insights
- Always provide chart descriptions with analysis results
- Automatically detect and report outliers and trends
\`\`\`

## What Is NotebookLM?

NotebookLM is a **document-based AI research tool** by Google. Upload documents, and it answers questions, summarizes content, and analyzes relationships based solely on your uploaded sources.

### Key Features of NotebookLM

- **Source-grounded answers**: Responds only from uploaded documents (minimizes hallucination)
- **Multiple sources**: PDF, Google Docs, web URLs, text, YouTube videos
- **Audio Overview**: AI summarizes documents in podcast format
- **Inline citations**: Shows source document and page in answers

## NotebookLM in Practice

### Step 1: Create a Notebook

1. Go to [NotebookLM](https://notebooklm.google.com)
2. Click **New Notebook**
3. Add sources: Upload PDFs, Docs, URLs

### Step 2: Ask Questions

\`\`\`
Example work questions:

"Summarize the 3 key terms of this contract"
"What are the main differences between these two reports?"
"What's the fix for error code E-401 in this manual?"
"Analyze the quarterly revenue trends"
\`\`\`

### Step 3: Use Organization Features

NotebookLM automatically generates:
- **Document summaries** (per source)
- **Key topics** extraction
- **FAQ** auto-generation
- **Briefing documents**
- **Timeline** organization

## Gems vs NotebookLM Comparison

| Feature | Gems | NotebookLM |
|---------|------|------------|
| **Primary use** | Repetitive task automation | Document analysis/research |
| **Source** | Conversation context | Uploaded documents |
| **Hallucination** | Standard LLM level | Very low (source-limited) |
| **Sharing** | Personal | Team sharing available |
| **Best for** | Emails, reports, translation | Contracts, research, manuals |

## Google Workspace Integration Tips

- Gemini integrates directly with Gmail, Docs, Sheets, and Slides
- Use \`@Docs\` to reference specific documents in questions
- Gemini for Workspace available on Business plan and above`,
};

export default lesson;
