import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LESSON_CATEGORIES, getTotalLessonCount } from '../config/lessons';
import HeroCarousel from '../components/HeroCarousel';

export default function Home() {
  const { language, t } = useLanguage();
  const totalLessons = getTotalLessonCount();

  const levelColors = {
    beginner: '#00855A',
    intermediate: '#C87200',
    advanced: '#C8102E',
  };

  return (
    <>
      <HeroCarousel />

      {/* Category Cards */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-subtitle">{t('features.subtitle')}</p>
          </div>
          <div className="ai-tools-grid">
            {LESSON_CATEGORIES.map((cat, i) => (
              <Link key={cat.slug} to={`/lessons/${cat.slug}`} className="ai-tool-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="ai-tool-icon">{cat.icon}</div>
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
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10</div>
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
