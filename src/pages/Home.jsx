import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LESSON_CATEGORIES, MENU_GROUPS, getCategoriesByGroup, getTotalLessonCount } from '../config/lessons';
import HeroCarousel from '../components/HeroCarousel';

const levelColors = {
  beginner: '#00855A',
  intermediate: '#C87200',
  advanced: '#C8102E',
};

const HIGHLIGHTS = [
  {
    icon: 'fa-layer-group',
    titleKo: '체계적 커리큘럼',
    titleEn: 'Structured Curriculum',
    descKo: '기초 OA부터 AI 자동화, 실전 프로젝트까지 단계별로 설계된 학습 경로를 제공합니다.',
    descEn: 'Step-by-step learning paths from basic OA to AI automation and real-world projects.',
  },
  {
    icon: 'fa-code',
    titleKo: '실전 중심 학습',
    titleEn: 'Practice-Oriented',
    descKo: '이론과 함께 실습 코드와 예제를 통해 바로 실무에 적용할 수 있습니다.',
    descEn: 'Apply directly to work with hands-on code examples alongside theory.',
  },
  {
    icon: 'fa-microchip',
    titleKo: '최신 AI 기술',
    titleEn: 'Latest AI Technology',
    descKo: 'ChatGPT, 프롬프트 엔지니어링, RPA 등 최신 자동화 기술을 학습합니다.',
    descEn: 'Learn ChatGPT, prompt engineering, RPA and the latest automation technologies.',
  },
];

const PATH_STEPS = [
  { icon: 'fa-desktop', labelKo: 'OA 업무자동화', labelEn: 'OA Automation', descKo: 'Excel, Python, 문서, 데이터', descEn: 'Excel, Python, Docs, Data' },
  { icon: 'fa-brain', labelKo: 'AI활용 자동화', labelEn: 'AI Automation', descKo: 'AI, RPA, 노코드/로코드', descEn: 'AI, RPA, No-Code' },
  { icon: 'fa-rocket', labelKo: '실전 프로젝트', labelEn: 'Real Projects', descKo: '워크플로우, 프로젝트 실습', descEn: 'Workflow, Project Practice' },
  { icon: 'fa-wand-magic-sparkles', labelKo: '프롬프트 학습', labelEn: 'Prompt Learning', descKo: '프롬프트 엔지니어링 마스터', descEn: 'Master Prompt Engineering' },
];

const promptCategory = LESSON_CATEGORIES.find(c => c.slug === 'prompt');
const ALL_GROUPS = [
  ...MENU_GROUPS,
  { id: 'prompt', nameKo: '프롬프트 학습', nameEn: 'Prompt Learning', icon: 'fa-wand-magic-sparkles', categorySlugs: ['prompt'] },
];

export default function Home() {
  const { language, t } = useLanguage();
  const totalLessons = getTotalLessonCount();
  const totalCategories = LESSON_CATEGORIES.length;

  return (
    <>
      <HeroCarousel />

      {/* ── Highlights: Why AutoWork ── */}
      <section className="home-highlights">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <i className="fa-solid fa-sparkles" />
              {language === 'ko' ? 'AutoWork' : 'AutoWork'}
            </span>
            <h2 className="section-title">
              {language === 'ko' ? '왜 AutoWork인가요?' : 'Why Choose AutoWork?'}
            </h2>
            <p className="section-subtitle">
              {language === 'ko'
                ? '업무자동화를 위한 가장 체계적인 학습 플랫폼'
                : 'The most structured learning platform for work automation'}
            </p>
          </div>
          <div className="home-highlights-grid">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="home-hl-card">
                <div className="home-hl-icon">
                  <i className={`fa-solid ${h.icon}`} />
                </div>
                <h3>{language === 'ko' ? h.titleKo : h.titleEn}</h3>
                <p>{language === 'ko' ? h.descKo : h.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Learning Path Roadmap ── */}
      <section className="home-path">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <i className="fa-solid fa-route" />
              {language === 'ko' ? '학습 경로' : 'Learning Path'}
            </span>
            <h2 className="section-title">
              {language === 'ko' ? '단계별 학습 로드맵' : 'Step-by-Step Roadmap'}
            </h2>
          </div>
          <div className="home-path-flow">
            {PATH_STEPS.map((step, i) => (
              <div key={i} className="home-path-step">
                <div className="home-path-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="home-path-icon">
                  <i className={`fa-solid ${step.icon}`} />
                </div>
                <h4>{language === 'ko' ? step.labelKo : step.labelEn}</h4>
                <p>{language === 'ko' ? step.descKo : step.descEn}</p>
                {i < PATH_STEPS.length - 1 && <div className="home-path-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum by Group ── */}
      <section className="home-curriculum">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <i className="fa-solid fa-book-open" />
              {language === 'ko' ? '커리큘럼' : 'Curriculum'}
            </span>
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-subtitle">{t('features.subtitle')}</p>
          </div>

          {ALL_GROUPS.map(group => {
            const categories = group.id === 'prompt'
              ? [promptCategory].filter(Boolean)
              : getCategoriesByGroup(group.id);
            const lessonCount = categories.reduce((s, c) => s + c.lessons.length, 0);
            return (
              <div key={group.id} className="home-cur-group">
                <h3 className="home-cur-group-title">
                  <i className={`fa-solid ${group.icon}`} />
                  <span>{language === 'ko' ? group.nameKo : group.nameEn}</span>
                  <span className="home-cur-group-count">{lessonCount} {t('lessons.lessonsCount')}</span>
                </h3>
                <div className="home-cur-grid">
                  {categories.map(cat => (
                    <Link key={cat.slug} to={`/lessons/${cat.slug}`} className="home-cur-card">
                      <div className="home-cur-card-icon">
                        <i className={`fa-solid ${cat.icon}`} />
                      </div>
                      <div className="home-cur-card-body">
                        <h4>{language === 'ko' ? cat.nameKo : cat.nameEn}</h4>
                        <p>{language === 'ko' ? cat.descKo : cat.descEn}</p>
                        <div className="home-cur-card-meta">
                          <span className="home-cur-level" style={{ background: `${levelColors[cat.level]}14`, color: levelColors[cat.level] }}>
                            {t(`lessons.${cat.level}`)}
                          </span>
                          <span className="home-cur-count">{cat.lessons.length} {t('lessons.lessonsCount')}</span>
                        </div>
                      </div>
                      <i className="fa-solid fa-arrow-right home-cur-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="home-stats">
        <div className="container">
          <div className="home-stats-grid">
            <div className="home-stat">
              <div className="home-stat-num">{totalCategories}</div>
              <div className="home-stat-label">{t('stats.categories')}</div>
            </div>
            <div className="home-stat">
              <div className="home-stat-num">{totalLessons}</div>
              <div className="home-stat-label">{t('stats.lessons')}</div>
            </div>
            <div className="home-stat">
              <div className="home-stat-num">5</div>
              <div className="home-stat-label">{t('stats.themes')}</div>
            </div>
            <div className="home-stat">
              <div className="home-stat-num">2</div>
              <div className="home-stat-label">{t('stats.languages')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta-inner">
            <div className="home-cta-deco home-cta-deco-1" />
            <div className="home-cta-deco home-cta-deco-2" />
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.description')}</p>
            <div className="home-cta-buttons">
              <Link to="/lessons" className="btn btn-primary btn-lg">{t('cta.button')}</Link>
              <Link to="/intro" className="btn btn-secondary btn-lg">{t('hero.ctaSecondary')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
