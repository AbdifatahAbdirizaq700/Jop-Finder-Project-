// src/components/JobList.jsx
import React from 'react';

const jobs = [
  { id: 1, title: 'Senior React Developer', company: 'Dayon Tech', type: 'Remote', employmentType: 'Full Time', description: 'This is a great job opportunity for Senior React Developers looking to work remotely. You will work on exciting projects...' },
  { id: 2, title: 'Junior React Developer', company: 'Dayon Tech', type: 'Hybrid', employmentType: 'Part Time', description: 'Join our team as a Junior React Developer and grow your skills. This role offers hybrid working conditions...' },
  { id: 3, title: 'Mid-level React Developer', company: 'Dayon Tech', type: 'On-site', employmentType: 'Internship', description: 'Perfect for those looking to enhance their skills with an on-site internship. Learn from experienced developers...' },
  // Add more job listings as needed
];

const JobList = ({ onJobClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          onClick={() => onJobClick(job)}
        >
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-gray-600">{job.type}</p>
          <p className="text-gray-600">{job.employmentType}</p>
          <div className="flex justify-between mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">Apply</button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300">Save</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
