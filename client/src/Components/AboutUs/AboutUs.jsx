import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white pt-12 pb-12 flex flex-col items-center justify-center p-6">
      {/* Container */}
      <div className="bg-gray-50  rounded-2xl p-8 max-w-6xl w-full mx-4">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>

        {/* Introduction */}
        <p className="text-center text-gray-600 text-lg mb-12">
          Welcome to <span className="font-semibold text-indigo-600">BCS-Noteswala</span>, where we empower students to achieve academic excellence through high-quality study materials and resources.
        </p>

        {/* Grid Layout for Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to make quality education accessible to every student. We provide a comprehensive database of study materials, notes, and question papers to help students learn smarter and achieve their goals.
            </p>
          </div>

          {/* What We Offer Section */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Access to 35M+ study materials and notes.</li>
              <li>Downloadable question papers for exam preparation.</li>
              <li>A platform to upload and share your own notes.</li>
            </ul>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Organized and easy-to-navigate resources.</li>
              <li>Trusted by over 700M students worldwide.</li>
              <li>Dedicated to supporting students at every step.</li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Our Community</h2>
            <p className="text-gray-700">
              BCS-Noteswala is powered by a vibrant community of students, educators, and lifelong learners. Together, we are building a collaborative environment where knowledge is shared and celebrated.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Us Today!</h2>
          <p className="text-gray-600 mb-6">
            Become part of a global community dedicated to academic success.
          </p>
          <button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg shadow-lg  transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;