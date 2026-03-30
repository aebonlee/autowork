const o={titleKo:"Microsoft Copilot 활용",titleEn:"Microsoft Copilot Studio",contentKo:`## Microsoft Copilot 생태계

Microsoft는 AI를 Microsoft 365 전체에 통합하여 **Copilot 생태계**를 구축하고 있습니다.

| 제품 | 용도 | 대상 |
|------|------|------|
| **Microsoft 365 Copilot** | Office 앱 내 AI 지원 | 일반 사용자 |
| **Copilot Studio** | 커스텀 AI 챗봇 구축 | 개발자/관리자 |
| **Copilot in Windows** | OS 레벨 AI 어시스턴트 | 모든 Windows 사용자 |

## Microsoft 365 Copilot 활용

### Word에서 Copilot

\`\`\`
활용 예시:

1. "이 문서를 3페이지 요약으로 줄여줘"
2. "이 보고서를 임원 대상 프레젠테이션 형식으로 변환해줘"
3. "계약서에서 리스크 요소를 찾아서 표로 정리해줘"
4. "/[파일명]을 참고해서 주간 보고서 초안을 작성해줘"
\`\`\`

### Excel에서 Copilot

\`\`\`
활용 예시:

1. "이 데이터의 월별 트렌드를 차트로 만들어줘"
2. "매출 데이터에서 상위 10개 제품을 피벗 테이블로 정리해줘"
3. "지난 분기 대비 성장률 컬럼을 추가해줘"
4. "이상치를 감지하고 하이라이트 해줘"
\`\`\`

### Teams에서 Copilot

\`\`\`
활용 예시:

1. 회의 자동 요약 및 액션 아이템 추출
2. "지난 주 채널에서 논의된 마케팅 이슈를 정리해줘"
3. 실시간 회의 중 질문 응답
4. 놓친 회의 내용 빠르게 따라잡기
\`\`\`

## Copilot Studio 시작하기

Copilot Studio는 **코드 없이 기업용 AI 챗봇**을 만드는 플랫폼입니다.

### 1단계: Copilot Studio 접속

1. [Copilot Studio](https://copilotstudio.microsoft.com) 접속
2. 환경(Environment) 선택
3. **+ Create** → **New Copilot** 클릭

### 2단계: 기본 설정

\`\`\`
Name:        인사팀 도우미
Description: 직원 인사 관련 질문에 답변하는 AI 챗봇
Language:    Korean
\`\`\`

### 3단계: Knowledge 소스 추가

\`\`\`
지원되는 소스:
- SharePoint 사이트/문서 라이브러리
- 공개 웹사이트 URL
- Dataverse 테이블
- 업로드 파일 (PDF, Word, PowerPoint)
\`\`\`

### 4단계: Topics (대화 흐름) 설정

Topics는 **챗봇의 대화 시나리오**입니다.

\`\`\`
[예: 연차 신청 안내 Topic]

트리거 문구: "연차 신청", "휴가 사용", "연차 잔여"

대화 흐름:
1. "연차 관련 어떤 내용이 궁금하신가요?" (선택지 제공)
   - 연차 잔여일 확인 → HR 시스템 API 호출
   - 연차 신청 방법 → 안내 메시지 제공
   - 연차 정책 문의 → Knowledge에서 검색
2. "추가로 궁금한 사항이 있으신가요?"
\`\`\`

## Power Platform 연동

Copilot Studio는 Power Platform과 긴밀하게 통합됩니다.

### Power Automate 연동

\`\`\`
시나리오: 챗봇에서 경비 처리 요청

1. 직원: "출장비를 신청하고 싶어요"
2. Copilot: 금액, 일자, 목적 수집
3. Power Automate 플로우 실행:
   - SharePoint에 신청서 저장
   - 상사에게 승인 요청 이메일
   - Teams 알림 발송
4. Copilot: "신청이 완료되었습니다. 승인 대기 중입니다."
\`\`\`

### Dataverse 연동

\`\`\`
시나리오: 고객 정보 조회

1. 고객: "주문 번호 ORD-2024-001의 상태를 알려주세요"
2. Copilot → Dataverse 쿼리 실행
3. Copilot: "해당 주문은 배송 중이며, 예상 도착일은 3월 15일입니다."
\`\`\`

## 채널 배포

Copilot Studio에서 만든 챗봇을 다양한 채널에 배포할 수 있습니다:

| 채널 | 설명 |
|------|------|
| **Microsoft Teams** | 사내 직원 대상 |
| **웹사이트** | 고객 대상 채팅 위젯 |
| **Facebook** | 소셜 미디어 고객 응대 |
| **모바일 앱** | Direct Line API로 연결 |

## 기업 거버넌스

\`\`\`
보안 및 관리 기능:
- DLP(데이터 손실 방지) 정책 적용
- 환경별 접근 권한 관리
- 대화 로그 감사 추적
- AI 응답 품질 분석 대시보드
- 민감한 데이터 필터링
\`\`\`

## 요금제 비교

| 항목 | Copilot Studio (독립) | M365 Copilot 포함 |
|------|----------------------|-------------------|
| **월 비용** | $200/테넌트 | M365 Copilot 라이선스 포함 |
| **메시지** | 25,000회/월 | 포함 |
| **기능** | 커스텀 Copilot | M365 통합 + 커스텀 |

## Custom GPTs와의 비교

| 비교 항목 | Copilot Studio | Custom GPTs |
|-----------|---------------|-------------|
| **대상** | 기업/팀 | 개인/소규모 |
| **통합** | Microsoft 365 전체 | 제한적 (Actions) |
| **보안** | 기업 수준 DLP | 기본 수준 |
| **배포** | Teams, 웹, 모바일 | GPT Store, 링크 |
| **비용** | 높음 (기업 라이선스) | 낮음 (Plus 구독) |
| **유지보수** | IT 팀 관리 | 개인 관리 |`,contentEn:`## Microsoft Copilot Ecosystem

Microsoft is building a **Copilot ecosystem** by integrating AI across all of Microsoft 365.

| Product | Purpose | Target |
|---------|---------|--------|
| **Microsoft 365 Copilot** | AI assistance in Office apps | General users |
| **Copilot Studio** | Build custom AI chatbots | Developers/Admins |
| **Copilot in Windows** | OS-level AI assistant | All Windows users |

## Using Microsoft 365 Copilot

### Copilot in Word

\`\`\`
Usage Examples:

1. "Summarize this document into 3 pages"
2. "Convert this report into executive presentation format"
3. "Find risk elements in this contract and list them in a table"
4. "Reference /[filename] and draft a weekly report"
\`\`\`

### Copilot in Excel

\`\`\`
Usage Examples:

1. "Create a chart showing monthly trends in this data"
2. "Make a pivot table of the top 10 products by revenue"
3. "Add a growth rate column compared to last quarter"
4. "Detect outliers and highlight them"
\`\`\`

### Copilot in Teams

\`\`\`
Usage Examples:

1. Auto meeting summaries and action item extraction
2. "Summarize the marketing issues discussed in the channel last week"
3. Real-time Q&A during meetings
4. Quickly catch up on missed meetings
\`\`\`

## Getting Started with Copilot Studio

Copilot Studio is a platform to build **enterprise AI chatbots without code**.

### Step 1: Access Copilot Studio

1. Go to [Copilot Studio](https://copilotstudio.microsoft.com)
2. Select your Environment
3. Click **+ Create** → **New Copilot**

### Step 2: Basic Setup

\`\`\`
Name:        HR Assistant
Description: AI chatbot that answers employee HR questions
Language:    English
\`\`\`

### Step 3: Add Knowledge Sources

\`\`\`
Supported sources:
- SharePoint sites/document libraries
- Public website URLs
- Dataverse tables
- Uploaded files (PDF, Word, PowerPoint)
\`\`\`

### Step 4: Configure Topics (Conversation Flows)

Topics are the **chatbot's conversation scenarios**.

\`\`\`
[Example: PTO Request Topic]

Trigger phrases: "PTO request", "vacation days", "remaining PTO"

Conversation flow:
1. "What would you like to know about PTO?" (provide options)
   - Check remaining PTO → Call HR system API
   - How to request PTO → Provide guide message
   - PTO policy questions → Search Knowledge
2. "Is there anything else I can help with?"
\`\`\`

## Power Platform Integration

Copilot Studio integrates tightly with the Power Platform.

### Power Automate Integration

\`\`\`
Scenario: Expense report via chatbot

1. Employee: "I'd like to submit a travel expense"
2. Copilot: Collects amount, date, purpose
3. Power Automate flow executes:
   - Save form to SharePoint
   - Send approval email to manager
   - Post Teams notification
4. Copilot: "Your request has been submitted. Awaiting approval."
\`\`\`

### Dataverse Integration

\`\`\`
Scenario: Customer info lookup

1. Customer: "What's the status of order ORD-2024-001?"
2. Copilot → Executes Dataverse query
3. Copilot: "Your order is in transit, estimated arrival March 15."
\`\`\`

## Channel Deployment

Deploy chatbots from Copilot Studio across multiple channels:

| Channel | Description |
|---------|-------------|
| **Microsoft Teams** | Internal employees |
| **Website** | Customer chat widget |
| **Facebook** | Social media support |
| **Mobile App** | Connect via Direct Line API |

## Enterprise Governance

\`\`\`
Security and management features:
- DLP (Data Loss Prevention) policy enforcement
- Environment-level access control
- Conversation log audit trail
- AI response quality analytics dashboard
- Sensitive data filtering
\`\`\`

## Pricing Comparison

| Item | Copilot Studio (Standalone) | M365 Copilot Included |
|------|---------------------------|----------------------|
| **Monthly cost** | $200/tenant | Included with M365 Copilot license |
| **Messages** | 25,000/month | Included |
| **Features** | Custom Copilot | M365 integration + custom |

## Comparison with Custom GPTs

| Comparison | Copilot Studio | Custom GPTs |
|------------|---------------|-------------|
| **Target** | Enterprise/Teams | Individual/Small teams |
| **Integration** | Full Microsoft 365 | Limited (Actions) |
| **Security** | Enterprise DLP | Basic level |
| **Deployment** | Teams, web, mobile | GPT Store, link |
| **Cost** | High (enterprise license) | Low (Plus subscription) |
| **Maintenance** | IT team managed | Self-managed |`};export{o as default};
