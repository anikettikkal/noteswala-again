import React, { useEffect, useState } from "react";
import axios from "axios";

const Sypdf = () => {
    const [pdfs, setPdfs] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchPdfs();
    }, []);

    useEffect(() => {
        if (searchText.length > 0) {
            fetchSpecificItems();
        } else {
            fetchPdfs();
        }
    }, [searchText]);


    const fetchPdfs = async () => {
        try {
            const res = await axios.get("/api/pdfs/SyallPdfs");
            setPdfs(res.data.data);
        } catch (err) {
            console.error("Error fetching PDFs", err);
        }
    };

    async function fetchSpecificItems() {
    const response = await axios.get(`/Sypdfsbytitle?title=${searchText}`);
    console.log(response.data.data);
    setAllPdfitems(response.data.data);
  }

    return (
        <div className="p-4">

            {/* search input box */}
            <div className="w-full flex justify-center mb-6">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search your Subject PDF..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:border-blue-500 shadow-sm text-gray-700"
                    />

                    {/* Search Icon */}
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        🔍
                    </span>
                </div>
            </div>

            <h1 className="text-3xl font-bold mb-6">SY PDFs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pdfs.map((pdf) => (
                    <div
                        key={pdf._id}
                        className="border rounded-lg shadow-lg overflow-hidden flex flex-col"
                    >
                        <img
                            src={pdf.imgUrl}
                            alt={pdf.title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4 flex flex-col flex-1">
                            <h2 className="text-xl font-semibold mb-2">{pdf.title}</h2>
                            <p className="text-gray-600 mb-2">{pdf.description}</p>
                            <p className="text-sm text-gray-500 mb-2">
                                <strong>Year:</strong> {pdf.year} | <strong>Faculty:</strong>{" "}
                                {pdf.faculty}
                            </p>
                            <a
                                href={pdf.pdfUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition duration-200"
                            >
                                View PDF
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sypdf;
