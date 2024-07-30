// src/components/FilterSidebar.jsx
import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="w-1/4 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Filter Jobs</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Contract Status</h3>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Full Time</span>
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Part Time</span>
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Internship</span>
        </label>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Location Status</h3>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">On-site</span>
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Remote</span>
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Hybrid</span>
        </label>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Saved Jobs</h3>
        <p className="text-gray-600">You don't have any saved jobs yet!</p>
      </div>
    </div>
  );
};

export default FilterSidebar;
