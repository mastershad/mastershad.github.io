import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <h2 className="section__title">{t.about.title}</h2>
      <p className="about__text">{t.about.text}</p>
    </section>
  );
}

export default About;
