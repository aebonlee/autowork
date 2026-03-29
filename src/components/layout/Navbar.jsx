import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';

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
  const colorPickerRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) setShowColorPicker(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setShowUserMenu(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeIcon = mode === 'auto' ? '\u25D1' : mode === 'light' ? '\u2600\uFE0F' : '\uD83C\uDF19';
  const displayName = profile?.display_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || '';
  const avatarLetter = displayName.charAt(0).toUpperCase();

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  const navLinks = [
    { path: '/intro', label: t('nav.intro') },
    { path: '/lessons', label: t('nav.lessons'), match: '/lessons' },
    { path: '/lessons/excel', label: t('nav.excel') },
    { path: '/lessons/python', label: t('nav.python') },
    { path: '/lessons/nocode', label: t('nav.nocode') },
    { path: '/lessons/ai', label: t('nav.ai') },
    { path: '/community/board', label: t('nav.community'), match: '/community' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-teaching">Auto</span>
            <span className="logo-ai">Work</span>
          </Link>

          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path || (link.match && location.pathname.startsWith(link.match) && !navLinks.some(l => l.path !== link.path && l.path === location.pathname)) ? 'active' : ''}`}
                >
                  {link.label}
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
                    \uD83D\uDCCA {t('nav.dashboard')}
                  </Link>
                  <Link to="/settings" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                    \u2699\uFE0F {t('nav.settings')}
                  </Link>
                  {isAdmin && (
                    <Link to="/admin" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                      \uD83D\uDEE1\uFE0F {t('nav.admin')}
                    </Link>
                  )}
                  <button className="user-menu-item danger" onClick={handleSignOut}>
                    \uD83D\uDEAA {t('nav.logout')}
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

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map(link => (
            <li key={link.path}><Link to={link.path} className="mobile-nav-link">{link.label}</Link></li>
          ))}
        </ul>
        <div className="mobile-menu-actions">
          {isLoggedIn ? (
            <>
              <Link to="/settings" className="btn btn-secondary btn-sm">{t('nav.settings')}</Link>
              <button className="btn btn-primary btn-sm" onClick={handleSignOut}>{t('nav.logout')}</button>
            </>
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
