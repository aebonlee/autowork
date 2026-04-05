const lesson = {
  titleKo: '데이터 정제 자동화',
  titleEn: 'Automated Data Cleaning',
  contentKo: `# 데이터 정제 자동화

## 개요
수집된 원시 데이터에는 중복, 결측값, 형식 불일치 등의 문제가 있습니다. 데이터 정제를 자동화하면 분석 품질을 높이고 수작업 시간을 대폭 줄일 수 있습니다.

## 핵심 기술

### pandas를 활용한 데이터 정제
\`\`\`python
import pandas as pd

df = pd.read_csv("raw_data.csv")

# 중복 제거
df = df.drop_duplicates(subset=["id"])

# 결측값 처리
df["email"] = df["email"].fillna("unknown@example.com")
df = df.dropna(subset=["name"])  # 필수 필드

# 데이터 타입 변환
df["created_at"] = pd.to_datetime(df["created_at"])
df["price"] = df["price"].astype(float)

# 이상값 필터링
df = df[df["age"].between(0, 150)]
\`\`\`

### 유효성 검사 규칙
- 이메일 형식, 전화번호 패턴 자동 검증
- 범위 검사(날짜, 금액, 수량)로 이상값 탐지
- 정규표현식 기반 텍스트 정규화

### 자동화 파이프라인 구성
- 원본 데이터 백업 → 정제 규칙 적용 → 검증 → 저장
- 정제 전/후 통계 비교로 품질 확인
- 정제 규칙을 설정 파일로 관리하여 재사용

## 고급 기법
- **퍼지 매칭**: 유사 문자열 비교로 중복 탐지 (fuzzywuzzy)
- **자동 인코딩 감지**: chardet으로 파일 인코딩 자동 판별
- **스키마 검증**: 데이터 구조가 기대와 일치하는지 자동 확인

## 주의사항
- 원본 데이터는 반드시 보존하세요
- 정제 이력을 로그로 남겨 추적 가능하게 하세요`,
  contentEn: `# Automated Data Cleaning

## Overview
Raw collected data often has issues like duplicates, missing values, and format inconsistencies. Automating data cleaning improves analysis quality and drastically reduces manual effort.

## Key Technologies

### Data Cleaning with pandas
\`\`\`python
import pandas as pd

df = pd.read_csv("raw_data.csv")

# Remove duplicates
df = df.drop_duplicates(subset=["id"])

# Handle missing values
df["email"] = df["email"].fillna("unknown@example.com")
df = df.dropna(subset=["name"])  # Required field

# Type conversion
df["created_at"] = pd.to_datetime(df["created_at"])
df["price"] = df["price"].astype(float)

# Filter outliers
df = df[df["age"].between(0, 150)]
\`\`\`

### Validation Rules
- Auto-validate email formats, phone number patterns
- Detect outliers with range checks (dates, amounts, quantities)
- Normalize text using regular expressions

### Automation Pipeline Setup
- Backup raw data -> Apply rules -> Validate -> Save
- Compare pre/post statistics for quality assurance
- Manage cleaning rules in config files for reuse

## Advanced Techniques
- **Fuzzy Matching**: Detect duplicates with string similarity (fuzzywuzzy)
- **Auto Encoding Detection**: Detect file encoding with chardet
- **Schema Validation**: Verify data structure matches expectations

## Important Notes
- Always preserve original raw data
- Log cleaning history for traceability`,
};
export default lesson;
