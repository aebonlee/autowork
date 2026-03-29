const lesson = {
  titleKo: '매크로 녹화와 활용',
  titleEn: 'Recording & Using Macros',
  contentKo: `# 매크로 녹화와 활용

## 매크로란?
반복적인 작업을 자동으로 실행하는 일련의 명령어 기록입니다. 코딩 없이도 자동화를 시작할 수 있습니다.

## 매크로 녹화하기

\`\`\`
1. 보기 탭 > 매크로 > 매크로 기록
2. 매크로 이름 입력 (공백 불가, 영문 시작)
3. 바로 가기 키 설정 (선택)
4. 저장 위치: 현재 통합 문서 또는 개인용 매크로 통합 문서
5. 원하는 작업 수행
6. 기록 중지 클릭
\`\`\`

## 매크로 실행 방법
- **바로 가기 키**: 녹화 시 설정한 단축키 사용
- **매크로 대화 상자**: Alt + F8 > 매크로 선택 > 실행
- **버튼 연결**: 도형/버튼에 매크로 할당

\`\`\`
삽입 탭 > 도형 > 도형 우클릭 > 매크로 지정
\`\`\`

## 개인용 매크로 통합 문서
모든 Excel 파일에서 사용할 수 있는 매크로를 저장하는 숨겨진 통합 문서입니다.

\`\`\`
저장 위치: PERSONAL.XLSB
경로: %APPDATA%\\Microsoft\\Excel\\XLSTART\\
\`\`\`

## 매크로 보안 설정
악성 매크로로부터 시스템을 보호하기 위한 설정입니다.

- **모든 매크로 제한**: 매크로 완전 차단
- **알림 포함 사용 안 함**: 매크로 실행 전 확인 (권장)
- **디지털 서명된 매크로만**: 신뢰할 수 있는 매크로만 허용

\`\`\`
파일 > 옵션 > 보안 센터 > 매크로 설정
\`\`\`

> **실무 팁**: 매크로가 포함된 파일은 반드시 .xlsm 형식으로 저장해야 합니다.`,
  contentEn: `# Recording & Using Macros

## What Is a Macro?
A recorded sequence of commands that automates repetitive tasks. No coding knowledge required to get started.

## Recording a Macro

\`\`\`
1. View tab > Macros > Record Macro
2. Enter macro name (no spaces, start with a letter)
3. Assign shortcut key (optional)
4. Store in: This Workbook or Personal Macro Workbook
5. Perform the desired actions
6. Click Stop Recording
\`\`\`

## Running Macros
- **Shortcut Key**: Use the key assigned during recording
- **Macro Dialog**: Alt + F8 > Select macro > Run
- **Button**: Assign macro to a shape or form control

\`\`\`
Insert tab > Shapes > Right-click shape > Assign Macro
\`\`\`

## Personal Macro Workbook
A hidden workbook that stores macros available across all Excel files.

\`\`\`
Stored as: PERSONAL.XLSB
Path: %APPDATA%\\Microsoft\\Excel\\XLSTART\\
\`\`\`

## Macro Security Settings
Protect your system from potentially harmful macros.

- **Disable all macros**: Block all macros entirely
- **Disable with notification**: Prompt before running (recommended)
- **Digitally signed only**: Allow only trusted signed macros

\`\`\`
File > Options > Trust Center > Macro Settings
\`\`\`

> **Pro Tip**: Always save macro-enabled files in .xlsm format, or macros will be lost.`,
};

export default lesson;
