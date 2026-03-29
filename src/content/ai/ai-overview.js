const lesson = {
  titleKo: 'AI 자동화 개요',
  titleEn: 'AI Automation Overview',
  contentKo: `## AI 자동화란?

AI 자동화는 인공지능 기술을 활용하여 반복적인 업무를 자동으로 처리하는 것을 의미합니다. 최근 대규모 언어 모델(LLM)의 발전으로 텍스트 생성, 요약, 번역, 코드 작성 등 다양한 작업을 자동화할 수 있게 되었습니다.

## 주요 AI 모델 비교

| 모델 | 장점 | 적합한 용도 |
|------|------|-------------|
| **GPT-4o** | 범용성, 멀티모달 | 일반 텍스트 처리, 이미지 분석 |
| **Claude** | 긴 컨텍스트, 정확성 | 문서 분석, 코딩, 장문 처리 |
| **Gemini** | Google 연동, 무료 티어 | Google Workspace 통합 |

## API vs UI 방식

- **UI 방식**: ChatGPT, Claude 웹사이트에서 직접 사용. 빠른 테스트에 적합
- **API 방식**: 프로그래밍으로 호출. 자동화 파이프라인 구축에 필수

\`\`\`
UI 방식: 수동 입력 → 결과 확인 → 복사
API 방식: 자동 입력 → 자동 처리 → 자동 저장
\`\`\`

## 비용 고려사항

- **토큰 단위 과금**: 입력/출력 토큰별로 비용 발생
- **모델별 가격 차이**: GPT-4o > Claude Sonnet > GPT-4o-mini
- **캐싱 활용**: 반복 요청 시 프롬프트 캐싱으로 비용 절감 가능
- **배치 처리**: 실시간이 불필요한 경우 배치 API로 50% 할인

> 팁: 작은 모델로 먼저 테스트하고, 품질이 부족할 때만 큰 모델로 전환하세요.`,
  contentEn: `## What is AI Automation?

AI automation uses artificial intelligence to handle repetitive tasks automatically. With recent advances in Large Language Models (LLMs), tasks like text generation, summarization, translation, and coding can now be automated effectively.

## Major AI Model Comparison

| Model | Strengths | Best For |
|-------|-----------|----------|
| **GPT-4o** | Versatility, multimodal | General text, image analysis |
| **Claude** | Long context, accuracy | Document analysis, coding |
| **Gemini** | Google integration, free tier | Google Workspace workflows |

## API vs UI Approach

- **UI approach**: Use ChatGPT or Claude websites directly. Great for quick tests
- **API approach**: Call programmatically. Essential for building automation pipelines

\`\`\`
UI: Manual input → Review result → Copy
API: Auto input → Auto process → Auto save
\`\`\`

## Cost Considerations

- **Token-based pricing**: Costs per input/output token
- **Model price tiers**: GPT-4o > Claude Sonnet > GPT-4o-mini
- **Caching**: Use prompt caching to reduce costs on repeated requests
- **Batch processing**: Use batch APIs for non-real-time tasks (up to 50% off)

> Tip: Start with smaller models and only upgrade when quality is insufficient.`,
};
export default lesson;
