const lesson = {
  titleKo: '작업 스케줄링',
  titleEn: 'Task Scheduling',
  contentKo: `## Python 작업 스케줄링

### 1. schedule 라이브러리 (간단한 스케줄링)

\`\`\`python
pip install schedule
\`\`\`

\`\`\`python
import schedule
import time

def daily_report():
    print("일일 보고서 생성 중...")

def check_email():
    print("이메일 확인 중...")

# 스케줄 설정
schedule.every().day.at("09:00").do(daily_report)
schedule.every(30).minutes.do(check_email)
schedule.every().monday.at("08:00").do(daily_report)

while True:
    schedule.run_pending()
    time.sleep(60)
\`\`\`

### 2. APScheduler (고급 스케줄링)

\`\`\`python
pip install apscheduler
\`\`\`

\`\`\`python
from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.triggers.cron import CronTrigger

scheduler = BlockingScheduler()

@scheduler.scheduled_job("interval", minutes=10)
def fetch_data():
    print("데이터 수집 중...")

@scheduler.scheduled_job(CronTrigger(
    day_of_week="mon-fri", hour=9, minute=0
))
def morning_task():
    print("평일 아침 작업 실행")

scheduler.start()
\`\`\`

### 3. Windows 작업 스케줄러 연동

\`\`\`python
# 배치 파일 생성 (run_task.bat)
# @echo off
# cd /d D:\\projects
# python daily_task.py

# PowerShell로 작업 등록
# schtasks /create /tn "PythonDaily" /tr "D:\\run_task.bat" /sc daily /st 09:00
\`\`\`

### 4. Linux cron 연동

\`\`\`python
# crontab -e 로 편집
# 매일 오전 9시 실행
# 0 9 * * * /usr/bin/python3 /home/user/daily_task.py

# cron 표현식: 분 시 일 월 요일
# 0 */2 * * * : 2시간마다
# 30 8 * * 1-5 : 평일 8:30
\`\`\`

- **schedule**: 간단하고 직관적, 소규모 작업에 적합
- **APScheduler**: 복잡한 스케줄, DB 저장, 분산 처리 지원
- 운영 환경에서는 OS 레벨 스케줄러와 함께 사용하세요.`,
  contentEn: `## Task Scheduling with Python

### 1. schedule Library (Simple Scheduling)

\`\`\`python
pip install schedule
\`\`\`

\`\`\`python
import schedule
import time

def daily_report():
    print("Generating daily report...")

def check_email():
    print("Checking emails...")

# Set up schedules
schedule.every().day.at("09:00").do(daily_report)
schedule.every(30).minutes.do(check_email)
schedule.every().monday.at("08:00").do(daily_report)

while True:
    schedule.run_pending()
    time.sleep(60)
\`\`\`

### 2. APScheduler (Advanced Scheduling)

\`\`\`python
pip install apscheduler
\`\`\`

\`\`\`python
from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.triggers.cron import CronTrigger

scheduler = BlockingScheduler()

@scheduler.scheduled_job("interval", minutes=10)
def fetch_data():
    print("Fetching data...")

@scheduler.scheduled_job(CronTrigger(
    day_of_week="mon-fri", hour=9, minute=0
))
def morning_task():
    print("Running weekday morning task")

scheduler.start()
\`\`\`

### 3. Windows Task Scheduler

\`\`\`python
# Create a batch file (run_task.bat)
# @echo off
# cd /d D:\\projects
# python daily_task.py

# Register via PowerShell
# schtasks /create /tn "PythonDaily" /tr "D:\\run_task.bat" /sc daily /st 09:00
\`\`\`

### 4. Linux Cron Jobs

\`\`\`python
# Edit with: crontab -e
# Run daily at 9 AM
# 0 9 * * * /usr/bin/python3 /home/user/daily_task.py

# Cron format: min hour day month weekday
# 0 */2 * * * : every 2 hours
# 30 8 * * 1-5 : weekdays at 8:30
\`\`\`

- **schedule**: Simple and intuitive, great for small tasks
- **APScheduler**: Complex schedules, DB persistence, distributed support
- In production, combine with OS-level schedulers for reliability.`,
};

export default lesson;
