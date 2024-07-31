// src/components/JobList.jsx
import React from 'react';

const JobList = ({ jobs, onJobClick, onSaveJob }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
          onClick={() => onJobClick(job)}
        >
          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{job.company}</p>
          <p className="text-sm text-gray-800 mb-2">Salary: {job.salary}</p> {/* Display salary */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation(); // Prevent event from bubbling up to the job click
              onSaveJob(job);
            }}
          >
            Save Job
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
