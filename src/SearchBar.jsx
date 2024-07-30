// src/components/SearchBar.jsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="flex justify-center mb-4">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 pl-10 w-full hover:border-blue-400 transition-colors duration-200"
          placeholder="Search for Job Title"
        />
        <FaSearch className="absolute top-2 left-3 text-gray-400 hover:text-blue-400 transition-colors duration-200" />
      </div>
    </div>
  );
};

export default SearchBar;
