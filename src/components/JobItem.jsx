// src/components/JobItem.jsx
import React from 'react';

const JobItem = ({ job, onJobClick, onSaveJob }) => {
  return (
    <div className="border p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-600">{job.contract}</p>
      <p className="text-gray-600">Salary: {job.salary}</p> {/* Display salary */}
      <div className="mt-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          onClick={() => onJobClick(job)}
        >
          View Details
        </button>
        <button
          className="ml-2 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300"
          onClick={() => onSaveJob(job)}
        >
          Save Job
        </button>
      </div>
    </div>
  );
};

export default JobItem;
