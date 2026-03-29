const lesson = {
  titleKo: 'UiPath 기초',
  titleEn: 'UiPath Basics',
  contentKo: `## UiPath Studio 설치 및 설정

UiPath는 가장 널리 사용되는 RPA 플랫폼으로, 시각적 드래그앤드롭 방식의 자동화 개발 환경을 제공합니다.

## 설치 단계

\`\`\`
1. UiPath 공식 사이트에서 Community Edition 다운로드
2. UiPath Studio 설치 및 계정 연동
3. 프로젝트 생성 시 "Process" 템플릿 선택
4. NuGet 패키지 매니저로 필요한 액티비티 추가
\`\`\`

## 레코딩 기능

- **Basic Recording**: 단일 동작을 하나씩 기록
- **Desktop Recording**: 데스크톱 애플리케이션 자동화에 최적
- **Web Recording**: 브라우저 기반 작업 자동 기록
- **Image Recording**: 이미지 인식 기반 자동화

## 핵심 액티비티

| 액티비티 | 설명 |
|----------|------|
| \`Click\` | UI 요소 클릭 |
| \`Type Into\` | 텍스트 입력 |
| \`Get Text\` | 화면에서 텍스트 추출 |
| \`Excel Application Scope\` | 엑셀 파일 작업 |
| \`Send SMTP Mail\` | 이메일 발송 |

## 시퀀스 vs 플로우차트

- **시퀀스(Sequence)**: 순차적 실행, 단순한 선형 작업에 적합
- **플로우차트(Flowchart)**: 조건 분기가 많은 복잡한 로직에 적합

\`\`\`
Sequence 예시:
  [Open Browser] -> [Type Into 검색] -> [Click 버튼] -> [Get Text 결과]
\`\`\``,
  contentEn: `## UiPath Studio Setup

UiPath is the most widely adopted RPA platform, offering a visual drag-and-drop development environment for building automations.

## Installation Steps

\`\`\`
1. Download Community Edition from the UiPath website
2. Install UiPath Studio and link your account
3. Create a new project using the "Process" template
4. Add required activities via NuGet Package Manager
\`\`\`

## Recording Features

- **Basic Recording**: Records individual actions one at a time
- **Desktop Recording**: Optimized for desktop application automation
- **Web Recording**: Automatically captures browser-based tasks
- **Image Recording**: Uses image recognition for automation

## Core Activities

| Activity | Description |
|----------|-------------|
| \`Click\` | Clicks a UI element |
| \`Type Into\` | Enters text into a field |
| \`Get Text\` | Extracts text from the screen |
| \`Excel Application Scope\` | Works with Excel files |
| \`Send SMTP Mail\` | Sends email messages |

## Sequences vs Flowcharts

- **Sequence**: Linear execution, best for simple step-by-step tasks
- **Flowchart**: Supports branching logic for complex decision-based workflows

\`\`\`
Sequence Example:
  [Open Browser] -> [Type Into Search] -> [Click Button] -> [Get Text Result]
\`\`\``,
};
export default lesson;
