const e={titleKo:"프롬프트 엔지니어링 기초",titleEn:"Prompt Engineering Basics",contentKo:`# 프롬프트 엔지니어링 기초

## 학습 목표
- LLM(대규모 언어 모델)의 기본 동작 원리를 이해한다
- 프롬프트의 구성 요소와 역할을 파악한다
- Zero-shot과 Few-shot 프롬프팅의 차이를 이해한다
- 토큰의 개념과 비용 최적화 전략을 학습한다

## 핵심 내용

### LLM은 어떻게 동작하는가?

LLM(Large Language Model)은 입력된 텍스트(프롬프트)를 기반으로 다음에 올 가능성이 가장 높은 토큰을 예측하는 방식으로 텍스트를 생성합니다.

\`\`\`
사용자 입력 (프롬프트)
    ↓
토큰화 (Tokenization)
    ↓
모델 추론 (Inference)
    ↓
토큰 생성 (다음 토큰 확률 예측)
    ↓
출력 텍스트 (응답)
\`\`\`

### 토큰이란?

토큰은 LLM이 텍스트를 처리하는 기본 단위입니다. 한국어의 경우 한 글자가 2~3개 토큰으로 분해되기도 합니다.

| 언어 | 텍스트 예시 | 대략적 토큰 수 |
|------|-----------|--------------|
| 영어 | "Hello, world!" | 4 토큰 |
| 한국어 | "안녕하세요" | 3~5 토큰 |
| 코드 | \`function add(a, b)\` | 6 토큰 |

### 프롬프트의 구성 요소

효과적인 프롬프트는 다음 요소로 구성됩니다:

1. **지시문 (Instruction)**: 모델이 수행할 작업을 명확하게 기술
2. **맥락 (Context)**: 작업에 필요한 배경 정보
3. **입력 데이터 (Input)**: 처리할 실제 데이터
4. **출력 형식 (Output Format)**: 원하는 응답의 형태

\`\`\`
# 좋은 프롬프트 예시

[지시문]
다음 고객 리뷰를 분석하여 감성을 분류하세요.

[맥락]
감성은 '긍정', '부정', '중립' 중 하나로 분류합니다.

[입력 데이터]
리뷰: "배송은 빠르지만 포장이 엉성했습니다."

[출력 형식]
감성: [분류 결과]
이유: [한 줄 설명]
\`\`\`

### Zero-shot vs Few-shot 프롬프팅

| 방식 | 설명 | 장점 | 단점 |
|------|------|------|------|
| **Zero-shot** | 예제 없이 지시만 제공 | 토큰 절약, 빠른 작성 | 복잡한 작업에서 정확도 낮음 |
| **One-shot** | 예제 1개 제공 | 형식 안내 가능 | 예제가 편향을 줄 수 있음 |
| **Few-shot** | 예제 2~5개 제공 | 높은 정확도, 일관된 형식 | 토큰 소비 증가 |

\`\`\`
# Zero-shot 예시
다음 문장의 감성을 분석하세요: "이 제품 정말 좋아요!"

# Few-shot 예시
다음은 감성 분석 예제입니다:

문장: "배송이 빨라서 좋았어요" → 긍정
문장: "제품에 하자가 있었습니다" → 부정
문장: "보통이에요" → 중립

문장: "이 제품 정말 좋아요!" → ?
\`\`\`

### 프롬프트 작성 팁

1. **구체적으로 작성하기**: "좋은 글 써줘" → "초등학생도 이해할 수 있는 200자 내외의 설명문을 작성해줘"
2. **역할 부여하기**: "너는 10년 경력의 데이터 분석가야"
3. **단계별 사고 유도**: "단계별로 생각해보자" (Chain of Thought)
4. **출력 형식 명시**: "JSON 형식으로 응답해줘"
5. **제약 조건 설정**: "3문장 이내로 답변해줘"

## 실습 예제

\`\`\`python
# OpenAI API를 사용한 프롬프트 엔지니어링 기초 예제

import openai

# Zero-shot 프롬프팅
def zero_shot_classify(text):
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "당신은 텍스트 감성 분석 전문가입니다."},
            {"role": "user", "content": f"다음 텍스트의 감성을 '긍정/부정/중립'으로 분류하세요:\\n\\n{text}"}
        ]
    )
    return response.choices[0].message.content

# Few-shot 프롬프팅
def few_shot_classify(text):
    examples = """
예시 1:
입력: "정말 만족스러운 구매였습니다"
출력: 긍정

예시 2:
입력: "환불 절차가 너무 복잡해요"
출력: 부정

예시 3:
입력: "가격 대비 무난합니다"
출력: 중립
"""
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "당신은 텍스트 감성 분석 전문가입니다."},
            {"role": "user", "content": f"{examples}\\n입력: \\"{text}\\"\\n출력:"}
        ]
    )
    return response.choices[0].message.content
\`\`\`

## 자동화 실무 적용

| 업무 시나리오 | 프롬프트 전략 | 기대 효과 |
|-------------|------------|----------|
| 고객 문의 분류 | Few-shot + 카테고리 목록 | 분류 자동화 90%+ |
| 보고서 요약 | Zero-shot + 형식 지정 | 작성 시간 70% 절감 |
| 데이터 정제 | Few-shot + 규칙 명시 | 정제 정확도 향상 |
| 번역 | Zero-shot + 도메인 맥락 | 전문 용어 정확도 향상 |

## 정리
프롬프트 엔지니어링은 AI 모델을 효과적으로 활용하기 위한 핵심 기술입니다. 명확한 지시, 적절한 맥락 제공, 출력 형식 지정을 통해 AI의 응답 품질을 크게 향상시킬 수 있습니다. 다음 레슨에서는 시스템 프롬프트를 설계하는 방법을 자세히 다루겠습니다.
`,contentEn:`# Prompt Engineering Basics

## Learning Objectives
- Understand the basic operating principles of LLMs (Large Language Models)
- Identify the components and roles of prompts
- Understand the difference between zero-shot and few-shot prompting
- Learn about tokens and cost optimization strategies

## Key Concepts

### How Do LLMs Work?

LLMs generate text by predicting the most likely next token based on the input text (prompt).

\`\`\`
User Input (Prompt)
    ↓
Tokenization
    ↓
Model Inference
    ↓
Token Generation (Next token probability prediction)
    ↓
Output Text (Response)
\`\`\`

### What Are Tokens?

Tokens are the basic units that LLMs use to process text. In English, a token is roughly 4 characters or about 0.75 words.

| Language | Text Example | Approximate Tokens |
|----------|-------------|-------------------|
| English | "Hello, world!" | 4 tokens |
| Korean | "안녕하세요" | 3-5 tokens |
| Code | \`function add(a, b)\` | 6 tokens |

### Components of a Prompt

An effective prompt consists of these elements:

1. **Instruction**: Clearly describe the task for the model
2. **Context**: Background information needed for the task
3. **Input Data**: The actual data to process
4. **Output Format**: The desired format of the response

\`\`\`
# Good Prompt Example

[Instruction]
Analyze the following customer review and classify its sentiment.

[Context]
Sentiment should be classified as 'positive', 'negative', or 'neutral'.

[Input Data]
Review: "Shipping was fast but the packaging was sloppy."

[Output Format]
Sentiment: [classification result]
Reason: [one-line explanation]
\`\`\`

### Zero-shot vs Few-shot Prompting

| Method | Description | Pros | Cons |
|--------|-------------|------|------|
| **Zero-shot** | Only instructions, no examples | Token-efficient, quick to write | Lower accuracy on complex tasks |
| **One-shot** | One example provided | Can guide format | Example may introduce bias |
| **Few-shot** | 2-5 examples provided | High accuracy, consistent format | Higher token consumption |

\`\`\`
# Zero-shot example
Analyze the sentiment of: "I love this product!"

# Few-shot example
Here are sentiment analysis examples:

Text: "Fast delivery, very happy" → Positive
Text: "Product was defective" → Negative
Text: "It's okay" → Neutral

Text: "I love this product!" → ?
\`\`\`

### Prompt Writing Tips

1. **Be specific**: "Write something good" → "Write an explanation of about 200 characters that a 5th grader can understand"
2. **Assign a role**: "You are a data analyst with 10 years of experience"
3. **Encourage step-by-step thinking**: "Let's think step by step" (Chain of Thought)
4. **Specify output format**: "Respond in JSON format"
5. **Set constraints**: "Answer in 3 sentences or less"

## Practice Example

\`\`\`python
# Basic prompt engineering example using OpenAI API

import openai

# Zero-shot prompting
def zero_shot_classify(text):
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a text sentiment analysis expert."},
            {"role": "user", "content": f"Classify the sentiment of the following text as 'positive/negative/neutral':\\n\\n{text}"}
        ]
    )
    return response.choices[0].message.content

# Few-shot prompting
def few_shot_classify(text):
    examples = """
Example 1:
Input: "Really satisfied with this purchase"
Output: Positive

Example 2:
Input: "The refund process is too complicated"
Output: Negative

Example 3:
Input: "It's decent for the price"
Output: Neutral
"""
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a text sentiment analysis expert."},
            {"role": "user", "content": f"{examples}\\nInput: \\"{text}\\"\\nOutput:"}
        ]
    )
    return response.choices[0].message.content
\`\`\`

## Practical Business Applications

| Business Scenario | Prompt Strategy | Expected Impact |
|-------------------|----------------|-----------------|
| Customer inquiry classification | Few-shot + category list | 90%+ automation |
| Report summarization | Zero-shot + format spec | 70% time reduction |
| Data cleaning | Few-shot + rules | Improved accuracy |
| Translation | Zero-shot + domain context | Better terminology accuracy |

## Summary
Prompt engineering is an essential skill for effectively utilizing AI models. Clear instructions, appropriate context, and output format specification can significantly improve the quality of AI responses. In the next lesson, we'll dive into designing system prompts.
`};export{e as default};
