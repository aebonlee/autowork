import { useState, useEffect, useMemo } from 'react';
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

  // Determine which group is active based on current category
  const activeGroup = useMemo(() => {
    if (activeCategorySlug) {
      return ALL_GROUPS.find(g => g.categorySlugs.includes(activeCategorySlug)) || ALL_GROUPS[0];
    }
    return ALL_GROUPS[0]; // default to OA on /lessons index
  }, [activeCategorySlug]);

  // Get only the active group's categories
  const categories = useMemo(() => {
    if (activeGroup.id === 'prompt') return [promptCategory].filter(Boolean);
    return getCategoriesByGroup(activeGroup.id);
  }, [activeGroup]);

  // Track which categories are expanded
  const [expanded, setExpanded] = useState({});

  // Auto-expand only the first category (or the active one) in the group
  useEffect(() => {
    const newExpanded = {};
    if (activeCategorySlug && activeGroup.categorySlugs.includes(activeCategorySlug)) {
      newExpanded[activeCategorySlug] = true;
    } else if (categories.length > 0) {
      newExpanded[categories[0].slug] = true;
    }
    setExpanded(newExpanded);
  }, [activeGroup, activeCategorySlug, categories]);

  function toggleCategory(slug) {
    setExpanded(prev => ({ ...prev, [slug]: !prev[slug] }));
  }

  return (
    <>
      {isOpen && <div className="aw-sidebar-overlay" onClick={onClose} />}
      <aside className={`aw-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="aw-sb-header">
          <i className={`fa-solid ${activeGroup.icon}`} />
          <span>{language === 'ko' ? activeGroup.nameKo : activeGroup.nameEn}</span>
        </div>
        <nav className="aw-sb-nav">
          {categories.map(cat => {
            const isExpanded = expanded[cat.slug];
            const isCatActive = activeCategorySlug === cat.slug;

            return (
              <div key={cat.slug} className="aw-nav-group">
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
        </nav>
      </aside>
    </>
  );
}
