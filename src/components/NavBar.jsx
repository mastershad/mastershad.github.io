import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

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
      <LanguageSwitcher />
    </nav>
  );
}

export default NavBar;
