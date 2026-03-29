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
      { slug: 'what-is-automation', titleKo: '업무자동화란 무엇인가', titleEn: 'What is Work Automation', duration: 15 },
      { slug: 'why-automate', titleKo: '왜 자동화해야 하는가', titleEn: 'Why Automate', duration: 12 },
      { slug: 'automation-types', titleKo: '자동화의 유형과 분류', titleEn: 'Types of Automation', duration: 18 },
      { slug: 'getting-started', titleKo: '자동화 시작하기', titleEn: 'Getting Started', duration: 15 },
      { slug: 'automation-mindset', titleKo: '자동화 마인드셋', titleEn: 'Automation Mindset', duration: 10 },
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
      { slug: 'excel-formulas', titleKo: '핵심 Excel 수식 마스터', titleEn: 'Master Essential Excel Formulas', duration: 20 },
      { slug: 'conditional-formatting', titleKo: '조건부 서식과 데이터 유효성', titleEn: 'Conditional Formatting & Validation', duration: 15 },
      { slug: 'pivot-tables', titleKo: '피벗 테이블 활용', titleEn: 'Pivot Tables Mastery', duration: 18 },
      { slug: 'macro-basics', titleKo: '매크로 녹화와 활용', titleEn: 'Recording & Using Macros', duration: 25 },
      { slug: 'vba-basics', titleKo: 'VBA 기초 프로그래밍', titleEn: 'VBA Basic Programming', duration: 25 },
      { slug: 'advanced-vba', titleKo: 'VBA 고급 자동화', titleEn: 'Advanced VBA Automation', duration: 30 },
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
      { slug: 'python-setup', titleKo: 'Python 환경 설정', titleEn: 'Python Environment Setup', duration: 15 },
      { slug: 'file-automation', titleKo: '파일/폴더 자동 관리', titleEn: 'File & Folder Automation', duration: 25 },
      { slug: 'excel-python', titleKo: 'Python으로 Excel 다루기', titleEn: 'Excel with Python', duration: 30 },
      { slug: 'web-scraping', titleKo: '웹 스크래핑 기초', titleEn: 'Web Scraping Basics', duration: 25 },
      { slug: 'email-automation', titleKo: '이메일 자동화', titleEn: 'Email Automation', duration: 20 },
      { slug: 'pdf-automation', titleKo: 'PDF 처리 자동화', titleEn: 'PDF Processing Automation', duration: 20 },
      { slug: 'scheduler', titleKo: '작업 스케줄링', titleEn: 'Task Scheduling', duration: 15 },
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
      { slug: 'rpa-concepts', titleKo: 'RPA 개념과 도구 비교', titleEn: 'RPA Concepts & Tool Comparison', duration: 15 },
      { slug: 'uipath-basics', titleKo: 'UiPath 기초', titleEn: 'UiPath Basics', duration: 30 },
      { slug: 'power-automate', titleKo: 'Power Automate 활용', titleEn: 'Power Automate', duration: 25 },
      { slug: 'rpa-selectors', titleKo: '셀렉터와 데이터 추출', titleEn: 'Selectors & Data Extraction', duration: 20 },
      { slug: 'rpa-project', titleKo: 'RPA 프로젝트 설계', titleEn: 'RPA Project Design', duration: 20 },
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
      { slug: 'nocode-intro', titleKo: '노코드/로코드 개요', titleEn: 'No-Code/Low-Code Overview', duration: 12 },
      { slug: 'zapier', titleKo: 'Zapier 자동화', titleEn: 'Zapier Automation', duration: 25 },
      { slug: 'make-integromat', titleKo: 'Make(Integromat) 활용', titleEn: 'Make (Integromat)', duration: 25 },
      { slug: 'n8n-automation', titleKo: 'n8n 자동화', titleEn: 'n8n Automation', duration: 20 },
      { slug: 'nocode-project', titleKo: '실전 자동화 시나리오', titleEn: 'Real-World Automation Scenarios', duration: 15 },
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
      { slug: 'ai-overview', titleKo: 'AI 자동화 개요', titleEn: 'AI Automation Overview', duration: 15 },
      { slug: 'prompt-engineering', titleKo: '프롬프트 엔지니어링', titleEn: 'Prompt Engineering', duration: 20 },
      { slug: 'chatgpt-api', titleKo: 'ChatGPT API 활용', titleEn: 'Using ChatGPT API', duration: 25 },
      { slug: 'claude-api', titleKo: 'Claude API 활용', titleEn: 'Using Claude API', duration: 25 },
      { slug: 'ai-document', titleKo: 'AI 문서 처리', titleEn: 'AI Document Processing', duration: 20 },
      { slug: 'ai-workflow', titleKo: 'AI 워크플로우 구축', titleEn: 'Building AI Workflows', duration: 20 },
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
      { slug: 'document-templates', titleKo: '문서 템플릿 자동화', titleEn: 'Document Template Automation', duration: 20 },
      { slug: 'email-workflow', titleKo: '이메일 워크플로우', titleEn: 'Email Workflow Automation', duration: 18 },
      { slug: 'pdf-workflow', titleKo: 'PDF 자동 생성', titleEn: 'Automated PDF Generation', duration: 25 },
      { slug: 'ocr-digitization', titleKo: 'OCR과 문서 디지털화', titleEn: 'OCR & Document Digitization', duration: 20 },
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
      { slug: 'data-collection', titleKo: '데이터 수집 자동화', titleEn: 'Automated Data Collection', duration: 25 },
      { slug: 'data-cleaning', titleKo: '데이터 정제 자동화', titleEn: 'Automated Data Cleaning', duration: 20 },
      { slug: 'data-visualization', titleKo: '데이터 시각화 자동화', titleEn: 'Automated Data Visualization', duration: 22 },
      { slug: 'data-pipeline', titleKo: '데이터 파이프라인', titleEn: 'Data Pipeline Design', duration: 25 },
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
      { slug: 'workflow-design', titleKo: '워크플로우 설계 원칙', titleEn: 'Workflow Design Principles', duration: 20 },
      { slug: 'error-handling', titleKo: '에러 처리와 모니터링', titleEn: 'Error Handling & Monitoring', duration: 18 },
      { slug: 'integration-patterns', titleKo: '시스템 연동 패턴', titleEn: 'System Integration Patterns', duration: 22 },
      { slug: 'scaling-automation', titleKo: '자동화 확장 전략', titleEn: 'Scaling Automation Strategy', duration: 18 },
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
      { slug: 'invoice-automation', titleKo: '청구서 자동 처리 시스템', titleEn: 'Invoice Processing System', duration: 40 },
      { slug: 'hr-automation', titleKo: '인사/급여 자동화 프로젝트', titleEn: 'HR & Payroll Automation Project', duration: 35 },
      { slug: 'marketing-automation', titleKo: '마케팅 자동화', titleEn: 'Marketing Automation', duration: 35 },
      { slug: 'custom-project', titleKo: '나만의 자동화 프로젝트', titleEn: 'Build Your Own Automation', duration: 45 },
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
      { slug: 'prompt-basics', titleKo: '프롬프트 엔지니어링 기초', titleEn: 'Prompt Engineering Basics', duration: 25 },
      { slug: 'system-prompt-design', titleKo: '시스템 프롬프트 설계', titleEn: 'System Prompt Design', duration: 20 },
      { slug: 'craft-framework', titleKo: 'CRAFT 프레임워크', titleEn: 'CRAFT Framework', duration: 22 },
      { slug: 'output-formatting', titleKo: '출력 형식과 검증', titleEn: 'Output Formatting & Validation', duration: 18 },
      { slug: 'few-shot-learning', titleKo: 'Few-shot 학습과 예제', titleEn: 'Few-shot Learning & Examples', duration: 20 },
      { slug: 'prompt-security', titleKo: '프롬프트 보안', titleEn: 'Prompt Security', duration: 20 },
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
    categorySlugs: ['ai', 'rpa', 'nocode'],
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
