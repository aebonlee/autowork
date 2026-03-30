import { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { LESSON_CATEGORIES } from '../../config/lessons';
import SEO from '../../components/SEO';
import '../../styles/intro-page.css';

const MENU = [
  {
    id: 'info', icon: 'fa-compass', labelKo: '사이트 안내', labelEn: 'Site Info', color: 'blue',
    children: [
      { id: 'about', icon: 'fa-info-circle', labelKo: 'AutoWork 소개', labelEn: 'About AutoWork' },
      { id: 'guide', icon: 'fa-book-open', labelKo: '사용가이드', labelEn: 'User Guide' },
    ],
  },
  {
    id: 'roadmap', icon: 'fa-route', labelKo: '학습 로드맵', labelEn: 'Learning Roadmap', color: 'green',
    children: [],
  },
  {
    id: 'tools', icon: 'fa-wrench', labelKo: '도구 소개', labelEn: 'Tool Intro', color: 'purple',
    children: [],
  },
];

function AboutSection({ t }) {
  const features = [
    { icon: 'fa-layer-group', titleKey: 'feature1Title', descKey: 'feature1Desc', color: '#1B3A6B' },
    { icon: 'fa-book-open', titleKey: 'feature2Title', descKey: 'feature2Desc', color: '#00855A' },
    { icon: 'fa-toolbox', titleKey: 'feature3Title', descKey: 'feature3Desc', color: '#8B1AC8' },
    { icon: 'fa-globe', titleKey: 'feature4Title', descKey: 'feature4Desc', color: '#C87200' },
  ];

  return (
    <>
      <div className="ck-content-box">
        <div className="ck-content-header ck-ch--blue">
          <i className="fa-solid fa-info-circle" />
          <div className="ck-ch-text">
            <h2>{t('intro.aboutTitle')}</h2>
            <p>{t('intro.aboutSubtitle')}</p>
          </div>
        </div>
        <div className="ck-content-body">
          <div className="intro-features-grid">
            {features.map((f, i) => (
              <div key={i} className="intro-feature-card">
                <div className="intro-feature-icon" style={{ background: `${f.color}12`, color: f.color }}>
                  <i className={`fa-solid ${f.icon}`} />
                </div>
                <h3>{t(`intro.${f.titleKey}`)}</h3>
                <p>{t(`intro.${f.descKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ck-content-box">
        <div className="ck-content-header">
          <i className="fa-solid fa-link" />
          <h2>{t('intro.aboutTitle').includes('소개') ? '바로가기' : 'Quick Links'}</h2>
        </div>
        <div className="ck-content-body">
          <div className="intro-links-grid">
            <Link to="/lessons" className="intro-link-card">
              <i className="fa-solid fa-book" />
              <span>{t('nav.lessons')}</span>
            </Link>
            <Link to="/lessons/excel" className="intro-link-card">
              <i className="fa-solid fa-table" />
              <span>{t('nav.excel')}</span>
            </Link>
            <Link to="/lessons/python" className="intro-link-card">
              <i className="fa-brands fa-python" />
              <span>{t('nav.python')}</span>
            </Link>
            <Link to="/lessons/ai" className="intro-link-card">
              <i className="fa-solid fa-brain" />
              <span>{t('nav.ai')}</span>
            </Link>
            <Link to="/community/board" className="intro-link-card">
              <i className="fa-solid fa-users" />
              <span>{t('nav.community')}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function GuideSection({ language, t }) {
  const steps = language === 'ko' ? [
    { title: '회원가입 / 로그인', desc: 'Google 또는 카카오 계정으로 간편 로그인하세요.' },
    { title: '카테고리 선택', desc: '11개 학습 카테고리에서 관심 있는 분야를 선택하세요.' },
    { title: '레슨 학습', desc: '체계적인 레슨을 순서대로 학습하세요.' },
    { title: '코드 실습', desc: '예제 코드를 직접 실행하고 응용해 보세요.' },
    { title: '커뮤니티 참여', desc: '질문을 올리고 경험을 공유하세요.' },
    { title: '실전 프로젝트', desc: '실무 시나리오 기반 프로젝트로 실력을 완성하세요.' },
  ] : [
    { title: 'Sign Up / Login', desc: 'Sign in easily with Google or Kakao.' },
    { title: 'Choose Category', desc: 'Select a topic from 11 learning categories.' },
    { title: 'Study Lessons', desc: 'Follow structured lessons step by step.' },
    { title: 'Practice Code', desc: 'Run example code and try variations.' },
    { title: 'Join Community', desc: 'Ask questions and share experiences.' },
    { title: 'Real Projects', desc: 'Build skills with real-world scenario projects.' },
  ];

  return (
    <div className="ck-content-box">
      <div className="ck-content-header ck-ch--green">
        <i className="fa-solid fa-book-open" />
        <div className="ck-ch-text">
          <h2>{t('intro.guide')}</h2>
          <p>{t('intro.guideDesc')}</p>
        </div>
      </div>
      <div className="ck-content-body">
        <div className="intro-guide-steps">
          {steps.map((step, i) => (
            <div key={i} className="intro-guide-step">
              <div className="intro-step-number">{i + 1}</div>
              <div className="intro-step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RoadmapSection({ language }) {
  const levels = [
    {
      level: language === 'ko' ? '입문' : 'Beginner',
      levelEn: 'Beginner',
      color: '#00855A',
      desc: language === 'ko' ? '자동화의 기초 개념을 익히고, 코딩 없이 시작할 수 있는 도구들을 학습합니다.' : 'Learn foundational concepts and start with tools that require no coding.',
      categories: LESSON_CATEGORIES.filter(c => c.level === 'beginner'),
    },
    {
      level: language === 'ko' ? '중급' : 'Intermediate',
      levelEn: 'Intermediate',
      color: '#C87200',
      desc: language === 'ko' ? '프로그래밍과 전문 도구를 활용한 본격적인 업무자동화를 학습합니다.' : 'Learn serious automation with programming and professional tools.',
      categories: LESSON_CATEGORIES.filter(c => c.level === 'intermediate'),
    },
    {
      level: language === 'ko' ? '고급' : 'Advanced',
      levelEn: 'Advanced',
      color: '#C8102E',
      desc: language === 'ko' ? 'AI 기술과 설계 원칙을 적용하여 실전 프로젝트를 완성합니다.' : 'Apply AI technology and design principles to complete real-world projects.',
      categories: LESSON_CATEGORIES.filter(c => c.level === 'advanced'),
    },
  ];

  const totalLessons = LESSON_CATEGORIES.reduce((s, c) => s + c.lessons.length, 0);

  return (
    <div className="ck-content-box">
      <div className="ck-content-header ck-ch--green">
        <i className="fa-solid fa-route" />
        <div className="ck-ch-text">
          <h2>{language === 'ko' ? '학습 로드맵' : 'Learning Roadmap'}</h2>
          <p>{language === 'ko' ? '12개 카테고리, 총 ' + totalLessons + '개 레슨의 단계별 학습 경로' : '12 categories, ' + totalLessons + ' lessons — step-by-step learning path'}</p>
        </div>
      </div>
      <div className="ck-content-body">
        <div className="intro-roadmap-v2">
          {levels.map((lv, i) => (
            <div key={i} className="roadmap-stage">
              <div className="roadmap-stage-header">
                <div className="roadmap-stage-badge" style={{ background: lv.color }}>
                  <span className="roadmap-stage-step">STEP {i + 1}</span>
                  <span className="roadmap-stage-level">{lv.level}</span>
                </div>
                <p className="roadmap-stage-desc">{lv.desc}</p>
              </div>
              <div className="roadmap-cards">
                {lv.categories.map(cat => (
                  <Link key={cat.slug} to={`/lessons/${cat.slug}`} className="roadmap-card" style={{ '--roadmap-color': lv.color }}>
                    <div className="roadmap-card-icon" style={{ background: `${lv.color}14`, color: lv.color }}>
                      <i className={`fa-solid ${cat.icon}`} />
                    </div>
                    <div className="roadmap-card-info">
                      <h4>{language === 'ko' ? cat.nameKo : cat.nameEn}</h4>
                      <span className="roadmap-card-count">{cat.lessons.length} {language === 'ko' ? '레슨' : 'lessons'}</span>
                    </div>
                    <i className="fa-solid fa-chevron-right roadmap-card-arrow" />
                  </Link>
                ))}
              </div>
              {i < levels.length - 1 && (
                <div className="roadmap-connector">
                  <div className="roadmap-connector-line" />
                  <div className="roadmap-connector-icon">
                    <i className="fa-solid fa-arrow-down" />
                  </div>
                  <div className="roadmap-connector-line" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolsSection({ language }) {
  const tools = [
    { icon: 'fa-table', name: 'Excel / VBA', desc: language === 'ko' ? '수식, 매크로, VBA를 활용한 스프레드시트 자동화' : 'Spreadsheet automation with formulas, macros, and VBA' },
    { icon: 'fa-python', name: 'Python', desc: language === 'ko' ? '파일 처리, 웹 스크래핑, 데이터 분석 자동화' : 'File processing, web scraping, and data analysis automation', fa: 'fa-brands' },
    { icon: 'fa-robot', name: 'RPA (UiPath, Power Automate)', desc: language === 'ko' ? '반복 업무를 로봇으로 자동화' : 'Automate repetitive tasks with software robots' },
    { icon: 'fa-bolt', name: 'Zapier / Make / n8n', desc: language === 'ko' ? '코드 없이 앱 간 연동 자동화' : 'Automate app integrations without code' },
    { icon: 'fa-brain', name: 'AI (ChatGPT, Claude)', desc: language === 'ko' ? 'AI를 활용한 문서 처리, 데이터 분석 자동화' : 'AI-powered document processing and data analysis' },
  ];

  return (
    <div className="ck-content-box">
      <div className="ck-content-header ck-ch--purple">
        <i className="fa-solid fa-wrench" />
        <div className="ck-ch-text">
          <h2>{language === 'ko' ? '자동화 도구 소개' : 'Automation Tools Overview'}</h2>
          <p>{language === 'ko' ? '학습하게 될 다양한 자동화 도구를 소개합니다.' : 'Overview of various automation tools you will learn.'}</p>
        </div>
      </div>
      <div className="ck-content-body">
        <div className="intro-features-grid">
          {tools.map((tool, i) => (
            <div key={i} className="intro-feature-card">
              <div className="intro-feature-icon" style={{ background: '#1B3A6B12', color: '#1B3A6B' }}>
                <i className={`${tool.fa || 'fa-solid'} ${tool.icon}`} />
              </div>
              <h3>{tool.name}</h3>
              <p>{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IntroPage() {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('about');
  const [openMenus, setOpenMenus] = useState({ info: true });
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const navigate = useCallback((sectionId) => {
    setActiveSection(sectionId);
    for (const m of MENU) {
      if (m.id === sectionId || m.children.some(c => c.id === sectionId)) {
        setOpenMenus(prev => ({ ...prev, [m.id]: true }));
        break;
      }
    }
    setMobileSidebar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleParentClick = useCallback((parentId) => {
    const isOpen = openMenus[parentId];
    setOpenMenus(prev => ({ ...prev, [parentId]: !isOpen }));
    const menu = MENU.find(m => m.id === parentId);
    if (!isOpen || !menu?.children.length) {
      setActiveSection(parentId);
      setMobileSidebar(false);
    }
  }, [openMenus]);

  const currentLabel = useMemo(() => {
    for (const m of MENU) {
      if (m.id === activeSection) return language === 'ko' ? m.labelKo : m.labelEn;
      for (const c of m.children) {
        if (c.id === activeSection) return language === 'ko' ? c.labelKo : c.labelEn;
      }
    }
    return '';
  }, [activeSection, language]);

  return (
    <div className="ck-page">
      <SEO
        title={language === 'ko' ? 'AutoWork 소개' : 'About AutoWork'}
        description={language === 'ko'
          ? 'AutoWork 업무자동화 학습 플랫폼의 소개, 사용가이드, 학습 로드맵을 확인하세요.'
          : 'Learn about AutoWork, user guide, and learning roadmap for work automation.'}
        path="/intro"
      />
      <div className="container">
        <div className="ck-layout">
          {/* Mobile toggle */}
          <button className="ck-sidebar-toggle" onClick={() => setMobileSidebar(!mobileSidebar)}>
            <i className="fa-solid fa-bars" /> {currentLabel}
          </button>

          {/* Sidebar */}
          <aside className={`ck-sidebar ${mobileSidebar ? 'ck-sidebar--open' : ''}`}>
            <div className="ck-sidebar-header">
              <h3><i className="fa-solid fa-compass" /> {t('intro.sidebarTitle')}</h3>
            </div>
            <nav className="ck-sidebar-nav">
              {MENU.map(parent => (
                <div key={parent.id} className="ck-nav-group">
                  <button
                    className={`ck-nav-parent ${activeSection === parent.id ? 'ck-nav--active' : ''}`}
                    onClick={() => handleParentClick(parent.id)}
                  >
                    <i className={`fa-solid ${parent.icon}`} />
                    <span>{language === 'ko' ? parent.labelKo : parent.labelEn}</span>
                    {parent.children.length > 0 && (
                      <i className={`fa-solid fa-chevron-${openMenus[parent.id] ? 'up' : 'down'} ck-nav-arrow`} />
                    )}
                  </button>
                  {parent.children.length > 0 && openMenus[parent.id] && (
                    <div className="ck-nav-children">
                      {parent.children.map(child => (
                        <button
                          key={child.id}
                          className={`ck-nav-child ${activeSection === child.id ? 'ck-nav--active' : ''}`}
                          onClick={() => navigate(child.id)}
                        >
                          <i className={`fa-solid ${child.icon}`} />
                          <span>{language === 'ko' ? child.labelKo : child.labelEn}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="ck-main">
            {activeSection === 'about' && <AboutSection t={t} />}
            {activeSection === 'guide' && <GuideSection language={language} t={t} />}
            {activeSection === 'roadmap' && <RoadmapSection language={language} />}
            {activeSection === 'tools' && <ToolsSection language={language} />}
          </div>
        </div>
      </div>
    </div>
  );
}
