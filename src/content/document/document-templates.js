const lesson = {
  titleKo: '문서 템플릿 자동화',
  titleEn: 'Document Template Automation',
  contentKo: `# 문서 템플릿 자동화

## 개요
반복적인 문서 작성을 템플릿 기반으로 자동화하면 업무 효율이 크게 향상됩니다. 데이터만 변경하면 일관된 형식의 문서를 빠르게 생성할 수 있습니다.

## 핵심 기술

### Word 메일 머지 (Mail Merge)
- 엑셀 데이터와 Word 템플릿을 연결하여 대량 문서 자동 생성
- 고객별 계약서, 안내문, 증명서 등에 활용
- python-docx 라이브러리로 프로그래밍 방식 제어 가능

### 템플릿 엔진 활용
\`\`\`python
from docxtpl import DocxTemplate

doc = DocxTemplate("template.docx")
context = {
    "company": "드림IT",
    "date": "2026-03-29",
    "items": [{"name": "서비스A", "price": 50000}]
}
doc.render(context)
doc.save("output.docx")
\`\`\`

### Jinja2 기반 동적 보고서
- HTML 템플릿에 데이터를 바인딩하여 보고서 생성
- 조건문, 반복문으로 유연한 콘텐츠 구성
- CSS 스타일링으로 전문적인 레이아웃 구현

## 실무 팁
- 템플릿은 버전 관리 시스템(Git)으로 관리하세요
- 변수명은 명확하고 일관되게 작성하세요
- 출력 전 데이터 유효성 검사를 반드시 수행하세요`,
  contentEn: `# Document Template Automation

## Overview
Automating repetitive document creation with templates dramatically improves productivity. By changing only the data, you can quickly generate consistently formatted documents.

## Key Technologies

### Word Mail Merge
- Connect Excel data with Word templates for bulk document generation
- Useful for contracts, notices, certificates per client
- Programmatic control via python-docx library

### Template Engines
\`\`\`python
from docxtpl import DocxTemplate

doc = DocxTemplate("template.docx")
context = {
    "company": "DreamIT",
    "date": "2026-03-29",
    "items": [{"name": "Service A", "price": 500}]
}
doc.render(context)
doc.save("output.docx")
\`\`\`

### Jinja2 Dynamic Reports
- Bind data to HTML templates for report generation
- Use conditionals and loops for flexible content
- Professional layouts with CSS styling

## Best Practices
- Manage templates with version control (Git)
- Use clear, consistent variable naming
- Always validate data before rendering output`,
};
export default lesson;
