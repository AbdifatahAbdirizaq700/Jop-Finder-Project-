// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-full max-w-lg"
        placeholder="Search for Job Title"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
