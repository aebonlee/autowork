const e={titleKo:"이메일 워크플로우",titleEn:"Email Workflow Automation",contentKo:`# 이메일 워크플로우 자동화

## 개요
이메일은 업무 커뮤니케이션의 핵심 도구입니다. 반복적인 이메일 작업을 자동화하면 시간을 절약하고 응답 품질을 높일 수 있습니다.

## 핵심 기능

### 이메일 규칙 자동화
- 발신자, 제목, 키워드 기반 자동 분류
- 특정 조건에 따른 폴더 이동 및 라벨 지정
- 우선순위 자동 태깅으로 중요 메일 관리

### 자동 응답 시스템
\`\`\`python
import smtplib
from email.mime.text import MIMEText

def send_auto_reply(to_email, template):
    msg = MIMEText(template)
    msg["Subject"] = "자동 응답: 문의가 접수되었습니다"
    msg["From"] = "support@dreamit.com"
    msg["To"] = to_email
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login("user", "password")
        server.send_message(msg)
\`\`\`

### CRM 연동
- 이메일 내용을 자동으로 CRM(고객 관계 관리)에 기록
- 고객 이력 기반 맞춤형 응답 생성
- 후속 조치 알림 자동 스케줄링

### 이메일 추적 및 분석
- 발송률, 열람률, 클릭률 자동 집계
- A/B 테스트로 제목 및 콘텐츠 최적화
- 대시보드를 통한 실시간 성과 모니터링

## 추천 도구
- **n8n / Zapier**: 노코드 이메일 자동화
- **SendGrid / Mailgun**: 대량 발송 API
- **Python imaplib**: 커스텀 이메일 처리`,contentEn:`# Email Workflow Automation

## Overview
Email is a core communication tool in business. Automating repetitive email tasks saves time and improves response quality.

## Key Features

### Email Rule Automation
- Auto-classify by sender, subject, or keywords
- Move to folders and assign labels based on conditions
- Priority auto-tagging for important email management

### Auto-Reply System
\`\`\`python
import smtplib
from email.mime.text import MIMEText

def send_auto_reply(to_email, template):
    msg = MIMEText(template)
    msg["Subject"] = "Auto-reply: Inquiry received"
    msg["From"] = "support@dreamit.com"
    msg["To"] = to_email
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login("user", "password")
        server.send_message(msg)
\`\`\`

### CRM Integration
- Automatically log email content in CRM
- Generate personalized responses based on customer history
- Schedule follow-up reminders automatically

### Email Tracking & Analytics
- Track send rates, open rates, click-through rates
- A/B test subject lines and content
- Real-time performance monitoring dashboards

## Recommended Tools
- **n8n / Zapier**: No-code email automation
- **SendGrid / Mailgun**: Bulk sending APIs
- **Python imaplib**: Custom email processing`};export{e as default};
