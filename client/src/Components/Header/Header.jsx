import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149341898.jpg?w=2000" // Replace with your logo image
                alt="BCS-Noteswala Logo"
                className="h-12 w-12 rounded-full"
              />
              <span className="text-2xl font-bold text-gray-800 ml-2">
                BCS-Noteswala
              </span>
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-8 h-8 text-gray-800 hover:text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-800 hover:text-blue-500 font-medium">
              Home
            </a>
            <a href="/notes" className="text-gray-800 hover:text-blue-500 font-medium">
              Notes
            </a>
            <a href="/question-papers" className="text-gray-800 hover:text-blue-500 font-medium">
              Question Papers
            </a>
            <a href="/login" className="text-gray-800 hover:text-blue-500 font-medium">
              Log In
            </a>
            <a
              href="/signup"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Menu (Collapsible) */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="block text-gray-800 hover:text-blue-500 px-4 py-3">
            Home
          </a>
          <a href="/notes" className="block text-gray-800 hover:text-blue-500 px-4 py-3">
            Notes
          </a>
          <a href="/question-papers" className="block text-gray-800 hover:text-blue-500 px-4 py-3">
            Question Papers
          </a>
          <a href="/login" className="block text-gray-800 hover:text-blue-500 px-4 py-3">
            Log In
          </a>
          <a
            href="/signup"
            className="block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;