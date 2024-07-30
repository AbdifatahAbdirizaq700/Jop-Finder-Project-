// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-full max-w-lg"
        placeholder="Search for Job Title"
      />
    </div>
  );
};

export default SearchBar;
