const lesson = {
  titleKo: 'AI 어시스턴트 실전 프로젝트',
  titleEn: 'AI Assistant Hands-on Project',
  contentKo: `## 프로젝트 개요

이 레슨에서는 실제 업무에 맞는 AI 어시스턴트를 **기획부터 구축, 테스트, 배포**까지 직접 수행합니다. 앞에서 배운 Custom GPTs, Google Gems, Claude Projects, Copilot Studio 중 가장 적합한 도구를 선택하여 진행합니다.

## 프로젝트 1: 신입사원 온보딩 어시스턴트

### 목표
신입사원이 자주 묻는 질문에 24시간 답변하는 AI 어시스턴트를 구축합니다.

### 1단계: 요구사항 정의

\`\`\`
대상 사용자: 신입사원
주요 기능:
- 사내 규정/정책 질문 답변
- 시스템 사용법 안내
- 부서별 담당자 연결
- 자주 사용하는 양식 안내

필요 자료:
- 사내 규정집 (PDF)
- 시스템 매뉴얼 (PDF/DOCX)
- 부서별 담당자 연락처 (CSV)
- FAQ 목록 (TXT)
\`\`\`

### 2단계: 플랫폼 선택

| 상황 | 추천 플랫폼 |
|------|------------|
| Microsoft 365 사용 기업 | Copilot Studio |
| 소규모 팀, 빠른 구축 | Custom GPTs |
| 문서 양이 매우 많음 | Claude Projects |
| Google Workspace 기업 | Google Gems |

### 3단계: 시스템 프롬프트 작성

\`\`\`
당신은 [회사명]의 신입사원 온보딩 어시스턴트입니다.

## 핵심 원칙
1. 항상 친근하고 환영하는 톤으로 응답합니다
2. Knowledge에 있는 문서만을 근거로 답변합니다
3. 확실하지 않은 내용은 "담당 부서에 문의를 권해드립니다"라고 안내합니다
4. 민감한 급여/인사 정보는 직접 답변하지 않고 HR팀 연락처를 안내합니다

## 응답 형식
- 간결하게 핵심만 먼저 답변
- 필요시 관련 문서 섹션 안내
- 추가 질문이 있는지 확인

## 대화 예시
사용자: "출장비 정산은 어떻게 하나요?"
어시스턴트: "출장비 정산은 다음 절차로 진행됩니다:
1. 사내 포털 → 경비 정산 메뉴 접속
2. 출장 보고서 작성 (일자, 목적, 금액)
3. 영수증 스캔 첨부
4. 상사 승인 요청

※ 자세한 양식은 사내 포털의 '경비 정산 가이드'를 참고해주세요.
추가로 궁금한 사항이 있으시면 말씀해주세요!"
\`\`\`

### 4단계: 테스트 시나리오

\`\`\`
테스트 케이스:

1. 기본 질문: "점심시간이 몇 시예요?"
   → Knowledge에서 근무 규정 참조하여 답변

2. 복잡한 질문: "재택근무 신청하려면 뭐가 필요해요?"
   → 단계별 안내 제공

3. 범위 밖 질문: "내 급여 명세서를 보여줘"
   → HR팀 안내로 리다이렉트

4. 모호한 질문: "도움이 필요해요"
   → 카테고리 선택지 제공

5. 영어 질문: "How do I request PTO?"
   → 한국어로 안내 (또는 영어 대응)
\`\`\`

## 프로젝트 2: 마케팅 콘텐츠 생성기

### 목표
브랜드 가이드라인에 맞는 마케팅 콘텐츠를 일관되게 생성하는 AI 어시스턴트를 구축합니다.

### 시스템 프롬프트

\`\`\`
당신은 [브랜드명]의 마케팅 콘텐츠 전문가입니다.

## 브랜드 보이스
- 톤: 전문적이면서 친근한
- 대상: 25-40세 직장인
- 키워드: 효율, 혁신, 성장

## 생성 가능 콘텐츠
1. SNS 포스트 (Instagram, LinkedIn, Twitter)
2. 이메일 뉴스레터
3. 블로그 아티클 초안
4. 광고 카피

## 형식 규칙
- SNS: 해시태그 5개 이하, 이모지 적절히 사용
- 이메일: 제목 50자 이내, 본문 300단어 이내
- 블로그: H2/H3 구조, 1500-2000단어
- 광고: 헤드라인 10단어 이내, 설명 25단어 이내
\`\`\`

### Knowledge에 추가할 자료

\`\`\`
- 브랜드 가이드라인.pdf
- 과거 성공 캠페인 사례.docx
- 경쟁사 분석.xlsx
- 타겟 페르소나.md
- 톤앤매너 예시집.pdf
\`\`\`

## 프로젝트 3: 기술 지원 챗봇

### 목표
소프트웨어 제품의 기술 지원을 자동화하는 AI 챗봇을 구축합니다.

### 시스템 프롬프트

\`\`\`
당신은 [제품명] 기술 지원 전문가입니다.

## 지원 단계
1. 문제 파악: 에러 메시지, 발생 환경 확인
2. 기본 해결: Knowledge에서 해결책 검색
3. 고급 해결: 단계별 트러블슈팅 가이드 제공
4. 에스컬레이션: 해결 불가 시 지원 티켓 생성 안내

## 응답 규칙
- 기술 용어는 쉬운 설명을 병기합니다
- 코드 예시는 복사 가능한 형태로 제공합니다
- 해결 후 "문제가 해결되었나요?"로 확인합니다
\`\`\`

## 성공적인 AI 어시스턴트를 위한 체크리스트

\`\`\`
□ 명확한 역할과 범위 정의
□ 충분한 Knowledge 자료 준비
□ 에지 케이스 대응 규칙 수립
□ 할루시네이션 방지 규칙 포함
□ 10개 이상의 테스트 시나리오 수행
□ 실제 사용자 피드백 수집
□ 정기적인 Knowledge 업데이트 계획
□ 보안 및 개인정보 보호 검토
\`\`\`

## 지속적인 개선

\`\`\`
[AI 어시스턴트 개선 사이클]

1. 모니터링: 사용자 질문/답변 로그 분석
   ↓
2. 분석: 미답변/오답변 패턴 파악
   ↓
3. 개선: Knowledge 추가, Instructions 수정
   ↓
4. 테스트: 개선 사항 검증
   ↓
5. 배포: 업데이트 적용
   ↓
(1번으로 돌아가기)
\`\`\``,
  contentEn: `## Project Overview

In this lesson, you'll build an AI assistant for real work scenarios — from **planning to building, testing, and deployment**. Choose the most suitable tool from Custom GPTs, Google Gems, Claude Projects, or Copilot Studio based on what you've learned.

## Project 1: Employee Onboarding Assistant

### Goal
Build an AI assistant that answers common questions from new hires 24/7.

### Step 1: Define Requirements

\`\`\`
Target users: New employees
Key features:
- Answer company policy/regulation questions
- Guide system usage
- Connect to department contacts
- Provide commonly used form templates

Required materials:
- Company regulations (PDF)
- System manuals (PDF/DOCX)
- Department contact list (CSV)
- FAQ list (TXT)
\`\`\`

### Step 2: Choose Platform

| Scenario | Recommended Platform |
|----------|---------------------|
| Microsoft 365 enterprise | Copilot Studio |
| Small team, quick setup | Custom GPTs |
| Very large document volume | Claude Projects |
| Google Workspace enterprise | Google Gems |

### Step 3: Write System Prompt

\`\`\`
You are the onboarding assistant for [Company Name].

## Core Principles
1. Always respond with a friendly, welcoming tone
2. Only answer based on Knowledge documents
3. For uncertain topics, say "I recommend contacting the relevant department"
4. Never directly answer sensitive salary/HR info — redirect to HR team

## Response Format
- Answer the key point concisely first
- Reference relevant document sections when needed
- Ask if they have additional questions

## Example
User: "How do I submit travel expenses?"
Assistant: "Here's how to submit travel expenses:
1. Company portal → Expense menu
2. Fill out travel report (dates, purpose, amount)
3. Attach scanned receipts
4. Request manager approval

See the 'Expense Guide' on the portal for detailed forms.
Feel free to ask if you need more help!"
\`\`\`

### Step 4: Test Scenarios

\`\`\`
Test cases:

1. Basic question: "What time is lunch?"
   → Answer from work policy in Knowledge

2. Complex question: "What do I need for a WFH request?"
   → Provide step-by-step guide

3. Out-of-scope: "Show me my pay stub"
   → Redirect to HR team

4. Vague question: "I need help"
   → Offer category choices

5. Multi-language: "연차 신청은 어떻게 하나요?"
   → Handle in appropriate language
\`\`\`

## Project 2: Marketing Content Generator

### Goal
Build an AI assistant that generates on-brand marketing content consistently.

### System Prompt

\`\`\`
You are a marketing content specialist for [Brand].

## Brand Voice
- Tone: Professional yet approachable
- Audience: Working professionals 25-40
- Keywords: Efficiency, innovation, growth

## Content Types
1. Social posts (Instagram, LinkedIn, Twitter)
2. Email newsletters
3. Blog article drafts
4. Ad copy

## Format Rules
- Social: Max 5 hashtags, use emojis appropriately
- Email: Subject under 50 chars, body under 300 words
- Blog: H2/H3 structure, 1500-2000 words
- Ads: Headline under 10 words, description under 25 words
\`\`\`

### Knowledge Materials

\`\`\`
- brand-guidelines.pdf
- successful-campaigns.docx
- competitor-analysis.xlsx
- target-personas.md
- tone-examples.pdf
\`\`\`

## Project 3: Technical Support Chatbot

### Goal
Build an AI chatbot to automate software product technical support.

### System Prompt

\`\`\`
You are a technical support specialist for [Product].

## Support Steps
1. Identify: Confirm error message and environment
2. Basic fix: Search Knowledge for solutions
3. Advanced fix: Provide step-by-step troubleshooting guide
4. Escalation: Guide to create support ticket if unresolved

## Response Rules
- Pair technical terms with plain explanations
- Provide code examples in copy-friendly format
- After resolution, confirm with "Is your issue resolved?"
\`\`\`

## Checklist for a Successful AI Assistant

\`\`\`
□ Clear role and scope definition
□ Sufficient Knowledge materials prepared
□ Edge case handling rules established
□ Anti-hallucination rules included
□ 10+ test scenarios executed
□ Real user feedback collected
□ Regular Knowledge update plan
□ Security and privacy review completed
\`\`\`

## Continuous Improvement

\`\`\`
[AI Assistant Improvement Cycle]

1. Monitor: Analyze user question/answer logs
   ↓
2. Analyze: Identify unanswered/wrong answer patterns
   ↓
3. Improve: Add Knowledge, update Instructions
   ↓
4. Test: Verify improvements
   ↓
5. Deploy: Apply updates
   ↓
(Return to step 1)
\`\`\``,
};

export default lesson;
