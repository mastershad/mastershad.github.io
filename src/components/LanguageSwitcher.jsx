import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import translations from '../i18n/translations';

function LanguageSwitcher() {
  const { language, setLanguage, supportedLanguages } = useLanguage();

  return (
    <div className="language-switcher" role="group" aria-label="Language">
      {supportedLanguages.map(code => (
        <button
          key={code}
          type="button"
          className={code === language ? 'language-switcher__button is-active' : 'language-switcher__button'}
          onClick={() => setLanguage(code)}
          aria-pressed={code === language}
        >
          {code.toUpperCase()}
          <span className="language-switcher__name">{translations[code].langName}</span>
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
