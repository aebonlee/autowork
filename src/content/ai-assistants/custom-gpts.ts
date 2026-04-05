const lesson = {
  titleKo: 'Custom GPTs 만들기',
  titleEn: 'Building Custom GPTs',
  contentKo: `## Custom GPTs란?

Custom GPTs는 OpenAI가 제공하는 **나만의 맞춤형 ChatGPT**를 만드는 기능입니다. GPT Builder를 통해 코딩 없이 특정 업무에 최적화된 AI 어시스턴트를 구축할 수 있습니다.

## GPT Builder 시작하기

### 1단계: GPT Builder 접속

1. [ChatGPT](https://chat.openai.com) 접속
2. 좌측 메뉴 → **Explore GPTs** 클릭
3. 우측 상단 **+ Create** 클릭

### 2단계: 기본 설정

GPT Builder의 **Create** 탭에서 대화형으로 설정하거나, **Configure** 탭에서 직접 입력합니다.

\`\`\`
Configure 탭 주요 항목:

Name:         업무 보고서 작성기
Description:  주간/월간 보고서를 구조화된 형식으로 작성
Instructions: (아래 시스템 프롬프트 참조)
\`\`\`

## 효과적인 Instructions 작성법

### 역할 정의

\`\`\`
당신은 [회사명]의 업무 보고서 전문 작성 어시스턴트입니다.

## 핵심 규칙
- 항상 한국어로 응답합니다
- 보고서는 반드시 아래 구조를 따릅니다
- 수치 데이터는 표로 정리합니다
- 핵심 성과를 먼저, 세부 내용을 나중에 배치합니다

## 보고서 구조
1. 요약 (3줄 이내)
2. 주요 성과 (표)
3. 이슈 및 해결 방안
4. 다음 주 계획
\`\`\`

### Knowledge 파일 활용

Knowledge에 업로드할 수 있는 파일:
- **회사 가이드라인** (PDF, DOCX)
- **템플릿 예시** (TXT, MD)
- **과거 보고서 샘플** (PDF)
- **용어집** (CSV, XLSX)

> Knowledge에 참고 자료를 올리면 GPT가 회사 맥락을 이해하고 일관된 결과를 생성합니다.

## Actions 설정 (외부 API 연동)

Actions를 사용하면 GPT가 외부 서비스와 통신할 수 있습니다.

### 예: Google Sheets 연동

\`\`\`json
{
  "openapi": "3.1.0",
  "info": {
    "title": "Weekly Report API",
    "version": "1.0.0"
  },
  "paths": {
    "/api/report": {
      "get": {
        "summary": "Get weekly data",
        "operationId": "getWeeklyData",
        "responses": {
          "200": {
            "description": "Weekly report data"
          }
        }
      }
    }
  }
}
\`\`\`

## 실전 예제: 고객 응대 GPT

### Instructions

\`\`\`
당신은 [서비스명] 고객 지원 전문 어시스턴트입니다.

## 역할
- 고객 문의에 친절하고 정확하게 답변합니다
- 모르는 질문은 "담당자에게 전달하겠습니다"라고 안내합니다
- 절대 가격 할인이나 환불을 직접 약속하지 않습니다

## 응답 형식
1. 인사 (고객 이름 포함)
2. 문의 내용 확인
3. 해결 방안 또는 안내
4. 추가 문의 여부 확인

## FAQ 우선 참조
Knowledge에 업로드된 FAQ 문서를 우선 참조하여 답변합니다.
\`\`\`

### Conversation Starters 설정

\`\`\`
- "주문 상태를 확인하고 싶어요"
- "반품 절차가 어떻게 되나요?"
- "계정 설정을 변경하고 싶어요"
- "서비스 요금제를 비교해주세요"
\`\`\`

## GPT 공유와 배포

| 공유 범위 | 설명 |
|-----------|------|
| **Only me** | 나만 사용 |
| **Anyone with the link** | 링크 공유로 사용 |
| **GPT Store** | 전체 공개, 검색 가능 |

## 활용 팁

- **반복 테스트**: 다양한 입력으로 테스트 후 Instructions 조정
- **버전 관리**: 주요 변경 시 Instructions를 별도 문서에 백업
- **피드백 반영**: 사용자 피드백을 모아 주기적으로 개선
- **보안 주의**: 민감한 내부 데이터를 Knowledge에 올리지 마세요`,
  contentEn: `## What Are Custom GPTs?

Custom GPTs is a feature by OpenAI that lets you create **your own tailored ChatGPT**. Using GPT Builder, you can build AI assistants optimized for specific tasks — no coding required.

## Getting Started with GPT Builder

### Step 1: Access GPT Builder

1. Go to [ChatGPT](https://chat.openai.com)
2. Left menu → Click **Explore GPTs**
3. Click **+ Create** at top right

### Step 2: Basic Configuration

Use the **Create** tab for conversational setup or the **Configure** tab for direct input.

\`\`\`
Configure Tab Key Fields:

Name:         Weekly Report Writer
Description:  Generates structured weekly/monthly reports
Instructions: (See system prompt below)
\`\`\`

## Writing Effective Instructions

### Define the Role

\`\`\`
You are a professional report-writing assistant for [Company].

## Core Rules
- Always respond in a professional tone
- Reports must follow the structure below
- Present numerical data in tables
- Key achievements first, then details

## Report Structure
1. Executive Summary (max 3 lines)
2. Key Metrics (table)
3. Issues & Solutions
4. Next Week Plan
\`\`\`

### Using Knowledge Files

Files you can upload to Knowledge:
- **Company guidelines** (PDF, DOCX)
- **Template examples** (TXT, MD)
- **Past report samples** (PDF)
- **Glossary** (CSV, XLSX)

> Uploading reference materials to Knowledge lets the GPT understand your company context and generate consistent results.

## Setting Up Actions (External API Integration)

Actions allow your GPT to communicate with external services.

### Example: Google Sheets Integration

\`\`\`json
{
  "openapi": "3.1.0",
  "info": {
    "title": "Weekly Report API",
    "version": "1.0.0"
  },
  "paths": {
    "/api/report": {
      "get": {
        "summary": "Get weekly data",
        "operationId": "getWeeklyData",
        "responses": {
          "200": {
            "description": "Weekly report data"
          }
        }
      }
    }
  }
}
\`\`\`

## Practical Example: Customer Support GPT

### Instructions

\`\`\`
You are a customer support specialist for [ServiceName].

## Role
- Answer customer inquiries with courtesy and accuracy
- For unknown questions, say "I'll forward this to our team"
- Never directly promise discounts or refunds

## Response Format
1. Greeting (include customer name)
2. Confirm the inquiry
3. Provide solution or guidance
4. Ask if they need further help

## FAQ Priority
Always check the FAQ document in Knowledge first.
\`\`\`

### Conversation Starters

\`\`\`
- "I'd like to check my order status"
- "What's the return process?"
- "I need to change my account settings"
- "Can you compare the pricing plans?"
\`\`\`

## Sharing and Deployment

| Visibility | Description |
|------------|-------------|
| **Only me** | Personal use only |
| **Anyone with the link** | Share via link |
| **GPT Store** | Public, searchable |

## Pro Tips

- **Test iteratively**: Test with varied inputs and adjust Instructions
- **Version control**: Back up Instructions separately for major changes
- **Incorporate feedback**: Collect user feedback for periodic improvements
- **Security note**: Avoid uploading sensitive internal data to Knowledge`,
};

export default lesson;
