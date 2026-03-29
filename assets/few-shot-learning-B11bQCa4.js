const e={titleKo:"Few-shot 학습과 예제",titleEn:"Few-shot Learning & Examples",contentKo:`# Few-shot 학습과 예제

## 학습 목표
- Few-shot 학습의 원리와 In-context Learning을 이해한다
- Chain of Thought(CoT) 프롬프팅을 활용하는 방법을 학습한다
- 효과적인 예제 선정 전략을 익힌다
- 실무에서 few-shot 패턴을 적용하는 방법을 실습한다

## 핵심 내용

### In-context Learning이란?

In-context Learning은 모델을 재학습시키지 않고, 프롬프트 안에 예제를 제공하여 원하는 패턴을 학습시키는 방법입니다.

\`\`\`
일반적인 머신러닝:
  대량 데이터 → 학습 (수 시간~일) → 배포 → 사용

In-context Learning:
  프롬프트 안에 예제 포함 → 즉시 사용 가능
\`\`\`

### Few-shot 예제 설계 원칙

| 원칙 | 설명 | 예시 |
|------|------|------|
| **다양성** | 다양한 케이스를 포함 | 긍정, 부정, 중립 모두 포함 |
| **대표성** | 실제 데이터를 대표하는 예제 | 가장 흔한 유형 포함 |
| **일관성** | 형식이 동일한 예제 | 입출력 형식 통일 |
| **적절한 수** | 보통 3~5개 최적 | 너무 많으면 토큰 낭비 |

### Chain of Thought (CoT) 프롬프팅

CoT는 모델이 최종 답변 전에 추론 과정을 단계별로 설명하도록 유도하는 기법입니다.

\`\`\`
# 일반 프롬프팅 (CoT 없이)
질문: 서버 3대에 각 8GB RAM이 있고, 각 서버에서 애플리케이션이
2GB를 사용하면, 총 여유 메모리는?
답: 18GB

# CoT 프롬프팅
질문: 서버 3대에 각 8GB RAM이 있고, 각 서버에서 애플리케이션이
2GB를 사용하면, 총 여유 메모리는?

단계별로 생각해봅시다:
1. 전체 메모리: 3대 × 8GB = 24GB
2. 사용 중인 메모리: 3대 × 2GB = 6GB
3. 여유 메모리: 24GB - 6GB = 18GB

답: 18GB
\`\`\`

### Few-shot + CoT 결합

\`\`\`
# 업무 자동화 ROI 계산 예제

예제 1:
상황: 매일 1시간씩 수동으로 데이터 입력, 직원 시급 25,000원
분석:
1. 연간 수동 작업 비용: 1시간 × 25,000원 × 250일 = 6,250,000원
2. 자동화 도구 비용: 월 50,000원 × 12 = 600,000원
3. 초기 구축 비용: 1,000,000원 (일회성)
4. 1년차 절감액: 6,250,000 - 600,000 - 1,000,000 = 4,650,000원
5. ROI: (4,650,000 / 1,600,000) × 100 = 290.6%
결론: 자동화 강력 추천 (ROI 290%)

예제 2:
상황: 주 2회 30분씩 보고서 포맷팅, 직원 시급 30,000원
분석:
1. 연간 수동 작업 비용: 0.5시간 × 2회 × 30,000원 × 50주 = 1,500,000원
2. 자동화 도구 비용: 무료 (매크로)
3. 초기 구축 비용: 200,000원 (개발 시간)
4. 1년차 절감액: 1,500,000 - 0 - 200,000 = 1,300,000원
5. ROI: (1,300,000 / 200,000) × 100 = 650%
결론: 즉시 자동화 권장 (ROI 650%)

이제 다음 상황을 분석하세요:
상황: 매주 3시간씩 이메일 발송, 직원 시급 28,000원, 도구 월 80,000원
\`\`\`

### 예제 선정 전략

\`\`\`python
# 최적의 few-shot 예제를 선정하는 전략

def select_examples(query, example_pool, k=3):
    """입력과 가장 유사한 예제 k개 선택"""
    # 1. 유사도 기반 선택 (가장 관련성 높은 예제)
    scored = []
    for ex in example_pool:
        similarity = compute_similarity(query, ex['input'])
        scored.append((similarity, ex))

    scored.sort(reverse=True, key=lambda x: x[0])

    # 2. 다양성 보장 (너무 유사한 예제만 선택 방지)
    selected = [scored[0][1]]
    for _, ex in scored[1:]:
        if len(selected) >= k:
            break
        if is_diverse_enough(ex, selected):
            selected.append(ex)

    return selected

# 예제 풀
example_pool = [
    {"input": "매출 보고서를 자동으로 생성", "category": "보고서"},
    {"input": "고객 이메일 자동 분류", "category": "이메일"},
    {"input": "재고 데이터 자동 업데이트", "category": "데이터"},
    {"input": "인사 서류 자동 생성", "category": "문서"},
    {"input": "일일 매출 집계 자동화", "category": "보고서"},
]
\`\`\`

### Self-Consistency 기법

동일 프롬프트로 여러 번 응답을 생성한 후 다수결로 최종 답을 결정하는 기법:

\`\`\`python
def self_consistency(prompt, n_samples=5):
    """여러 번 샘플링하여 가장 일관된 답변 선택"""
    responses = []
    for _ in range(n_samples):
        response = call_ai_api(prompt, temperature=0.7)
        answer = extract_answer(response)
        responses.append(answer)

    # 다수결로 최종 답변 결정
    from collections import Counter
    most_common = Counter(responses).most_common(1)[0]
    return {
        'answer': most_common[0],
        'confidence': most_common[1] / n_samples,
        'all_responses': responses
    }
\`\`\`

## 실전 활용 패턴

### 패턴 1: 분류 작업

\`\`\`
예제:
"서버 다운됨" → 카테고리: 인프라, 우선순위: 긴급
"로그인이 안 돼요" → 카테고리: 인증, 우선순위: 높음
"글꼴 변경 요청" → 카테고리: UI, 우선순위: 낮음

분류하세요:
"결제 시 오류 발생" → ?
\`\`\`

### 패턴 2: 데이터 변환

\`\`\`
예제:
입력: "2024년 3월 15일" → 출력: "2024-03-15"
입력: "24.01.05" → 출력: "2024-01-05"
입력: "March 20, 2024" → 출력: "2024-03-20"

변환하세요:
입력: "2024/04/30" → ?
\`\`\`

## 정리
Few-shot 학습과 CoT 프롬프팅은 프롬프트 엔지니어링에서 가장 강력한 기법입니다. 다양하고 대표적인 예제를 선별하고, 추론 과정을 명시적으로 포함시키면 복잡한 작업에서도 높은 정확도를 달성할 수 있습니다. 다음 레슨에서는 프롬프트 보안에 대해 학습합니다.
`,contentEn:`# Few-shot Learning & Examples

## Learning Objectives
- Understand the principles of few-shot learning and in-context learning
- Learn how to use Chain of Thought (CoT) prompting
- Master effective example selection strategies
- Practice applying few-shot patterns in real work scenarios

## Key Concepts

### What Is In-context Learning?

In-context learning is a method of teaching desired patterns by providing examples within the prompt, without retraining the model.

\`\`\`
Traditional Machine Learning:
  Large dataset → Training (hours~days) → Deploy → Use

In-context Learning:
  Include examples in prompt → Ready to use immediately
\`\`\`

### Few-shot Example Design Principles

| Principle | Description | Example |
|-----------|-------------|---------|
| **Diversity** | Include varied cases | Cover positive, negative, neutral |
| **Representativeness** | Examples that represent real data | Include most common types |
| **Consistency** | Uniform formatting | Standardize input/output format |
| **Right quantity** | Usually 3-5 is optimal | Too many wastes tokens |

### Chain of Thought (CoT) Prompting

CoT is a technique that guides the model to explain its reasoning step by step before giving the final answer.

\`\`\`
# Standard prompting (without CoT)
Q: 3 servers with 8GB RAM each, each running an app using 2GB.
Total free memory?
A: 18GB

# CoT prompting
Q: 3 servers with 8GB RAM each, each running an app using 2GB.
Total free memory?

Let's think step by step:
1. Total memory: 3 × 8GB = 24GB
2. Memory in use: 3 × 2GB = 6GB
3. Free memory: 24GB - 6GB = 18GB

A: 18GB
\`\`\`

### Combining Few-shot + CoT

\`\`\`
# Work automation ROI calculation examples

Example 1:
Situation: 1 hour daily manual data entry, employee rate $20/hr
Analysis:
1. Annual manual cost: 1hr × $20 × 250 days = $5,000
2. Automation tool: $40/month × 12 = $480
3. Initial setup: $800 (one-time)
4. Year 1 savings: $5,000 - $480 - $800 = $3,720
5. ROI: ($3,720 / $1,280) × 100 = 290.6%
Conclusion: Strongly recommend automation (290% ROI)

Example 2:
Situation: 30min twice weekly report formatting, employee rate $25/hr
Analysis:
1. Annual manual cost: 0.5hr × 2 × $25 × 50 weeks = $1,250
2. Automation tool: Free (macro)
3. Initial setup: $150 (dev time)
4. Year 1 savings: $1,250 - $0 - $150 = $1,100
5. ROI: ($1,100 / $150) × 100 = 733%
Conclusion: Automate immediately (733% ROI)

Now analyze:
Situation: 3 hours weekly email sending, rate $22/hr, tool $60/month
\`\`\`

### Example Selection Strategy

\`\`\`python
# Strategy for selecting optimal few-shot examples

def select_examples(query, example_pool, k=3):
    """Select k examples most similar to input"""
    # 1. Similarity-based selection
    scored = []
    for ex in example_pool:
        similarity = compute_similarity(query, ex['input'])
        scored.append((similarity, ex))

    scored.sort(reverse=True, key=lambda x: x[0])

    # 2. Ensure diversity (prevent too-similar selections)
    selected = [scored[0][1]]
    for _, ex in scored[1:]:
        if len(selected) >= k:
            break
        if is_diverse_enough(ex, selected):
            selected.append(ex)

    return selected

# Example pool
example_pool = [
    {"input": "Auto-generate sales reports", "category": "reports"},
    {"input": "Auto-classify customer emails", "category": "email"},
    {"input": "Auto-update inventory data", "category": "data"},
    {"input": "Auto-generate HR documents", "category": "documents"},
    {"input": "Automate daily sales aggregation", "category": "reports"},
]
\`\`\`

### Self-Consistency Technique

Generate multiple responses with the same prompt and use majority voting:

\`\`\`python
def self_consistency(prompt, n_samples=5):
    """Sample multiple times and select most consistent answer"""
    responses = []
    for _ in range(n_samples):
        response = call_ai_api(prompt, temperature=0.7)
        answer = extract_answer(response)
        responses.append(answer)

    # Determine final answer by majority vote
    from collections import Counter
    most_common = Counter(responses).most_common(1)[0]
    return {
        'answer': most_common[0],
        'confidence': most_common[1] / n_samples,
        'all_responses': responses
    }
\`\`\`

## Practical Patterns

### Pattern 1: Classification Tasks

\`\`\`
Examples:
"Server is down" → Category: Infrastructure, Priority: Critical
"Can't log in" → Category: Auth, Priority: High
"Font change request" → Category: UI, Priority: Low

Classify:
"Error during payment" → ?
\`\`\`

### Pattern 2: Data Transformation

\`\`\`
Examples:
Input: "March 15, 2024" → Output: "2024-03-15"
Input: "24.01.05" → Output: "2024-01-05"
Input: "2024년 3월 20일" → Output: "2024-03-20"

Transform:
Input: "04/30/2024" → ?
\`\`\`

## Summary
Few-shot learning and CoT prompting are the most powerful techniques in prompt engineering. By selecting diverse, representative examples and explicitly including reasoning steps, you can achieve high accuracy even on complex tasks. In the next lesson, we'll learn about prompt security.
`};export{e as default};
