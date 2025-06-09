// app/I18nextProvider.jsx
'use client';

import { I18nextProvider as Provider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useState, useEffect } from 'react'; // Import useState and useEffect

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['translation'],
    defaultNS: 'translation',
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupFromPathIndex: 0,
      checkWhitelist: true,
    },
    preload: ['en', 'ru'],
    whitelist: ['en', 'ru'],
  });

export default function I18nextProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false); // Add state

  useEffect(() => {
    if (i18next.isInitialized) {
      setIsInitialized(true); // Set state when i18next is initialized
    } else {
      i18next.on('initialized', () => setIsInitialized(true)); // Listen for initialized event
    }
  }, []);

  if (!isInitialized) {
    return <div>Loading...</div>; // Or some other loading indicator
  }

  return <Provider i18n={i18next}>{children}</Provider>;
}