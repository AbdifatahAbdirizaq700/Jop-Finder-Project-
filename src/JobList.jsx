// src/components/JobList.jsx
import React from 'react';
import JobItem from './components/JobItem';


const JobList = ({ jobs, onJobClick }) => {
  return (
    <div className="flex flex-wrap">
      {jobs.map((job) => (
        <div key={job.id} onClick={() => onJobClick(job)}>
          <JobItem job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobList;
