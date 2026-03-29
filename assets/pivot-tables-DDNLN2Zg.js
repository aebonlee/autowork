const e={titleKo:"피벗 테이블 활용",titleEn:"Pivot Tables Mastery",contentKo:`# 피벗 테이블 활용

## 피벗 테이블 생성
대량의 데이터를 요약하고 분석하는 가장 강력한 도구입니다.

\`\`\`
1. 데이터 범위 선택
2. 삽입 탭 > 피벗 테이블
3. 새 워크시트 또는 기존 워크시트 선택
4. 필드를 행/열/값/필터 영역에 드래그
\`\`\`

## 데이터 그룹화
날짜나 숫자 필드를 원하는 단위로 묶을 수 있습니다.

- **날짜 그룹화**: 연/분기/월/일 단위로 자동 그룹화
- **숫자 그룹화**: 지정 간격(예: 10단위)으로 범위 그룹화

\`\`\`
피벗 필드 우클릭 > 그룹화 > 시작/끝/간격 설정
\`\`\`

## 계산 필드
기존 필드를 조합하여 새로운 계산 항목을 추가합니다.

\`\`\`
피벗 테이블 분석 탭 > 필드, 항목 및 집합 > 계산 필드
예: =매출액/수량  (단가 계산)
예: =매출액*0.1   (수수료 계산)
\`\`\`

## 슬라이서와 타임라인
시각적으로 데이터를 필터링하는 대화형 컨트롤입니다.

- **슬라이서**: 버튼 클릭으로 카테고리 필터링
- **타임라인**: 날짜 범위를 슬라이더로 조절

\`\`\`
피벗 테이블 분석 탭 > 슬라이서 삽입 / 타임라인 삽입
\`\`\`

## 피벗 차트
피벗 테이블 데이터를 차트로 시각화하며, 필터와 연동됩니다.

> **실무 팁**: 원본 데이터를 "표(Table)"로 변환하면 데이터 추가 시 피벗 범위가 자동 확장됩니다.`,contentEn:`# Pivot Tables Mastery

## Creating a Pivot Table
The most powerful tool for summarizing and analyzing large datasets.

\`\`\`
1. Select your data range
2. Insert tab > PivotTable
3. Choose new or existing worksheet
4. Drag fields to Rows/Columns/Values/Filters areas
\`\`\`

## Grouping Data
Group date or number fields into meaningful intervals.

- **Date Grouping**: Auto-group by year, quarter, month, or day
- **Number Grouping**: Group into ranges (e.g., intervals of 10)

\`\`\`
Right-click pivot field > Group > Set start/end/interval
\`\`\`

## Calculated Fields
Create new metrics by combining existing fields.

\`\`\`
PivotTable Analyze tab > Fields, Items & Sets > Calculated Field
Example: =Revenue/Quantity   (unit price)
Example: =Revenue*0.1        (commission)
\`\`\`

## Slicers and Timelines
Interactive visual controls for filtering pivot data.

- **Slicers**: Click buttons to filter categories
- **Timelines**: Slide to select date ranges

\`\`\`
PivotTable Analyze tab > Insert Slicer / Insert Timeline
\`\`\`

## Pivot Charts
Visualize pivot table data as charts that stay synced with filters.

> **Pro Tip**: Convert source data to a Table (Ctrl+T) so the pivot range auto-expands when new rows are added.`};export{e as default};
