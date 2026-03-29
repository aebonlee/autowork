const t={titleKo:"데이터 시각화 자동화",titleEn:"Automated Data Visualization",contentKo:`# 데이터 시각화 자동화

## 개요
데이터를 시각적으로 표현하면 복잡한 정보를 빠르게 이해할 수 있습니다. 차트와 대시보드 생성을 자동화하면 정기 보고서 작성 시간을 획기적으로 줄일 수 있습니다.

## 핵심 기술

### matplotlib & seaborn
\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

df = pd.read_csv("sales_data.csv")

# 자동 차트 생성
fig, axes = plt.subplots(1, 2, figsize=(14, 6))

# 월별 매출 추이
sns.lineplot(data=df, x="month", y="revenue", ax=axes[0])
axes[0].set_title("월별 매출 추이")

# 카테고리별 비율
df.groupby("category")["revenue"].sum().plot.pie(ax=axes[1])
axes[1].set_title("카테고리별 매출 비율")

plt.tight_layout()
plt.savefig("monthly_report.png", dpi=150)
\`\`\`

### Plotly 인터랙티브 시각화
- 마우스 호버, 줌, 필터 기능이 포함된 대화형 차트
- Dash 프레임워크로 웹 기반 대시보드 구축
- HTML 파일로 내보내어 공유 가능

### 자동 대시보드 생성
- 데이터 소스 연결 → 차트 자동 생성 → 웹 배포
- Streamlit으로 빠른 데이터 앱 프로토타이핑
- 실시간 데이터 갱신으로 라이브 대시보드 운영

### 보고서 스케줄링
- 매일/매주/매월 자동으로 차트 생성 및 이메일 발송
- 이상치 발생 시 알림과 함께 시각화 자동 전송
- PDF, PNG, HTML 다양한 형식으로 자동 내보내기`,contentEn:`# Automated Data Visualization

## Overview
Visualizing data helps quickly understand complex information. Automating chart and dashboard creation dramatically reduces time spent on regular reporting.

## Key Technologies

### matplotlib & seaborn
\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

df = pd.read_csv("sales_data.csv")

# Auto-generate charts
fig, axes = plt.subplots(1, 2, figsize=(14, 6))

# Monthly revenue trend
sns.lineplot(data=df, x="month", y="revenue", ax=axes[0])
axes[0].set_title("Monthly Revenue Trend")

# Category breakdown
df.groupby("category")["revenue"].sum().plot.pie(ax=axes[1])
axes[1].set_title("Revenue by Category")

plt.tight_layout()
plt.savefig("monthly_report.png", dpi=150)
\`\`\`

### Plotly Interactive Visualization
- Interactive charts with hover, zoom, and filter capabilities
- Build web dashboards with the Dash framework
- Export as HTML files for easy sharing

### Auto-Generated Dashboards
- Connect data sources -> Auto-generate charts -> Deploy to web
- Rapid data app prototyping with Streamlit
- Live dashboards with real-time data refresh

### Report Scheduling
- Auto-generate charts and send via email daily/weekly/monthly
- Auto-send visualizations with alerts when anomalies are detected
- Export in multiple formats: PDF, PNG, HTML`};export{t as default};
