const lesson = {
  titleKo: '셀렉터와 데이터 추출',
  titleEn: 'Selectors & Data Extraction',
  contentKo: `## UI 셀렉터란?

셀렉터는 화면 위의 UI 요소를 고유하게 식별하는 XML 기반의 경로 표현식입니다. 안정적인 RPA 봇을 만들기 위해 셀렉터를 정확히 이해하는 것이 핵심입니다.

## 셀렉터 구조

\`\`\`xml
<wnd app='chrome.exe' title='검색 - Google*' />
<webctrl tag='INPUT' id='searchInput' />
\`\`\`

## 셀렉터 최적화 전략

- **와일드카드 사용**: 동적으로 변하는 속성에 \`*\` 적용
- **idx 속성 회피**: 인덱스 기반 셀렉터는 UI 변경 시 깨지기 쉬움
- **안정적 속성 우선**: \`id\`, \`name\`, \`automationId\` 활용
- **앵커 활용**: 상대적 위치 기반으로 요소 식별

## 데이터 스크래핑

| 방법 | 설명 | 적합한 경우 |
|------|------|-------------|
| **Data Scraping** | 구조화된 테이블 데이터 추출 | 웹 테이블, 리스트 |
| **Screen Scraping** | 화면 텍스트를 통째로 추출 | 레거시 앱, 터미널 |
| **OCR** | 이미지에서 텍스트 인식 | Citrix, 원격 데스크톱 |

## OCR 엔진 비교

\`\`\`
Google Tesseract OCR:
  - 무료 오픈소스
  - 다국어 지원, 한국어 포함
  - 정확도: 중간~높음

Microsoft OCR:
  - Windows 내장
  - 빠른 처리 속도
  - 정확도: 중간

UiPath Document Understanding:
  - AI 기반 문서 인식
  - 비정형 문서 처리 가능
  - 정확도: 매우 높음
\`\`\``,
  contentEn: `## What Are UI Selectors?

Selectors are XML-based path expressions that uniquely identify UI elements on the screen. Understanding selectors is essential for building reliable RPA bots.

## Selector Structure

\`\`\`xml
<wnd app='chrome.exe' title='Search - Google*' />
<webctrl tag='INPUT' id='searchInput' />
\`\`\`

## Selector Optimization Strategies

- **Use Wildcards**: Apply \`*\` for dynamically changing attributes
- **Avoid idx Attribute**: Index-based selectors break easily on UI changes
- **Prefer Stable Attributes**: Use \`id\`, \`name\`, \`automationId\`
- **Use Anchors**: Identify elements by relative position

## Data Extraction Methods

| Method | Description | Best For |
|--------|-------------|----------|
| **Data Scraping** | Extracts structured table data | Web tables, lists |
| **Screen Scraping** | Captures all text from the screen | Legacy apps, terminals |
| **OCR** | Recognizes text from images | Citrix, remote desktops |

## OCR Engine Comparison

\`\`\`
Google Tesseract OCR:
  - Free and open-source
  - Multi-language support including Korean
  - Accuracy: Medium to High

Microsoft OCR:
  - Built into Windows
  - Fast processing speed
  - Accuracy: Medium

UiPath Document Understanding:
  - AI-powered document recognition
  - Handles unstructured documents
  - Accuracy: Very High
\`\`\``,
};
export default lesson;
