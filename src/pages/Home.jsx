import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LESSON_CATEGORIES, MENU_GROUPS, getCategoriesByGroup, getTotalLessonCount } from '../config/lessons';
import HeroCarousel from '../components/HeroCarousel';

export default function Home() {
  const { language, t } = useLanguage();
  const totalLessons = getTotalLessonCount();
  const totalCategories = LESSON_CATEGORIES.length;

  const levelColors = {
    beginner: '#00855A',
    intermediate: '#C87200',
    advanced: '#C8102E',
  };

  const promptCategory = LESSON_CATEGORIES.find(c => c.slug === 'prompt');

  return (
    <>
      <HeroCarousel />

      {/* Category Cards - grouped by MENU_GROUPS */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-subtitle">{t('features.subtitle')}</p>
          </div>

          {MENU_GROUPS.map(group => {
            const categories = getCategoriesByGroup(group.id);
            return (
              <div key={group.id} className="category-group">
                <h3 className="category-group-title">
                  <i className={`fa-solid ${group.icon}`} />
                  {language === 'ko' ? group.nameKo : group.nameEn}
                </h3>
                <div className="ai-tools-grid">
                  {categories.map((cat, i) => (
                    <Link key={cat.slug} to={`/lessons/${cat.slug}`} className="ai-tool-card" data-aos="fade-up" data-aos-delay={i * 100}>
                      <div className="ai-tool-icon"><i className={`fa-solid ${cat.icon}`} /></div>
                      <div className="ai-tool-info">
                        <h4>{language === 'ko' ? cat.nameKo : cat.nameEn}</h4>
                        <p>{language === 'ko' ? cat.descKo : cat.descEn}</p>
                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px', alignItems: 'center' }}>
                          <span className="badge" style={{ background: `${levelColors[cat.level]}18`, color: levelColors[cat.level], fontSize: '11px', padding: '2px 8px', borderRadius: '10px' }}>
                            {t(`lessons.${cat.level}`)}
                          </span>
                          <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>
                            {cat.lessons.length} {t('lessons.lessonsCount')}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Prompt category as a separate section */}
          {promptCategory && (
            <div className="category-group">
              <h3 className="category-group-title">
                <i className="fa-solid fa-wand-magic-sparkles" />
                {language === 'ko' ? '프롬프트 학습' : 'Prompt Learning'}
              </h3>
              <div className="ai-tools-grid">
                <Link to={`/lessons/${promptCategory.slug}`} className="ai-tool-card" data-aos="fade-up">
                  <div className="ai-tool-icon"><i className={`fa-solid ${promptCategory.icon}`} /></div>
                  <div className="ai-tool-info">
                    <h4>{language === 'ko' ? promptCategory.nameKo : promptCategory.nameEn}</h4>
                    <p>{language === 'ko' ? promptCategory.descKo : promptCategory.descEn}</p>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px', alignItems: 'center' }}>
                      <span className="badge" style={{ background: `${levelColors[promptCategory.level]}18`, color: levelColors[promptCategory.level], fontSize: '11px', padding: '2px 8px', borderRadius: '10px' }}>
                        {t(`lessons.${promptCategory.level}`)}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>
                        {promptCategory.lessons.length} {t('lessons.lessonsCount')}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{totalCategories}</div>
              <div className="stat-label">{t('stats.categories')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{totalLessons}</div>
              <div className="stat-label">{t('stats.lessons')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">{t('stats.themes')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">{t('stats.languages')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.description')}</p>
            <Link to="/lessons" className="btn btn-primary btn-lg">{t('cta.button')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
