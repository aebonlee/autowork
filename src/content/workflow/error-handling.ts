const lesson = {
  titleKo: '에러 처리와 모니터링',
  titleEn: 'Error Handling & Monitoring',
  contentKo: `# 에러 처리와 모니터링

## 개요
자동화 시스템은 반드시 실패 상황에 대비해야 합니다. 체계적인 에러 처리와 모니터링을 구축하면 장애를 빠르게 감지하고 자동 복구할 수 있습니다.

## 핵심 기술

### try/catch 패턴
\`\`\`python
import logging
import time

logging.basicConfig(filename="automation.log", level=logging.INFO)

def process_with_retry(func, max_retries=3, delay=5):
    """재시도 로직이 포함된 실행 함수"""
    for attempt in range(max_retries):
        try:
            result = func()
            logging.info(f"성공: {func.__name__}")
            return result
        except ConnectionError as e:
            logging.warning(f"시도 {attempt+1}/{max_retries} 실패: {e}")
            if attempt < max_retries - 1:
                time.sleep(delay * (attempt + 1))  # 지수 백오프
            else:
                logging.error(f"최종 실패: {func.__name__}")
                send_alert(f"작업 실패: {func.__name__}")
                raise
\`\`\`

### 재시도 로직 (Retry Logic)
- **지수 백오프**: 재시도 간격을 점점 늘려 서버 부하 방지
- **최대 재시도 횟수**: 무한 루프 방지를 위한 한도 설정
- **회로 차단기(Circuit Breaker)**: 연속 실패 시 일시 중단

### 로깅 전략
- 구조화된 로그(JSON 형식)로 검색 및 분석 용이
- 로그 레벨 구분: DEBUG, INFO, WARNING, ERROR, CRITICAL
- 로그 로테이션으로 디스크 공간 관리

### 알림 시스템
- Slack, 이메일, SMS로 실시간 장애 알림
- 심각도에 따른 알림 채널 분리
- 알림 피로를 방지하기 위한 집계 및 중복 제거

### 모니터링 대시보드
- 작업 성공/실패율, 처리 시간, 큐 크기 시각화
- Grafana + Prometheus 조합으로 메트릭 수집 및 표시
- 이상 패턴 감지 시 자동 알림 트리거`,
  contentEn: `# Error Handling & Monitoring

## Overview
Automation systems must prepare for failure. Building systematic error handling and monitoring enables quick detection and automatic recovery from failures.

## Key Technologies

### try/catch Patterns
\`\`\`python
import logging
import time

logging.basicConfig(filename="automation.log", level=logging.INFO)

def process_with_retry(func, max_retries=3, delay=5):
    """Execution function with retry logic"""
    for attempt in range(max_retries):
        try:
            result = func()
            logging.info(f"Success: {func.__name__}")
            return result
        except ConnectionError as e:
            logging.warning(f"Attempt {attempt+1}/{max_retries} failed: {e}")
            if attempt < max_retries - 1:
                time.sleep(delay * (attempt + 1))  # Exponential backoff
            else:
                logging.error(f"Final failure: {func.__name__}")
                send_alert(f"Task failed: {func.__name__}")
                raise
\`\`\`

### Retry Logic
- **Exponential backoff**: Increase intervals to reduce server load
- **Max retry limit**: Set bounds to prevent infinite loops
- **Circuit breaker**: Pause execution after consecutive failures

### Logging Strategy
- Structured logs (JSON format) for easy search and analysis
- Log level separation: DEBUG, INFO, WARNING, ERROR, CRITICAL
- Log rotation for disk space management

### Alerting System
- Real-time failure alerts via Slack, email, SMS
- Separate alert channels by severity
- Aggregate and deduplicate to prevent alert fatigue

### Monitoring Dashboards
- Visualize success/failure rates, processing time, queue size
- Collect and display metrics with Grafana + Prometheus
- Auto-trigger alerts when anomalous patterns are detected`,
};
export default lesson;
