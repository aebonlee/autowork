const e={titleKo:"실전 자동화 시나리오",titleEn:"Real-World Automation Scenarios",contentKo:`# 실전 자동화 시나리오

## 시나리오 1: Slack + Google Sheets 연동

Slack 메시지를 자동으로 Google Sheets에 기록하는 워크플로우입니다.

\`\`\`
워크플로우 구성:
[Slack: 새 메시지 감지]
  -> [필터: 특정 채널/키워드]
  -> [Google Sheets: 행 추가]
     - 작성자: {{message.user}}
     - 내용: {{message.text}}
     - 시간: {{message.timestamp}}
  -> [Slack: 확인 이모지 반응 추가]
\`\`\`

- 회의록 자동 수집, 고객 피드백 정리에 활용
- Zapier, Make, n8n 모두 구현 가능

## 시나리오 2: 이메일 -> 데이터베이스 자동 저장

수신 이메일의 내용을 파싱하여 데이터베이스에 저장합니다.

\`\`\`
워크플로우 구성:
[Gmail: 새 이메일 수신]
  -> [필터: 제목에 "주문" 포함]
  -> [파서: 이메일 본문에서 데이터 추출]
     - 주문번호, 고객명, 금액 추출
  -> [Supabase/Airtable: 레코드 생성]
  -> [Slack: 담당자에게 알림 전송]
\`\`\`

- 주문 확인, 문의 접수, 지원 티켓 자동화에 적합
- 정규표현식 또는 AI 파싱 모듈 활용 가능

## 시나리오 3: 폼 제출 -> CRM 자동 등록

웹 폼 제출 시 CRM에 자동으로 리드를 등록합니다.

\`\`\`
워크플로우 구성:
[Webhook: 폼 데이터 수신]
  -> [데이터 변환: 필드 매핑]
     - 이름 -> contact_name
     - 이메일 -> contact_email
     - 회사 -> company_name
  -> [CRM: 새 리드 생성]
  -> [이메일: 환영 메일 발송]
  -> [Slack: 영업팀 채널에 알림]
\`\`\`

- Typeform, Google Forms, 자체 웹 폼 모두 연동 가능
- 중복 체크 로직 추가 권장

## 시나리오 4: 소셜 미디어 자동 포스팅

하나의 콘텐츠를 여러 소셜 미디어 채널에 동시 배포합니다.

\`\`\`
워크플로우 구성:
[Google Sheets: 새 행 감지 (콘텐츠 캘린더)]
  -> [라우터: 플랫폼별 분기]
     경로 1: [Twitter/X: 트윗 게시]
     경로 2: [Facebook: 포스트 작성]
     경로 3: [LinkedIn: 게시물 작성]
  -> [Google Sheets: 게시 상태 업데이트]
  -> [Slack: 마케팅팀 알림]
\`\`\`

- 콘텐츠 캘린더로 예약 게시 관리
- 각 플랫폼 API 제한 사항 확인 필요

## 자동화 설계 팁

- 에러 처리 로직을 반드시 포함할 것
- 테스트 데이터로 충분히 검증 후 운영 적용
- 실행 로그를 모니터링하여 실패 건 추적
- 민감한 데이터는 암호화 및 접근 제어 설정`,contentEn:`# Real-World Automation Scenarios

## Scenario 1: Slack + Google Sheets Integration

Automatically log Slack messages to Google Sheets.

\`\`\`
Workflow:
[Slack: Detect new message]
  -> [Filter: Specific channel/keyword]
  -> [Google Sheets: Add row]
     - Author: {{message.user}}
     - Content: {{message.text}}
     - Time: {{message.timestamp}}
  -> [Slack: Add confirmation emoji reaction]
\`\`\`

- Great for meeting notes collection and customer feedback tracking
- Implementable in Zapier, Make, or n8n

## Scenario 2: Email -> Database Auto-Save

Parse incoming emails and store extracted data in a database.

\`\`\`
Workflow:
[Gmail: New email received]
  -> [Filter: Subject contains "Order"]
  -> [Parser: Extract data from email body]
     - Order number, customer name, amount
  -> [Supabase/Airtable: Create record]
  -> [Slack: Notify assignee]
\`\`\`

- Ideal for order confirmations, inquiries, and support tickets
- Use regex or AI parsing modules for extraction

## Scenario 3: Form Submission -> CRM Registration

Automatically register leads in your CRM when a web form is submitted.

\`\`\`
Workflow:
[Webhook: Receive form data]
  -> [Transform: Field mapping]
     - name -> contact_name
     - email -> contact_email
     - company -> company_name
  -> [CRM: Create new lead]
  -> [Email: Send welcome message]
  -> [Slack: Notify sales channel]
\`\`\`

- Compatible with Typeform, Google Forms, or custom web forms
- Recommended to add duplicate-check logic

## Scenario 4: Social Media Auto-Posting

Distribute a single piece of content across multiple social channels.

\`\`\`
Workflow:
[Google Sheets: Detect new row (content calendar)]
  -> [Router: Branch by platform]
     Path 1: [Twitter/X: Post tweet]
     Path 2: [Facebook: Create post]
     Path 3: [LinkedIn: Publish post]
  -> [Google Sheets: Update publish status]
  -> [Slack: Notify marketing team]
\`\`\`

- Manage scheduled posts via a content calendar
- Check each platform's API rate limits

## Automation Design Tips

- Always include error handling logic
- Validate thoroughly with test data before production
- Monitor execution logs to track failures
- Encrypt sensitive data and configure access controls`};export{e as default};
