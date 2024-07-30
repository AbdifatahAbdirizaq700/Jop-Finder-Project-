import React from 'react';

const SearchBar = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Search for jobs..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default SearchBar;
