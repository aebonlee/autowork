const lesson = {
  titleKo: 'PDF 자동 생성',
  titleEn: 'Automated PDF Generation',
  contentKo: `# PDF 자동 생성

## 개요
PDF는 비즈니스 문서의 표준 포맷입니다. 청구서, 보고서, 계약서 등을 자동으로 생성하면 수작업 오류를 줄이고 처리 속도를 높일 수 있습니다.

## 핵심 기술

### HTML-to-PDF 변환
\`\`\`python
from weasyprint import HTML

html_content = """
<h1>월간 보고서</h1>
<p>기간: 2026년 3월</p>
<table>
  <tr><th>항목</th><th>실적</th></tr>
  <tr><td>매출</td><td>5,000만원</td></tr>
</table>
"""
HTML(string=html_content).write_pdf("report.pdf")
\`\`\`

### 청구서 자동 생성
- 데이터베이스에서 거래 내역을 조회하여 자동 생성
- 고객 정보, 품목, 금액, 세금 자동 계산
- 일련번호 자동 부여 및 이력 관리

### 보고서 자동화 파이프라인
- 데이터 수집 → 분석 → 시각화 → PDF 생성 → 이메일 발송
- 주간/월간 보고서를 스케줄러로 자동 실행
- 차트와 그래프를 포함한 전문적인 레이아웃

### 전자 서명 연동
- PDF에 디지털 서명을 자동으로 삽입
- 서명 요청 워크플로우 자동화 (DocuSign, 카카오 인증)
- 서명 완료 후 자동 보관 및 알림

## 주요 라이브러리
- **WeasyPrint**: HTML/CSS 기반 고품질 PDF
- **ReportLab**: Python 네이티브 PDF 생성
- **Puppeteer**: 브라우저 기반 정밀 렌더링`,
  contentEn: `# Automated PDF Generation

## Overview
PDF is the standard format for business documents. Automating invoices, reports, and contracts reduces manual errors and speeds up processing.

## Key Technologies

### HTML-to-PDF Conversion
\`\`\`python
from weasyprint import HTML

html_content = """
<h1>Monthly Report</h1>
<p>Period: March 2026</p>
<table>
  <tr><th>Item</th><th>Result</th></tr>
  <tr><td>Revenue</td><td>$50,000</td></tr>
</table>
"""
HTML(string=html_content).write_pdf("report.pdf")
\`\`\`

### Invoice Auto-Generation
- Query transaction records from databases for auto-generation
- Automatic calculation of customer info, items, amounts, tax
- Auto-assign serial numbers with history management

### Report Automation Pipeline
- Data collection -> Analysis -> Visualization -> PDF -> Email
- Schedule weekly/monthly reports with job schedulers
- Professional layouts with charts and graphs

### Digital Signature Integration
- Automatically insert digital signatures into PDFs
- Automate signature request workflows (DocuSign)
- Auto-archive and notify upon signature completion

## Key Libraries
- **WeasyPrint**: High-quality PDF from HTML/CSS
- **ReportLab**: Native Python PDF generation
- **Puppeteer**: Browser-based precise rendering`,
};
export default lesson;
