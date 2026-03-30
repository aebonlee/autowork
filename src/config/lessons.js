export const LESSON_CATEGORIES = [
  {
    id: 1,
    slug: 'basics',
    icon: 'fa-bullseye',
    nameKo: '업무자동화 기초',
    nameEn: 'Automation Basics',
    descKo: '업무자동화의 개념과 필요성, 기본 원리를 학습합니다.',
    descEn: 'Learn the concepts, necessity, and basic principles of work automation.',
    level: 'beginner',
    lessons: [
      { slug: 'what-is-automation', titleKo: '업무자동화란 무엇인가', titleEn: 'What is Work Automation', descKo: '반복 업무를 시스템이 대신 처리하는 업무자동화의 핵심 개념', descEn: 'Core concepts of letting systems handle repetitive tasks' },
      { slug: 'why-automate', titleKo: '왜 자동화해야 하는가', titleEn: 'Why Automate', descKo: '시간 절약과 생산성 향상을 위한 자동화의 필요성', descEn: 'Why automation is essential for saving time and boosting productivity' },
      { slug: 'automation-types', titleKo: '자동화의 유형과 분류', titleEn: 'Types of Automation', descKo: '매크로, RPA, AI 등 다양한 자동화 방식의 특징과 비교', descEn: 'Characteristics and comparison of macros, RPA, AI and more' },
      { slug: 'getting-started', titleKo: '자동화 시작하기', titleEn: 'Getting Started', descKo: '첫 자동화 프로젝트를 위한 준비와 단계별 가이드', descEn: 'Preparation and step-by-step guide for your first automation project' },
      { slug: 'automation-mindset', titleKo: '자동화 마인드셋', titleEn: 'Automation Mindset', descKo: '자동화 기회를 발견하고 활용하는 사고방식', descEn: 'Developing the mindset to spot and leverage automation opportunities' },
    ],
  },
  {
    id: 2,
    slug: 'excel',
    icon: 'fa-file-excel',
    nameKo: 'Excel/스프레드시트 자동화',
    nameEn: 'Excel/Spreadsheet Automation',
    descKo: 'Excel 수식, 매크로, VBA를 활용한 업무 자동화를 학습합니다.',
    descEn: 'Learn work automation using Excel formulas, macros, and VBA.',
    level: 'beginner',
    lessons: [
      { slug: 'excel-formulas', titleKo: '핵심 Excel 수식 마스터', titleEn: 'Master Essential Excel Formulas', descKo: 'VLOOKUP, INDEX/MATCH 등 업무에 필수적인 핵심 함수', descEn: 'Essential functions like VLOOKUP, INDEX/MATCH for daily work' },
      { slug: 'conditional-formatting', titleKo: '조건부 서식과 데이터 유효성', titleEn: 'Conditional Formatting & Validation', descKo: '데이터를 시각적으로 강조하고 입력 규칙을 설정하는 방법', descEn: 'Visually highlight data and set up input validation rules' },
      { slug: 'pivot-tables', titleKo: '피벗 테이블 활용', titleEn: 'Pivot Tables Mastery', descKo: '대량 데이터를 요약하고 다차원 분석하는 피벗 테이블', descEn: 'Summarize and analyze large datasets with pivot tables' },
      { slug: 'macro-basics', titleKo: '매크로 녹화와 활용', titleEn: 'Recording & Using Macros', descKo: '반복 작업을 자동으로 실행하는 매크로 녹화와 편집', descEn: 'Record and edit macros to automate repetitive Excel tasks' },
      { slug: 'vba-basics', titleKo: 'VBA 기초 프로그래밍', titleEn: 'VBA Basic Programming', descKo: 'VBA 문법과 기본 프로그래밍으로 Excel 확장하기', descEn: 'Extend Excel with VBA syntax and basic programming' },
      { slug: 'advanced-vba', titleKo: 'VBA 고급 자동화', titleEn: 'Advanced VBA Automation', descKo: 'UserForm, 외부 연동 등 VBA 고급 자동화 기법', descEn: 'Advanced VBA techniques: UserForms, external integrations' },
    ],
  },
  {
    id: 3,
    slug: 'python',
    icon: 'fa-code',
    nameKo: 'Python 업무자동화',
    nameEn: 'Python Work Automation',
    descKo: 'Python을 활용한 파일 처리, 웹 스크래핑, 자동화 스크립트를 학습합니다.',
    descEn: 'Learn file processing, web scraping, and automation scripts with Python.',
    level: 'intermediate',
    lessons: [
      { slug: 'python-setup', titleKo: 'Python 환경 설정', titleEn: 'Python Environment Setup', descKo: 'Python 설치부터 가상환경, IDE 설정까지', descEn: 'From Python installation to virtual environments and IDE setup' },
      { slug: 'file-automation', titleKo: '파일/폴더 자동 관리', titleEn: 'File & Folder Automation', descKo: '파일 이동, 복사, 이름 변경을 자동으로 처리하기', descEn: 'Automatically move, copy, and rename files and folders' },
      { slug: 'excel-python', titleKo: 'Python으로 Excel 다루기', titleEn: 'Excel with Python', descKo: 'openpyxl, pandas로 Excel 읽기/쓰기 자동화', descEn: 'Automate Excel read/write with openpyxl and pandas' },
      { slug: 'web-scraping', titleKo: '웹 스크래핑 기초', titleEn: 'Web Scraping Basics', descKo: 'BeautifulSoup, Selenium으로 웹 데이터 수집하기', descEn: 'Collect web data with BeautifulSoup and Selenium' },
      { slug: 'email-automation', titleKo: '이메일 자동화', titleEn: 'Email Automation', descKo: 'Python으로 이메일 자동 발송과 수신 처리하기', descEn: 'Auto-send emails and process inbox with Python' },
      { slug: 'pdf-automation', titleKo: 'PDF 처리 자동화', titleEn: 'PDF Processing Automation', descKo: 'PDF 생성, 병합, 텍스트 추출 자동화', descEn: 'Automate PDF creation, merging, and text extraction' },
      { slug: 'scheduler', titleKo: '작업 스케줄링', titleEn: 'Task Scheduling', descKo: '크론잡과 스케줄러로 작업을 정기 실행하기', descEn: 'Schedule recurring tasks with cron jobs and schedulers' },
    ],
  },
  {
    id: 4,
    slug: 'rpa',
    icon: 'fa-robot',
    nameKo: 'RPA 도구 활용',
    nameEn: 'RPA Tools',
    descKo: 'UiPath, Power Automate 등 RPA 도구를 활용한 업무 자동화를 학습합니다.',
    descEn: 'Learn work automation using RPA tools like UiPath and Power Automate.',
    level: 'intermediate',
    lessons: [
      { slug: 'rpa-concepts', titleKo: 'RPA 개념과 도구 비교', titleEn: 'RPA Concepts & Tool Comparison', descKo: 'RPA의 작동 원리와 주요 도구 비교 분석', descEn: 'How RPA works and comparison of major RPA tools' },
      { slug: 'uipath-basics', titleKo: 'UiPath 기초', titleEn: 'UiPath Basics', descKo: 'UiPath Studio로 첫 번째 로봇 프로세스 만들기', descEn: 'Build your first robot process with UiPath Studio' },
      { slug: 'power-automate', titleKo: 'Power Automate 활용', titleEn: 'Power Automate', descKo: 'Microsoft Power Automate로 클라우드 업무 자동화', descEn: 'Cloud automation with Microsoft Power Automate' },
      { slug: 'rpa-selectors', titleKo: '셀렉터와 데이터 추출', titleEn: 'Selectors & Data Extraction', descKo: 'UI 요소를 정확하게 식별하고 데이터를 추출하는 방법', descEn: 'Accurately identify UI elements and extract data' },
      { slug: 'rpa-project', titleKo: 'RPA 프로젝트 설계', titleEn: 'RPA Project Design', descKo: 'RPA 프로젝트 기획부터 배포, 유지보수까지', descEn: 'RPA project planning, deployment, and maintenance' },
    ],
  },
  {
    id: 5,
    slug: 'nocode',
    icon: 'fa-bolt',
    nameKo: '노코드/로코드 자동화',
    nameEn: 'No-Code/Low-Code Automation',
    descKo: 'Zapier, Make, n8n 등 노코드 도구로 업무를 자동화합니다.',
    descEn: 'Automate work using no-code tools like Zapier, Make, and n8n.',
    level: 'beginner',
    lessons: [
      { slug: 'nocode-intro', titleKo: '노코드/로코드 개요', titleEn: 'No-Code/Low-Code Overview', descKo: '코딩 없이 앱과 워크플로우를 만드는 노코드 도구 소개', descEn: 'No-code tools to build apps and workflows without coding' },
      { slug: 'zapier', titleKo: 'Zapier 자동화', titleEn: 'Zapier Automation', descKo: 'Zapier로 앱 간 연동을 자동화하는 Zap 만들기', descEn: 'Create Zaps to automate app-to-app integrations' },
      { slug: 'make-integromat', titleKo: 'Make(Integromat) 활용', titleEn: 'Make (Integromat)', descKo: 'Make의 비주얼 에디터로 복잡한 시나리오 구성하기', descEn: 'Build complex scenarios with Make visual editor' },
      { slug: 'n8n-automation', titleKo: 'n8n 자동화', titleEn: 'n8n Automation', descKo: '셀프 호스팅 가능한 오픈소스 자동화 플랫폼 n8n', descEn: 'Self-hostable open-source automation platform n8n' },
      { slug: 'nocode-project', titleKo: '실전 자동화 시나리오', titleEn: 'Real-World Automation Scenarios', descKo: '노코드 도구를 조합한 실전 업무 자동화 시나리오', descEn: 'Real-world automation scenarios combining no-code tools' },
    ],
  },
  {
    id: 6,
    slug: 'ai',
    icon: 'fa-brain',
    nameKo: 'AI 활용 업무자동화',
    nameEn: 'AI-Powered Automation',
    descKo: 'ChatGPT, Claude 등 AI를 활용한 업무 자동화 기법을 학습합니다.',
    descEn: 'Learn automation techniques using AI tools like ChatGPT and Claude.',
    level: 'advanced',
    lessons: [
      { slug: 'ai-overview', titleKo: 'AI 자동화 개요', titleEn: 'AI Automation Overview', descKo: 'AI 기술이 업무자동화에 적용되는 방식과 트렌드', descEn: 'How AI technology is applied to work automation' },
      { slug: 'prompt-engineering', titleKo: '프롬프트 엔지니어링', titleEn: 'Prompt Engineering', descKo: 'AI에게 정확한 결과를 얻기 위한 프롬프트 작성법', descEn: 'Writing prompts to get accurate results from AI' },
      { slug: 'chatgpt-api', titleKo: 'ChatGPT API 활용', titleEn: 'Using ChatGPT API', descKo: 'OpenAI API를 활용한 텍스트 생성과 분석 자동화', descEn: 'Text generation and analysis automation with OpenAI API' },
      { slug: 'claude-api', titleKo: 'Claude API 활용', titleEn: 'Using Claude API', descKo: 'Anthropic Claude API 활용과 코드 자동화', descEn: 'Leveraging Anthropic Claude API for code automation' },
      { slug: 'ai-document', titleKo: 'AI 문서 처리', titleEn: 'AI Document Processing', descKo: 'AI로 문서 요약, 분류, 데이터 추출 자동화하기', descEn: 'Automate document summarization, classification, and extraction with AI' },
      { slug: 'ai-workflow', titleKo: 'AI 워크플로우 구축', titleEn: 'Building AI Workflows', descKo: 'AI 에이전트와 체인을 활용한 복합 워크플로우 구축', descEn: 'Build complex workflows using AI agents and chains' },
    ],
  },
  {
    id: 7,
    slug: 'document',
    icon: 'fa-file-lines',
    nameKo: '문서/이메일 자동화',
    nameEn: 'Document & Email Automation',
    descKo: '문서 생성, 이메일 발송, 보고서 자동화를 학습합니다.',
    descEn: 'Learn document generation, email delivery, and report automation.',
    level: 'intermediate',
    lessons: [
      { slug: 'document-templates', titleKo: '문서 템플릿 자동화', titleEn: 'Document Template Automation', descKo: '반복되는 문서를 템플릿으로 자동 생성하기', descEn: 'Auto-generate recurring documents from templates' },
      { slug: 'email-workflow', titleKo: '이메일 워크플로우', titleEn: 'Email Workflow Automation', descKo: '조건 기반 이메일 발송과 후속 처리 자동화', descEn: 'Condition-based email sending and follow-up automation' },
      { slug: 'pdf-workflow', titleKo: 'PDF 자동 생성', titleEn: 'Automated PDF Generation', descKo: 'HTML/데이터를 PDF로 자동 변환하고 배포하기', descEn: 'Auto-convert HTML/data to PDF and distribute' },
      { slug: 'ocr-digitization', titleKo: 'OCR과 문서 디지털화', titleEn: 'OCR & Document Digitization', descKo: '종이 문서를 디지털 텍스트로 변환하는 OCR 활용법', descEn: 'Convert paper documents to digital text using OCR' },
    ],
  },
  {
    id: 8,
    slug: 'data',
    icon: 'fa-chart-line',
    nameKo: '데이터 수집/분석 자동화',
    nameEn: 'Data Collection & Analysis Automation',
    descKo: '데이터 수집, 정제, 시각화 자동화를 학습합니다.',
    descEn: 'Learn automated data collection, cleaning, and visualization.',
    level: 'intermediate',
    lessons: [
      { slug: 'data-collection', titleKo: '데이터 수집 자동화', titleEn: 'Automated Data Collection', descKo: 'API, 웹, 파일에서 데이터를 자동으로 수집하기', descEn: 'Automatically collect data from APIs, web, and files' },
      { slug: 'data-cleaning', titleKo: '데이터 정제 자동화', titleEn: 'Automated Data Cleaning', descKo: '중복 제거, 형식 통일 등 데이터 정제 자동화', descEn: 'Automate deduplication, format standardization and more' },
      { slug: 'data-visualization', titleKo: '데이터 시각화 자동화', titleEn: 'Automated Data Visualization', descKo: '차트와 대시보드를 자동으로 생성하는 방법', descEn: 'Automatically generate charts and dashboards' },
      { slug: 'data-pipeline', titleKo: '데이터 파이프라인', titleEn: 'Data Pipeline Design', descKo: 'ETL 파이프라인 설계와 데이터 흐름 자동화', descEn: 'Design ETL pipelines and automate data flows' },
    ],
  },
  {
    id: 9,
    slug: 'workflow',
    icon: 'fa-arrows-rotate',
    nameKo: '워크플로우 설계',
    nameEn: 'Workflow Design',
    descKo: '효율적인 업무 프로세스 설계와 최적화를 학습합니다.',
    descEn: 'Learn efficient business process design and optimization.',
    level: 'advanced',
    lessons: [
      { slug: 'workflow-design', titleKo: '워크플로우 설계 원칙', titleEn: 'Workflow Design Principles', descKo: '효율적인 업무 프로세스를 설계하는 핵심 원칙', descEn: 'Core principles for designing efficient business processes' },
      { slug: 'error-handling', titleKo: '에러 처리와 모니터링', titleEn: 'Error Handling & Monitoring', descKo: '자동화 시스템의 에러를 감지하고 대응하는 전략', descEn: 'Strategies for detecting and handling automation errors' },
      { slug: 'integration-patterns', titleKo: '시스템 연동 패턴', titleEn: 'System Integration Patterns', descKo: '서로 다른 시스템을 연결하는 통합 패턴과 미들웨어', descEn: 'Integration patterns and middleware for connecting systems' },
      { slug: 'scaling-automation', titleKo: '자동화 확장 전략', titleEn: 'Scaling Automation Strategy', descKo: '자동화를 조직 전체로 확장하기 위한 전략과 거버넌스', descEn: 'Strategies and governance for scaling automation enterprise-wide' },
    ],
  },
  {
    id: 12,
    slug: 'ai-assistants',
    icon: 'fa-wand-magic-sparkles',
    nameKo: 'AI 어시스턴트 활용',
    nameEn: 'AI Assistants & Custom GPTs',
    descKo: 'Custom GPTs, Google Gems, Claude Projects 등 나만의 AI 어시스턴트를 만들어 업무를 자동화합니다.',
    descEn: 'Build your own AI assistants using Custom GPTs, Google Gems, Claude Projects and more.',
    level: 'intermediate',
    lessons: [
      { slug: 'ai-assistants-overview', titleKo: 'AI 어시스턴트 개요', titleEn: 'AI Assistants Overview', descKo: 'AI 어시스턴트의 종류와 활용 전략 한눈에 보기', descEn: 'Overview of AI assistant types and utilization strategies' },
      { slug: 'custom-gpts', titleKo: 'Custom GPTs 만들기', titleEn: 'Building Custom GPTs', descKo: 'OpenAI GPT Builder로 나만의 업무 전용 GPT 만들기', descEn: 'Create your own task-specific GPT with OpenAI GPT Builder' },
      { slug: 'google-gems', titleKo: 'Google Gems & NotebookLM', titleEn: 'Google Gems & NotebookLM', descKo: 'Gemini Gems와 NotebookLM으로 문서 기반 AI 활용', descEn: 'Document-based AI with Gemini Gems and NotebookLM' },
      { slug: 'claude-projects', titleKo: 'Claude Projects 활용', titleEn: 'Claude Projects', descKo: 'Claude Projects로 팀 지식 기반 AI 어시스턴트 구축', descEn: 'Build team knowledge-based AI assistants with Claude Projects' },
      { slug: 'copilot-studio', titleKo: 'Microsoft Copilot 활용', titleEn: 'Microsoft Copilot Studio', descKo: 'Copilot Studio로 기업용 AI 챗봇 구축하기', descEn: 'Build enterprise AI chatbots with Copilot Studio' },
      { slug: 'ai-assistant-project', titleKo: 'AI 어시스턴트 실전 프로젝트', titleEn: 'AI Assistant Hands-on Project', descKo: '실제 업무에 맞는 AI 어시스턴트 기획부터 배포까지', descEn: 'Plan and deploy AI assistants for your real work scenarios' },
    ],
  },
  {
    id: 10,
    slug: 'projects',
    icon: 'fa-rocket',
    nameKo: '실전 프로젝트',
    nameEn: 'Real-World Projects',
    descKo: '실제 업무 시나리오에 기반한 종합 자동화 프로젝트를 수행합니다.',
    descEn: 'Complete comprehensive automation projects based on real work scenarios.',
    level: 'advanced',
    lessons: [
      { slug: 'invoice-automation', titleKo: '청구서 자동 처리 시스템', titleEn: 'Invoice Processing System', descKo: '청구서 수신부터 데이터 입력, 승인까지 전 과정 자동화', descEn: 'Automate the full invoice cycle from receipt to approval' },
      { slug: 'hr-automation', titleKo: '인사/급여 자동화 프로젝트', titleEn: 'HR & Payroll Automation Project', descKo: '입사부터 급여 계산, 퇴사 처리까지 인사 업무 자동화', descEn: 'Automate HR from onboarding to payroll to offboarding' },
      { slug: 'marketing-automation', titleKo: '마케팅 자동화', titleEn: 'Marketing Automation', descKo: '리드 수집, 이메일 캠페인, 성과 분석 자동화', descEn: 'Automate lead capture, email campaigns, and analytics' },
      { slug: 'custom-project', titleKo: '나만의 자동화 프로젝트', titleEn: 'Build Your Own Automation', descKo: '나만의 업무를 분석하고 맞춤형 자동화 시스템 구축하기', descEn: 'Analyze your own workflow and build a custom automation system' },
    ],
  },
  {
    id: 11,
    slug: 'prompt',
    icon: 'fa-wand-magic-sparkles',
    nameKo: '프롬프트 학습',
    nameEn: 'Prompt Learning',
    descKo: '효과적인 프롬프트 작성법과 LLM 활용 전략을 체계적으로 학습합니다.',
    descEn: 'Learn effective prompt engineering techniques and LLM utilization strategies.',
    level: 'intermediate',
    lessons: [
      { slug: 'prompt-basics', titleKo: '프롬프트 엔지니어링 기초', titleEn: 'Prompt Engineering Basics', descKo: 'LLM의 동작 원리와 효과적인 프롬프트 구성 요소', descEn: 'How LLMs work and the components of effective prompts' },
      { slug: 'system-prompt-design', titleKo: '시스템 프롬프트 설계', titleEn: 'System Prompt Design', descKo: 'AI의 역할과 행동 규칙을 정의하는 시스템 프롬프트', descEn: 'Define AI role and behavior rules with system prompts' },
      { slug: 'craft-framework', titleKo: 'CRAFT 프레임워크', titleEn: 'CRAFT Framework', descKo: 'Context-Role-Action-Format-Tone 5단계 프롬프트 설계', descEn: '5-step prompt design: Context-Role-Action-Format-Tone' },
      { slug: 'output-formatting', titleKo: '출력 형식과 검증', titleEn: 'Output Formatting & Validation', descKo: 'JSON, 표 등 구조화된 출력을 얻기 위한 포맷 지정법', descEn: 'Format specifications for structured output like JSON and tables' },
      { slug: 'few-shot-learning', titleKo: 'Few-shot 학습과 예제', titleEn: 'Few-shot Learning & Examples', descKo: '예제를 활용한 in-context learning과 CoT 기법', descEn: 'In-context learning and Chain-of-Thought with examples' },
      { slug: 'prompt-security', titleKo: '프롬프트 보안', titleEn: 'Prompt Security', descKo: '프롬프트 인젝션 방지와 안전한 AI 활용을 위한 가드레일', descEn: 'Guardrails against prompt injection for safe AI usage' },
    ],
  },
];

export const MENU_GROUPS = [
  {
    id: 'oa',
    nameKo: 'OA 업무자동화',
    nameEn: 'OA Automation',
    icon: 'fa-desktop',
    categorySlugs: ['basics', 'excel', 'python', 'document', 'data'],
  },
  {
    id: 'ai-auto',
    nameKo: 'AI활용 업무자동화',
    nameEn: 'AI Automation',
    icon: 'fa-brain',
    categorySlugs: ['ai', 'rpa', 'nocode', 'ai-assistants'],
  },
  {
    id: 'projects',
    nameKo: '실전 프로젝트',
    nameEn: 'Real Projects',
    icon: 'fa-rocket',
    categorySlugs: ['workflow', 'projects'],
  },
];

export function getCategoriesByGroup(groupId) {
  const group = MENU_GROUPS.find(g => g.id === groupId);
  if (!group) return [];
  return group.categorySlugs.map(slug => getCategoryBySlug(slug)).filter(Boolean);
}

export function getCategoryBySlug(slug) {
  return LESSON_CATEGORIES.find(c => c.slug === slug);
}

export function getLessonBySlug(categorySlug, lessonSlug) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  return category.lessons.find(l => l.slug === lessonSlug);
}

export function getTotalLessonCount() {
  return LESSON_CATEGORIES.reduce((acc, cat) => acc + cat.lessons.length, 0);
}
