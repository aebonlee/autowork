const lesson = {
  titleKo: '조건부 서식과 데이터 유효성',
  titleEn: 'Conditional Formatting & Validation',
  contentKo: `# 조건부 서식과 데이터 유효성

## 조건부 서식 규칙
셀 값에 따라 자동으로 서식을 변경하여 데이터를 시각적으로 강조합니다.

- **셀 강조 규칙**: 특정 값보다 크거나 작은 셀, 중복 값 강조
- **상위/하위 규칙**: 상위 10%, 하위 10개 항목 등 강조

\`\`\`
홈 탭 > 조건부 서식 > 셀 강조 규칙 > 보다 큼...
\`\`\`

## 색조 / 데이터 막대 / 아이콘 집합
- **색조(Color Scales)**: 2~3색 그라데이션으로 값의 분포를 표현
- **데이터 막대(Data Bars)**: 셀 안에 가로 막대로 크기 비교
- **아이콘 집합(Icon Sets)**: 화살표, 신호등 등으로 상태 표시

\`\`\`
홈 탭 > 조건부 서식 > 색조 / 데이터 막대 / 아이콘 집합
\`\`\`

## 수식을 사용한 사용자 지정 규칙
더 복잡한 조건을 적용할 수 있습니다.

\`\`\`
=AND($B2>100, $C2="완료")   → 해당 행 전체에 서식 적용
=MOD(ROW(),2)=0             → 짝수 행에 줄무늬 서식
\`\`\`

## 데이터 유효성 검사
사용자가 입력할 수 있는 값을 제한합니다.

- **드롭다운 목록**: 지정된 값 중에서만 선택
- **숫자/날짜 범위**: 허용 범위 설정
- **사용자 지정 수식**: 유효성 조건을 수식으로 지정

\`\`\`
데이터 탭 > 데이터 유효성 검사 > 목록 > 원본: 서울,부산,대전
\`\`\`

> **실무 팁**: 드롭다운 목록의 원본을 별도 시트에 관리하면 유지보수가 편리합니다.`,
  contentEn: `# Conditional Formatting & Validation

## Conditional Formatting Rules
Automatically change cell appearance based on values for visual emphasis.

- **Highlight Cell Rules**: Highlight cells greater/less than a value, duplicates
- **Top/Bottom Rules**: Highlight top 10%, bottom 10 items, etc.

\`\`\`
Home tab > Conditional Formatting > Highlight Cell Rules > Greater Than...
\`\`\`

## Color Scales / Data Bars / Icon Sets
- **Color Scales**: 2-3 color gradients showing value distribution
- **Data Bars**: Horizontal bars inside cells for size comparison
- **Icon Sets**: Arrows, traffic lights, etc. to indicate status

\`\`\`
Home tab > Conditional Formatting > Color Scales / Data Bars / Icon Sets
\`\`\`

## Custom Rules with Formulas
Apply more complex conditions using formulas.

\`\`\`
=AND($B2>100, $C2="Done")   -> Format entire row
=MOD(ROW(),2)=0             -> Zebra striping on even rows
\`\`\`

## Data Validation
Restrict what users can enter into cells.

- **Dropdown List**: Select from predefined values only
- **Number/Date Range**: Set allowed min/max values
- **Custom Formula**: Define validation rules with formulas

\`\`\`
Data tab > Data Validation > List > Source: Option1,Option2,Option3
\`\`\`

> **Pro Tip**: Store dropdown source lists on a separate sheet for easier maintenance.`,
};

export default lesson;
