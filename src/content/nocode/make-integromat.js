const lesson = {
  titleKo: 'Make(Integromat) 활용',
  titleEn: 'Make (Integromat)',
  contentKo: `# Make(Integromat) 활용

## Make란?

Make(구 Integromat)는 시각적 시나리오 빌더를 통해 복잡한 자동화 워크플로우를 설계할 수 있는 로코드 자동화 플랫폼입니다. Zapier보다 더 세밀한 데이터 흐름 제어가 가능합니다.

## 시나리오 (Scenarios)

시나리오는 Make의 자동화 워크플로우 단위입니다. 모듈들을 시각적으로 연결하여 데이터 흐름을 설계합니다.

\`\`\`
시나리오 구조:
[트리거 모듈] -> [처리 모듈] -> [액션 모듈]
     |              |              |
  이벤트 감지    데이터 변환    결과 저장/전송
\`\`\`

## 모듈 (Modules)

각 모듈은 특정 앱의 기능을 수행합니다.

- **트리거 모듈**: 시나리오 시작점 (Watch, Webhook)
- **액션 모듈**: 데이터 생성, 수정, 삭제
- **검색 모듈**: 기존 데이터 조회
- **변환 모듈**: 데이터 형식 변환, 집계

## 라우터 (Routers)

라우터를 사용하면 하나의 데이터를 여러 경로로 분기할 수 있습니다.

\`\`\`
[Google Forms 응답]
       |
    [라우터]
    /     \\
[경로 1]  [경로 2]
필터: 점수>=80  필터: 점수<80
합격 이메일    불합격 이메일
\`\`\`

## 데이터 매핑

모듈 간 데이터를 연결할 때 매핑 패널을 사용합니다.

\`\`\`
입력 데이터: {{1.name}}, {{1.email}}
변환 함수: {{formatDate(1.date; "YYYY-MM-DD")}}
배열 처리: {{map(1.items; "price")}}
\`\`\`

## 스케줄링

- **즉시 실행**: Webhook 트리거 사용
- **주기적 실행**: 1분~매일 간격 설정
- **수동 실행**: 테스트 및 디버깅 시 활용

## 핵심 장점

- 시각적 데이터 흐름 확인 가능
- Zapier 대비 저렴한 가격 (Operations 기반)
- JSON, XML 등 복잡한 데이터 구조 처리 용이`,
  contentEn: `# Make (Integromat)

## What is Make?

Make (formerly Integromat) is a low-code automation platform that lets you design complex workflows through a visual scenario builder. It offers more granular data flow control than Zapier.

## Scenarios

A scenario is Make's automation workflow unit. You visually connect modules to design data flows.

\`\`\`
Scenario Structure:
[Trigger Module] -> [Processing Module] -> [Action Module]
       |                   |                     |
  Event detection    Data transformation    Save/Send result
\`\`\`

## Modules

Each module performs a specific app function.

- **Trigger Modules**: Scenario starting point (Watch, Webhook)
- **Action Modules**: Create, update, or delete data
- **Search Modules**: Query existing data
- **Transform Modules**: Convert data formats, aggregate

## Routers

Routers let you branch a single data stream into multiple paths.

\`\`\`
[Google Forms Response]
         |
      [Router]
      /      \\
[Path 1]   [Path 2]
Filter: score>=80  Filter: score<80
Pass email         Fail email
\`\`\`

## Data Mapping

Use the mapping panel to connect data between modules.

\`\`\`
Input data: {{1.name}}, {{1.email}}
Transform: {{formatDate(1.date; "YYYY-MM-DD")}}
Array handling: {{map(1.items; "price")}}
\`\`\`

## Scheduling

- **Instant**: Use Webhook triggers
- **Periodic**: Set intervals from 1 minute to daily
- **Manual**: For testing and debugging

## Key Advantages

- Visual data flow verification
- More affordable than Zapier (operations-based pricing)
- Handles complex data structures (JSON, XML) with ease`,
};

export default lesson;
