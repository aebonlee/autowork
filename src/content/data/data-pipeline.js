const lesson = {
  titleKo: '데이터 파이프라인',
  titleEn: 'Data Pipeline Design',
  contentKo: `# 데이터 파이프라인 설계

## 개요
데이터 파이프라인은 데이터를 수집, 변환, 저장하는 일련의 자동화된 프로세스입니다. 잘 설계된 파이프라인은 안정적이고 확장 가능한 데이터 처리의 기반이 됩니다.

## 핵심 개념

### ETL (Extract, Transform, Load)
\`\`\`python
# 간단한 ETL 파이프라인 예시
def extract():
    """데이터 소스에서 추출"""
    raw = requests.get("https://api.example.com/sales").json()
    return pd.DataFrame(raw)

def transform(df):
    """데이터 변환 및 정제"""
    df["date"] = pd.to_datetime(df["date"])
    df["total"] = df["quantity"] * df["unit_price"]
    df = df.dropna(subset=["customer_id"])
    return df

def load(df):
    """대상 저장소에 적재"""
    df.to_sql("sales_clean", engine, if_exists="append")

# 파이프라인 실행
raw = extract()
cleaned = transform(raw)
load(cleaned)
\`\`\`

### Apache Airflow 기초
- DAG(방향 비순환 그래프)로 작업 흐름 정의
- 작업 간 의존성 관리 및 순서 제어
- 스케줄링, 재시도, 알림 기능 내장

### cron + Python 조합
- 리눅스 cron으로 Python 스크립트 정기 실행
- 간단한 파이프라인에 적합한 경량 솔루션
- 로그 파일로 실행 이력 관리

### 클라우드 파이프라인
- **AWS Glue**: 서버리스 ETL 서비스
- **Google Cloud Dataflow**: 실시간 스트리밍 처리
- **Azure Data Factory**: 드래그 앤 드롭 파이프라인 구성

## 설계 원칙
- 각 단계를 독립적이고 재실행 가능하게 설계
- 멱등성(idempotency) 보장으로 중복 실행 안전성 확보
- 모니터링과 알림으로 파이프라인 건강 상태 추적`,
  contentEn: `# Data Pipeline Design

## Overview
A data pipeline is a series of automated processes that collect, transform, and store data. Well-designed pipelines form the foundation for reliable and scalable data processing.

## Key Concepts

### ETL (Extract, Transform, Load)
\`\`\`python
# Simple ETL pipeline example
def extract():
    """Extract from data source"""
    raw = requests.get("https://api.example.com/sales").json()
    return pd.DataFrame(raw)

def transform(df):
    """Transform and clean data"""
    df["date"] = pd.to_datetime(df["date"])
    df["total"] = df["quantity"] * df["unit_price"]
    df = df.dropna(subset=["customer_id"])
    return df

def load(df):
    """Load into target storage"""
    df.to_sql("sales_clean", engine, if_exists="append")

# Run pipeline
raw = extract()
cleaned = transform(raw)
load(cleaned)
\`\`\`

### Apache Airflow Basics
- Define workflows as DAGs (Directed Acyclic Graphs)
- Manage task dependencies and execution order
- Built-in scheduling, retries, and alerting

### cron + Python Combination
- Schedule Python scripts with Linux cron
- Lightweight solution for simple pipelines
- Track execution history via log files

### Cloud Pipelines
- **AWS Glue**: Serverless ETL service
- **Google Cloud Dataflow**: Real-time stream processing
- **Azure Data Factory**: Drag-and-drop pipeline builder

## Design Principles
- Design each stage to be independent and re-runnable
- Ensure idempotency for safe duplicate execution
- Track pipeline health with monitoring and alerts`,
};
export default lesson;
