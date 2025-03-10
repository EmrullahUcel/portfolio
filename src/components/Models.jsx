import React from 'react';
import { useTranslation } from 'react-i18next';

function Models() {
  const { t } = useTranslation();
  
  const models = [
    {
      title: t('models.comingSoon'),
      description: t('models.description'),
      status: t('models.status'),
      technologies: t('models.technologies', { returnObjects: true }),
      features: t('models.features', { returnObjects: true })
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-8 text-center">
          {t('models.title')}
        </h1>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('models.intro')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {models.map((model, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {model.title}
                  </h2>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                    {model.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {model.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full text-sm font-medium text-indigo-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {model.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full text-sm font-medium text-purple-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 rounded-2xl shadow-lg backdrop-blur-sm text-center">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">{t('models.status')}</h2>
            <p className="text-gray-700">
              {t('models.quote')}
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/emrullah-üçel-512598268" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {t('models.contact')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;