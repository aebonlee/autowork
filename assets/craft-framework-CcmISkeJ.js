const e={titleKo:"CRAFT 프레임워크",titleEn:"CRAFT Framework",contentKo:`# CRAFT 프레임워크

## 학습 목표
- CRAFT 프레임워크의 각 요소를 이해한다
- Context-Role-Action-Format-Tone을 활용한 프롬프트 작성법을 익힌다
- 복잡한 작업을 구조화된 프롬프트로 분해하는 방법을 학습한다
- 실무 업무에 CRAFT를 적용한 사례를 실습한다

## 핵심 내용

### CRAFT란?

CRAFT는 효과적인 프롬프트를 구성하는 5가지 핵심 요소의 약자입니다:

| 요소 | 영문 | 역할 | 질문 |
|------|------|------|------|
| **C** | Context | 배경과 상황 | 어떤 상황인가? |
| **R** | Role | 역할과 전문성 | 누구로서 답해야 하는가? |
| **A** | Action | 수행할 작업 | 무엇을 해야 하는가? |
| **F** | Format | 출력 형식 | 어떤 형태로 답해야 하는가? |
| **T** | Tone | 어조와 스타일 | 어떤 톤으로 말해야 하는가? |

### 각 요소 상세 설명

#### C - Context (맥락)

\`\`\`
# 나쁜 예: 맥락 없음
"마케팅 전략을 세워줘"

# 좋은 예: 충분한 맥락
"우리 회사는 B2B SaaS 스타트업입니다.
직원 20명, 월 매출 5천만원입니다.
현재 고객은 주로 제조업 중소기업이며,
올해 목표는 신규 고객 50개사 확보입니다."
\`\`\`

#### R - Role (역할)

\`\`\`
# 역할 설정에 따른 응답 차이

# 마케팅 관점
Role: "당신은 10년 경력 B2B 마케터입니다"
→ 리드 생성, 콘텐츠 마케팅 중심 답변

# 기술 관점
Role: "당신은 CTO 출신 기술 컨설턴트입니다"
→ 제품 차별화, 기술 경쟁력 중심 답변

# 재무 관점
Role: "당신은 스타트업 전문 CFO입니다"
→ ROI, 예산 배분, 수익 모델 중심 답변
\`\`\`

#### A - Action (행동)

\`\`\`
# 나쁜 예: 모호한 행동
"이 데이터를 분석해줘"

# 좋은 예: 구체적인 행동
"다음 판매 데이터에서:
1. 월별 매출 추이를 분석하고
2. 성장률이 가장 높은 제품군 3개를 선별하고
3. 다음 분기 매출을 예측하고
4. 성장 기회와 리스크를 각각 3가지씩 도출하세요"
\`\`\`

#### F - Format (형식)

\`\`\`
# 형식 지정 예시

Markdown 표:
"결과를 | 항목 | 분석 | 추천 | 형태의 표로 정리해줘"

JSON:
"다음 JSON 스키마에 맞춰 응답해줘:
{name: string, score: number, recommendation: string}"

번호 목록:
"핵심 포인트를 1~5번 번호 목록으로 정리해줘"

보고서:
"제목, 요약, 본문, 결론 형식의 보고서로 작성해줘"
\`\`\`

#### T - Tone (어조)

\`\`\`
# 어조별 같은 내용의 다른 표현

비즈니스 (공식적):
"해당 프로젝트의 ROI 분석 결과, 투자 대비
152%의 수익률이 예상됩니다."

캐주얼 (비공식적):
"이 프로젝트 하면 투자한 것보다 1.5배 넘게
벌 수 있을 것 같아요!"

교육적:
"ROI(투자수익률)란 투자한 금액 대비 얼마나
이익을 얻었는지를 나타내는 지표입니다."
\`\`\`

### CRAFT 실전 적용

\`\`\`
# 완성된 CRAFT 프롬프트 예시

[C - Context]
우리 팀은 매주 금요일 5개 부서의 주간 보고서를 취합하여
경영진 주간 회의 자료를 작성합니다.
현재 이 작업에 매주 3시간이 소요됩니다.

[R - Role]
당신은 업무 프로세스 자동화 전문 컨설턴트입니다.
Excel, Python, 노코드 도구에 모두 능숙합니다.

[A - Action]
1. 현재 프로세스의 비효율을 분석하세요
2. 자동화 가능한 단계를 식별하세요
3. 최적의 자동화 방법 3가지를 제안하세요
4. 각 방법의 구현 난이도와 예상 시간 절감 효과를 비교하세요

[F - Format]
- 분석 결과를 표 형태로 정리
- 각 방법에 대해 장단점 목록 제공
- 최종 추천안은 실행 계획(타임라인 포함)으로 제시

[T - Tone]
실무자가 바로 실행할 수 있는 구체적이고 실용적인 어조.
기술 용어는 쉽게 풀어서 설명합니다.
\`\`\`

## 실습 예제

\`\`\`python
# CRAFT 프레임워크를 코드로 구현

def build_craft_prompt(context, role, action, format_spec, tone):
    """CRAFT 프레임워크 기반 프롬프트 생성기"""
    prompt = f"""
[Context]
{context}

[Role]
{role}

[Action]
{action}

[Format]
{format_spec}

[Tone]
{tone}
"""
    return prompt.strip()

# 업무 자동화 분석 프롬프트 생성
prompt = build_craft_prompt(
    context="중소기업 인사팀에서 매월 급여 명세서를 200명분 수동 작성 중. "
            "Excel에 직원 정보와 급여 데이터가 있음.",
    role="당신은 HR 프로세스 자동화 전문가입니다. "
         "Python과 Excel VBA에 능숙합니다.",
    action="1. 현재 프로세스의 병목점을 3개 이상 식별\\n"
           "2. Python 자동화 솔루션의 개요를 설계\\n"
           "3. 단계별 구현 코드를 작성\\n"
           "4. 예상 시간 절감 효과를 산출",
    format_spec="각 단계를 명확한 제목과 함께 구분. "
                "코드는 주석 포함. 최종 요약은 표 형식.",
    tone="실무 담당자가 이해할 수 있는 친절하고 구체적인 어조"
)

print(prompt)
\`\`\`

### 복잡한 작업 분해 전략

복잡한 작업은 여러 개의 CRAFT 프롬프트로 분해하여 순차적으로 처리합니다:

\`\`\`
대형 프로젝트 자동화 프롬프트 체인:

프롬프트 1: 현황 분석 (CRAFT)
    ↓ 출력을 다음 프롬프트의 Context로 전달
프롬프트 2: 솔루션 설계 (CRAFT)
    ↓ 설계안을 다음 프롬프트의 Context로 전달
프롬프트 3: 코드 구현 (CRAFT)
    ↓ 코드를 다음 프롬프트의 Context로 전달
프롬프트 4: 테스트 및 검증 (CRAFT)
\`\`\`

## 정리
CRAFT 프레임워크는 프롬프트를 체계적으로 구성하기 위한 강력한 도구입니다. 5가지 요소(Context, Role, Action, Format, Tone)를 명확히 정의하면 일관성 있고 고품질의 AI 응답을 얻을 수 있습니다. 다음 레슨에서는 출력 형식의 제어와 검증 방법을 자세히 다루겠습니다.
`,contentEn:`# CRAFT Framework

## Learning Objectives
- Understand each element of the CRAFT framework
- Master prompt writing using Context-Role-Action-Format-Tone
- Learn to decompose complex tasks into structured prompts
- Practice applying CRAFT to real work scenarios

## Key Concepts

### What Is CRAFT?

CRAFT is an acronym for the 5 key elements of an effective prompt:

| Element | Full Name | Purpose | Question |
|---------|-----------|---------|----------|
| **C** | Context | Background & situation | What's the situation? |
| **R** | Role | Role & expertise | Who should respond? |
| **A** | Action | Task to perform | What needs to be done? |
| **F** | Format | Output format | How should it be formatted? |
| **T** | Tone | Voice & style | What tone should be used? |

### Detailed Element Descriptions

#### C - Context

\`\`\`
# Bad example: No context
"Create a marketing strategy"

# Good example: Sufficient context
"Our company is a B2B SaaS startup.
We have 20 employees and $40K monthly revenue.
Our current customers are mainly SME manufacturers.
This year's goal is to acquire 50 new customers."
\`\`\`

#### R - Role

\`\`\`
# Different responses based on role setting

# Marketing perspective
Role: "You are a B2B marketer with 10 years of experience"
→ Lead generation, content marketing focused answers

# Technical perspective
Role: "You are a tech consultant with CTO background"
→ Product differentiation, technical advantage focused answers

# Financial perspective
Role: "You are a CFO specializing in startups"
→ ROI, budget allocation, revenue model focused answers
\`\`\`

#### A - Action

\`\`\`
# Bad example: Vague action
"Analyze this data"

# Good example: Specific actions
"From the following sales data:
1. Analyze monthly revenue trends
2. Identify the top 3 product lines by growth rate
3. Forecast next quarter's revenue
4. Identify 3 growth opportunities and 3 risks each"
\`\`\`

#### F - Format

\`\`\`
# Format specification examples

Markdown table:
"Present results as | Item | Analysis | Recommendation | table"

JSON:
"Respond according to this JSON schema:
{name: string, score: number, recommendation: string}"

Numbered list:
"Organize key points as a numbered list 1-5"

Report:
"Write as a report with title, summary, body, and conclusion"
\`\`\`

#### T - Tone

\`\`\`
# Same content in different tones

Business (formal):
"Based on the ROI analysis of this project, an expected
return of 152% on investment is projected."

Casual (informal):
"This project looks like it'll bring back more than
1.5x what you put in!"

Educational:
"ROI (Return on Investment) is a metric that shows how
much profit you've earned relative to what you invested."
\`\`\`

### CRAFT in Practice

\`\`\`
# Complete CRAFT Prompt Example

[C - Context]
Our team compiles weekly reports from 5 departments
every Friday to create executive meeting materials.
Currently, this task takes 3 hours each week.

[R - Role]
You are a business process automation consultant.
You are proficient in Excel, Python, and no-code tools.

[A - Action]
1. Analyze inefficiencies in the current process
2. Identify automatable steps
3. Propose 3 optimal automation methods
4. Compare each method's difficulty and estimated time savings

[F - Format]
- Present analysis results in table format
- Provide pros/cons list for each method
- Present final recommendation as an action plan with timeline

[T - Tone]
Concrete and practical tone that practitioners can
immediately act on. Explain technical terms simply.
\`\`\`

## Practice Example

\`\`\`python
# CRAFT Framework implemented in code

def build_craft_prompt(context, role, action, format_spec, tone):
    """CRAFT framework-based prompt generator"""
    prompt = f"""
[Context]
{context}

[Role]
{role}

[Action]
{action}

[Format]
{format_spec}

[Tone]
{tone}
"""
    return prompt.strip()

# Generate work automation analysis prompt
prompt = build_craft_prompt(
    context="HR team at an SME manually creates 200 payslips monthly. "
            "Employee info and salary data are in Excel.",
    role="You are an HR process automation expert. "
         "Proficient in Python and Excel VBA.",
    action="1. Identify 3+ bottlenecks in current process\\n"
           "2. Design a Python automation solution overview\\n"
           "3. Write step-by-step implementation code\\n"
           "4. Calculate expected time savings",
    format_spec="Separate each step with clear headings. "
                "Include comments in code. Final summary in table format.",
    tone="Friendly, specific tone understandable by practitioners"
)

print(prompt)
\`\`\`

### Complex Task Decomposition Strategy

Complex tasks can be broken into multiple CRAFT prompts processed sequentially:

\`\`\`
Large project automation prompt chain:

Prompt 1: Current state analysis (CRAFT)
    ↓ Pass output as Context to next prompt
Prompt 2: Solution design (CRAFT)
    ↓ Pass design as Context to next prompt
Prompt 3: Code implementation (CRAFT)
    ↓ Pass code as Context to next prompt
Prompt 4: Testing & validation (CRAFT)
\`\`\`

## Summary
The CRAFT framework is a powerful tool for systematically structuring prompts. Clearly defining the 5 elements (Context, Role, Action, Format, Tone) ensures consistent, high-quality AI responses. In the next lesson, we'll dive deep into output format control and validation methods.
`};export{e as default};
