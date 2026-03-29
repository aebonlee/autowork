import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { LESSON_CATEGORIES } from '../../config/lessons';

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
  const [showLessonsDropdown, setShowLessonsDropdown] = useState(false);
  const [mobileLessonsOpen, setMobileLessonsOpen] = useState(false);
  const colorPickerRef = useRef(null);
  const userMenuRef = useRef(null);
  const lessonsDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileLessonsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) setShowColorPicker(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setShowUserMenu(false);
      if (lessonsDropdownRef.current && !lessonsDropdownRef.current.contains(e.target)) setShowLessonsDropdown(false);
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

  const isLessonsActive = location.pathname.startsWith('/lessons');
  const isCommunityActive = location.pathname.startsWith('/community');

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-teaching">Auto</span>
            <span className="logo-ai">Work</span>
          </Link>

          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/intro" className={`nav-link ${location.pathname === '/intro' ? 'active' : ''}`}>
                {t('nav.intro')}
              </Link>
            </li>

            {/* Lessons Dropdown */}
            <li
              className="nav-item nav-dropdown"
              ref={lessonsDropdownRef}
              onMouseEnter={() => setShowLessonsDropdown(true)}
              onMouseLeave={() => setShowLessonsDropdown(false)}
            >
              <Link to="/lessons" className={`nav-link ${isLessonsActive ? 'active' : ''}`}>
                {t('nav.lessons')} <i className="fa-solid fa-chevron-down nav-dropdown-arrow" />
              </Link>
              <div className={`nav-dropdown-menu ${showLessonsDropdown ? 'show' : ''}`}>
                <div className="nav-dropdown-grid">
                  {LESSON_CATEGORIES.map(cat => (
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
                <div className="nav-dropdown-footer">
                  <Link to="/lessons" className="nav-dropdown-all">
                    <i className="fa-solid fa-grid-2" /> {language === 'ko' ? '전체 카테고리 보기' : 'View All Categories'}
                  </Link>
                </div>
              </div>
            </li>

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
          <li>
            <button
              className={`mobile-nav-link mobile-accordion-toggle ${mobileLessonsOpen ? 'open' : ''}`}
              onClick={() => setMobileLessonsOpen(!mobileLessonsOpen)}
            >
              {t('nav.lessons')}
              <i className={`fa-solid fa-chevron-down mobile-accordion-arrow ${mobileLessonsOpen ? 'rotated' : ''}`} />
            </button>
            <div className={`mobile-accordion-content ${mobileLessonsOpen ? 'open' : ''}`}>
              <Link to="/lessons" className="mobile-sub-link mobile-sub-all">
                <i className="fa-solid fa-th-large" /> {language === 'ko' ? '전체 카테고리' : 'All Categories'}
              </Link>
              {LESSON_CATEGORIES.map(cat => (
                <Link key={cat.slug} to={`/lessons/${cat.slug}`} className="mobile-sub-link">
                  <i className={`fa-solid ${cat.icon}`} /> {language === 'ko' ? cat.nameKo : cat.nameEn}
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
