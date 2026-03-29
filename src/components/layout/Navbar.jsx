import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { LESSON_CATEGORIES, MENU_GROUPS, getCategoriesByGroup } from '../../config/lessons';

export default function Navbar() {
  const { mode, toggleTheme, colorTheme, setColorTheme, COLOR_OPTIONS } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { isLoggedIn, isAdmin, user, profile, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'oa' | 'ai-auto' | 'projects' | 'prompt' | null
  const [mobileAccordion, setMobileAccordion] = useState(null); // 'oa' | 'ai-auto' | 'projects' | 'prompt' | null
  const colorPickerRef = useRef(null);
  const userMenuRef = useRef(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) setShowColorPicker(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setShowUserMenu(false);
      // Close dropdown if clicking outside any dropdown ref
      if (activeDropdown) {
        const ref = dropdownRefs.current[activeDropdown];
        if (ref && !ref.contains(e.target)) setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const themeIcon = mode === 'auto' ? '◑' : mode === 'light' ? '☀' : '🌙';
  const displayName = profile?.display_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || '';
  const avatarLetter = displayName.charAt(0).toUpperCase();

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  const isLessonsActive = location.pathname.startsWith('/lessons');
  const isCommunityActive = location.pathname.startsWith('/community');

  // Prompt category for standalone menu
  const promptCategory = LESSON_CATEGORIES.find(c => c.slug === 'prompt');

  // Group nav translation keys
  const groupNavKeys = {
    'oa': 'nav.oaAutomation',
    'ai-auto': 'nav.aiAutomation',
    'projects': 'nav.realProjects',
  };

  function toggleMobileAccordion(id) {
    setMobileAccordion(prev => prev === id ? null : id);
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-teaching">Auto</span>
            <span className="logo-ai">Work</span>
          </Link>

          <ul className="nav-links">
            {/* About */}
            <li className="nav-item">
              <Link to="/intro" className={`nav-link ${location.pathname === '/intro' ? 'active' : ''}`}>
                {t('nav.intro')}
              </Link>
            </li>

            {/* MENU_GROUPS: OA / AI / Projects */}
            {MENU_GROUPS.map(group => {
              const categories = getCategoriesByGroup(group.id);
              const isActive = categories.some(cat => location.pathname.startsWith(`/lessons/${cat.slug}`));
              return (
                <li
                  key={group.id}
                  className="nav-item nav-dropdown"
                  ref={el => dropdownRefs.current[group.id] = el}
                  onMouseEnter={() => setActiveDropdown(group.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`nav-link ${isActive ? 'active' : ''}`}>
                    {t(groupNavKeys[group.id])} <i className="fa-solid fa-chevron-down nav-dropdown-arrow" />
                  </button>
                  <div className={`nav-dropdown-menu ${activeDropdown === group.id ? 'show' : ''}`}>
                    <div className="nav-dropdown-grid">
                      {categories.map(cat => (
                        <Link
                          key={cat.slug}
                          to={`/lessons/${cat.slug}`}
                          className={`nav-dropdown-item ${location.pathname === `/lessons/${cat.slug}` ? 'active' : ''}`}
                        >
                          <i className={`fa-solid ${cat.icon} nav-dropdown-icon`} />
                          <span>{language === 'ko' ? cat.nameKo : cat.nameEn}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}

            {/* Prompt Learning - standalone dropdown with lesson list */}
            <li
              className="nav-item nav-dropdown"
              ref={el => dropdownRefs.current['prompt'] = el}
              onMouseEnter={() => setActiveDropdown('prompt')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/lessons/prompt"
                className={`nav-link ${location.pathname.startsWith('/lessons/prompt') ? 'active' : ''}`}
              >
                {t('nav.prompt')} <i className="fa-solid fa-chevron-down nav-dropdown-arrow" />
              </Link>
              <div className={`nav-dropdown-menu nav-dropdown-menu-sm ${activeDropdown === 'prompt' ? 'show' : ''}`}>
                <div className="nav-dropdown-list">
                  {promptCategory && promptCategory.lessons.map(lesson => (
                    <Link
                      key={lesson.slug}
                      to={`/lessons/prompt/${lesson.slug}`}
                      className={`nav-dropdown-item ${location.pathname === `/lessons/prompt/${lesson.slug}` ? 'active' : ''}`}
                    >
                      <i className="fa-solid fa-wand-magic-sparkles nav-dropdown-icon" />
                      <span>{language === 'ko' ? lesson.titleKo : lesson.titleEn}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Community */}
            <li className="nav-item">
              <Link to="/community/board" className={`nav-link ${isCommunityActive ? 'active' : ''}`}>
                {t('nav.community')}
              </Link>
            </li>
          </ul>

          <div className="navbar-actions">
            <div className="color-picker-wrapper" ref={colorPickerRef}>
              <button className="color-picker-btn" onClick={() => setShowColorPicker(!showColorPicker)} title="Color Theme">
                <div className="color-dot-preview" style={{ background: COLOR_OPTIONS.find(c => c.name === colorTheme)?.color }} />
              </button>
              <div className={`color-picker-dropdown ${showColorPicker ? 'show' : ''}`}>
                {COLOR_OPTIONS.map(opt => (
                  <button
                    key={opt.name}
                    className={`color-option ${colorTheme === opt.name ? 'active' : ''}`}
                    style={{ background: opt.color }}
                    onClick={() => { setColorTheme(opt.name); setShowColorPicker(false); }}
                    title={opt.name}
                  />
                ))}
              </div>
            </div>

            <button className="theme-toggle" onClick={toggleTheme} title={mode}>
              {themeIcon}
            </button>

            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === 'ko' ? 'EN' : 'KO'}
            </button>

            {isLoggedIn ? (
              <div className="user-menu-wrapper" ref={userMenuRef}>
                <button className="user-avatar-btn" onClick={() => setShowUserMenu(!showUserMenu)}>
                  {profile?.avatar_url ? <img src={profile.avatar_url} alt="" /> : avatarLetter}
                </button>
                <div className={`user-menu-dropdown ${showUserMenu ? 'show' : ''}`}>
                  <div className="user-menu-header">
                    <div className="user-menu-name">{displayName}</div>
                    <div className="user-menu-email">{user?.email}</div>
                  </div>
                  <Link to="/dashboard" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                    <i className="fa-solid fa-chart-pie" /> {t('nav.dashboard')}
                  </Link>
                  <Link to="/settings" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                    <i className="fa-solid fa-gear" /> {t('nav.settings')}
                  </Link>
                  {isAdmin && (
                    <Link to="/admin" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                      <i className="fa-solid fa-shield-halved" /> {t('nav.admin')}
                    </Link>
                  )}
                  <button className="user-menu-item danger" onClick={handleSignOut}>
                    <i className="fa-solid fa-right-from-bracket" /> {t('nav.logout')}
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="nav-auth-btn nav-login-btn">
                {t('nav.login')}
              </Link>
            )}

            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/intro" className="mobile-nav-link">{t('nav.intro')}</Link>
          </li>

          {/* Mobile: MENU_GROUPS accordions */}
          {MENU_GROUPS.map(group => {
            const categories = getCategoriesByGroup(group.id);
            const isOpen = mobileAccordion === group.id;
            return (
              <li key={group.id}>
                <button
                  className={`mobile-nav-link mobile-accordion-toggle ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleMobileAccordion(group.id)}
                >
                  {t(groupNavKeys[group.id])}
                  <i className={`fa-solid fa-chevron-down mobile-accordion-arrow ${isOpen ? 'rotated' : ''}`} />
                </button>
                <div className={`mobile-accordion-content ${isOpen ? 'open' : ''}`}>
                  {categories.map(cat => (
                    <Link key={cat.slug} to={`/lessons/${cat.slug}`} className="mobile-sub-link">
                      <i className={`fa-solid ${cat.icon}`} /> {language === 'ko' ? cat.nameKo : cat.nameEn}
                    </Link>
                  ))}
                </div>
              </li>
            );
          })}

          {/* Mobile: Prompt accordion */}
          <li>
            <button
              className={`mobile-nav-link mobile-accordion-toggle ${mobileAccordion === 'prompt' ? 'open' : ''}`}
              onClick={() => toggleMobileAccordion('prompt')}
            >
              {t('nav.prompt')}
              <i className={`fa-solid fa-chevron-down mobile-accordion-arrow ${mobileAccordion === 'prompt' ? 'rotated' : ''}`} />
            </button>
            <div className={`mobile-accordion-content ${mobileAccordion === 'prompt' ? 'open' : ''}`}>
              <Link to="/lessons/prompt" className="mobile-sub-link mobile-sub-all">
                <i className="fa-solid fa-wand-magic-sparkles" /> {language === 'ko' ? '전체 보기' : 'View All'}
              </Link>
              {promptCategory && promptCategory.lessons.map(lesson => (
                <Link key={lesson.slug} to={`/lessons/prompt/${lesson.slug}`} className="mobile-sub-link">
                  <i className="fa-solid fa-wand-magic-sparkles" /> {language === 'ko' ? lesson.titleKo : lesson.titleEn}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link to="/community/board" className="mobile-nav-link">{t('nav.community')}</Link>
          </li>
          {isLoggedIn && (
            <>
              <li><Link to="/dashboard" className="mobile-nav-link">{t('nav.dashboard')}</Link></li>
              <li><Link to="/settings" className="mobile-nav-link">{t('nav.settings')}</Link></li>
            </>
          )}
        </ul>
        <div className="mobile-menu-actions">
          {isLoggedIn ? (
            <button className="btn btn-primary btn-sm" onClick={handleSignOut}>{t('nav.logout')}</button>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary btn-sm">{t('nav.login')}</Link>
              <Link to="/register" className="btn btn-secondary btn-sm">{t('nav.register')}</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
