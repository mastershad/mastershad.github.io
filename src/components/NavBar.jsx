import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

function NavBar() {
  const { t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <a href="#about">{t.nav.about}</a>
        <a href="#skills">{t.nav.skills}</a>
        <a href="#experience">{t.nav.experience}</a>
        <a href="#education">{t.nav.education}</a>
        <a href="#contact">{t.nav.contact}</a>
      </div>
      <div className="navbar__controls">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default NavBar;
