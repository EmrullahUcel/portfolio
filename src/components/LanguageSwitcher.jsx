import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="ml-4 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-sm font-medium"
    >
      {i18n.language === 'en' ? 'TR' : 'EN'}
    </button>
  );
}

export default LanguageSwitcher;