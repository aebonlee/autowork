const e={titleKo:"Claude API 활용",titleEn:"Using Claude API",contentKo:`## Anthropic API 시작하기

Claude API를 사용하려면 Anthropic 콘솔에서 API 키를 발급받습니다. Claude는 긴 컨텍스트 윈도우와 높은 정확도가 특징입니다.

\`\`\`bash
# .env 파일
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
\`\`\`

## Messages API 기본 사용

\`\`\`javascript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const message = await anthropic.messages.create({
  model: 'claude-sonnet-4-20250514',
  max_tokens: 1024,
  system: '당신은 한국어 기술 문서 전문가입니다.',
  messages: [
    { role: 'user', content: 'React hooks를 설명해주세요.' },
  ],
});

console.log(message.content[0].text);
\`\`\`

## Tool Use (함수 호출)

Claude의 Tool Use 기능으로 외부 시스템과 연동합니다.

\`\`\`javascript
const response = await anthropic.messages.create({
  model: 'claude-sonnet-4-20250514',
  max_tokens: 1024,
  tools: [{
    name: 'search_database',
    description: '데이터베이스에서 정보를 검색합니다',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: '검색어' },
        limit: { type: 'number', description: '결과 수' },
      },
      required: ['query'],
    },
  }],
  messages: [{ role: 'user', content: '최근 주문 내역을 찾아주세요' }],
});
\`\`\`

## 컨텍스트 윈도우 활용

- **Claude Sonnet**: 200K 토큰 컨텍스트 윈도우
- 긴 문서 전체를 한 번에 분석 가능
- PDF, 코드 파일 등 대량 텍스트 처리에 유리

## 프롬프트 캐싱

반복 요청 시 비용을 대폭 절감할 수 있습니다.

\`\`\`javascript
// 시스템 프롬프트에 캐시 설정
system: [{
  type: 'text',
  text: '긴 시스템 프롬프트 내용...',
  cache_control: { type: 'ephemeral' },
}]
\`\`\`

## OpenAI와의 주요 차이점

- **system 필드**: messages 배열이 아닌 별도 파라미터
- **응답 구조**: \`message.content[0].text\`로 접근
- **스트리밍**: \`stream: true\` 대신 \`.stream()\` 메서드 사용`,contentEn:`## Getting Started with Anthropic API

To use the Claude API, obtain an API key from the Anthropic Console. Claude is known for its long context window and high accuracy.

\`\`\`bash
# .env file
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
\`\`\`

## Basic Messages API Usage

\`\`\`javascript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const message = await anthropic.messages.create({
  model: 'claude-sonnet-4-20250514',
  max_tokens: 1024,
  system: 'You are a technical documentation expert.',
  messages: [
    { role: 'user', content: 'Explain React hooks.' },
  ],
});

console.log(message.content[0].text);
\`\`\`

## Tool Use (Function Calling)

Integrate with external systems using Claude's Tool Use feature.

\`\`\`javascript
const response = await anthropic.messages.create({
  model: 'claude-sonnet-4-20250514',
  max_tokens: 1024,
  tools: [{
    name: 'search_database',
    description: 'Search information in the database',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search term' },
        limit: { type: 'number', description: 'Result count' },
      },
      required: ['query'],
    },
  }],
  messages: [{ role: 'user', content: 'Find recent order history' }],
});
\`\`\`

## Context Window

- **Claude Sonnet**: 200K token context window
- Analyze entire long documents in a single request
- Ideal for processing PDFs, code files, and large text

## Prompt Caching

Significantly reduce costs on repeated requests.

\`\`\`javascript
// Set cache on system prompt
system: [{
  type: 'text',
  text: 'Long system prompt content...',
  cache_control: { type: 'ephemeral' },
}]
\`\`\`

## Key Differences from OpenAI

- **system field**: Separate parameter, not inside messages array
- **Response structure**: Access via \`message.content[0].text\`
- **Streaming**: Uses \`.stream()\` method instead of \`stream: true\``};export{e as default};
