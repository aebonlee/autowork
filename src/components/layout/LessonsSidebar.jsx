import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { LESSON_CATEGORIES, MENU_GROUPS, getCategoriesByGroup } from '../../config/lessons';

const promptCategory = LESSON_CATEGORIES.find(c => c.slug === 'prompt');

const ALL_GROUPS = [
  ...MENU_GROUPS,
  { id: 'prompt', nameKo: '프롬프트 학습', nameEn: 'Prompt Learning', icon: 'fa-wand-magic-sparkles', categorySlugs: ['prompt'] },
];

export default function LessonsSidebar({ isOpen, onClose }) {
  const location = useLocation();
  const { language } = useLanguage();

  // Parse active category/lesson from URL
  const match = location.pathname.match(/^\/lessons\/([^/]+)(?:\/([^/]+))?/);
  const activeCategorySlug = match?.[1];
  const activeLessonSlug = match?.[2];

  // Track which categories are expanded
  const [expanded, setExpanded] = useState({});

  // Auto-expand all categories in the active group
  useEffect(() => {
    if (activeCategorySlug) {
      for (const group of ALL_GROUPS) {
        if (group.categorySlugs.includes(activeCategorySlug)) {
          const newExpanded = {};
          group.categorySlugs.forEach(slug => { newExpanded[slug] = true; });
          setExpanded(prev => ({ ...prev, ...newExpanded }));
          break;
        }
      }
    } else {
      // On /lessons index, expand the first group by default
      const firstGroup = ALL_GROUPS[0];
      if (firstGroup) {
        const newExpanded = {};
        firstGroup.categorySlugs.forEach(slug => { newExpanded[slug] = true; });
        setExpanded(newExpanded);
      }
    }
  }, [activeCategorySlug]);

  function toggleCategory(slug) {
    setExpanded(prev => ({ ...prev, [slug]: !prev[slug] }));
  }

  return (
    <>
      {isOpen && <div className="aw-sidebar-overlay" onClick={onClose} />}
      <aside className={`aw-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="aw-sb-header">
          <i className="fa-solid fa-book-open" />
          <span>{language === 'ko' ? '학습 과정' : 'Courses'}</span>
        </div>
        <nav className="aw-sb-nav">
          {ALL_GROUPS.map(group => {
            const categories = group.id === 'prompt'
              ? [promptCategory].filter(Boolean)
              : getCategoriesByGroup(group.id);

            return (
              <div key={group.id} className="aw-nav-group">
                <div className="aw-nav-group-title">
                  <i className={`fa-solid ${group.icon}`} />
                  {language === 'ko' ? group.nameKo : group.nameEn}
                </div>
                {categories.map(cat => {
                  const isExpanded = expanded[cat.slug];
                  const isCatActive = activeCategorySlug === cat.slug;

                  return (
                    <div key={cat.slug}>
                      <button
                        className={`aw-nav-parent ${isCatActive ? 'active' : ''}`}
                        onClick={() => toggleCategory(cat.slug)}
                      >
                        <span>{language === 'ko' ? cat.nameKo : cat.nameEn}</span>
                        <i className={`fa-solid fa-chevron-down aw-nav-arrow ${isExpanded ? 'open' : ''}`} />
                      </button>
                      {isExpanded && (
                        <div className="aw-nav-children">
                          {cat.lessons.map(lesson => {
                            const isActive = isCatActive && activeLessonSlug === lesson.slug;
                            return (
                              <Link
                                key={lesson.slug}
                                to={`/lessons/${cat.slug}/${lesson.slug}`}
                                className={`aw-nav-child ${isActive ? 'active' : ''}`}
                                onClick={onClose}
                              >
                                <span>{language === 'ko' ? lesson.titleKo : lesson.titleEn}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
