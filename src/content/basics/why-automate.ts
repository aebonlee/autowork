const lesson = {
  titleKo: '왜 자동화해야 하는가',
  titleEn: 'Why Should You Automate',
  contentKo: `# 왜 자동화해야 하는가

## 학습 목표
- 업무자동화의 필요성과 시급성을 이해한다
- 자동화를 통해 얻을 수 있는 구체적 이점을 파악한다
- 자동화하지 않았을 때의 위험 요소를 인식한다
- 성공적인 자동화 사례를 분석한다

## 핵심 내용

### 자동화가 필수인 5가지 이유

#### 1. 시간 절약과 생산성 향상
직장인은 평균적으로 업무 시간의 **28%를 반복 작업**에 소비합니다. 주 40시간 기준 약 11시간이 단순 반복에 사라지는 셈입니다.

\`\`\`
주간 반복 업무 시간 분석:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
데이터 입력/정리     : ████████  4시간
이메일 관리          : ███████   3.5시간
보고서 작성          : ██████    2시간
파일 관리/정리       : ███       1.5시간
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
합계                 : 11시간/주
자동화 가능 비율     : 약 70~80%
\`\`\`

#### 2. 인적 오류 감소
수동 데이터 입력의 오류율은 평균 **1~5%** 입니다. 1만 건의 데이터를 처리한다면 100~500건의 오류가 발생할 수 있습니다. 자동화는 이 오류율을 **0.01% 이하**로 줄여줍니다.

#### 3. 비용 절감
자동화 도입 기업의 평균 비용 절감 효과:

| 항목 | 절감 비율 |
|------|-----------|
| 인건비 | 25~50% |
| 운영 비용 | 15~30% |
| 오류 수정 비용 | 60~80% |
| 처리 시간 | 40~70% |

#### 4. 직원 만족도 향상
반복적이고 지루한 업무에서 벗어나 더 창의적이고 가치 있는 일에 집중할 수 있습니다. 자동화를 도입한 기업의 직원 만족도는 평균 **33% 향상**됩니다.

#### 5. 경쟁 우위 확보
디지털 전환 시대에서 자동화는 선택이 아닌 **생존의 문제**입니다. 경쟁사보다 빠르게 대응하고, 고객에게 더 나은 서비스를 제공하려면 자동화가 필수입니다.

### 자동화하지 않으면 생기는 문제

\`\`\`python
# 자동화 미도입 시 리스크 시뮬레이션
def calculate_manual_risk(daily_tasks, error_rate=0.03):
    """수동 처리 시 연간 리스크 계산"""
    annual_tasks = daily_tasks * 250  # 연간 근무일

    expected_errors = annual_tasks * error_rate
    error_fix_cost = expected_errors * 15000  # 건당 수정 비용

    overtime_hours = (daily_tasks * 5 / 60) * 250  # 건당 5분 추가
    overtime_cost = overtime_hours * 25000  # 시간당 초과근무 비용

    total_annual_risk = error_fix_cost + overtime_cost

    return {
        'annual_tasks': annual_tasks,
        'expected_errors': int(expected_errors),
        'error_fix_cost': f"{error_fix_cost:,.0f}원",
        'overtime_hours': f"{overtime_hours:.0f}시간",
        'total_risk': f"{total_annual_risk:,.0f}원"
    }

# 하루 100건 처리 기준
risk = calculate_manual_risk(100)
print(f"연간 예상 오류: {risk['expected_errors']}건")
print(f"총 연간 리스크: {risk['total_risk']}")
\`\`\`

### 성공 사례 분석

**사례: 중소기업 A사의 청구서 처리 자동화**
- **도입 전**: 직원 3명이 하루 4시간씩 수동으로 청구서 입력
- **도입 후**: OCR + RPA로 자동 처리, 검수만 30분
- **결과**: 처리 시간 87% 감소, 오류율 95% 감소, 연간 4,800만원 절감

## 실습 예제

자신의 업무를 분석하여 자동화 우선순위를 정해보세요:

\`\`\`python
# 자동화 우선순위 계산기
def calculate_priority(task_name, frequency, time_per_task,
                       difficulty, error_impact):
    """
    자동화 우선순위를 계산합니다.

    Parameters:
    - frequency: 주당 반복 횟수
    - time_per_task: 건당 소요 시간(분)
    - difficulty: 자동화 난이도 (1-10, 낮을수록 쉬움)
    - error_impact: 오류 발생 시 영향도 (1-10)
    """
    time_saved = frequency * time_per_task * 52  # 연간 절약 시간(분)
    priority_score = (time_saved * error_impact) / difficulty

    return {
        'task': task_name,
        'annual_hours_saved': round(time_saved / 60, 1),
        'priority_score': round(priority_score, 0),
        'recommendation': '즉시 자동화' if priority_score > 5000
                          else '검토 후 자동화' if priority_score > 1000
                          else '선택적 자동화'
    }

# 예시
tasks = [
    calculate_priority("일일 보고서 작성", 5, 45, 3, 7),
    calculate_priority("고객 데이터 입력", 20, 10, 2, 9),
    calculate_priority("이메일 분류", 50, 2, 4, 3),
]

for task in sorted(tasks, key=lambda x: x['priority_score'], reverse=True):
    print(f"{task['task']}: {task['recommendation']} "
          f"(점수: {task['priority_score']})")
\`\`\`

## 정리
자동화는 단순한 효율화 도구가 아니라 비즈니스 경쟁력의 핵심입니다. 시간 절약, 오류 감소, 비용 절감은 물론 직원의 직무 만족도까지 높여줍니다. 지금 바로 자신의 업무를 분석하고 자동화할 수 있는 부분을 찾아보세요. 다음 강의에서는 자동화의 다양한 유형과 분류에 대해 알아보겠습니다.
`,
  contentEn: `# Why Should You Automate

## Learning Objectives
- Understand the necessity and urgency of work automation
- Identify specific benefits gained through automation
- Recognize the risks of not automating
- Analyze successful automation case studies

## Key Concepts

### Five Reasons Why Automation is Essential

#### 1. Time Savings and Productivity Gains
On average, office workers spend **28% of their work time** on repetitive tasks. Based on a 40-hour work week, approximately 11 hours are consumed by simple repetition.

\`\`\`
Weekly Repetitive Task Time Analysis:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Data entry/cleanup     : ████████  4 hours
Email management       : ███████   3.5 hours
Report writing         : ██████    2 hours
File management        : ███       1.5 hours
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total                  : 11 hours/week
Automation potential   : ~70-80%
\`\`\`

#### 2. Reducing Human Error
Manual data entry has an average error rate of **1-5%**. When processing 10,000 records, that means 100-500 errors. Automation reduces this to **below 0.01%**.

#### 3. Cost Reduction
Average cost savings for companies implementing automation:

| Category | Savings |
|----------|---------|
| Labor costs | 25-50% |
| Operational costs | 15-30% |
| Error correction costs | 60-80% |
| Processing time | 40-70% |

#### 4. Improved Employee Satisfaction
Freeing employees from repetitive, mundane tasks allows them to focus on more creative and valuable work. Employee satisfaction increases by an average of **33%** in companies that implement automation.

#### 5. Competitive Advantage
In the era of digital transformation, automation is not optional — it is a **matter of survival**. To respond faster than competitors and provide better customer service, automation is essential.

### Risks of Not Automating

\`\`\`python
# Risk simulation without automation
def calculate_manual_risk(daily_tasks, error_rate=0.03):
    """Calculate annual risk of manual processing"""
    annual_tasks = daily_tasks * 250  # working days per year

    expected_errors = annual_tasks * error_rate
    error_fix_cost = expected_errors * 12  # $12 per error fix

    overtime_hours = (daily_tasks * 5 / 60) * 250  # 5 min extra per task
    overtime_cost = overtime_hours * 20  # $20/hr overtime

    total_annual_risk = error_fix_cost + overtime_cost

    return {
        'annual_tasks': annual_tasks,
        'expected_errors': int(expected_errors),
        'error_fix_cost': f"\${error_fix_cost:,.0f}",
        'overtime_hours': f"{overtime_hours:.0f} hours",
        'total_risk': f"\${total_annual_risk:,.0f}"
    }

# Based on 100 tasks per day
risk = calculate_manual_risk(100)
print(f"Expected annual errors: {risk['expected_errors']}")
print(f"Total annual risk: {risk['total_risk']}")
\`\`\`

### Success Case Study

**Case: SMB Company A - Invoice Processing Automation**
- **Before**: 3 employees spending 4 hours daily on manual invoice entry
- **After**: OCR + RPA auto-processing, only 30 minutes for review
- **Result**: 87% reduction in processing time, 95% reduction in errors, $40,000 annual savings

## Practice Example

Analyze your own tasks and determine automation priorities:

\`\`\`python
# Automation Priority Calculator
def calculate_priority(task_name, frequency, time_per_task,
                       difficulty, error_impact):
    """
    Calculate automation priority score.

    Parameters:
    - frequency: repetitions per week
    - time_per_task: minutes per task
    - difficulty: automation difficulty (1-10, lower is easier)
    - error_impact: impact when errors occur (1-10)
    """
    time_saved = frequency * time_per_task * 52  # annual minutes saved
    priority_score = (time_saved * error_impact) / difficulty

    return {
        'task': task_name,
        'annual_hours_saved': round(time_saved / 60, 1),
        'priority_score': round(priority_score, 0),
        'recommendation': 'Automate immediately' if priority_score > 5000
                          else 'Review then automate' if priority_score > 1000
                          else 'Optional automation'
    }

# Examples
tasks = [
    calculate_priority("Daily report creation", 5, 45, 3, 7),
    calculate_priority("Customer data entry", 20, 10, 2, 9),
    calculate_priority("Email categorization", 50, 2, 4, 3),
]

for task in sorted(tasks, key=lambda x: x['priority_score'], reverse=True):
    print(f"{task['task']}: {task['recommendation']} "
          f"(Score: {task['priority_score']})")
\`\`\`

## Summary
Automation is not just an efficiency tool — it is a cornerstone of business competitiveness. Beyond time savings, error reduction, and cost cutting, it also improves employee job satisfaction. Start analyzing your work today and identify areas ripe for automation. In the next lesson, we will explore the various types and classifications of automation.
`,
};

export default lesson;
