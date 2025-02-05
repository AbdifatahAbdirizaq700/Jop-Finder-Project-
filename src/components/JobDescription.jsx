// src/components/JobDescription.jsx
import React from 'react';

const JobDescription = ({ job, onClose, onSave }) => {
  if (!job) {
    return null; // Or a loading spinner, or a message
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
        <p className="mb-4">{job.description}</p>
        <p className="mb-4 font-semibold text-gray-800">Salary: {job.salary}</p> {/* Display salary */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          onClick={() => onSave(job)} // Pass job to onSave
        >
          Apply Now
        </button>
        <button
          className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default JobDescription;
