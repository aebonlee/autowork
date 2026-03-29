const lesson = {
  titleKo: 'AI 워크플로우 구축',
  titleEn: 'Building AI Workflows',
  contentKo: `## AI 워크플로우란?

AI 워크플로우는 여러 AI 작업을 연결하여 복잡한 업무를 자동화하는 파이프라인입니다. LangChain 같은 프레임워크를 사용하면 AI 에이전트와 도구를 체계적으로 조합할 수 있습니다.

## LangChain 기초

LangChain은 LLM 기반 애플리케이션을 구축하기 위한 프레임워크입니다.

\`\`\`javascript
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';

const model = new ChatOpenAI({ modelName: 'gpt-4o' });
const prompt = PromptTemplate.fromTemplate(
  '{topic}에 대한 블로그 글의 개요를 작성하세요.'
);

const chain = RunnableSequence.from([prompt, model]);
const result = await chain.invoke({ topic: 'AI 자동화' });
\`\`\`

## 에이전트 패턴

에이전트는 도구를 활용하여 스스로 판단하고 행동하는 AI입니다.

\`\`\`javascript
import { createReactAgent } from '@langchain/langgraph/prebuilt';

const agent = createReactAgent({
  llm: model,
  tools: [searchTool, calculatorTool, webBrowserTool],
});

// 에이전트가 필요한 도구를 자동으로 선택하여 실행
const result = await agent.invoke({
  messages: [{ role: 'user', content: '서울 날씨를 검색하고 요약해줘' }],
});
\`\`\`

## RAG (검색 증강 생성)

자체 데이터를 AI에 연결하여 정확한 답변을 생성합니다.

\`\`\`
[문서 수집] → [청크 분할] → [임베딩 생성] → [벡터 DB 저장]
                                                    ↓
[사용자 질문] → [유사 문서 검색] → [컨텍스트 + 질문] → [AI 답변]
\`\`\`

- **벡터 DB**: Supabase pgvector, Pinecone, Chroma 등
- **임베딩 모델**: OpenAI text-embedding-3-small 권장

## 노코드 도구와 AI 결합

- **n8n + AI**: 워크플로우에 AI 노드 추가
- **Make + OpenAI**: 시나리오에 GPT 모듈 통합
- **Zapier AI**: 트리거 기반 AI 자동화

## 실전 워크플로우 예시

\`\`\`
이메일 수신 → AI 분류 → 긴급도 판단 → 자동 응답/담당자 배정
\`\`\`

> 팁: 간단한 작업부터 시작하고, 점진적으로 복잡한 워크플로우를 구축하세요.`,
  contentEn: `## What is an AI Workflow?

An AI workflow is a pipeline that chains multiple AI tasks to automate complex processes. Frameworks like LangChain help systematically combine AI agents and tools.

## LangChain Basics

LangChain is a framework for building LLM-powered applications.

\`\`\`javascript
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';

const model = new ChatOpenAI({ modelName: 'gpt-4o' });
const prompt = PromptTemplate.fromTemplate(
  'Write a blog post outline about {topic}.'
);

const chain = RunnableSequence.from([prompt, model]);
const result = await chain.invoke({ topic: 'AI Automation' });
\`\`\`

## Agent Patterns

Agents are AI systems that reason and act autonomously using tools.

\`\`\`javascript
import { createReactAgent } from '@langchain/langgraph/prebuilt';

const agent = createReactAgent({
  llm: model,
  tools: [searchTool, calculatorTool, webBrowserTool],
});

// Agent automatically selects and executes needed tools
const result = await agent.invoke({
  messages: [{ role: 'user', content: 'Search Seoul weather and summarize' }],
});
\`\`\`

## RAG (Retrieval-Augmented Generation)

Connect your own data to AI for accurate, grounded answers.

\`\`\`
[Collect docs] → [Chunk split] → [Create embeddings] → [Store in vector DB]
                                                              ↓
[User question] → [Search similar docs] → [Context + question] → [AI answer]
\`\`\`

- **Vector DB**: Supabase pgvector, Pinecone, Chroma
- **Embedding model**: OpenAI text-embedding-3-small recommended

## Combining AI with No-Code Tools

- **n8n + AI**: Add AI nodes to workflows
- **Make + OpenAI**: Integrate GPT modules into scenarios
- **Zapier AI**: Trigger-based AI automation

## Practical Workflow Example

\`\`\`
Email received → AI classify → Assess urgency → Auto-reply / Assign agent
\`\`\`

> Tip: Start with simple tasks and gradually build more complex workflows.`,
};
export default lesson;
