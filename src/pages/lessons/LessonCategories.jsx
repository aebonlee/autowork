import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { LESSON_CATEGORIES, MENU_GROUPS, getCategoriesByGroup } from '../../config/lessons';

const levelColors = {
  beginner: '#00855A',
  intermediate: '#C87200',
  advanced: '#C8102E',
};

const promptCategory = LESSON_CATEGORIES.find(c => c.slug === 'prompt');

const ALL_GROUPS = [
  ...MENU_GROUPS,
  { id: 'prompt', nameKo: '프롬프트 학습', nameEn: 'Prompt Learning', icon: 'fa-wand-magic-sparkles', categorySlugs: ['prompt'] },
];

export default function LessonCategories() {
  const { language, t } = useLanguage();

  return (
    <div className="lessons-page">
      <div className="container">
        <div className="lessons-header">
          <h1>{t('lessons.title')}</h1>
          <p>{t('lessons.desc')}</p>
        </div>

        {ALL_GROUPS.map(group => {
          const categories = group.id === 'prompt'
            ? [promptCategory].filter(Boolean)
            : getCategoriesByGroup(group.id);

          return (
            <div key={group.id} className="category-group">
              <h3 className="category-group-title">
                <i className={`fa-solid ${group.icon}`} />
                {language === 'ko' ? group.nameKo : group.nameEn}
              </h3>

              {categories.map(cat => (
                <div key={cat.slug} className="category-lesson-section">
                  <div className="category-section-header">
                    <Link to={`/lessons/${cat.slug}`} className="category-section-name">
                      <i className={`fa-solid ${cat.icon}`} />
                      <span>{language === 'ko' ? cat.nameKo : cat.nameEn}</span>
                      <span
                        className="lesson-level-badge"
                        style={{ background: `${levelColors[cat.level]}15`, color: levelColors[cat.level] }}
                      >
                        {t(`lessons.${cat.level}`)}
                      </span>
                    </Link>
                  </div>
                  <div className="category-lessons-list">
                    {cat.lessons.map((lesson, i) => (
                      <Link
                        key={lesson.slug}
                        to={`/lessons/${cat.slug}/${lesson.slug}`}
                        className="category-lesson-item"
                      >
                        <span className="category-lesson-num">{String(i + 1).padStart(2, '0')}</span>
                        <span className="category-lesson-title">{language === 'ko' ? lesson.titleKo : lesson.titleEn}</span>
                        <span className="category-lesson-duration">
                          <i className="fa-regular fa-clock" /> {lesson.duration}{t('lessons.duration')}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
