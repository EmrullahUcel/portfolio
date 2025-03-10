import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { t } = useTranslation();

  const navItems = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.games'), path: '/games' },
    { name: t('navigation.models'), path: '/models' },
    { name: t('navigation.contact'), path: '/contact' },
  ];

  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100">
                EÜ
              </Link>
            </div>
            <div className="flex space-x-1 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16" />
    </>
  );
}

export default Navbar;