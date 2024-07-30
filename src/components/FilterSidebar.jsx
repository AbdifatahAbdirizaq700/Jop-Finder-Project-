// src/components/FilterSidebar.jsx
import React, { useState } from 'react';

const FilterSidebar = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    contract: '',
    location: '',
    company: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">Contract Type</label>
        <select
          name="contract"
          value={filters.contract}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="">All</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Freelance">Freelance</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Enter location"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Company</label>
        <input
          type="text"
          name="company"
          value={filters.company}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Enter company name"
        />
      </div>

      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
