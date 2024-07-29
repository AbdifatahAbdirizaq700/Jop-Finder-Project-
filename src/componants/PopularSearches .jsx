import React from 'react';

const PopularSearches = () => {
  const searches = ['Software Engineer', 'Data Scientist', 'Product Manager', 'UX Designer'];

  return (
    <div className="max-w-md mx-auto py-4">
      <h2 className="text-lg font-semibold mb-2">Popular Searches</h2>
      <div className="flex flex-wrap gap-2">
        {searches.map((search, index) => (
          <button
            key={index}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
