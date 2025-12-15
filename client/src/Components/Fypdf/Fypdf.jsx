import React, { useEffect, useState } from "react";
import axios from "axios";

const Fypdf = () => {
  const [pdfs, setPdfs] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchPdfs();
  }, []);

  useEffect(() => {
    if (searchText.trim().length > 0) {
      fetchSpecificItems();
    } else {
      fetchPdfs();
    }
  }, [searchText]);

  const fetchPdfs = async () => {
    try {
      const res = await axios.get("/api/pdfs/FyallPdfs");
      setPdfs(res.data.data);
    } catch (err) {
      console.error("Error fetching PDFs", err);
    }
  };

  const fetchSpecificItems = async () => {
    try {
      const res = await axios.get(
        `/api/pdfs/Fypdfsbytitle?title=${searchText}`
      );
      setPdfs(res.data.data);
    } catch (err) {
      console.error("Error searching PDFs", err);
    }
  };

  return (
    <div className="p-6">

      {/* Search Box */}
      <div className="w-full flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search your Subject PDF..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-purple-500
              shadow-sm"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            🔍
          </span>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        FY PDFs
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pdfs.map((pdf) => (
          <div
            key={pdf._id}
            className="bg-white rounded-2xl border border-gray-100
              shadow-md hover:shadow-2xl transition-all duration-300
              hover:-translate-y-1 flex flex-col"
          >
            {/* Image */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3">
              <img
                src={pdf.imgUrl}
                alt={pdf.title}
                className="w-full h-44 object-contain bg-white rounded-xl p-2"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                {pdf.title}
              </h2>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {pdf.description}
              </p>

              <div className="text-xs text-gray-500 mb-4 flex justify-between">
                <span>📅 {pdf.year}</span>
                <span>👨‍🏫 {pdf.faculty}</span>
              </div>

              {/* Button */}
              <a
                href={pdf.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-white font-semibold py-2.5
                  rounded-xl text-center
                  bg-gradient-to-r from-purple-500 to-pink-500
                  hover:from-purple-600 hover:to-pink-600
                  transition-all duration-300 shadow-md"
              >
                📄 View PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fypdf;
