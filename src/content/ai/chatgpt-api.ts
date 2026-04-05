const lesson = {
  titleKo: 'ChatGPT API 활용',
  titleEn: 'Using ChatGPT API',
  contentKo: `## OpenAI API 시작하기

ChatGPT API를 사용하려면 OpenAI 플랫폼에서 API 키를 발급받아야 합니다. API 키는 환경 변수로 안전하게 관리하세요.

\`\`\`bash
# .env 파일
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
\`\`\`

## 기본 API 호출

\`\`\`javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    { role: 'system', content: '당신은 도움이 되는 비서입니다.' },
    { role: 'user', content: '오늘 할 일 목록을 만들어주세요.' },
  ],
  temperature: 0.7,
});

console.log(response.choices[0].message.content);
\`\`\`

## 스트리밍 응답

실시간으로 응답을 받아 사용자 경험을 향상시킬 수 있습니다.

\`\`\`javascript
const stream = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: '짧은 이야기를 써주세요' }],
  stream: true,
});

for await (const chunk of stream) {
  const text = chunk.choices[0]?.delta?.content || '';
  process.stdout.write(text);
}
\`\`\`

## Function Calling

AI가 외부 함수를 호출할 수 있도록 도구를 정의합니다.

\`\`\`javascript
const tools = [{
  type: 'function',
  function: {
    name: 'get_weather',
    description: '특정 도시의 날씨 정보를 가져옵니다',
    parameters: {
      type: 'object',
      properties: {
        city: { type: 'string', description: '도시 이름' },
      },
      required: ['city'],
    },
  },
}];
\`\`\`

## 모범 사례

- **temperature**: 창의적 작업은 0.7~1.0, 정확한 작업은 0~0.3
- **max_tokens**: 필요한 만큼만 설정하여 비용 절감
- **에러 처리**: rate limit, timeout 등에 대한 재시도 로직 구현
- **보안**: API 키를 절대 클라이언트 코드에 노출하지 마세요`,
  contentEn: `## Getting Started with OpenAI API

To use the ChatGPT API, obtain an API key from the OpenAI platform. Store the key securely as an environment variable.

\`\`\`bash
# .env file
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
\`\`\`

## Basic API Call

\`\`\`javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Create a to-do list for today.' },
  ],
  temperature: 0.7,
});

console.log(response.choices[0].message.content);
\`\`\`

## Streaming Responses

Receive responses in real-time to improve user experience.

\`\`\`javascript
const stream = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'Write a short story' }],
  stream: true,
});

for await (const chunk of stream) {
  const text = chunk.choices[0]?.delta?.content || '';
  process.stdout.write(text);
}
\`\`\`

## Function Calling

Define tools so the AI can invoke external functions.

\`\`\`javascript
const tools = [{
  type: 'function',
  function: {
    name: 'get_weather',
    description: 'Get weather info for a city',
    parameters: {
      type: 'object',
      properties: {
        city: { type: 'string', description: 'City name' },
      },
      required: ['city'],
    },
  },
}];
\`\`\`

## Best Practices

- **temperature**: Use 0.7-1.0 for creative tasks, 0-0.3 for precise tasks
- **max_tokens**: Set only what you need to reduce costs
- **Error handling**: Implement retry logic for rate limits and timeouts
- **Security**: Never expose API keys in client-side code`,
};
export default lesson;
