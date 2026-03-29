const e={titleKo:"시스템 프롬프트 설계",titleEn:"System Prompt Design",contentKo:`# 시스템 프롬프트 설계

## 학습 목표
- 시스템 프롬프트의 역할과 중요성을 이해한다
- 효과적인 페르소나 설정 방법을 학습한다
- SOUL.md 개념을 활용한 행동 규칙 설계를 익힌다
- 실무에서 활용 가능한 시스템 프롬프트 템플릿을 작성한다

## 핵심 내용

### 시스템 프롬프트란?

시스템 프롬프트는 AI 모델의 전체 대화에 걸쳐 적용되는 기본 지침입니다. 모델의 성격, 행동 규칙, 응답 스타일을 정의합니다.

\`\`\`
대화 구조:
┌─────────────────────────────────┐
│ 시스템 프롬프트 (System)         │  ← 모델의 "성격"과 규칙
├─────────────────────────────────┤
│ 사용자 메시지 (User)             │  ← 사용자 입력
├─────────────────────────────────┤
│ 어시스턴트 응답 (Assistant)       │  ← 모델 출력
├─────────────────────────────────┤
│ 사용자 메시지 (User)             │  ← 후속 질문
│ ...                             │
└─────────────────────────────────┘
\`\`\`

### 페르소나 설정

페르소나는 AI 모델이 어떤 "역할"로 행동할지를 정의합니다.

\`\`\`
# 나쁜 예: 모호한 페르소나
"너는 도움이 되는 AI야."

# 좋은 예: 구체적인 페르소나
"당신은 10년 경력의 시니어 프론트엔드 개발자입니다.
React, TypeScript, Next.js를 전문으로 합니다.
코드 리뷰 시 성능 최적화와 접근성을 중요시합니다.
답변은 항상 코드 예제와 함께 제공합니다."
\`\`\`

### SOUL.md 프레임워크

SOUL.md는 AI 에이전트의 행동을 체계적으로 정의하는 방법론입니다:

| 섹션 | 역할 | 예시 |
|------|------|------|
| **S**oul (정체성) | AI의 핵심 정체성 | "HR 전문 컨설턴트" |
| **O**bjectives (목표) | 달성해야 할 목표 | "후보자 적합도 평가" |
| **U**nderstanding (이해) | 도메인 지식 | "채용 프로세스, 노동법" |
| **L**imitations (제한) | 하지 말아야 할 것 | "개인정보 수집 금지" |

\`\`\`markdown
# SOUL.md 예시: 고객 지원 에이전트

## Soul (정체성)
당신은 친절하고 전문적인 SaaS 제품 고객 지원 에이전트입니다.

## Objectives (목표)
- 고객 문의를 정확하게 해결한다
- 자주 묻는 질문은 KB 문서를 참조하여 답변한다
- 해결 불가능한 문제는 티켓을 생성하여 에스컬레이션한다

## Understanding (이해)
- 제품의 핵심 기능: 프로젝트 관리, 시간 추적, 보고서
- 요금제: Free, Pro ($15/월), Enterprise (문의)
- 지원 시간: 평일 09:00~18:00 KST

## Limitations (제한)
- 환불 처리를 직접 수행하지 않는다 (에스컬레이션)
- 경쟁 제품에 대해 평가하지 않는다
- 개인 데이터를 요청하거나 저장하지 않는다
\`\`\`

### 행동 규칙 설계

시스템 프롬프트에 행동 규칙을 명확하게 포함시키면 일관된 응답을 얻을 수 있습니다:

\`\`\`
# 행동 규칙 예시

## 응답 형식
- 한국어로 답변합니다
- 존댓말을 사용합니다
- 답변은 500자 이내로 작성합니다

## 금지 사항
- 확인되지 않은 정보를 사실처럼 말하지 않습니다
- "아마도", "추측이지만" 등의 표현 대신 불확실성을 명시합니다
- 의료, 법률 관련 조언을 제공하지 않습니다

## 에러 처리
- 질문이 모호하면 구체적인 예시를 들어 되묻습니다
- 답변 범위를 벗어나면 관련 리소스를 안내합니다
\`\`\`

## 실습 예제

\`\`\`python
# 시스템 프롬프트를 활용한 전문 에이전트 구축

import openai

# 업무 자동화 컨설턴트 에이전트
SYSTEM_PROMPT = """
# 역할
당신은 업무 자동화 전문 컨설턴트입니다.

# 전문 분야
- Excel 매크로/VBA
- Python 자동화 스크립트
- RPA (UiPath, Power Automate)
- 노코드 도구 (Zapier, Make, n8n)

# 응답 규칙
1. 사용자의 업무 상황을 먼저 파악합니다
2. 자동화 가능 여부를 판단합니다
3. 최적의 도구를 추천합니다
4. 단계별 구현 가이드를 제공합니다
5. 코드가 필요한 경우 완성된 예제를 포함합니다

# 응답 형식
- 항상 한국어로 답변합니다
- 기술 용어에는 영문 병기를 합니다
- 코드 블록에는 주석을 포함합니다

# 제한 사항
- 보안이 중요한 자격 증명은 환경 변수 사용을 안내합니다
- 유료 도구 추천 시 무료 대안도 함께 안내합니다
"""

def automation_consultant(user_question):
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_question}
        ],
        temperature=0.7,
        max_tokens=2000
    )
    return response.choices[0].message.content

# 사용 예시
result = automation_consultant(
    "매일 아침 5개 부서에서 보내는 Excel 보고서를 하나로 합치는 작업을 자동화하고 싶어요."
)
print(result)
\`\`\`

## 시스템 프롬프트 체크리스트

- [ ] 명확한 역할/페르소나가 정의되어 있는가?
- [ ] 목표와 범위가 구체적인가?
- [ ] 응답 형식이 지정되어 있는가?
- [ ] 금지 사항이 명시되어 있는가?
- [ ] 에러/예외 상황 처리 규칙이 있는가?
- [ ] 도메인 특화 지식이 포함되어 있는가?

## 정리
시스템 프롬프트는 AI 모델의 행동을 결정하는 가장 중요한 요소입니다. SOUL.md 프레임워크를 활용하면 체계적이고 일관된 AI 에이전트를 설계할 수 있습니다. 다음 레슨에서는 CRAFT 프레임워크를 활용한 복잡한 프롬프트 작성법을 배우겠습니다.
`,contentEn:`# System Prompt Design

## Learning Objectives
- Understand the role and importance of system prompts
- Learn effective persona setup methods
- Master behavior rule design using the SOUL.md concept
- Create practical system prompt templates

## Key Concepts

### What Is a System Prompt?

A system prompt is a set of base instructions that apply throughout the entire conversation with an AI model. It defines the model's personality, behavior rules, and response style.

\`\`\`
Conversation Structure:
┌─────────────────────────────────┐
│ System Prompt                   │  ← Model's "personality" & rules
├─────────────────────────────────┤
│ User Message                    │  ← User input
├─────────────────────────────────┤
│ Assistant Response              │  ← Model output
├─────────────────────────────────┤
│ User Message                    │  ← Follow-up question
│ ...                             │
└─────────────────────────────────┘
\`\`\`

### Persona Setup

A persona defines what "role" the AI model should play.

\`\`\`
# Bad example: Vague persona
"You are a helpful AI."

# Good example: Specific persona
"You are a senior frontend developer with 10 years of experience.
You specialize in React, TypeScript, and Next.js.
During code reviews, you prioritize performance optimization and accessibility.
You always provide code examples with your answers."
\`\`\`

### The SOUL.md Framework

SOUL.md is a methodology for systematically defining AI agent behavior:

| Section | Role | Example |
|---------|------|---------|
| **S**oul (Identity) | Core identity | "HR Consultant" |
| **O**bjectives (Goals) | Goals to achieve | "Evaluate candidate fit" |
| **U**nderstanding (Knowledge) | Domain knowledge | "Hiring processes, labor law" |
| **L**imitations (Constraints) | Things to avoid | "No personal data collection" |

\`\`\`markdown
# SOUL.md Example: Customer Support Agent

## Soul (Identity)
You are a friendly, professional SaaS product customer support agent.

## Objectives (Goals)
- Accurately resolve customer inquiries
- Reference KB documents for FAQs
- Escalate unresolvable issues by creating tickets

## Understanding (Knowledge)
- Core features: project management, time tracking, reports
- Plans: Free, Pro ($15/month), Enterprise (contact us)
- Support hours: Weekdays 09:00-18:00 KST

## Limitations (Constraints)
- Do not process refunds directly (escalate)
- Do not evaluate competing products
- Do not request or store personal data
\`\`\`

### Behavior Rule Design

Including clear behavior rules in system prompts ensures consistent responses:

\`\`\`
# Behavior Rules Example

## Response Format
- Respond in Korean
- Use polite speech
- Keep answers under 500 characters

## Prohibited Actions
- Do not state unverified information as fact
- Instead of "maybe" or "I guess", explicitly state uncertainty
- Do not provide medical or legal advice

## Error Handling
- Ask clarifying questions with specific examples for vague queries
- Provide relevant resources for out-of-scope questions
\`\`\`

## Practice Example

\`\`\`python
# Building a specialized agent with system prompts

import openai

# Work automation consultant agent
SYSTEM_PROMPT = """
# Role
You are a work automation specialist consultant.

# Expertise
- Excel Macros/VBA
- Python automation scripts
- RPA (UiPath, Power Automate)
- No-code tools (Zapier, Make, n8n)

# Response Rules
1. First understand the user's work situation
2. Assess automation feasibility
3. Recommend the best tool
4. Provide step-by-step implementation guide
5. Include complete code examples when needed

# Response Format
- Always respond in English
- Include technical terms with explanations
- Add comments in code blocks

# Limitations
- Guide users to use environment variables for credentials
- When recommending paid tools, also suggest free alternatives
"""

def automation_consultant(user_question):
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_question}
        ],
        temperature=0.7,
        max_tokens=2000
    )
    return response.choices[0].message.content

# Usage example
result = automation_consultant(
    "I want to automate merging Excel reports from 5 departments every morning."
)
print(result)
\`\`\`

## System Prompt Checklist

- [ ] Is a clear role/persona defined?
- [ ] Are goals and scope specific?
- [ ] Is the response format specified?
- [ ] Are prohibited actions listed?
- [ ] Are error/exception handling rules included?
- [ ] Is domain-specific knowledge included?

## Summary
The system prompt is the most important factor in determining AI model behavior. Using the SOUL.md framework enables you to design systematic and consistent AI agents. In the next lesson, we'll learn about the CRAFT framework for writing complex prompts.
`};export{e as default};
