import React from 'react';

const BCSChapters = () => {
  const chapters = [
    {
      id: 1,
      year: 'FYBCS',
      title: 'First Year BCS',
      description: 'Access comprehensive chapter-wise PDFs for First Year Bachelor of Computer Science.',
      icon: '📚',
      bgGradient: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
      chapters: ['C Programming', 'Digital Electronics', 'Mathematics', 'Communication Skills']
    },
    {
      id: 2,
      year: 'SYBCS',
      title: 'Second Year BCS',
      description: 'Download chapter-wise textbook PDFs for Second Year Bachelor of Computer Science.',
      icon: '📖',
      bgGradient: 'from-purple-500 to-pink-500',
      buttonColor: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      chapters: ['Data Structures', 'OOP with C++', 'Database Management', 'Operating Systems']
    },
    {
      id: 3,
      year: 'TYBCS',
      title: 'Third Year BCS',
      description: 'Study chapter-wise PDFs and prepare for your final year Bachelor of Computer Science.',
      icon: '🎓',
      bgGradient: 'from-green-500 to-teal-500',
      buttonColor: 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600',
      chapters: ['Software Engineering', 'Web Development', 'AI & ML', 'Network Security']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            BCS Chapter PDFs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download comprehensive chapter-wise textbooks for your Bachelor of Computer Science degree
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Icon Section */}
                <div className={`bg-gradient-to-r ${item.bgGradient} p-8`}>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-5xl">{item.icon}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${item.bgGradient}`}>
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Chapter List */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Popular Chapters:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.chapters.slice(0, 2).map((chapter, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                        >
                          {chapter}
                        </span>
                      ))}
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                        +{item.chapters.length - 2} more
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <button className={`w-full ${item.buttonColor} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group`}>
                    Get PDF Books
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </div>
  );
};

export default BCSChapters;