import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from './translations';

const SUPPORTED_LANGUAGES = ['en', 'de', 'ru', 'uk'];
const STORAGE_KEY = 'preferred-language';

function detectDefaultLanguage() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
    return stored;
  }

  const browserLanguages = window.navigator.languages || [window.navigator.language];
  for (const lang of browserLanguages) {
    const code = lang.slice(0, 2).toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(code)) {
      return code;
    }
  }

  return 'en';
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(detectDefaultLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      supportedLanguages: SUPPORTED_LANGUAGES,
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
