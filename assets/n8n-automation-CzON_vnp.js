const n={titleKo:"n8n 자동화",titleEn:"n8n Automation",contentKo:`# n8n 자동화

## n8n이란?

n8n은 오픈소스 워크플로우 자동화 도구로, 셀프 호스팅이 가능합니다. 데이터 프라이버시를 유지하면서 강력한 자동화를 구축할 수 있습니다.

## 셀프 호스팅 설정

Docker를 사용한 빠른 설치:

\`\`\`bash
# Docker로 n8n 실행
docker run -it --rm \\
  --name n8n \\
  -p 5678:5678 \\
  -v n8n_data:/home/node/.n8n \\
  n8nio/n8n

# Docker Compose 설정
# docker-compose.yml
version: '3'
services:
  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=securepassword
\`\`\`

## 워크플로우 구성

노드(Node)를 연결하여 자동화 워크플로우를 구축합니다.

- **트리거 노드**: Cron, Webhook, 이벤트 감지
- **일반 노드**: HTTP 요청, 코드 실행, 조건 분기
- **앱 노드**: Slack, Gmail, Google Sheets 등 400+ 통합

## Webhook 트리거

외부 서비스에서 n8n으로 데이터를 전송받을 수 있습니다.

\`\`\`
Webhook URL: https://your-n8n.com/webhook/abc123
메서드: POST
데이터 형식: JSON

수신 데이터 예시:
{
  "event": "form_submit",
  "name": "홍길동",
  "email": "hong@example.com"
}
\`\`\`

## 크리덴셜 관리

n8n은 중앙 집중식 인증 정보 관리를 제공합니다.

- API 키, OAuth 토큰 등을 안전하게 저장
- 워크플로우 간 크리덴셜 공유 가능
- 암호화된 저장소에 보관

## 주요 장점

- 오픈소스, 무료 셀프 호스팅 가능
- 데이터가 자체 서버에 유지 (보안 강화)
- JavaScript/Python 코드 노드 지원
- 커뮤니티 노드로 기능 확장 가능`,contentEn:`# n8n Automation

## What is n8n?

n8n is an open-source workflow automation tool that supports self-hosting. It enables powerful automation while maintaining full data privacy.

## Self-Hosting Setup

Quick installation with Docker:

\`\`\`bash
# Run n8n with Docker
docker run -it --rm \\
  --name n8n \\
  -p 5678:5678 \\
  -v n8n_data:/home/node/.n8n \\
  n8nio/n8n

# Docker Compose configuration
# docker-compose.yml
version: '3'
services:
  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=securepassword
\`\`\`

## Workflow Structure

Build automation workflows by connecting Nodes.

- **Trigger Nodes**: Cron, Webhook, event detection
- **Regular Nodes**: HTTP requests, code execution, conditional branching
- **App Nodes**: Slack, Gmail, Google Sheets, and 400+ integrations

## Webhook Triggers

Receive data from external services into n8n.

\`\`\`
Webhook URL: https://your-n8n.com/webhook/abc123
Method: POST
Format: JSON

Example payload:
{
  "event": "form_submit",
  "name": "John Doe",
  "email": "john@example.com"
}
\`\`\`

## Credential Management

n8n provides centralized credential management.

- Securely store API keys, OAuth tokens
- Share credentials across workflows
- Encrypted storage for all secrets

## Key Advantages

- Open-source with free self-hosting
- Data stays on your own server (enhanced security)
- JavaScript/Python code node support
- Extensible through community nodes`};export{n as default};
