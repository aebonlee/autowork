const e={titleKo:"Zapier 자동화",titleEn:"Zapier Automation",contentKo:`# Zapier 자동화

## Zap이란?

Zap은 Zapier에서 자동화 워크플로우를 의미합니다. 트리거(Trigger)와 액션(Action)으로 구성되며, 특정 이벤트 발생 시 자동으로 작업을 실행합니다.

## 핵심 구성 요소

### 트리거 (Trigger)
자동화를 시작하는 이벤트입니다.

\`\`\`
예시 트리거:
- Gmail에 새 이메일 수신
- Google Forms에 새 응답 제출
- Slack에서 특정 키워드 메시지 감지
- Webhook으로 외부 데이터 수신
\`\`\`

### 액션 (Action)
트리거 이후 실행되는 작업입니다.

\`\`\`
예시 액션:
- Google Sheets에 행 추가
- Slack 채널에 메시지 전송
- 이메일 자동 발송
- 데이터베이스 레코드 생성
\`\`\`

## 멀티 스텝 워크플로우

하나의 Zap에서 여러 액션을 순차적으로 실행할 수 있습니다.

\`\`\`
트리거: 폼 제출
  -> 액션 1: 스프레드시트에 기록
  -> 액션 2: 담당자에게 Slack 알림
  -> 액션 3: 확인 이메일 발송
\`\`\`

## 필터와 경로(Paths)

- **필터**: 조건에 맞는 경우에만 액션 실행
- **경로(Paths)**: 조건에 따라 다른 액션 분기 처리

\`\`\`
트리거: 새 주문 접수
  경로 A (금액 > 100만원): VIP 알림 + 특별 처리
  경로 B (금액 <= 100만원): 일반 처리 + 확인 이메일
\`\`\`

## 실전 팁

- 무료 플랜은 월 100개 태스크 제한
- 테스트 시 "Test & Review" 단계를 반드시 확인
- Formatter 액션으로 날짜/텍스트 변환 가능`,contentEn:`# Zapier Automation

## What is a Zap?

A Zap is an automated workflow in Zapier. It consists of a Trigger and one or more Actions, automatically executing tasks when a specific event occurs.

## Core Components

### Trigger
The event that starts the automation.

\`\`\`
Example Triggers:
- New email received in Gmail
- New response submitted in Google Forms
- Specific keyword detected in Slack
- External data received via Webhook
\`\`\`

### Action
The task executed after the trigger fires.

\`\`\`
Example Actions:
- Add a row to Google Sheets
- Send a message to a Slack channel
- Send an automated email
- Create a database record
\`\`\`

## Multi-Step Workflows

A single Zap can execute multiple actions sequentially.

\`\`\`
Trigger: Form submission
  -> Action 1: Log to spreadsheet
  -> Action 2: Notify assignee via Slack
  -> Action 3: Send confirmation email
\`\`\`

## Filters and Paths

- **Filters**: Execute actions only when conditions are met
- **Paths**: Branch into different actions based on conditions

\`\`\`
Trigger: New order received
  Path A (amount > $1000): VIP alert + special handling
  Path B (amount <= $1000): Standard processing + confirmation
\`\`\`

## Practical Tips

- Free plan limited to 100 tasks/month
- Always verify the "Test & Review" step during setup
- Use Formatter actions for date/text transformations`};export{e as default};
