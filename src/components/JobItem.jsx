// src/components/JobItem.jsx
import React from 'react';

const JobItem = ({ job }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-2 w-full max-w-sm">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-700">{job.description}</p>
      <p className="text-gray-500">Location: {job.location}</p>
      <p className="text-gray-500">Company: {job.company}</p>
      <p className="text-gray-500">Salary: {job.salary}</p>
      {/* You can add more fields as needed */}
    </div>
  );
};

export default JobItem;
