import React from 'react';

const JobSidebar = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 max-w-xs mx-auto">
      <h2 className="text-xl font-semibold mb-2">Job Title</h2>
      <p className="text-gray-700 mb-2">Location: New York</p>
      <p className="text-gray-700 mb-2">Company: Example Inc.</p>
      <p className="text-gray-700 mb-2">Work Status: Full-Time</p>
      <p className="text-gray-700 mb-2">Contract: Permanent</p>
      <p className="text-gray-700 mb-2">Salary: $60,000 - $80,000</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Apply Now</button>
    </div>
  );
};

export default JobSidebar;
