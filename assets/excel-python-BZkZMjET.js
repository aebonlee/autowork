const e={titleKo:"Python으로 Excel 다루기",titleEn:"Excel with Python",contentKo:`## Python으로 엑셀 파일 자동화하기

### 1. 라이브러리 설치

\`\`\`python
pip install openpyxl pandas
\`\`\`

### 2. openpyxl로 엑셀 다루기

\`\`\`python
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment

wb = Workbook()
ws = wb.active
ws.title = "매출 보고서"

# 헤더 작성 및 스타일 적용
headers = ["날짜", "제품명", "수량", "단가", "합계"]
for col, header in enumerate(headers, 1):
    cell = ws.cell(row=1, column=col, value=header)
    cell.font = Font(bold=True, size=12)
    cell.alignment = Alignment(horizontal="center")

# 데이터 입력
data = [
    ["2024-01-15", "노트북", 5, 1200000, "=C2*D2"],
    ["2024-01-16", "마우스", 20, 35000, "=C3*D3"],
]
for row_data in data:
    ws.append(row_data)

wb.save("sales_report.xlsx")
\`\`\`

### 3. pandas로 엑셀 읽기/쓰기

\`\`\`python
import pandas as pd

# 엑셀 파일 읽기
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")
print(df.head())

# 데이터 필터링 및 분석
filtered = df[df["수량"] > 10]
summary = df.groupby("제품명")["합계"].sum()

# 결과를 새 엑셀로 저장
with pd.ExcelWriter("result.xlsx", engine="openpyxl") as writer:
    filtered.to_excel(writer, sheet_name="필터결과", index=False)
    summary.to_excel(writer, sheet_name="요약")
\`\`\`

### 4. 차트 생성

\`\`\`python
from openpyxl.chart import BarChart, Reference

chart = BarChart()
chart.title = "월별 매출"
chart.y_axis.title = "금액"

data_ref = Reference(ws, min_col=5, min_row=1, max_row=3)
cats_ref = Reference(ws, min_col=1, min_row=2, max_row=3)
chart.add_data(data_ref, titles_from_data=True)
chart.set_categories(cats_ref)

ws.add_chart(chart, "G2")
wb.save("sales_with_chart.xlsx")
\`\`\`

- 대용량 데이터에는 **pandas**가 효율적이고, 세부 서식은 **openpyxl**이 적합합니다.`,contentEn:`## Automate Excel Files with Python

### 1. Install Libraries

\`\`\`python
pip install openpyxl pandas
\`\`\`

### 2. Working with openpyxl

\`\`\`python
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment

wb = Workbook()
ws = wb.active
ws.title = "Sales Report"

# Write headers with styling
headers = ["Date", "Product", "Qty", "Price", "Total"]
for col, header in enumerate(headers, 1):
    cell = ws.cell(row=1, column=col, value=header)
    cell.font = Font(bold=True, size=12)
    cell.alignment = Alignment(horizontal="center")

# Insert data
data = [
    ["2024-01-15", "Laptop", 5, 1200, "=C2*D2"],
    ["2024-01-16", "Mouse", 20, 35, "=C3*D3"],
]
for row_data in data:
    ws.append(row_data)

wb.save("sales_report.xlsx")
\`\`\`

### 3. Read/Write Excel with pandas

\`\`\`python
import pandas as pd

# Read Excel file
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")
print(df.head())

# Filter and analyze
filtered = df[df["Qty"] > 10]
summary = df.groupby("Product")["Total"].sum()

# Save results to new Excel file
with pd.ExcelWriter("result.xlsx", engine="openpyxl") as writer:
    filtered.to_excel(writer, sheet_name="Filtered", index=False)
    summary.to_excel(writer, sheet_name="Summary")
\`\`\`

### 4. Create Charts

\`\`\`python
from openpyxl.chart import BarChart, Reference

chart = BarChart()
chart.title = "Monthly Sales"
chart.y_axis.title = "Amount"

data_ref = Reference(ws, min_col=5, min_row=1, max_row=3)
cats_ref = Reference(ws, min_col=1, min_row=2, max_row=3)
chart.add_data(data_ref, titles_from_data=True)
chart.set_categories(cats_ref)

ws.add_chart(chart, "G2")
wb.save("sales_with_chart.xlsx")
\`\`\`

- Use **pandas** for large datasets; use **openpyxl** for fine-grained formatting.`};export{e as default};
