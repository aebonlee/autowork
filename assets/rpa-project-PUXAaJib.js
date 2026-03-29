const e={titleKo:"RPA 프로젝트 설계",titleEn:"RPA Project Design",contentKo:`## RPA 프로젝트 수명주기

RPA 프로젝트는 체계적인 분석과 설계를 거쳐야 성공적으로 운영할 수 있습니다.

## 프로세스 분석 (Process Analysis)

- 현재 업무 프로세스를 **AS-IS** 기준으로 상세 매핑
- 자동화 대상 업무의 반복성, 규칙성, 볼륨 평가
- ROI 분석: 자동화 시 절감되는 시간과 비용 산출

## PDD (Process Definition Document)

\`\`\`
PDD 주요 항목:
  1. 프로세스 개요 및 목적
  2. AS-IS 업무 흐름도
  3. TO-BE 자동화 흐름도
  4. 입력/출력 데이터 정의
  5. 비즈니스 규칙 및 예외 사항
  6. 시스템 요구사항
\`\`\`

## SDD (Solution Design Document)

| 섹션 | 내용 |
|------|------|
| **아키텍처** | 봇 구조, 컴포넌트 설계 |
| **셀렉터 설계** | UI 요소 식별 전략 |
| **데이터 모델** | 변수, 큐, 에셋 정의 |
| **에러 처리** | 예외 시나리오별 대응 방안 |

## 예외 처리 전략

- **비즈니스 예외**: 데이터 불일치, 규칙 위반 시 대기열로 이동
- **시스템 예외**: 앱 충돌, 네트워크 오류 시 재시도 로직 적용
- **Try-Catch** 블록으로 안정적인 오류 처리 구현

\`\`\`
예외 처리 흐름:
  Try -> 작업 실행
  Catch BusinessException -> 로그 기록, 다음 건 처리
  Catch SystemException -> 재시도 (최대 3회)
  Finally -> 리소스 정리, 상태 보고
\`\`\`

## 운영 및 유지보수

- 봇 실행 로그를 **Orchestrator**에서 모니터링
- 정기적인 셀렉터 점검 및 업데이트
- 업무 변경 시 PDD/SDD 문서 동기화 필수`,contentEn:`## RPA Project Lifecycle

Successful RPA projects require systematic analysis and design before development begins.

## Process Analysis

- Map the current process in detail based on **AS-IS** workflows
- Evaluate repetitiveness, rule-based nature, and volume of target tasks
- ROI analysis: calculate time and cost savings from automation

## PDD (Process Definition Document)

\`\`\`
Key PDD Sections:
  1. Process overview and objectives
  2. AS-IS workflow diagram
  3. TO-BE automation workflow
  4. Input/output data definitions
  5. Business rules and exceptions
  6. System requirements
\`\`\`

## SDD (Solution Design Document)

| Section | Content |
|---------|---------|
| **Architecture** | Bot structure, component design |
| **Selector Design** | UI element identification strategy |
| **Data Model** | Variables, queues, asset definitions |
| **Error Handling** | Response plan per exception scenario |

## Exception Handling Strategy

- **Business Exceptions**: Move to queue on data mismatch or rule violation
- **System Exceptions**: Apply retry logic for app crashes or network errors
- **Try-Catch** blocks ensure robust error handling

\`\`\`
Exception Handling Flow:
  Try -> Execute task
  Catch BusinessException -> Log, process next item
  Catch SystemException -> Retry (max 3 attempts)
  Finally -> Clean up resources, report status
\`\`\`

## Operations & Maintenance

- Monitor bot execution logs via **Orchestrator**
- Regularly review and update selectors
- Keep PDD/SDD documents in sync with process changes`};export{e as default};
