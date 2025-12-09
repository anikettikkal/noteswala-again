import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Container */}
      <div className="max-w-6xl w-full mx-4">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Our Team
        </h1>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            {/* Avatar */}
            <div className="relative w-32 h-32 rounded-full mb-6 overflow-hidden border-4 border-indigo-200 shadow-lg">
              <img
                src="https://github.com/anikettikkal.png" // Replace with your image URL
                alt="Team Member 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name */}
            <h2 className="text-2xl font-bold text-orange-500 mb-2">Aniket Ramesh Tikkal</h2>
            {/* Developer Info */}
            <p className="text-gray-600 mb-6">
            Co-Founder & Developer
            Aniket recently completed his Master's in Computer Science and has a strong command of the MERN stack. He specializes in building scalable, user-friendly web applications and is passionate about solving complex problems with innovative solutions.            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://github.com/anikettikkal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-all">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://instagram.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-all">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-all">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            {/* Avatar */}
            <div className="relative w-32 h-32 rounded-full mb-6 overflow-hidden border-4 border-indigo-200 shadow-lg">
              <img
                src="https://github.com/avishkarmandlik.png" // Replace with your image URL
                alt="Team Member 2"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name */}
            <h2 className="text-2xl font-bold text-orange-500 mb-2">Avishkar Bapusaheb Mandlik</h2>
            {/* Developer Info */}
            <p className="text-gray-600 mb-6">
            Co-Founder & Developer
            Avishkar recently completed his Master's in Computer Science and has a strong command of the MERN stack. He specializes in building scalable, user-friendly web applications and is passionate about solving complex problems with innovative solutions.            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://github.com/avishkarmandlik" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-all">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://instagram.com/janesmith" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-all">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-all">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;