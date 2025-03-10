import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-12 text-center">
            {t('about.title')}
          </h1>
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                Merhaba! Ben bir oyun geliştiricisi ve 3D modelleyiciyim.
                2022 yılında yazılım dünyasına web geliştirici olarak adım attım. Başlangıçta HTML, CSS ve JavaScript ile web siteleri oluştururken, 
                zamanla interaktif dünyalar yaratmaya olan ilgimi keşfettim. Bu tutku beni oyun geliştirme ve 3D modelleme alanına yönlendirdi.
                Şu anda bağımsız bir oyun geliştiricisi olarak Unity ve C# kullanarak oyunlar tasarlıyor, Blender ile 3D modeller oluşturuyorum.
                Her yeni proje, hem öğrenmek hem de kendimi geliştirmek için heyecan verici bir yolculuk.
              </p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Yeteneklerim
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Unity ile oyun geliştirme",
                  "Blender ile 3D modelleme",
                  "C# programlama",
                  "React ile web geliştirme",
                ].map((skill, index) => (
                  <li key={index} className="flex items-center bg-white/60 p-4 rounded-xl shadow-sm">
                    <span className="h-2 w-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100">
                <h2 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Deneyim
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-800">Indie Oyun Geliştirici</h3>
                    <p className="text-purple-600">2024 - Günümüz</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100">
                <h2 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  Eğitim
                </h2>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">Trakya Üniversitesi Besyo</h3>
                  <p className="text-purple-600"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;