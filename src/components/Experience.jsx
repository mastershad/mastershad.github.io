import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section">
      <h2 className="section__title">{t.experience.title}</h2>
      <ol className="timeline">
        {t.experience.items.map(item => (
          <li key={`${item.period}-${item.role}`} className="timeline__item">
            <div className="timeline__period">{item.period}</div>
            <div className="timeline__body">
              <div className="timeline__role">{item.role}</div>
              <div className="timeline__org">{item.org}</div>
              <p className="timeline__text">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
