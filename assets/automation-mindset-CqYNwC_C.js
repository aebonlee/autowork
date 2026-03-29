const t={titleKo:"자동화 마인드셋",titleEn:"The Automation Mindset",contentKo:`# 자동화 마인드셋

## 학습 목표
- 자동화를 성공시키는 사고방식을 이해한다
- 자동화 저항을 극복하는 방법을 학습한다
- 지속적 개선 문화를 구축하는 방법을 파악한다
- 자동화 사고를 일상 업무에 적용한다

## 핵심 내용

### 자동화 마인드셋이란?
자동화 마인드셋은 모든 반복 업무를 바라볼 때 "이것을 자동화할 수 있을까?"라는 질문을 습관적으로 하는 사고방식입니다. 이는 단순한 기술 도입이 아니라 **업무를 바라보는 관점의 전환**입니다.

### 핵심 원칙 5가지

#### 1. DRY 원칙 (Don't Repeat Yourself)
같은 작업을 두 번 이상 수동으로 했다면, 세 번째부터는 자동화하세요.

\`\`\`python
# DRY 원칙 적용 예시

# BAD: 매번 수동으로 같은 작업 반복
def process_january_report():
    data = load_data('january.csv')
    clean = clean_data(data)
    summary = create_summary(clean)
    save_report(summary, 'january_report.pdf')

def process_february_report():
    data = load_data('february.csv')
    clean = clean_data(data)
    summary = create_summary(clean)
    save_report(summary, 'february_report.pdf')

# GOOD: 한 번 자동화하면 어떤 달이든 처리 가능
def process_monthly_report(month):
    """범용 월간 보고서 처리 함수"""
    data = load_data(f'{month}.csv')
    clean = clean_data(data)
    summary = create_summary(clean)
    save_report(summary, f'{month}_report.pdf')
    return summary

# 모든 달에 대해 자동 실행
months = ['january', 'february', 'march', ...]
for month in months:
    process_monthly_report(month)
\`\`\`

#### 2. 80/20 법칙
전체 업무의 20%를 자동화하면 80%의 시간 절약 효과를 얻을 수 있습니다. 가장 빈도가 높고 시간이 많이 걸리는 업무부터 자동화하세요.

#### 3. 점진적 개선 (Kaizen)
처음부터 완벽한 자동화를 추구하지 마세요. 작게 시작하여 점진적으로 개선합니다.

\`\`\`
자동화 성장 로드맵:

Week 1-2:  [█░░░░░░░░░] 10% - 단순 매크로 기록
Week 3-4:  [███░░░░░░░] 30% - 스크립트로 확장
Week 5-8:  [█████░░░░░] 50% - 예외 처리 추가
Week 9-12: [███████░░░] 70% - 스케줄링 적용
Week 13+:  [█████████░] 90% - 모니터링 및 최적화
\`\`\`

#### 4. 실패를 두려워하지 않기
자동화 과정에서 오류와 실패는 자연스러운 과정입니다. 중요한 것은 실패로부터 배우고 개선하는 것입니다.

\`\`\`python
# 실패에서 배우기: 오류 로깅과 개선
import logging
from datetime import datetime

logging.basicConfig(
    filename='automation_log.txt',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def safe_automate(task_func, *args, **kwargs):
    """안전한 자동화 실행 래퍼"""
    try:
        result = task_func(*args, **kwargs)
        logging.info(f"성공: {task_func.__name__}")
        return result
    except Exception as e:
        logging.error(f"실패: {task_func.__name__} - {str(e)}")
        # 실패 시 수동 처리 알림
        notify_manual_fallback(task_func.__name__, str(e))
        return None

def notify_manual_fallback(task_name, error_msg):
    """자동화 실패 시 담당자에게 알림"""
    print(f"[알림] '{task_name}' 자동화 실패. 수동 처리 필요.")
    print(f"  오류: {error_msg}")
    print(f"  시간: {datetime.now()}")
\`\`\`

#### 5. 문서화 습관
자동화 과정과 결과를 반드시 문서화하세요. 이는 개선의 기반이 됩니다.

### 자동화 저항 극복하기

자동화를 도입할 때 흔히 만나는 저항과 대응 방법:

| 저항 유형 | 흔한 말 | 대응 방법 |
|----------|---------|-----------|
| 두려움 | "내 일자리가 없어지는 거 아닌가?" | 자동화는 업무 대체가 아닌 업무 지원 |
| 관성 | "지금까지 이렇게 해왔는데..." | 작은 성공 사례로 효과 시연 |
| 불신 | "기계는 실수할 수 있다" | 검증 단계를 포함한 안전장치 설명 |
| 시간 부족 | "자동화할 시간이 없다" | 단기 투자로 장기 시간 절약 증명 |

### 일상에서 자동화 사고 연습

\`\`\`python
# 자동화 기회 발견 일지
automation_diary = []

def log_automation_opportunity(task, time_spent, frequency, idea):
    """자동화 기회를 발견할 때마다 기록합니다"""
    entry = {
        'date': datetime.now().strftime('%Y-%m-%d'),
        'task': task,
        'time_spent_minutes': time_spent,
        'frequency': frequency,
        'automation_idea': idea,
        'potential_savings': time_spent * frequency * 52  # 연간 절약(분)
    }
    automation_diary.append(entry)
    hours_saved = entry['potential_savings'] / 60
    print(f"발견! '{task}' → 연간 {hours_saved:.1f}시간 절약 가능")

# 예시
log_automation_opportunity(
    task='거래처별 청구서 확인',
    time_spent=20,
    frequency=5,  # 주 5회
    idea='Python으로 이메일 첨부파일 자동 분류'
)
\`\`\`

## 실습 예제

자신의 주간 업무를 분석하는 자동화 마인드셋 워크시트를 작성해 봅시다:

\`\`\`python
def weekly_automation_review(tasks):
    """주간 업무를 분석하고 자동화 기회를 찾습니다"""
    total_manual_hours = 0
    automatable_hours = 0

    print("=" * 60)
    print("주간 업무 자동화 기회 분석")
    print("=" * 60)

    for task in tasks:
        total_manual_hours += task['hours']
        if task['automatable']:
            automatable_hours += task['hours'] * task['automation_ratio']
            print(f"✓ {task['name']}")
            print(f"  현재: 주 {task['hours']}시간")
            print(f"  절약: {task['hours'] * task['automation_ratio']:.1f}시간")
            print(f"  방법: {task['method']}")
            print()

    print(f"주간 총 업무: {total_manual_hours}시간")
    print(f"자동화 가능: {automatable_hours:.1f}시간")
    print(f"절약 비율: {automatable_hours/total_manual_hours*100:.0f}%")

tasks = [
    {'name': '이메일 정리', 'hours': 3, 'automatable': True,
     'automation_ratio': 0.7, 'method': '이메일 필터 + 자동 분류'},
    {'name': '데이터 입력', 'hours': 5, 'automatable': True,
     'automation_ratio': 0.9, 'method': 'Python 스크립트'},
    {'name': '회의 참석', 'hours': 8, 'automatable': False,
     'automation_ratio': 0, 'method': '-'},
    {'name': '보고서 작성', 'hours': 4, 'automatable': True,
     'automation_ratio': 0.6, 'method': '템플릿 + 자동 데이터 채우기'},
]

weekly_automation_review(tasks)
\`\`\`

## 정리
자동화 마인드셋은 기술 능력이 아니라 **사고의 습관**입니다. 매일 수행하는 업무를 "자동화할 수 있을까?"라는 렌즈로 바라보는 연습을 하세요. DRY 원칙을 기억하고, 작게 시작하며, 실패를 두려워하지 마세요. 이러한 마인드셋이 자리잡으면 업무 효율은 극적으로 향상될 것입니다.
`,contentEn:`# The Automation Mindset

## Learning Objectives
- Understand the thinking patterns that drive successful automation
- Learn how to overcome resistance to automation
- Build a culture of continuous improvement
- Apply automation thinking to daily work

## Key Concepts

### What is the Automation Mindset?
The automation mindset is a habitual way of thinking that asks "Can this be automated?" whenever you encounter repetitive work. It is not just about adopting technology — it is a **fundamental shift in perspective** on how you view work.

### Five Core Principles

#### 1. DRY Principle (Don't Repeat Yourself)
If you have done the same task manually more than twice, automate it from the third time onward.

\`\`\`python
# DRY Principle Example

# BAD: Manually repeating the same task each time
def process_january_report():
    data = load_data('january.csv')
    clean = clean_data(data)
    summary = create_summary(clean)
    save_report(summary, 'january_report.pdf')

def process_february_report():
    data = load_data('february.csv')
    clean = clean_data(data)
    summary = create_summary(clean)
    save_report(summary, 'february_report.pdf')

# GOOD: Automate once, handle any month
def process_monthly_report(month):
    """Universal monthly report processing"""
    data = load_data(f'{month}.csv')
    clean = clean_data(data)
    summary = create_summary(clean)
    save_report(summary, f'{month}_report.pdf')
    return summary

# Auto-run for all months
months = ['january', 'february', 'march', ...]
for month in months:
    process_monthly_report(month)
\`\`\`

#### 2. The 80/20 Rule
Automating 20% of your tasks can yield 80% of time savings. Start with the most frequent and time-consuming tasks.

#### 3. Incremental Improvement (Kaizen)
Don't aim for perfect automation from the start. Begin small and improve incrementally.

\`\`\`
Automation Growth Roadmap:

Week 1-2:  [█░░░░░░░░░] 10% - Record simple macros
Week 3-4:  [███░░░░░░░] 30% - Expand to scripts
Week 5-8:  [█████░░░░░] 50% - Add error handling
Week 9-12: [███████░░░] 70% - Apply scheduling
Week 13+:  [█████████░] 90% - Monitor and optimize
\`\`\`

#### 4. Don't Fear Failure
Errors and failures are a natural part of the automation process. What matters is learning from failures and improving.

\`\`\`python
# Learning from failure: Error logging and improvement
import logging
from datetime import datetime

logging.basicConfig(
    filename='automation_log.txt',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def safe_automate(task_func, *args, **kwargs):
    """Safe automation execution wrapper"""
    try:
        result = task_func(*args, **kwargs)
        logging.info(f"Success: {task_func.__name__}")
        return result
    except Exception as e:
        logging.error(f"Failed: {task_func.__name__} - {str(e)}")
        # Notify for manual fallback on failure
        notify_manual_fallback(task_func.__name__, str(e))
        return None

def notify_manual_fallback(task_name, error_msg):
    """Notify responsible person when automation fails"""
    print(f"[Alert] '{task_name}' automation failed. Manual action needed.")
    print(f"  Error: {error_msg}")
    print(f"  Time: {datetime.now()}")
\`\`\`

#### 5. Document Everything
Always document your automation processes and results. This forms the foundation for improvement.

### Overcoming Resistance to Automation

Common resistance encountered when introducing automation and how to address it:

| Resistance Type | Common Phrase | Response |
|----------------|---------------|----------|
| Fear | "Will this replace my job?" | Automation supports work, not replaces workers |
| Inertia | "We've always done it this way..." | Demonstrate with small success stories |
| Distrust | "Machines can make mistakes" | Explain validation steps and safeguards |
| Time pressure | "No time to automate" | Prove short-term investment yields long-term savings |

### Practicing Automation Thinking Daily

\`\`\`python
# Automation Opportunity Journal
automation_diary = []

def log_automation_opportunity(task, time_spent, frequency, idea):
    """Log each automation opportunity you discover"""
    entry = {
        'date': datetime.now().strftime('%Y-%m-%d'),
        'task': task,
        'time_spent_minutes': time_spent,
        'frequency': frequency,
        'automation_idea': idea,
        'potential_savings': time_spent * frequency * 52  # annual mins saved
    }
    automation_diary.append(entry)
    hours_saved = entry['potential_savings'] / 60
    print(f"Found! '{task}' -> {hours_saved:.1f} hours/year savings potential")

# Example
log_automation_opportunity(
    task='Checking invoices by vendor',
    time_spent=20,
    frequency=5,  # 5 times per week
    idea='Auto-classify email attachments with Python'
)
\`\`\`

## Practice Example

Create an automation mindset worksheet analyzing your weekly tasks:

\`\`\`python
def weekly_automation_review(tasks):
    """Analyze weekly tasks and find automation opportunities"""
    total_manual_hours = 0
    automatable_hours = 0

    print("=" * 60)
    print("Weekly Task Automation Opportunity Analysis")
    print("=" * 60)

    for task in tasks:
        total_manual_hours += task['hours']
        if task['automatable']:
            automatable_hours += task['hours'] * task['automation_ratio']
            print(f">> {task['name']}")
            print(f"   Current: {task['hours']} hrs/week")
            print(f"   Savings: {task['hours'] * task['automation_ratio']:.1f} hrs")
            print(f"   Method: {task['method']}")
            print()

    print(f"Total weekly work: {total_manual_hours} hours")
    print(f"Automatable: {automatable_hours:.1f} hours")
    print(f"Savings ratio: {automatable_hours/total_manual_hours*100:.0f}%")

tasks = [
    {'name': 'Email management', 'hours': 3, 'automatable': True,
     'automation_ratio': 0.7, 'method': 'Email filters + auto-sort'},
    {'name': 'Data entry', 'hours': 5, 'automatable': True,
     'automation_ratio': 0.9, 'method': 'Python script'},
    {'name': 'Meeting attendance', 'hours': 8, 'automatable': False,
     'automation_ratio': 0, 'method': '-'},
    {'name': 'Report writing', 'hours': 4, 'automatable': True,
     'automation_ratio': 0.6, 'method': 'Templates + auto data fill'},
]

weekly_automation_review(tasks)
\`\`\`

## Summary
The automation mindset is not a technical skill — it is a **thinking habit**. Practice viewing every daily task through the lens of "Can this be automated?" Remember the DRY principle, start small, and don't fear failure. Once this mindset takes hold, your work efficiency will improve dramatically.
`};export{t as default};
