// src/components/JobList.jsx
import React from 'react';
import JobItem from './components/JobItem';

const JobList = ({ jobs, onJobClick, onSaveJob }) => {
  return (
    <div>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobItem
            key={job.id}
            job={job}
            onJobClick={onJobClick}
            onSaveJob={onSaveJob}
          />
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default JobList;
