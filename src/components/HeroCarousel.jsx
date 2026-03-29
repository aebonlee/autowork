import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const SLIDE_COUNT = 4;
const AUTO_INTERVAL = 6000;

const BACKGROUNDS = ['particles', 'network', 'orbs', 'geometric'];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(p => (p + 1) % SLIDE_COUNT), []);
  const prev = useCallback(() => setCurrent(p => (p - 1 + SLIDE_COUNT) % SLIDE_COUNT), []);

  useEffect(() => {
    const timer = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="hero-section">
      <div className="hero-carousel">
        <div className="carousel-viewport">
          <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {BACKGROUNDS.map((bg, i) => (
              <div key={i} className={`carousel-slide bg-${bg}`}>
                <div className={`hero-bg-effect effect-${bg}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">{t('hero.badge')}</div>
          <h1 className="hero-title">
            {t('hero.title')} <span className="hero-highlight">{t('hero.titleHighlight')}</span>{t('hero.titleSuffix')}
          </h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-buttons">
            <Link to="/lessons" className="btn btn-primary btn-lg hero-cta">{t('hero.cta')}</Link>
            <Link to="/intro" className="btn btn-secondary btn-lg hero-cta-secondary">{t('hero.ctaSecondary')}</Link>
          </div>
        </div>

        <button className="carousel-arrow carousel-prev" onClick={prev}>&lsaquo;</button>
        <button className="carousel-arrow carousel-next" onClick={next}>&rsaquo;</button>

        <div className="carousel-dots">
          {BACKGROUNDS.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${current === i ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
