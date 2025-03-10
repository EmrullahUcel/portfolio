import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './components/translations/en.json';
import tr from './components/translations/tr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    lng: 'tr', // Varsayılan dil
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;