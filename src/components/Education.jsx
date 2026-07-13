import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section">
      <h2 className="section__title">{t.education.title}</h2>
      <p className="education__school">{t.education.school}</p>
      <p className="education__degree">{t.education.degree}</p>

      <h2 className="section__title section__title--spaced">{t.objective.title}</h2>
      <p className="about__text">{t.objective.text}</p>
    </section>
  );
}

export default Education;
