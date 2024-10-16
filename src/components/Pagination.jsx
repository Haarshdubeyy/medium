import React from "react";

const Pagination = ({ onNext, onPrevious, page }) => {
  return (
    <div className="mt-8 flex justify-center space-x-4">
      <button
        onClick={onPrevious}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 transition-colors"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
