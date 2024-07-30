// src/components/PopularSearches.jsx
import React from 'react';

const popularTerms = ['React', 'Vue', 'Angular', 'Mid-Level', 'Senior', 'Laravel'];

const PopularSearches = () => {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      {popularTerms.map((term, index) => (
        <button
          key={index}
          className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300"
        >
          {term}
        </button>
      ))}
    </div>
  );
};

export default PopularSearches;
