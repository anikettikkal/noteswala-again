import React from 'react';

const HomeLand = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white font-sans">
      {/* Top right decorative blob */}
      <div className="absolute right-0 top-0 h-64 w-96">
        <div className="absolute right-0 top-0 h-40 w-64 rounded-bl-full bg-lime-300"></div>
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-fuchsia-500"></div>
      </div>
      
      {/* Bottom right decorative blob */}
      <div className="absolute -bottom-20 right-0 h-96 w-96">
        <div className="absolute bottom-0 right-0 h-64 w-80 rounded-full bg-fuchsia-500"></div>
        <div className="absolute bottom-40 right-20 h-32 w-32 rounded-full bg-blue-200 opacity-70"></div>
      </div>
      
      {/* Main content container */}
      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8 lg:py-16">
        {/* Header section */}
        <header className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            700M students saved, and<br className="hidden sm:block" /> counting
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-700 md:text-xl">
            50K new study notes added every day, from the world's most active student communities
          </p>
        </header>
        
        {/* Triangle illustration with arrow */}
        <div className="relative mx-auto my-12 flex w-full max-w-6xl justify-between">
          <div className="relative ml-4 h-64 w-64 md:h-80 md:w-80 lg:ml-0">
            <svg viewBox="0 0 300 300" className="h-full w-full">
              {/* Dark outer triangle */}
              <path 
                d="M50,250 L150,50 L250,250 Z" 
                fill="#3D0A21" 
              />
              {/* Light inner triangle */}
              <path 
                d="M75,225 L150,80 L225,225 Z" 
                fill="#F5E1FF" 
              />
              {/* Pink arrow */}
              <path 
                d="M150,110 L120,160 L140,160 L140,200 L160,200 L160,160 L180,160 Z" 
                fill="#E536D7" 
              />
              {/* Pink dot */}
              <circle cx="120" cy="180" r="12" fill="#E536D7" />
              {/* Pink line */}
              <ellipse cx="150" cy="220" rx="35" ry="8" fill="#E536D7" />
            </svg>
          </div>
          
          {/* Stats section - taking up the right side on desktop */}
          <div className="flex-1 md:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Study Resources */}
              <div className="flex flex-col items-center text-center">
                <h2 className="text-5xl font-bold text-black sm:text-6xl">35M</h2>
                <div className="mt-2 flex items-center">
                  <span className="text-base text-gray-600">📄 Study resources</span>
                </div>
                <div className="mt-2 rounded-full bg-purple-200 px-4 py-1 text-sm font-medium text-purple-800">
                  1 new each second
                </div>
              </div>
              
              {/* Institutions */}
              <div className="flex flex-col items-center text-center">
                <h2 className="text-5xl font-bold text-black sm:text-6xl">115K</h2>
                <div className="mt-2 flex items-center">
                  <span className="text-base text-gray-600">🏛️ Institutions</span>
                </div>
                <div className="mt-2 rounded-full bg-green-400 px-4 py-1 text-sm font-medium text-green-800">
                  In 100+ countries
                </div>
              </div>
              
              {/* Users */}
              <div className="flex flex-col items-center text-center">
                <h2 className="text-5xl font-bold text-black sm:text-6xl">60M</h2>
                <div className="mt-2 flex items-center">
                  <span className="text-base text-gray-600">👤 Users</span>
                </div>
                <div className="mt-2 rounded-full bg-orange-400 px-4 py-1 text-sm font-medium text-orange-800">
                  Every month
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl md:text-5xl">
            Only the best for the best
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeLand;