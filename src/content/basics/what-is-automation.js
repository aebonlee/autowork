const lesson = {
  titleKo: '업무자동화란 무엇인가',
  titleEn: 'What is Work Automation',
  contentKo: `# 업무자동화란 무엇인가

## 학습 목표
- 업무자동화의 정의와 개념을 이해한다
- 자동화가 비즈니스에 미치는 영향을 파악한다
- 자동화의 역사와 현재 트렌드를 학습한다
- 자동화 가능한 업무와 그렇지 않은 업무를 구분할 수 있다

## 핵심 내용

### 업무자동화의 정의
업무자동화(Work Automation)란 사람이 반복적으로 수행하던 업무 프로세스를 기술을 활용하여 자동으로 처리되도록 하는 것을 의미합니다. 단순한 스프레드시트 매크로부터 복잡한 AI 기반 의사결정 시스템까지 다양한 범위를 포함합니다.

### 자동화의 3가지 수준

| 수준 | 설명 | 예시 |
|------|------|------|
| **기본 자동화** | 단순 반복 작업의 자동 처리 | Excel 매크로, 이메일 필터 |
| **프로세스 자동화** | 여러 단계의 업무 흐름 자동화 | RPA, 워크플로우 도구 |
| **지능형 자동화** | AI/ML 기반 판단이 포함된 자동화 | 문서 분류, 챗봇 |

### 자동화 가능한 업무의 특징
1. **반복성**: 동일한 작업이 주기적으로 발생
2. **규칙 기반**: 명확한 규칙이나 로직으로 정의 가능
3. **구조화된 데이터**: 입력과 출력이 정형화되어 있음
4. **높은 볼륨**: 처리해야 할 건수가 많음
5. **낮은 예외율**: 예외 상황이 적고 예측 가능

### 자동화의 비즈니스 가치

\`\`\`
투자 대비 효과 (ROI) 계산 예시:

수동 처리 비용:
  - 직원 시간당 비용: 30,000원
  - 일일 반복 업무 시간: 3시간
  - 월간 비용: 30,000 × 3 × 22일 = 1,980,000원

자동화 후:
  - 도구 월 비용: 100,000원
  - 관리 시간: 월 2시간 = 60,000원
  - 월간 비용: 160,000원

월 절감액: 1,820,000원 (약 92% 절감)
\`\`\`

### 자동화의 역사
- **1950~70년대**: 제조업 산업 자동화 시작
- **1980~90년대**: PC 보급과 함께 사무 자동화 확산
- **2000년대**: 인터넷 기반 비즈니스 프로세스 자동화
- **2010년대**: RPA와 클라우드 기반 자동화 도구 등장
- **2020년대~**: AI/ML 기반 지능형 자동화 시대

## 실습 예제

다음은 간단한 업무자동화의 개념을 보여주는 Python 예제입니다:

\`\`\`python
# 수동 작업 vs 자동화 비교 예시
# 수동: 매일 아침 여러 폴더에서 파일을 모아 보고서 작성

import os
from datetime import datetime

def manual_daily_report():
    """수동으로 하면 30분 걸리는 작업"""
    # 1단계: 각 부서 폴더에서 파일 수집
    # 2단계: 데이터 취합
    # 3단계: 보고서 양식에 입력
    # 4단계: 이메일 발송
    pass

def automated_daily_report():
    """자동화하면 1분 내 완료"""
    departments = ['sales', 'marketing', 'finance']
    report_data = {}

    for dept in departments:
        folder = f'/data/{dept}/'
        files = [f for f in os.listdir(folder)
                 if f.endswith('.csv')]
        # 최신 파일의 데이터를 자동으로 수집
        report_data[dept] = process_latest_file(files)

    # 보고서 자동 생성
    generate_report(report_data)
    # 이메일 자동 발송
    send_email(report_data)
    print(f"보고서 생성 완료: {datetime.now()}")
\`\`\`

## 자동화 체크리스트

자신의 업무 중 자동화 가능한 항목을 찾아보세요:

- [ ] 매일/매주 반복하는 작업이 있는가?
- [ ] 복사-붙여넣기를 자주 하는가?
- [ ] 동일한 이메일을 여러 사람에게 보내는가?
- [ ] 여러 시스템에서 데이터를 수동으로 옮기는가?
- [ ] 정해진 양식의 보고서를 반복 작성하는가?

## 정리
업무자동화는 단순히 기술을 도입하는 것이 아니라, 업무 프로세스를 분석하고 개선하는 전략적 접근입니다. 반복적이고 규칙 기반의 업무부터 시작하여 점진적으로 자동화 범위를 확대해 나가는 것이 효과적입니다. 다음 강의에서는 왜 자동화가 필수인지 더 자세히 알아보겠습니다.
`,
  contentEn: `# What is Work Automation

## Learning Objectives
- Understand the definition and concepts of work automation
- Identify the business impact of automation
- Learn the history and current trends of automation
- Distinguish between automatable and non-automatable tasks

## Key Concepts

### Definition of Work Automation
Work Automation refers to the use of technology to perform business processes that were previously done manually and repetitively. It encompasses a wide range of solutions, from simple spreadsheet macros to complex AI-driven decision-making systems.

### Three Levels of Automation

| Level | Description | Examples |
|-------|-------------|----------|
| **Basic Automation** | Simple repetitive task handling | Excel macros, email filters |
| **Process Automation** | Multi-step workflow automation | RPA, workflow tools |
| **Intelligent Automation** | AI/ML-based decision automation | Document classification, chatbots |

### Characteristics of Automatable Tasks
1. **Repetitive**: The same task occurs periodically
2. **Rule-based**: Can be defined by clear rules or logic
3. **Structured data**: Inputs and outputs are well-defined
4. **High volume**: Large number of items to process
5. **Low exception rate**: Few and predictable exceptions

### Business Value of Automation

\`\`\`
ROI Calculation Example:

Manual Processing Cost:
  - Employee hourly cost: $25/hr
  - Daily repetitive work: 3 hours
  - Monthly cost: $25 × 3 × 22 days = $1,650

After Automation:
  - Tool monthly cost: $80
  - Management time: 2 hrs/month = $50
  - Monthly cost: $130

Monthly savings: $1,520 (approximately 92% reduction)
\`\`\`

### History of Automation
- **1950s-70s**: Industrial manufacturing automation begins
- **1980s-90s**: Office automation spreads with PC adoption
- **2000s**: Internet-based business process automation
- **2010s**: RPA and cloud-based automation tools emerge
- **2020s+**: AI/ML-powered intelligent automation era

## Practice Example

Here is a simple Python example demonstrating the concept of work automation:

\`\`\`python
# Manual work vs Automation comparison
# Manual: Collect files from multiple folders every morning for reporting

import os
from datetime import datetime

def manual_daily_report():
    """Takes 30 minutes when done manually"""
    # Step 1: Collect files from each department folder
    # Step 2: Aggregate data
    # Step 3: Enter into report template
    # Step 4: Send email
    pass

def automated_daily_report():
    """Completes in under 1 minute when automated"""
    departments = ['sales', 'marketing', 'finance']
    report_data = {}

    for dept in departments:
        folder = f'/data/{dept}/'
        files = [f for f in os.listdir(folder)
                 if f.endswith('.csv')]
        # Automatically collect data from the latest file
        report_data[dept] = process_latest_file(files)

    # Auto-generate report
    generate_report(report_data)
    # Auto-send email
    send_email(report_data)
    print(f"Report generated: {datetime.now()}")
\`\`\`

## Automation Checklist

Identify automatable tasks in your daily work:

- [ ] Do you have tasks you repeat daily/weekly?
- [ ] Do you frequently copy-paste data?
- [ ] Do you send the same email to multiple people?
- [ ] Do you manually transfer data between systems?
- [ ] Do you create reports in the same format repeatedly?

## Summary
Work automation is not just about adopting technology — it is a strategic approach to analyzing and improving business processes. Starting with repetitive, rule-based tasks and gradually expanding the scope of automation is the most effective approach. In the next lesson, we will explore in detail why automation is essential for modern businesses.
`,
};

export default lesson;
