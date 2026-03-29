import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { LESSON_CATEGORIES, MENU_GROUPS, getCategoriesByGroup } from '../../config/lessons';

const levelColors = {
  beginner: '#00855A',
  intermediate: '#C87200',
  advanced: '#C8102E',
};

export default function LessonCategories() {
  const { language, t } = useLanguage();
  const promptCategory = LESSON_CATEGORIES.find(c => c.slug === 'prompt');

  return (
    <div className="lessons-page">
      <div className="container">
        <div className="lessons-header">
          <h1>{t('lessons.title')}</h1>
          <p>{t('lessons.desc')}</p>
        </div>

        {MENU_GROUPS.map(group => {
          const categories = getCategoriesByGroup(group.id);
          return (
            <div key={group.id} className="category-group">
              <h3 className="category-group-title">
                <i className={`fa-solid ${group.icon}`} />
                {language === 'ko' ? group.nameKo : group.nameEn}
              </h3>
              <div className="lesson-categories-grid">
                {categories.map((cat, i) => (
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
          );
        })}

        {/* Prompt category as a separate section */}
        {promptCategory && (
          <div className="category-group">
            <h3 className="category-group-title">
              <i className="fa-solid fa-wand-magic-sparkles" />
              {language === 'ko' ? '프롬프트 학습' : 'Prompt Learning'}
            </h3>
            <div className="lesson-categories-grid">
              <Link
                to={`/lessons/${promptCategory.slug}`}
                className="lesson-category-card"
                data-aos="fade-up"
              >
                <div className="lesson-category-icon"><i className={`fa-solid ${promptCategory.icon}`} /></div>
                <div className="lesson-category-info">
                  <h3>{language === 'ko' ? promptCategory.nameKo : promptCategory.nameEn}</h3>
                  <p>{language === 'ko' ? promptCategory.descKo : promptCategory.descEn}</p>
                  <div className="lesson-category-meta">
                    <span
                      className="lesson-level-badge"
                      style={{ background: `${levelColors[promptCategory.level]}15`, color: levelColors[promptCategory.level] }}
                    >
                      {t(`lessons.${promptCategory.level}`)}
                    </span>
                    <span className="lesson-count">
                      {promptCategory.lessons.length} {t('lessons.lessonsCount')}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
