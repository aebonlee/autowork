const lesson = {
  titleKo: '프롬프트 엔지니어링',
  titleEn: 'Prompt Engineering',
  contentKo: `## 프롬프트 엔지니어링이란?

프롬프트 엔지니어링은 AI 모델에서 원하는 결과를 얻기 위해 입력(프롬프트)을 체계적으로 설계하는 기술입니다. 잘 작성된 프롬프트는 AI 출력의 품질을 극적으로 향상시킵니다.

## 핵심 기법

### 1. Few-shot 프롬프팅
예시를 함께 제공하여 AI가 패턴을 학습하도록 합니다.

\`\`\`
입력: "행복" → 출력: "happy"
입력: "슬픔" → 출력: "sad"
입력: "분노" → 출력:
\`\`\`

### 2. Chain-of-Thought (CoT)
단계별 사고 과정을 유도하여 복잡한 문제를 해결합니다.

\`\`\`
문제를 분석하고 단계별로 풀어보세요:
1단계: 주어진 조건을 정리합니다
2단계: 관련 공식을 적용합니다
3단계: 최종 답을 도출합니다
\`\`\`

### 3. 시스템 프롬프트
AI의 역할과 행동 규칙을 사전에 정의합니다.

\`\`\`javascript
const systemPrompt = \`당신은 전문 번역가입니다.
규칙:
- 자연스러운 한국어로 번역하세요
- 기술 용어는 영문을 병기하세요
- 존댓말을 사용하세요\`;
\`\`\`

## 프롬프트 템플릿 구조

\`\`\`
[역할 정의]
[컨텍스트/배경 정보]
[구체적인 작업 지시]
[출력 형식 지정]
[제약 조건]
\`\`\`

## 자주 하는 실수

- 지시가 모호함 → 구체적인 형식과 조건을 명시하세요
- 컨텍스트 부족 → 배경 정보를 충분히 제공하세요
- 한 번에 너무 많은 요청 → 작업을 분리하여 요청하세요`,
  contentEn: `## What is Prompt Engineering?

Prompt engineering is the systematic design of inputs (prompts) to get desired results from AI models. Well-crafted prompts dramatically improve the quality of AI outputs.

## Core Techniques

### 1. Few-shot Prompting
Provide examples so the AI learns the pattern.

\`\`\`
Input: "happy" → Output: "positive"
Input: "angry" → Output: "negative"
Input: "calm" → Output:
\`\`\`

### 2. Chain-of-Thought (CoT)
Guide step-by-step reasoning for complex problems.

\`\`\`
Analyze the problem step by step:
Step 1: Identify the given conditions
Step 2: Apply relevant formulas
Step 3: Derive the final answer
\`\`\`

### 3. System Prompts
Pre-define the AI's role and behavior rules.

\`\`\`javascript
const systemPrompt = \`You are a professional translator.
Rules:
- Translate naturally into the target language
- Keep technical terms with original notation
- Use formal tone\`;
\`\`\`

## Prompt Template Structure

\`\`\`
[Role definition]
[Context / background info]
[Specific task instructions]
[Output format specification]
[Constraints]
\`\`\`

## Common Mistakes

- Vague instructions → Specify exact format and conditions
- Lacking context → Provide sufficient background information
- Too many requests at once → Break tasks into separate prompts`,
};
export default lesson;
