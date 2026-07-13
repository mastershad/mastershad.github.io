import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import profilePhoto from '../assets/profile.png';

function Hero() {
  const { t } = useLanguage();

  return (
    <header className="hero">
      <img className="hero__photo" src={profilePhoto} alt={t.hero.name} />
      <h1 className="hero__name">{t.hero.name}</h1>
      <p className="hero__role">{t.hero.role}</p>
      <p className="hero__location">{t.hero.location}</p>
      <p className="hero__tagline">{t.hero.tagline}</p>
      <div className="hero__actions">
        <a className="button button--primary" href="#contact">{t.hero.cta}</a>
        <a className="button button--ghost" href={`${process.env.PUBLIC_URL}/Lebenslauf.html`} target="_blank" rel="noreferrer">
          {t.hero.cvCta}
        </a>
      </div>
    </header>
  );
}

export default Hero;
