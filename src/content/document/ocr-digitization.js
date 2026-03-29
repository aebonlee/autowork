const lesson = {
  titleKo: 'OCR과 문서 디지털화',
  titleEn: 'OCR & Document Digitization',
  contentKo: `# OCR과 문서 디지털화

## 개요
종이 문서나 이미지 속 텍스트를 자동으로 인식하여 디지털 데이터로 변환하는 OCR(광학 문자 인식) 기술은 업무 자동화의 핵심 요소입니다.

## 핵심 기술

### Tesseract OCR
\`\`\`python
import pytesseract
from PIL import Image

# 이미지에서 텍스트 추출
image = Image.open("document.png")
text = pytesseract.image_to_string(image, lang="kor+eng")
print(text)

# 좌표 정보와 함께 추출
data = pytesseract.image_to_data(image, output_type=pytesseract.Output.DICT)
\`\`\`

### 클라우드 OCR 서비스
- **Google Cloud Vision**: 다국어 지원, 높은 정확도, 문서 구조 분석
- **AWS Textract**: 표, 양식 자동 인식, 키-값 쌍 추출
- **Azure Form Recognizer**: 사전 학습 모델로 영수증, 신분증 인식

### 양식 인식 (Form Recognition)
- 정형화된 양식(신청서, 영수증)의 필드 자동 매핑
- 표 구조 인식으로 행/열 데이터 자동 추출
- 손글씨 인식(ICR)으로 수기 문서도 처리 가능

### 데이터 추출 파이프라인
- 스캔/촬영 → 전처리(회전, 노이즈 제거) → OCR → 후처리(교정)
- 추출된 데이터를 DB나 스프레드시트에 자동 저장
- 정확도 검증을 위한 신뢰도 점수 활용

## 전처리 팁
- 이미지 해상도는 300 DPI 이상 권장
- 이진화(binarization)로 텍스트 대비 향상
- 기울기 보정(deskew)으로 인식률 개선`,
  contentEn: `# OCR & Document Digitization

## Overview
OCR (Optical Character Recognition) automatically converts text in paper documents or images into digital data, making it a key component of workflow automation.

## Key Technologies

### Tesseract OCR
\`\`\`python
import pytesseract
from PIL import Image

# Extract text from image
image = Image.open("document.png")
text = pytesseract.image_to_string(image, lang="eng")
print(text)

# Extract with coordinate information
data = pytesseract.image_to_data(image, output_type=pytesseract.Output.DICT)
\`\`\`

### Cloud OCR Services
- **Google Cloud Vision**: Multi-language support, high accuracy, document structure analysis
- **AWS Textract**: Auto table/form recognition, key-value extraction
- **Azure Form Recognizer**: Pre-trained models for receipts, IDs

### Form Recognition
- Auto-map fields in structured forms (applications, receipts)
- Extract row/column data through table structure recognition
- Handle handwritten documents with ICR (Intelligent Character Recognition)

### Data Extraction Pipeline
- Scan/Capture -> Preprocess (rotate, denoise) -> OCR -> Post-process (correct)
- Auto-save extracted data to databases or spreadsheets
- Use confidence scores for accuracy verification

## Preprocessing Tips
- Image resolution should be 300 DPI or higher
- Apply binarization to improve text contrast
- Use deskewing to improve recognition rates`,
};
export default lesson;
