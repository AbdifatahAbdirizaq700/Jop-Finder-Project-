// src/components/JobList.jsx
import React from 'react';

const jobs = [
  { title: 'Senior React Developer', company: 'Dayon Tech', type: 'Remote', employmentType: 'Full Time' },
  { title: 'Junior React Developer', company: 'Dayon Tech', type: 'Hybrid', employmentType: 'Part Time' },
  { title: 'Mid-level React Developer', company: 'Dayon Tech', type: 'On-site', employmentType: 'Internship' },
  // Add more job listings as needed
];

const JobList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {jobs.map((job, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-gray-600">{job.type}</p>
          <p className="text-gray-600">{job.employmentType}</p>
          <div className="flex justify-between mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Apply</button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">Save</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
