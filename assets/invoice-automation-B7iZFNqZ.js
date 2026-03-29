const e={titleKo:"청구서 자동 처리 시스템",titleEn:"Invoice Processing System",contentKo:`# 청구서 자동 처리 시스템

## 개요
청구서 처리는 많은 기업에서 수작업으로 진행되는 반복 업무입니다. OCR, 데이터 검증, ERP 연동을 결합하면 청구서 수신부터 결제까지 전 과정을 자동화할 수 있습니다.

## 시스템 아키텍처

### 전체 워크플로우
\`\`\`
[청구서 수신] → [OCR 텍스트 추출] → [데이터 파싱]
→ [유효성 검증] → [승인 워크플로우] → [ERP 전송]
→ [결제 처리] → [보관 및 알림]
\`\`\`

### 1단계: OCR 기반 데이터 추출
\`\`\`python
from azure.ai.formrecognizer import DocumentAnalysisClient

def extract_invoice(file_path):
    client = DocumentAnalysisClient(endpoint, credential)
    with open(file_path, "rb") as f:
        poller = client.begin_analyze_document("prebuilt-invoice", f)
    result = poller.result()

    return {
        "vendor": result.documents[0].fields["VendorName"].value,
        "total": result.documents[0].fields["InvoiceTotal"].value,
        "date": result.documents[0].fields["InvoiceDate"].value,
        "items": extract_line_items(result)
    }
\`\`\`

### 2단계: 데이터 검증
- 공급자 정보가 DB에 등록된 거래처와 일치하는지 확인
- 금액 합계와 세금 계산 자동 검증
- 중복 청구서 탐지 (청구서 번호, 금액, 날짜 비교)

### 3단계: 승인 및 ERP 연동
- 금액 기준 자동/수동 승인 분기 (예: 100만원 이하 자동 승인)
- 승인된 청구서를 ERP 시스템에 자동 전표 생성
- 결제 스케줄 자동 등록 및 만기일 알림

## 기대 효과
- 처리 시간 80% 단축, 입력 오류 95% 감소
- 실시간 미지급금 현황 파악 가능
- 감사 추적(audit trail)을 위한 전 과정 로그 기록`,contentEn:`# Invoice Processing System

## Overview
Invoice processing is a repetitive manual task in many companies. Combining OCR, data validation, and ERP integration automates the entire flow from receipt to payment.

## System Architecture

### End-to-End Workflow
\`\`\`
[Receive Invoice] -> [OCR Text Extraction] -> [Data Parsing]
-> [Validation] -> [Approval Workflow] -> [ERP Transfer]
-> [Payment Processing] -> [Archive & Notify]
\`\`\`

### Step 1: OCR-Based Data Extraction
\`\`\`python
from azure.ai.formrecognizer import DocumentAnalysisClient

def extract_invoice(file_path):
    client = DocumentAnalysisClient(endpoint, credential)
    with open(file_path, "rb") as f:
        poller = client.begin_analyze_document("prebuilt-invoice", f)
    result = poller.result()

    return {
        "vendor": result.documents[0].fields["VendorName"].value,
        "total": result.documents[0].fields["InvoiceTotal"].value,
        "date": result.documents[0].fields["InvoiceDate"].value,
        "items": extract_line_items(result)
    }
\`\`\`

### Step 2: Data Validation
- Verify vendor info matches registered suppliers in DB
- Auto-validate amount totals and tax calculations
- Detect duplicate invoices (compare number, amount, date)

### Step 3: Approval & ERP Integration
- Route auto/manual approval by amount (e.g., auto-approve under $1,000)
- Auto-create journal entries in ERP for approved invoices
- Register payment schedules and send due date reminders

## Expected Benefits
- 80% reduction in processing time, 95% fewer input errors
- Real-time visibility into accounts payable
- Full process logging for audit trail compliance`};export{e as default};
