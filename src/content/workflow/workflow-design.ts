const lesson = {
  titleKo: '워크플로우 설계 원칙',
  titleEn: 'Workflow Design Principles',
  contentKo: `# 워크플로우 설계 원칙

## 개요
효과적인 자동화는 좋은 워크플로우 설계에서 시작됩니다. 현재 프로세스를 분석하고 체계적으로 설계해야 안정적이고 유지보수 가능한 자동화를 구현할 수 있습니다.

## 핵심 기법

### 프로세스 매핑
\`\`\`
현재 프로세스 분석 단계:
1. 이해관계자 인터뷰로 현행 업무 파악
2. 각 단계별 입력/출력/담당자 정리
3. 소요 시간 및 빈도 측정
4. 자동화 가능 영역 식별

예시 - 경비 처리 프로세스:
[영수증 수집] → [경비 보고서 작성] → [상사 승인]
→ [재무팀 검토] → [환급 처리] → [완료 통보]
\`\`\`

### BPMN 표기법
- **이벤트(원)**: 프로세스의 시작, 중간, 끝 표현
- **활동(사각형)**: 수행되는 작업이나 태스크
- **게이트웨이(마름모)**: 조건 분기 및 병합 지점
- **흐름(화살표)**: 작업 간 순서와 방향

### 병목 분석
- 각 단계의 처리 시간과 대기 시간 측정
- 가장 느린 단계가 전체 처리량을 결정
- 병목 해소 방법: 병렬화, 자동화, 리소스 추가

### 최적화 전략
- 불필요한 승인 단계 제거 또는 자동 승인 규칙 도입
- 순차 처리를 병렬 처리로 전환
- 예외 처리 경로를 미리 설계하여 장애 대응

## 설계 도구
- **Miro / Lucidchart**: 온라인 프로세스 맵 작성
- **Camunda**: 오픈소스 BPMN 워크플로우 엔진
- **draw.io**: 무료 다이어그램 도구`,
  contentEn: `# Workflow Design Principles

## Overview
Effective automation starts with good workflow design. Analyzing current processes and designing systematically ensures reliable and maintainable automation.

## Key Techniques

### Process Mapping
\`\`\`
Current Process Analysis Steps:
1. Interview stakeholders to understand current workflows
2. Document inputs/outputs/owners for each step
3. Measure time and frequency
4. Identify areas suitable for automation

Example - Expense Processing:
[Collect Receipts] -> [Create Report] -> [Manager Approval]
-> [Finance Review] -> [Reimbursement] -> [Completion Notice]
\`\`\`

### BPMN Notation
- **Events (circles)**: Represent start, intermediate, and end of processes
- **Activities (rectangles)**: Tasks or work being performed
- **Gateways (diamonds)**: Conditional branching and merging points
- **Flows (arrows)**: Sequence and direction between tasks

### Bottleneck Analysis
- Measure processing time and wait time for each step
- The slowest step determines overall throughput
- Resolution: parallelize, automate, or add resources

### Optimization Strategies
- Remove unnecessary approval steps or introduce auto-approval rules
- Convert sequential processing to parallel processing
- Pre-design exception handling paths for fault tolerance

## Design Tools
- **Miro / Lucidchart**: Online process mapping
- **Camunda**: Open-source BPMN workflow engine
- **draw.io**: Free diagramming tool`,
};
export default lesson;
