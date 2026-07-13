import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const EMAIL = 'johnyorkit@gmail.com';
const PHONE = '+49 151 72379597';
const LINKEDIN_URL = 'https://linkedin.com/in/ivan-yurkevych-52a89b182';
const GITHUB_URL = 'https://github.com/mastershad';

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <h2 className="section__title">{t.contact.title}</h2>
      <ul className="contact-list">
        <li>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </li>
        <li>
          <a href={`tel:${PHONE.replace(/\s+/g, '')}`}>{PHONE}</a>
        </li>
        <li>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
        </li>
      </ul>
      <p className="contact__cv-note">{t.contact.cvNote}</p>
    </section>
  );
}

export default Contact;
