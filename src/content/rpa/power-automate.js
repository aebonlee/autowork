const lesson = {
  titleKo: 'Power Automate 활용',
  titleEn: 'Power Automate',
  contentKo: `## Power Automate 개요

Microsoft Power Automate는 클라우드 기반과 데스크톱 기반 자동화를 모두 지원하는 통합 자동화 플랫폼입니다.

## 클라우드 플로우 유형

- **자동화 플로우**: 이벤트(트리거)에 의해 자동 실행
- **인스턴트 플로우**: 버튼 클릭으로 수동 실행
- **예약 플로우**: 지정된 일정에 따라 반복 실행

## 데스크톱 플로우

\`\`\`
Power Automate Desktop 주요 기능:
  - 레코더로 UI 동작 자동 캡처
  - 변수, 조건문, 반복문 지원
  - Excel, 웹 브라우저, 파일 시스템 제어
  - 클라우드 플로우와 연동 가능
\`\`\`

## 주요 커넥터

| 커넥터 | 활용 예시 |
|--------|-----------|
| **Outlook 365** | 이메일 수신 시 자동 분류 |
| **SharePoint** | 문서 업로드 시 승인 요청 |
| **Excel Online** | 데이터 자동 입력/갱신 |
| **Teams** | 알림 메시지 자동 전송 |
| **SQL Server** | DB 데이터 조회/입력 |

## 템플릿 활용

Power Automate는 수백 개의 사전 제작 템플릿을 제공합니다:

- 이메일 첨부파일을 OneDrive에 자동 저장
- 새 폼 응답을 Excel에 기록
- 승인 워크플로우 자동화
- SNS 게시물 자동 포스팅

## 트리거 설정

\`\`\`json
{
  "trigger": "When a new email arrives",
  "conditions": {
    "from": "client@example.com",
    "hasAttachment": true
  },
  "actions": ["Save attachment", "Send notification"]
}
\`\`\``,
  contentEn: `## Power Automate Overview

Microsoft Power Automate is a unified automation platform supporting both cloud-based and desktop-based workflow automation.

## Cloud Flow Types

- **Automated Flow**: Triggered automatically by events
- **Instant Flow**: Manually triggered via button click
- **Scheduled Flow**: Runs on a recurring schedule

## Desktop Flows

\`\`\`
Power Automate Desktop Key Features:
  - Recorder captures UI actions automatically
  - Supports variables, conditionals, loops
  - Controls Excel, browsers, file system
  - Integrates with cloud flows
\`\`\`

## Key Connectors

| Connector | Example Use |
|-----------|-------------|
| **Outlook 365** | Auto-classify incoming emails |
| **SharePoint** | Trigger approval on document upload |
| **Excel Online** | Auto-populate/update data |
| **Teams** | Send automated notifications |
| **SQL Server** | Query/insert database records |

## Templates

Power Automate offers hundreds of pre-built templates:

- Auto-save email attachments to OneDrive
- Log form responses to Excel
- Automate approval workflows
- Schedule social media posts

## Trigger Configuration

\`\`\`json
{
  "trigger": "When a new email arrives",
  "conditions": {
    "from": "client@example.com",
    "hasAttachment": true
  },
  "actions": ["Save attachment", "Send notification"]
}
\`\`\``,
};
export default lesson;
