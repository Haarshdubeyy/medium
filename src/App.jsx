import React, { useState } from "react";
import { fetchCats } from "./services/api";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import { Camera } from "lucide-react";

const App = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  const handleFetch = async (currentPage) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCats(currentPage);
      setCats(data);
      setCurrentImage(0);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev < cats.length - 1 ? prev + 1 : 0));
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : cats.length - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="text-center mb-12">
          <h1 style={{fontFamily:'Poppins, sans-serif'}} className="font-serif text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Cats Pictures
          </h1>
          
          <button
            onClick={() => handleFetch(page)}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:shadow-lg font-medium"
          >
            <Camera size={20} />
            <span style={{fontFamily:'Poppins, sans-serif'}}>Fetch New Cats</span>
          </button>
        </div>

     
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-gray-800"></div>
              <p className="mt-4 text-gray-600 font-medium">Loading your cats...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 font-medium">{error}</p>
              <p className="text-gray-500 mt-2">Please try again later</p>
            </div>
          )}

          {!loading && !error && cats.length > 0 && (
            <div className="space-y-6">
              <Card imageUrl={cats[currentImage]?.url} />
              <div className="text-center text-sm text-gray-500">
                Image {currentImage + 1} of {cats.length}
              </div>
            </div>
          )}

          {!loading && !error && cats.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 font-medium" style={{fontFamily:'Poppins, sans-serif'}}>Click the button above to fetch.</p>
            </div>
          )}
        </div>


        {cats.length > 0 && (
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePrevImage}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Previous
            </button>
            <button
              onClick={handleNextImage}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;