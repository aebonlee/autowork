const lesson = {
  titleKo: 'HR 업무 자동화',
  titleEn: 'HR Task Automation',
  contentKo: `# HR 업무 자동화

## 개요
인사(HR) 업무는 반복적인 프로세스가 많아 자동화 효과가 큽니다. 온보딩, 휴가 관리, 급여 연동, 챗봇까지 HR 업무를 체계적으로 자동화하는 방법을 학습합니다.

## 주요 자동화 영역

### 온보딩 워크플로우
\`\`\`python
def onboard_new_employee(employee_data):
    """신규 입사자 온보딩 자동화"""
    # 1. 계정 생성
    create_email_account(employee_data["email"])
    create_slack_account(employee_data["name"])

    # 2. 권한 설정
    assign_role(employee_data["department"],
                employee_data["position"])

    # 3. 장비 요청
    request_equipment(employee_data["equipment_list"])

    # 4. 안내 메일 발송
    send_welcome_email(employee_data["email"], {
        "start_date": employee_data["start_date"],
        "mentor": employee_data["mentor"],
        "checklist_url": generate_checklist(employee_data)
    })

    # 5. 교육 일정 등록
    schedule_training(employee_data["department"])
\`\`\`

### 휴가 관리 자동화
- 휴가 신청 → 잔여일수 확인 → 자동 승인/상사 알림
- 팀 캘린더 자동 업데이트 및 대체 근무자 지정
- 월별/분기별 휴가 사용 현황 리포트 자동 생성

### 급여 연동
- 근태 데이터(출퇴근, 초과근무)를 급여 시스템에 자동 전송
- 세금, 4대 보험 자동 계산 및 명세서 생성
- 급여 이체 파일 자동 생성 및 은행 시스템 연동

### HR 챗봇
- 자주 묻는 질문(휴가 잔여일, 복리후생, 규정) 자동 응답
- 휴가 신청, 증명서 발급 등 간단한 업무를 챗봇으로 처리
- Slack/Teams 연동으로 직원이 편리하게 접근

## 구현 시 고려사항
- 개인정보 보호법(PIPA) 준수 필수
- 민감 데이터 암호화 및 접근 권한 관리
- 예외 상황(특별 휴가, 경조사)에 대한 수동 처리 경로 확보`,
  contentEn: `# HR Task Automation

## Overview
HR tasks involve many repetitive processes, making them ideal for automation. Learn to systematically automate onboarding, leave management, payroll integration, and chatbots.

## Key Automation Areas

### Onboarding Workflow
\`\`\`python
def onboard_new_employee(employee_data):
    """Automate new employee onboarding"""
    # 1. Create accounts
    create_email_account(employee_data["email"])
    create_slack_account(employee_data["name"])

    # 2. Set permissions
    assign_role(employee_data["department"],
                employee_data["position"])

    # 3. Request equipment
    request_equipment(employee_data["equipment_list"])

    # 4. Send welcome email
    send_welcome_email(employee_data["email"], {
        "start_date": employee_data["start_date"],
        "mentor": employee_data["mentor"],
        "checklist_url": generate_checklist(employee_data)
    })

    # 5. Schedule training
    schedule_training(employee_data["department"])
\`\`\`

### Leave Management Automation
- Leave request -> Check balance -> Auto-approve / Notify manager
- Auto-update team calendar and assign backup personnel
- Auto-generate monthly/quarterly leave usage reports

### Payroll Integration
- Auto-send attendance data (clock in/out, overtime) to payroll
- Auto-calculate taxes and insurance, generate pay stubs
- Auto-create payroll transfer files for bank systems

### HR Chatbot
- Auto-respond to FAQs (leave balance, benefits, policies)
- Handle simple tasks via chatbot (leave requests, certificates)
- Slack/Teams integration for convenient employee access

## Implementation Considerations
- Comply with data privacy regulations (GDPR/PIPA)
- Encrypt sensitive data and manage access permissions
- Maintain manual processing paths for exceptions`,
};
export default lesson;
