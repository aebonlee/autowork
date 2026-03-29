const e={titleKo:"핵심 Excel 수식 마스터",titleEn:"Master Essential Excel Formulas",contentKo:`# 핵심 Excel 수식 마스터

## VLOOKUP 함수
다른 표에서 값을 찾아올 때 가장 많이 사용합니다.

\`\`\`
=VLOOKUP(찾을값, 범위, 열번호, FALSE)
=VLOOKUP(A2, Sheet2!A:D, 3, FALSE)
\`\`\`

## INDEX/MATCH 조합
VLOOKUP보다 유연하며, 왼쪽 열도 참조 가능합니다.

\`\`\`
=INDEX(반환범위, MATCH(찾을값, 검색범위, 0))
=INDEX(C2:C100, MATCH(A2, B2:B100, 0))
\`\`\`

## 조건부 합계/카운트
- **SUMIFS**: 여러 조건을 만족하는 값의 합계
- **COUNTIFS**: 여러 조건을 만족하는 셀의 개수

\`\`\`
=SUMIFS(합계범위, 조건범위1, 조건1, 조건범위2, 조건2)
=COUNTIFS(범위1, ">=100", 범위2, "서울")
\`\`\`

## IF / IFS 함수
조건에 따라 다른 결과를 반환합니다.

\`\`\`
=IF(A1>=90, "A", IF(A1>=80, "B", "C"))
=IFS(A1>=90, "A", A1>=80, "B", TRUE, "C")
\`\`\`

## TEXT 함수
숫자나 날짜를 원하는 형식의 텍스트로 변환합니다.

\`\`\`
=TEXT(TODAY(), "YYYY-MM-DD")
=TEXT(A1, "#,##0원")
\`\`\`

> **실무 팁**: VLOOKUP 대신 INDEX/MATCH를 익혀두면 열 삽입/삭제에도 수식이 깨지지 않습니다.`,contentEn:`# Master Essential Excel Formulas

## VLOOKUP
The most common lookup function for finding values in another table.

\`\`\`
=VLOOKUP(lookup_value, table_array, col_index, FALSE)
=VLOOKUP(A2, Sheet2!A:D, 3, FALSE)
\`\`\`

## INDEX/MATCH Combination
More flexible than VLOOKUP -- can look left and handles column changes.

\`\`\`
=INDEX(return_range, MATCH(lookup_value, search_range, 0))
=INDEX(C2:C100, MATCH(A2, B2:B100, 0))
\`\`\`

## Conditional Aggregation
- **SUMIFS**: Sum values meeting multiple criteria
- **COUNTIFS**: Count cells meeting multiple criteria

\`\`\`
=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)
=COUNTIFS(range1, ">=100", range2, "Seoul")
\`\`\`

## IF / IFS Functions
Return different results based on conditions.

\`\`\`
=IF(A1>=90, "A", IF(A1>=80, "B", "C"))
=IFS(A1>=90, "A", A1>=80, "B", TRUE, "C")
\`\`\`

## TEXT Function
Convert numbers or dates into formatted text strings.

\`\`\`
=TEXT(TODAY(), "YYYY-MM-DD")
=TEXT(A1, "#,##0")
\`\`\`

> **Pro Tip**: Prefer INDEX/MATCH over VLOOKUP -- it won't break when columns are inserted or deleted.`};export{e as default};
