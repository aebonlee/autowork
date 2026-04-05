const lesson = {
  titleKo: '자동화 시작하기',
  titleEn: 'Getting Started with Automation',
  contentKo: `# 자동화 시작하기

## 학습 목표
- 자동화 프로젝트를 시작하는 단계별 방법을 익힌다
- 자동화 대상 업무를 식별하고 우선순위를 정한다
- 적절한 도구를 선택하는 기준을 이해한다
- 첫 번째 자동화 프로젝트를 계획한다

## 핵심 내용

### 자동화 시작 5단계 프로세스

#### 1단계: 업무 감사 (Task Audit)
현재 수행하고 있는 모든 업무를 나열하고 분석합니다.

\`\`\`python
# 업무 감사 템플릿
task_audit = {
    'task_name': '월간 매출 보고서 작성',
    'frequency': 'monthly',       # daily/weekly/monthly
    'time_spent': 240,            # 분 단위
    'steps': [
        '각 부서별 매출 데이터 수집',
        'Excel에 데이터 통합',
        '피벗 테이블 생성',
        '차트 생성',
        '보고서 양식에 붙여넣기',
        '이메일로 발송'
    ],
    'pain_points': [
        '데이터 수집에 시간이 많이 걸림',
        '수동 입력 시 오류 발생',
        '양식이 매번 미세하게 다름'
    ],
    'tools_used': ['Excel', 'Outlook', 'PowerPoint'],
    'automation_potential': 'high'  # low/medium/high
}
\`\`\`

#### 2단계: 우선순위 선정
**효과/노력 매트릭스**를 활용하여 우선순위를 정합니다.

\`\`\`
높은 효과 │  Quick Wins!  │  전략적 프로젝트
         │  ★ 먼저 수행  │  ★ 계획 후 수행
─────────┼──────────────┼──────────────
낮은 효과 │  선택적 수행   │  보류/재검토
         │              │
         └──────────────┴──────────────
          적은 노력        많은 노력
\`\`\`

#### 3단계: 도구 선택

| 상황 | 추천 도구 | 학습 시간 |
|------|-----------|-----------|
| Excel 반복 작업 | VBA 매크로 | 1~2주 |
| 파일/데이터 처리 | Python | 2~4주 |
| 앱 간 연동 | Zapier/Make | 1~3일 |
| 화면 조작 자동화 | UiPath/Power Automate | 1~2주 |
| 복잡한 프로세스 | Python + API | 4~8주 |

#### 4단계: 프로토타입 개발
작은 범위에서 먼저 테스트합니다.

\`\`\`python
# 첫 번째 자동화 프로젝트 예시: 파일 정리 자동화
import os
import shutil
from pathlib import Path
from datetime import datetime

def organize_downloads(download_folder):
    """다운로드 폴더를 파일 유형별로 자동 정리합니다"""

    # 파일 유형별 폴더 매핑
    file_categories = {
        'documents': ['.pdf', '.docx', '.xlsx', '.pptx', '.hwp', '.txt'],
        'images': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'],
        'videos': ['.mp4', '.avi', '.mkv', '.mov'],
        'archives': ['.zip', '.rar', '.7z', '.tar', '.gz'],
        'data': ['.csv', '.json', '.xml', '.sql'],
    }

    download_path = Path(download_folder)
    moved_count = 0

    for file in download_path.iterdir():
        if file.is_file():
            ext = file.suffix.lower()
            category = 'others'

            for cat, extensions in file_categories.items():
                if ext in extensions:
                    category = cat
                    break

            # 대상 폴더 생성
            target_dir = download_path / category
            target_dir.mkdir(exist_ok=True)

            # 파일 이동
            target_path = target_dir / file.name
            if not target_path.exists():
                shutil.move(str(file), str(target_path))
                moved_count += 1
                print(f"  {file.name} → {category}/")

    print(f"\\n총 {moved_count}개 파일 정리 완료!")

# 실행
organize_downloads('C:/Users/사용자/Downloads')
\`\`\`

#### 5단계: 반복 개선
자동화는 한 번에 완성되지 않습니다. 지속적으로 개선합니다.

1. **측정**: 자동화 전후 시간/비용을 비교
2. **피드백**: 사용자 피드백 수집
3. **개선**: 발견된 문제점 수정
4. **확장**: 성공한 자동화를 다른 업무에 적용

### 첫 자동화 프로젝트 체크리스트

- [ ] 자동화할 업무를 명확히 정의했는가?
- [ ] 현재 프로세스를 단계별로 문서화했는가?
- [ ] 예외 상황을 파악했는가?
- [ ] 적절한 도구를 선택했는가?
- [ ] 작은 범위로 테스트할 계획이 있는가?
- [ ] 성공 기준(KPI)을 정했는가?

## 실습 예제

간단한 이메일 알림 자동화를 만들어 봅시다:

\`\`\`python
import smtplib
from email.mime.text import MIMEText
from datetime import datetime

def send_daily_reminder(tasks):
    """매일 할 일 목록을 이메일로 발송합니다"""
    today = datetime.now().strftime('%Y-%m-%d')

    # 할 일 목록을 HTML로 변환
    task_list = ''.join(
        f'<li>{task}</li>' for task in tasks
    )

    html = f"""
    <h2>오늘의 할 일 ({today})</h2>
    <ul>{task_list}</ul>
    <p>좋은 하루 보내세요!</p>
    """

    msg = MIMEText(html, 'html')
    msg['Subject'] = f'[할 일 알림] {today}'
    msg['From'] = 'automation@company.com'
    msg['To'] = 'user@company.com'

    # 실제 사용 시 SMTP 서버 설정 필요
    print(f"메일 발송 준비 완료: {len(tasks)}개 할 일")
    return msg

# 사용 예시
my_tasks = [
    '매출 보고서 검토',
    '팀 미팅 준비',
    '고객 문의 응답',
    '프로젝트 일정 업데이트'
]
send_daily_reminder(my_tasks)
\`\`\`

## 정리
자동화를 시작하는 것은 어렵지 않습니다. 핵심은 작게 시작하여 점차 확대하는 것입니다. 업무 감사를 통해 자동화 대상을 찾고, 우선순위를 정하고, 적합한 도구를 선택하여 프로토타입을 만들어 보세요. 첫 번째 성공 경험이 더 큰 자동화로 이어지는 원동력이 됩니다.
`,
  contentEn: `# Getting Started with Automation

## Learning Objectives
- Learn the step-by-step process for starting an automation project
- Identify target tasks and set priorities
- Understand criteria for selecting appropriate tools
- Plan your first automation project

## Key Concepts

### Five-Step Process to Start Automation

#### Step 1: Task Audit
List and analyze all tasks you currently perform.

\`\`\`python
# Task Audit Template
task_audit = {
    'task_name': 'Monthly Sales Report',
    'frequency': 'monthly',       # daily/weekly/monthly
    'time_spent': 240,            # in minutes
    'steps': [
        'Collect sales data from each department',
        'Consolidate data in Excel',
        'Create pivot tables',
        'Generate charts',
        'Paste into report template',
        'Send via email'
    ],
    'pain_points': [
        'Data collection takes too long',
        'Manual entry causes errors',
        'Format varies slightly each time'
    ],
    'tools_used': ['Excel', 'Outlook', 'PowerPoint'],
    'automation_potential': 'high'  # low/medium/high
}
\`\`\`

#### Step 2: Priority Selection
Use the **Impact/Effort Matrix** to set priorities.

\`\`\`
High Impact │  Quick Wins!    │  Strategic Projects
           │  ★ Do first     │  ★ Plan then execute
───────────┼─────────────────┼─────────────────
Low Impact  │  Optional       │  Hold/Reconsider
           │                 │
           └─────────────────┴─────────────────
            Low Effort         High Effort
\`\`\`

#### Step 3: Tool Selection

| Scenario | Recommended Tool | Learning Time |
|----------|-----------------|---------------|
| Excel repetitive tasks | VBA Macros | 1-2 weeks |
| File/data processing | Python | 2-4 weeks |
| App integration | Zapier/Make | 1-3 days |
| UI automation | UiPath/Power Automate | 1-2 weeks |
| Complex processes | Python + API | 4-8 weeks |

#### Step 4: Prototype Development
Test with a small scope first.

\`\`\`python
# First Automation Project: File Organization
import os
import shutil
from pathlib import Path
from datetime import datetime

def organize_downloads(download_folder):
    """Automatically organize download folder by file type"""

    # File type to folder mapping
    file_categories = {
        'documents': ['.pdf', '.docx', '.xlsx', '.pptx', '.txt'],
        'images': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'],
        'videos': ['.mp4', '.avi', '.mkv', '.mov'],
        'archives': ['.zip', '.rar', '.7z', '.tar', '.gz'],
        'data': ['.csv', '.json', '.xml', '.sql'],
    }

    download_path = Path(download_folder)
    moved_count = 0

    for file in download_path.iterdir():
        if file.is_file():
            ext = file.suffix.lower()
            category = 'others'

            for cat, extensions in file_categories.items():
                if ext in extensions:
                    category = cat
                    break

            # Create target folder
            target_dir = download_path / category
            target_dir.mkdir(exist_ok=True)

            # Move file
            target_path = target_dir / file.name
            if not target_path.exists():
                shutil.move(str(file), str(target_path))
                moved_count += 1
                print(f"  {file.name} -> {category}/")

    print(f"\\nOrganized {moved_count} files!")

# Execute
organize_downloads('/Users/username/Downloads')
\`\`\`

#### Step 5: Iterative Improvement
Automation is never finished in one pass. Continuously improve.

1. **Measure**: Compare time/cost before and after automation
2. **Feedback**: Collect user feedback
3. **Improve**: Fix discovered issues
4. **Expand**: Apply successful automation to other tasks

### First Automation Project Checklist

- [ ] Clearly defined the task to automate?
- [ ] Documented the current process step by step?
- [ ] Identified edge cases and exceptions?
- [ ] Selected appropriate tools?
- [ ] Have a plan to test with small scope?
- [ ] Defined success criteria (KPIs)?

## Practice Example

Let's build a simple email notification automation:

\`\`\`python
import smtplib
from email.mime.text import MIMEText
from datetime import datetime

def send_daily_reminder(tasks):
    """Send daily task list via email"""
    today = datetime.now().strftime('%Y-%m-%d')

    # Convert task list to HTML
    task_list = ''.join(
        f'<li>{task}</li>' for task in tasks
    )

    html = f"""
    <h2>Today's Tasks ({today})</h2>
    <ul>{task_list}</ul>
    <p>Have a great day!</p>
    """

    msg = MIMEText(html, 'html')
    msg['Subject'] = f'[Task Reminder] {today}'
    msg['From'] = 'automation@company.com'
    msg['To'] = 'user@company.com'

    # SMTP server configuration needed for production
    print(f"Email ready: {len(tasks)} tasks")
    return msg

# Usage example
my_tasks = [
    'Review sales report',
    'Prepare team meeting',
    'Respond to customer inquiries',
    'Update project schedule'
]
send_daily_reminder(my_tasks)
\`\`\`

## Summary
Starting automation is not difficult. The key is to start small and gradually expand. Find automation targets through task audits, set priorities, choose the right tools, and build a prototype. Your first success becomes the driving force for bigger automation initiatives.
`,
};

export default lesson;
