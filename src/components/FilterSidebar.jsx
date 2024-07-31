// src/components/FilterSidebar.jsx
import React, { useState } from 'react';

const FilterSidebar = ({ onFilter }) => {
  const [contractType, setContractType] = useState('');
  const [location, setLocation] = useState('');

  const handleContractTypeChange = (e) => {
    setContractType(e.target.value);
    onFilter({ contractType: e.target.value, location });
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onFilter({ contractType, location: e.target.value });
  };

  return (
    <div className="w-90 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Filter Jobs</h3>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Contract Type</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg"
          value={contractType}
          onChange={handleContractTypeChange}
        >
          <option value="">All</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Location</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
      </div>
      <div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          onClick={() => onFilter({ contractType, location })}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
