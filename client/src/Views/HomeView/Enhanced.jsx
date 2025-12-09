import React from 'react';

const Enhanced = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 to-white font-sans">
      {/* Decorative elements */}
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-purple-300 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
      <div className="absolute right-32 top-96 h-64 w-64 rounded-full bg-pink-300 opacity-20 blur-3xl"></div>
      
      {/* Animated circles */}
      <div className="absolute -right-10 top-20 h-32 w-32 animate-pulse rounded-full bg-pink-500 opacity-75"></div>
      <div className="absolute -left-16 bottom-32 h-48 w-48 animate-pulse rounded-full bg-blue-500 opacity-20"></div>
      <div className="absolute right-1/4 top-1/4 h-16 w-16 animate-pulse rounded-full bg-yellow-400 opacity-60"></div>
      
      {/* Header with navigation */}
      {/* <header className="relative z-10">
        <nav className="container mx-auto flex items-center justify-between p-6">
          <div className="flex items-center">
            <div className="mr-2 h-10 w-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600"></div>
            <span className="text-xl font-bold text-gray-900">EduNotes</span>
          </div>
          <div className="hidden space-x-8 md:flex">
            <a href="#" className="text-gray-700 hover:text-purple-600">Notes</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Question Papers</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">PDFs</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Chapters</a>
          </div>
          <button className="hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 font-medium text-white shadow-lg transition-all hover:opacity-90 md:block">
            Get Started
          </button>
          <button className="rounded-md bg-gray-100 p-2 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header> */}
      
      {/* Main content */}
      <main className="container relative z-10 mx-auto px-6 pt-6 md:px-8 lg:pt-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left side - hero text */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Unlock your</span>
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">academic potential</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Join over 700M students who've transformed their learning experience with our comprehensive database of study materials.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:opacity-90">
                Find Study Materials
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50">
                Upload Notes
              </button>
            </div>
          </div>
          
          {/* Right side - interactive 3D element */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative h-64 w-64 animate-float md:h-80 md:w-80">
              {/* 3D geometric shapes */}
              <div className="absolute h-full w-full rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl transform rotate-6"></div>
              <div className="absolute h-full w-full rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 shadow-xl transform -rotate-3"></div>
              <div className="absolute flex h-full w-full items-center justify-center rounded-lg bg-white shadow-lg transform rotate-0">
                <div className="p-6 text-center">
                  <svg className="mx-auto h-16 w-16 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div className="mt-4 text-2xl font-bold text-gray-800">Study Smarter</div>
                  <div className="mt-2 text-sm text-gray-600">With organized, quality materials</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-24 mb-16">
          <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white p-8 shadow-xl md:grid-cols-3">
            {/* Study Resources */}
            <div className="flex flex-col items-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">35M+</h2>
              <p className="text-sm text-gray-600">Study Resources</p>
              <div className="mt-4 rounded-full bg-blue-100 px-4 py-1 text-xs font-medium text-blue-800">
                1 new every second
              </div>
            </div>
            
            {/* Institutions */}
            <div className="flex flex-col items-center rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">115K+</h2>
              <p className="text-sm text-gray-600">Institutions</p>
              <div className="mt-4 rounded-full bg-purple-100 px-4 py-1 text-xs font-medium text-purple-800">
                In 100+ countries
              </div>
            </div>
            
            {/* Users */}
            <div className="flex flex-col items-center rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-6 text-center transition-transform hover:scale-105">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <svg className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">60M+</h2>
              <p className="text-sm text-gray-600">Active Users</p>
              <div className="mt-4 rounded-full bg-orange-100 px-4 py-1 text-xs font-medium text-orange-800">
                Every month
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured categories */}
        <div className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Explore Top Categories
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Category 1 */}
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Lecture Notes</h3>
              <p className="mt-2 text-gray-600">Access comprehensive notes from top institutions.</p>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium text-indigo-600 group-hover:underline">Browse Notes</span>
                <svg className="ml-2 h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Question Papers</h3>
              <p className="mt-2 text-gray-600">Practice with previous years' question papers.</p>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium text-purple-600 group-hover:underline">View Papers</span>
                <svg className="ml-2 h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Textbooks</h3>
              <p className="mt-2 text-gray-600">Download chapter-wise textbook PDFs.</p>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium text-green-600 group-hover:underline">Get PDF Books</span>
                <svg className="ml-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Category 4 */}
            <div className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Solved Examples</h3>
              <p className="mt-2 text-gray-600">Study step-by-step solutions to complex problems.</p>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium text-red-600 group-hover:underline">Explore Solutions</span>
                <svg className="ml-2 h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mb-24 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white shadow-xl md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <svg className="mx-auto mb-6 h-12 w-12 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <p className="mb-6 text-xl md:text-2xl">
              EduNotes completely transformed how I study. Having access to quality notes and past papers helped me ace my exams with much less stress. It's an essential resource for every student!
            </p>
            <div className="font-medium">
              <p className="text-lg">Sarah Johnson</p>
              <p className="text-purple-200">Computer Science Student, Stanford University</p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Ready to excel in your studies?
          </h2>
          <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:shadow-xl">
            Join 700M+ Students Today
          </button>
        </div>
      </main>
      
      {/* Footer */}
      
    </div>
  );
};

export default Enhanced;