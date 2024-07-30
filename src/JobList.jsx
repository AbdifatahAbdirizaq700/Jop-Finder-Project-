// src/components/JobList.jsx
import React, { useEffect, useState } from 'react';

const JobList = ({ onJobClick }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div className="flex flex-wrap">
      {jobs.map(job => (
        <div key={job.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div
            className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 cursor-pointer"
            onClick={() => onJobClick(job)}
          >
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4 transition-colors duration-300">
              Apply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
