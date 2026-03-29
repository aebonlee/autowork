import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { LESSON_CATEGORIES } from '../../config/lessons';

const levelColors = {
  beginner: '#00855A',
  intermediate: '#C87200',
  advanced: '#C8102E',
};

export default function LessonCategories() {
  const { language, t } = useLanguage();

  return (
    <div className="lessons-page">
      <div className="container">
        <div className="lessons-header">
          <h1>{t('lessons.title')}</h1>
          <p>{t('lessons.desc')}</p>
        </div>

        <div className="lesson-categories-grid">
          {LESSON_CATEGORIES.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/lessons/${cat.slug}`}
              className="lesson-category-card"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="lesson-category-icon"><i className={`fa-solid ${cat.icon}`} /></div>
              <div className="lesson-category-info">
                <h3>{language === 'ko' ? cat.nameKo : cat.nameEn}</h3>
                <p>{language === 'ko' ? cat.descKo : cat.descEn}</p>
                <div className="lesson-category-meta">
                  <span
                    className="lesson-level-badge"
                    style={{ background: `${levelColors[cat.level]}15`, color: levelColors[cat.level] }}
                  >
                    {t(`lessons.${cat.level}`)}
                  </span>
                  <span className="lesson-count">
                    {cat.lessons.length} {t('lessons.lessonsCount')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
