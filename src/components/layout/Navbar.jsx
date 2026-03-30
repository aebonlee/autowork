import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { LESSON_CATEGORIES, MENU_GROUPS, getCategoriesByGroup } from '../../config/lessons';

const promptCategory = LESSON_CATEGORIES.find(c => c.slug === 'prompt');

const MOBILE_GROUPS = [
  ...MENU_GROUPS,
  { id: 'prompt', nameKo: '프롬프트 학습', nameEn: 'Prompt Learning', icon: 'fa-wand-magic-sparkles', categorySlugs: ['prompt'] },
];

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
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const colorPickerRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) setShowColorPicker(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setShowUserMenu(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeIcon = mode === 'auto' ? '\u25D1' : mode === 'light' ? '\u2600' : '\uD83C\uDF19';
  const displayName = profile?.display_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || '';
  const avatarLetter = displayName.charAt(0).toUpperCase();

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  function isGroupActive(groupId) {
    if (groupId === 'prompt') return location.pathname.startsWith('/lessons/prompt');
    const categories = getCategoriesByGroup(groupId);
    return categories.some(cat => location.pathname.startsWith(`/lessons/${cat.slug}`));
  }

  function toggleMobileAccordion(id) {
    setMobileAccordion(prev => prev === id ? null : id);
  }

  // Desktop menu items — flat links
  const menuItems = [
    { to: '/intro', label: t('nav.intro'), isActive: location.pathname === '/intro' },
    { to: '/lessons/basics', label: t('nav.oaAutomation'), isActive: isGroupActive('oa') },
    { to: '/lessons/ai', label: t('nav.aiAutomation'), isActive: isGroupActive('ai-auto') },
    { to: '/lessons/ai-assistants', label: t('nav.aiAssistants'), isActive: isGroupActive('ai-assistants') },
    { to: '/lessons/workflow', label: t('nav.realProjects'), isActive: isGroupActive('projects') },
    { to: '/lessons/prompt', label: t('nav.prompt'), isActive: location.pathname.startsWith('/lessons/prompt') },
    { to: '/community/board', label: t('nav.community'), isActive: location.pathname.startsWith('/community') },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-teaching">Auto</span>
            <span className="logo-ai">Work</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {menuItems.map(item => (
              <li key={item.to} className="nav-item">
                <Link to={item.to} className={`nav-link ${item.isActive ? 'active' : ''}`}>
                  {item.label}
                </Link>
              </li>
            ))}
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

      {/* ── Mobile Menu with Accordion Submenus ── */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {/* About — direct link */}
          <li>
            <Link
              to="/intro"
              className={`mobile-nav-link ${location.pathname === '/intro' ? 'active' : ''}`}
            >
              <i className="fa-solid fa-info-circle mobile-nav-icon" />
              <span>About</span>
            </Link>
          </li>

          {/* Groups with accordion submenus (2nd level: categories) */}
          {MOBILE_GROUPS.map(group => {
            const categories = group.id === 'prompt'
              ? [promptCategory].filter(Boolean)
              : getCategoriesByGroup(group.id);
            const isOpen = mobileAccordion === group.id;
            const isActive = isGroupActive(group.id);

            return (
              <li key={group.id}>
                <button
                  className={`mobile-nav-link mobile-accordion-btn ${isActive ? 'active' : ''}`}
                  onClick={() => toggleMobileAccordion(group.id)}
                >
                  <i className={`fa-solid ${group.icon} mobile-nav-icon`} />
                  <span>{language === 'ko' ? group.nameKo : group.nameEn}</span>
                  <i className={`fa-solid fa-chevron-down mobile-accordion-arrow ${isOpen ? 'open' : ''}`} />
                </button>
                {isOpen && (
                  <ul className="mobile-sub-menu">
                    {categories.map(cat => (
                      <li key={cat.slug}>
                        <Link
                          to={`/lessons/${cat.slug}`}
                          className={`mobile-sub-link ${location.pathname.startsWith(`/lessons/${cat.slug}`) ? 'active' : ''}`}
                        >
                          <i className={`fa-solid ${cat.icon}`} />
                          <span>{language === 'ko' ? cat.nameKo : cat.nameEn}</span>
                          <span className="mobile-sub-count">{cat.lessons.length}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}

          {/* Community — direct link */}
          <li>
            <Link
              to="/community/board"
              className={`mobile-nav-link ${location.pathname.startsWith('/community') ? 'active' : ''}`}
            >
              <i className="fa-solid fa-users mobile-nav-icon" />
              <span>{t('nav.community')}</span>
            </Link>
          </li>

          {/* Dashboard / Settings for logged in users */}
          {isLoggedIn && (
            <>
              <li className="mobile-nav-divider" />
              <li>
                <Link to="/dashboard" className="mobile-nav-link">
                  <i className="fa-solid fa-chart-pie mobile-nav-icon" />
                  <span>{t('nav.dashboard')}</span>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="mobile-nav-link">
                  <i className="fa-solid fa-gear mobile-nav-icon" />
                  <span>{t('nav.settings')}</span>
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Controls: Theme / Language / Color */}
        <div className="mobile-menu-controls">
          <button className="mobile-ctrl-btn" onClick={toggleTheme} title={mode}>
            {themeIcon}
          </button>
          <button className="mobile-ctrl-btn" onClick={toggleLanguage}>
            {language === 'ko' ? 'EN' : 'KO'}
          </button>
          <div className="mobile-color-row">
            {COLOR_OPTIONS.map(opt => (
              <button
                key={opt.name}
                className={`mobile-color-dot ${colorTheme === opt.name ? 'active' : ''}`}
                style={{ background: opt.color }}
                onClick={() => setColorTheme(opt.name)}
              />
            ))}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="mobile-menu-actions">
          {isLoggedIn ? (
            <button className="btn btn-primary btn-sm" style={{ width: '100%' }} onClick={handleSignOut}>
              {t('nav.logout')}
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary btn-sm" style={{ width: '100%', textAlign: 'center' }}>
                {t('nav.login')}
              </Link>
              <Link to="/register" className="btn btn-secondary btn-sm" style={{ width: '100%', textAlign: 'center' }}>
                {t('nav.register')}
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
