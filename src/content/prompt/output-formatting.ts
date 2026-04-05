const lesson = {
  titleKo: '출력 형식과 검증',
  titleEn: 'Output Formatting & Validation',
  contentKo: `# 출력 형식과 검증

## 학습 목표
- JSON, XML 등 구조화된 출력 형식을 프롬프트로 제어하는 방법을 학습한다
- 파싱 전략과 에러 처리 방법을 이해한다
- 출력 검증 파이프라인을 설계할 수 있다
- 자동화 워크플로우에서 안정적인 AI 출력을 얻는 방법을 익힌다

## 핵심 내용

### 왜 출력 형식이 중요한가?

자동화 파이프라인에서 AI 출력은 후속 시스템의 입력으로 사용됩니다. 형식이 일관되지 않으면 전체 파이프라인이 중단됩니다.

\`\`\`
AI 출력 → [파싱] → [검증] → [후속 처리] → 결과

형식이 불안정하면:
AI 출력 → [파싱 실패] ✗ → 전체 파이프라인 중단
\`\`\`

### JSON 출력 제어

\`\`\`
# 기본 JSON 출력 요청
다음 정보를 JSON 형식으로 반환하세요:
{
  "name": "이름",
  "category": "카테고리",
  "priority": "high|medium|low",
  "tags": ["태그1", "태그2"]
}

# 더 안정적인 방법: 스키마 명시
다음 JSON 스키마에 정확히 맞춰 응답하세요.
추가 설명 없이 JSON만 반환하세요.

스키마:
{
  "analysis": {
    "sentiment": "positive" | "negative" | "neutral",
    "confidence": number (0-1),
    "keywords": string[],
    "summary": string (100자 이내)
  }
}
\`\`\`

### 구조화된 응답 패턴

| 패턴 | 용도 | 안정성 |
|------|------|--------|
| JSON | API 연동, 데이터 처리 | ★★★★★ |
| CSV | 스프레드시트 입력 | ★★★★☆ |
| Markdown 표 | 보고서, 문서화 | ★★★★☆ |
| XML | 레거시 시스템 연동 | ★★★☆☆ |
| YAML | 설정 파일 생성 | ★★★☆☆ |

### 파싱 전략

\`\`\`python
import json
import re

def parse_ai_json(response_text):
    """AI 응답에서 JSON을 안전하게 추출"""

    # 방법 1: 직접 파싱 시도
    try:
        return json.loads(response_text)
    except json.JSONDecodeError:
        pass

    # 방법 2: 코드 블록에서 추출
    json_match = re.search(r'\`\`\`(?:json)?\\s*(.+?)\\s*\`\`\`',
                           response_text, re.DOTALL)
    if json_match:
        try:
            return json.loads(json_match.group(1))
        except json.JSONDecodeError:
            pass

    # 방법 3: 중괄호 범위에서 추출
    brace_match = re.search(r'(\\{.+\\})', response_text, re.DOTALL)
    if brace_match:
        try:
            return json.loads(brace_match.group(1))
        except json.JSONDecodeError:
            pass

    raise ValueError("JSON 파싱 실패")
\`\`\`

### 출력 검증 파이프라인

\`\`\`python
from dataclasses import dataclass
from typing import Optional

@dataclass
class ValidationResult:
    is_valid: bool
    data: Optional[dict]
    errors: list

def validate_ai_output(raw_output, schema):
    """AI 출력을 검증하는 파이프라인"""
    errors = []

    # 1단계: JSON 파싱
    try:
        data = parse_ai_json(raw_output)
    except ValueError as e:
        return ValidationResult(False, None, [str(e)])

    # 2단계: 필수 필드 확인
    for field in schema.get('required', []):
        if field not in data:
            errors.append(f"필수 필드 누락: {field}")

    # 3단계: 타입 검증
    for field, expected_type in schema.get('types', {}).items():
        if field in data and not isinstance(data[field], expected_type):
            errors.append(f"타입 불일치: {field}")

    # 4단계: 값 범위 검증
    for field, allowed in schema.get('enum', {}).items():
        if field in data and data[field] not in allowed:
            errors.append(f"허용되지 않은 값: {field}={data[field]}")

    return ValidationResult(
        is_valid=len(errors) == 0,
        data=data if len(errors) == 0 else None,
        errors=errors
    )

# 사용 예시
schema = {
    'required': ['sentiment', 'confidence', 'summary'],
    'types': {'confidence': float, 'summary': str},
    'enum': {'sentiment': ['positive', 'negative', 'neutral']}
}

result = validate_ai_output(ai_response, schema)
if result.is_valid:
    process_data(result.data)
else:
    handle_errors(result.errors)
\`\`\`

### 재시도 전략

\`\`\`python
def get_structured_output(prompt, schema, max_retries=3):
    """구조화된 출력을 안정적으로 얻는 함수"""
    for attempt in range(max_retries):
        response = call_ai_api(prompt)
        result = validate_ai_output(response, schema)

        if result.is_valid:
            return result.data

        # 재시도 시 에러 정보를 프롬프트에 포함
        prompt = f"""이전 응답에서 다음 오류가 발생했습니다:
{chr(10).join(result.errors)}

올바른 형식으로 다시 응답해주세요.
{prompt}"""

    raise RuntimeError(f"{max_retries}회 시도 후 유효한 출력을 얻지 못함")
\`\`\`

## 실전 활용 사례

### 자동 보고서 생성

\`\`\`python
REPORT_PROMPT = """
다음 데이터를 분석하여 JSON으로 보고서를 생성하세요.
추가 텍스트 없이 JSON만 반환하세요.

데이터: {data}

출력 스키마:
{{
  "title": "보고서 제목",
  "executive_summary": "3문장 이내 요약",
  "key_metrics": [
    {{"name": "지표명", "value": "값", "trend": "up|down|stable"}}
  ],
  "recommendations": ["추천사항1", "추천사항2"],
  "risk_factors": ["리스크1", "리스크2"]
}}
"""
\`\`\`

## 정리
구조화된 출력은 AI 자동화 파이프라인의 안정성을 결정합니다. JSON 스키마 명시, 다단계 파싱, 검증 파이프라인, 재시도 전략을 조합하면 프로덕션 환경에서도 안정적인 AI 출력을 얻을 수 있습니다. 다음 레슨에서는 Few-shot 학습과 예제 설계 전략을 다루겠습니다.
`,
  contentEn: `# Output Formatting & Validation

## Learning Objectives
- Learn to control structured output formats like JSON and XML through prompts
- Understand parsing strategies and error handling
- Design output validation pipelines
- Master techniques for reliable AI output in automation workflows

## Key Concepts

### Why Does Output Format Matter?

In automation pipelines, AI output serves as input for downstream systems. Inconsistent formatting breaks the entire pipeline.

\`\`\`
AI Output → [Parse] → [Validate] → [Process] → Result

If format is unstable:
AI Output → [Parse Failure] ✗ → Entire pipeline breaks
\`\`\`

### JSON Output Control

\`\`\`
# Basic JSON output request
Return the following information in JSON format:
{
  "name": "name",
  "category": "category",
  "priority": "high|medium|low",
  "tags": ["tag1", "tag2"]
}

# More reliable method: Explicit schema
Respond exactly according to this JSON schema.
Return only JSON without additional explanation.

Schema:
{
  "analysis": {
    "sentiment": "positive" | "negative" | "neutral",
    "confidence": number (0-1),
    "keywords": string[],
    "summary": string (under 100 chars)
  }
}
\`\`\`

### Structured Response Patterns

| Pattern | Use Case | Reliability |
|---------|----------|------------|
| JSON | API integration, data processing | ★★★★★ |
| CSV | Spreadsheet input | ★★★★☆ |
| Markdown table | Reports, documentation | ★★★★☆ |
| XML | Legacy system integration | ★★★☆☆ |
| YAML | Config file generation | ★★★☆☆ |

### Parsing Strategies

\`\`\`python
import json
import re

def parse_ai_json(response_text):
    """Safely extract JSON from AI response"""

    # Method 1: Direct parse attempt
    try:
        return json.loads(response_text)
    except json.JSONDecodeError:
        pass

    # Method 2: Extract from code block
    json_match = re.search(r'\\\`\\\`\\\`(?:json)?\\s*(.+?)\\s*\\\`\\\`\\\`',
                           response_text, re.DOTALL)
    if json_match:
        try:
            return json.loads(json_match.group(1))
        except json.JSONDecodeError:
            pass

    # Method 3: Extract from brace range
    brace_match = re.search(r'(\\{.+\\})', response_text, re.DOTALL)
    if brace_match:
        try:
            return json.loads(brace_match.group(1))
        except json.JSONDecodeError:
            pass

    raise ValueError("JSON parsing failed")
\`\`\`

### Output Validation Pipeline

\`\`\`python
from dataclasses import dataclass
from typing import Optional

@dataclass
class ValidationResult:
    is_valid: bool
    data: Optional[dict]
    errors: list

def validate_ai_output(raw_output, schema):
    """Pipeline for validating AI output"""
    errors = []

    # Step 1: JSON parsing
    try:
        data = parse_ai_json(raw_output)
    except ValueError as e:
        return ValidationResult(False, None, [str(e)])

    # Step 2: Required fields check
    for field in schema.get('required', []):
        if field not in data:
            errors.append(f"Missing required field: {field}")

    # Step 3: Type validation
    for field, expected_type in schema.get('types', {}).items():
        if field in data and not isinstance(data[field], expected_type):
            errors.append(f"Type mismatch: {field}")

    # Step 4: Value range validation
    for field, allowed in schema.get('enum', {}).items():
        if field in data and data[field] not in allowed:
            errors.append(f"Invalid value: {field}={data[field]}")

    return ValidationResult(
        is_valid=len(errors) == 0,
        data=data if len(errors) == 0 else None,
        errors=errors
    )

# Usage
schema = {
    'required': ['sentiment', 'confidence', 'summary'],
    'types': {'confidence': float, 'summary': str},
    'enum': {'sentiment': ['positive', 'negative', 'neutral']}
}

result = validate_ai_output(ai_response, schema)
if result.is_valid:
    process_data(result.data)
else:
    handle_errors(result.errors)
\`\`\`

### Retry Strategy

\`\`\`python
def get_structured_output(prompt, schema, max_retries=3):
    """Get structured output reliably with retries"""
    for attempt in range(max_retries):
        response = call_ai_api(prompt)
        result = validate_ai_output(response, schema)

        if result.is_valid:
            return result.data

        # Include error info in retry prompt
        prompt = f"""Previous response had these errors:
{chr(10).join(result.errors)}

Please respond again in the correct format.
{prompt}"""

    raise RuntimeError(f"Failed to get valid output after {max_retries} attempts")
\`\`\`

## Practical Use Case

### Automated Report Generation

\`\`\`python
REPORT_PROMPT = """
Analyze the following data and generate a report in JSON.
Return only JSON without additional text.

Data: {data}

Output schema:
{{
  "title": "Report title",
  "executive_summary": "Summary in 3 sentences or less",
  "key_metrics": [
    {{"name": "metric name", "value": "value", "trend": "up|down|stable"}}
  ],
  "recommendations": ["rec1", "rec2"],
  "risk_factors": ["risk1", "risk2"]
}}
"""
\`\`\`

## Summary
Structured output determines the reliability of AI automation pipelines. Combining JSON schema specification, multi-stage parsing, validation pipelines, and retry strategies enables reliable AI output even in production environments. In the next lesson, we'll cover few-shot learning and example design strategies.
`,
};

export default lesson;
