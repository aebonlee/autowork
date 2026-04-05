const lesson = {
  titleKo: '데이터 수집 자동화',
  titleEn: 'Automated Data Collection',
  contentKo: `# 데이터 수집 자동화

## 개요
비즈니스 의사결정에 필요한 데이터를 자동으로 수집하면 실시간 인사이트를 확보할 수 있습니다. API, 웹 스크래핑, RSS 피드 등 다양한 소스에서 데이터를 체계적으로 수집하는 방법을 알아봅니다.

## 핵심 기술

### API 폴링 (Polling)
\`\`\`python
import requests
import schedule
import time

def fetch_data():
    response = requests.get("https://api.example.com/data",
                            headers={"Authorization": "Bearer TOKEN"})
    if response.status_code == 200:
        data = response.json()
        save_to_database(data)

# 5분마다 데이터 수집
schedule.every(5).minutes.do(fetch_data)
while True:
    schedule.run_pending()
    time.sleep(1)
\`\`\`

### 웹 스크래핑 스케줄링
- BeautifulSoup, Selenium으로 웹 페이지 데이터 추출
- 크론(cron) 또는 스케줄러로 정기적 실행
- robots.txt 준수 및 요청 간격 조절로 예의 바른 스크래핑

### RSS 피드 수집
- 뉴스, 블로그, 업데이트를 자동으로 구독 및 수집
- feedparser 라이브러리로 간편한 파싱
- 키워드 필터링으로 관련 콘텐츠만 선별

### Webhook 리스너
- 이벤트 발생 시 데이터를 실시간으로 수신
- Flask/FastAPI로 간단한 웹훅 엔드포인트 구축
- 결제 알림, 폼 제출, 깃 커밋 등 이벤트 처리

## 모범 사례
- 수집 실패 시 재시도 로직 구현
- 중복 데이터 방지를 위한 고유 식별자 관리
- 수집 이력과 로그를 체계적으로 기록`,
  contentEn: `# Automated Data Collection

## Overview
Automatically collecting data needed for business decisions enables real-time insights. Learn how to systematically gather data from APIs, web scraping, RSS feeds, and more.

## Key Technologies

### API Polling
\`\`\`python
import requests
import schedule
import time

def fetch_data():
    response = requests.get("https://api.example.com/data",
                            headers={"Authorization": "Bearer TOKEN"})
    if response.status_code == 200:
        data = response.json()
        save_to_database(data)

# Collect data every 5 minutes
schedule.every(5).minutes.do(fetch_data)
while True:
    schedule.run_pending()
    time.sleep(1)
\`\`\`

### Web Scraping Scheduling
- Extract data from web pages with BeautifulSoup, Selenium
- Run periodically with cron or schedulers
- Polite scraping: respect robots.txt and rate limits

### RSS Feed Collection
- Auto-subscribe and collect news, blog posts, updates
- Easy parsing with feedparser library
- Filter relevant content by keywords

### Webhook Listeners
- Receive data in real-time when events occur
- Build simple webhook endpoints with Flask/FastAPI
- Handle payment notifications, form submissions, git commits

## Best Practices
- Implement retry logic for collection failures
- Manage unique identifiers to prevent duplicate data
- Maintain systematic collection history and logs`,
};
export default lesson;
