// src/components/HomePage.jsx
import React, { useState } from 'react';
import JobDescription from './JobDescription';
import PopularSearches from '../PopularSearches ';
import FilterSidebar from './FilterSidebar';
import JobList from '../JobList';
import SearchBar from '../SearchBar';



const HomePage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDescription = () => {
    setSelectedJob(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Let's Find you the Perfect Job!</h1>
      <p className="text-center mb-6">Learn ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi debitis veniam.</p>
      <SearchBar />
      <PopularSearches />

      <div className="flex mt-6">
        <FilterSidebar />
        <div className="flex-1 ml-4">
          <JobList onJobClick={handleJobClick} />
        </div>
      </div>
      {selectedJob && <JobDescription job={selectedJob} onClose={handleCloseDescription} />}
    </div>
  );
};

export default HomePage;
