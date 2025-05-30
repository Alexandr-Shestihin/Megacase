import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

const resources = {
   en: {
      translation: enTranslation,
   },
   ru: {
      translation: ruTranslation,
   },
};

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      resources,
      fallbackLng: 'en',
      debug: true, // debug для просмотра логов
      interpolation: {
         escapeValue: false,
      },
      detection: {
         order: ['localStorage', 'navigator'],
         lookupLocalStorage: 'i18nextLng',
      }
   })

export default i18n;