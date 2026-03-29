const e={titleKo:"시스템 연동 패턴",titleEn:"System Integration Patterns",contentKo:`# 시스템 연동 패턴

## 개요
업무 자동화에서는 여러 시스템을 연결해야 하는 경우가 많습니다. REST API, 웹훅, 메시지 큐 등 다양한 연동 패턴을 이해하면 안정적인 통합 아키텍처를 구축할 수 있습니다.

## 핵심 패턴

### REST API 연동
\`\`\`python
import requests

class APIClient:
    def __init__(self, base_url, api_key):
        self.base_url = base_url
        self.headers = {"Authorization": f"Bearer {api_key}"}

    def get(self, endpoint):
        resp = requests.get(f"{self.base_url}/{endpoint}",
                           headers=self.headers)
        resp.raise_for_status()
        return resp.json()

    def post(self, endpoint, data):
        resp = requests.post(f"{self.base_url}/{endpoint}",
                            json=data, headers=self.headers)
        resp.raise_for_status()
        return resp.json()

# 사용 예시
crm = APIClient("https://api.crm.com/v1", "YOUR_KEY")
customers = crm.get("customers?status=active")
\`\`\`

### Webhook (이벤트 기반)
- 이벤트 발생 시 지정된 URL로 데이터를 자동 전송
- 실시간 처리에 적합 (결제 완료, 양식 제출 등)
- 서명 검증으로 요청의 신뢰성 확보

### 메시지 큐 (비동기 처리)
- RabbitMQ, Redis Queue로 작업을 큐에 넣고 순차 처리
- 시스템 간 결합도를 낮추고 확장성 향상
- 실패한 메시지를 Dead Letter Queue로 관리

### 이벤트 드리븐 아키텍처
- 이벤트 발행(publish)과 구독(subscribe) 분리
- 느슨한 결합으로 시스템 독립성 유지
- Apache Kafka, AWS SNS/SQS 활용

### 배치 처리
- 대량 데이터를 일정 시간에 묶어서 처리
- 실시간이 필요 없는 작업(정산, 통계)에 효율적
- 멱등성 보장으로 재실행 시 안전성 확보`,contentEn:`# System Integration Patterns

## Overview
Workflow automation often requires connecting multiple systems. Understanding patterns like REST APIs, webhooks, and message queues helps build reliable integration architectures.

## Key Patterns

### REST API Integration
\`\`\`python
import requests

class APIClient:
    def __init__(self, base_url, api_key):
        self.base_url = base_url
        self.headers = {"Authorization": f"Bearer {api_key}"}

    def get(self, endpoint):
        resp = requests.get(f"{self.base_url}/{endpoint}",
                           headers=self.headers)
        resp.raise_for_status()
        return resp.json()

    def post(self, endpoint, data):
        resp = requests.post(f"{self.base_url}/{endpoint}",
                            json=data, headers=self.headers)
        resp.raise_for_status()
        return resp.json()

# Usage example
crm = APIClient("https://api.crm.com/v1", "YOUR_KEY")
customers = crm.get("customers?status=active")
\`\`\`

### Webhooks (Event-Driven)
- Automatically send data to a URL when events occur
- Ideal for real-time processing (payments, form submissions)
- Verify request authenticity with signature validation

### Message Queues (Async Processing)
- Queue tasks with RabbitMQ or Redis Queue for sequential processing
- Reduce coupling between systems and improve scalability
- Manage failed messages with Dead Letter Queues

### Event-Driven Architecture
- Separate event publishing and subscribing
- Maintain system independence with loose coupling
- Use Apache Kafka, AWS SNS/SQS

### Batch Processing
- Process bulk data at scheduled intervals
- Efficient for non-real-time tasks (settlements, statistics)
- Ensure safety on re-runs with idempotency`};export{e as default};
