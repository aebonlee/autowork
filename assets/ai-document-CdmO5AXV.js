const t={titleKo:"AI 문서 처리",titleEn:"AI Document Processing",contentKo:`## AI 문서 처리 자동화

AI를 활용하면 문서의 읽기, 분석, 변환 작업을 자동화할 수 있습니다. OCR과 LLM을 결합하면 비정형 문서도 구조화된 데이터로 변환할 수 있습니다.

## OCR + AI 파이프라인

이미지나 스캔 문서에서 텍스트를 추출하고 AI로 분석합니다.

\`\`\`javascript
import Tesseract from 'tesseract.js';

// 1단계: OCR로 텍스트 추출
const { data: { text } } = await Tesseract.recognize(
  'receipt.png', 'kor+eng'
);

// 2단계: AI로 구조화된 데이터 추출
const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{
    role: 'user',
    content: \`다음 영수증 텍스트에서 날짜, 금액, 항목을 JSON으로 추출하세요:\\n\${text}\`,
  }],
});
\`\`\`

## PDF 요약 자동화

긴 PDF 문서를 자동으로 요약하여 핵심 내용을 추출합니다.

\`\`\`javascript
import { PDFExtract } from 'pdf.js-extract';

const pdfExtract = new PDFExtract();
const data = await pdfExtract.extract('report.pdf');
const fullText = data.pages.map(p =>
  p.content.map(c => c.str).join(' ')
).join('\\n');

// Claude의 긴 컨텍스트를 활용한 요약
const summary = await anthropic.messages.create({
  model: 'claude-sonnet-4-20250514',
  max_tokens: 2048,
  messages: [{
    role: 'user',
    content: \`다음 문서를 3줄로 요약하세요:\\n\${fullText}\`,
  }],
});
\`\`\`

## 데이터 추출 패턴

- **정형 데이터**: 표, 양식에서 필드값 추출 → JSON 변환
- **비정형 데이터**: 자유 텍스트에서 핵심 정보 추출
- **분류 작업**: 문서 유형 자동 분류 (계약서, 이력서, 보고서 등)

## 번역 자동화

\`\`\`javascript
// 배치 번역 처리
const documents = ['문서1.txt', '문서2.txt', '문서3.txt'];
const translated = await Promise.all(
  documents.map(doc => translateWithAI(doc, 'ko', 'en'))
);
\`\`\`

> 팁: 대량 문서 처리 시 rate limit을 고려하여 지연(delay)을 추가하세요.`,contentEn:`## AI Document Processing Automation

AI automates reading, analyzing, and transforming documents. Combining OCR with LLMs converts even unstructured documents into structured data.

## OCR + AI Pipeline

Extract text from images or scanned documents and analyze with AI.

\`\`\`javascript
import Tesseract from 'tesseract.js';

// Step 1: Extract text with OCR
const { data: { text } } = await Tesseract.recognize(
  'receipt.png', 'kor+eng'
);

// Step 2: Extract structured data with AI
const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{
    role: 'user',
    content: \`Extract date, amount, and items as JSON from this receipt:\\n\${text}\`,
  }],
});
\`\`\`

## PDF Summarization

Automatically summarize long PDF documents to extract key points.

\`\`\`javascript
import { PDFExtract } from 'pdf.js-extract';

const pdfExtract = new PDFExtract();
const data = await pdfExtract.extract('report.pdf');
const fullText = data.pages.map(p =>
  p.content.map(c => c.str).join(' ')
).join('\\n');

// Summarize using Claude's long context
const summary = await anthropic.messages.create({
  model: 'claude-sonnet-4-20250514',
  max_tokens: 2048,
  messages: [{
    role: 'user',
    content: \`Summarize this document in 3 lines:\\n\${fullText}\`,
  }],
});
\`\`\`

## Data Extraction Patterns

- **Structured data**: Extract field values from tables/forms into JSON
- **Unstructured data**: Extract key information from free text
- **Classification**: Auto-classify document types (contracts, resumes, reports)

## Translation Automation

\`\`\`javascript
// Batch translation processing
const documents = ['doc1.txt', 'doc2.txt', 'doc3.txt'];
const translated = await Promise.all(
  documents.map(doc => translateWithAI(doc, 'en', 'ko'))
);
\`\`\`

> Tip: Add delays for batch processing to respect rate limits.`};export{t as default};
