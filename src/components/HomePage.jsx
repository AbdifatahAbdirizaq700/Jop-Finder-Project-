// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar';
import PopularSearches from '../PopularSearches ';
import JobDescription from './JobDescription';
import FilterSidebar from './FilterSidebar';
import JobList from '../JobList';



const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then((response) => {
        setJobs(response.data);
        setFilteredJobs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        alert('Dear teacher please run your server right click job-finder-backend terminal then write , "node server.js"');
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleFilter = (filters) => {
    const filtered = jobs.filter((job) => {
      return (
        (filters.contractType ? job.contract === filters.contractType : true) &&
        (filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true)
      );
    });
    setFilteredJobs(filtered);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDescription = () => {
    setSelectedJob(null);
  };

  const handleSaveJob = (job) => {
    if (!savedJobs.some(savedJob => savedJob.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  return (
    <div className="flex">
      <FilterSidebar onFilter={handleFilter} savedJobs={savedJobs} />
      <div className="flex-1 p-4">
        <SearchBar onSearch={handleSearch} />
        <PopularSearches />
        {selectedJob && (
          <JobDescription job={selectedJob} onClose={handleCloseDescription} onSave={handleSaveJob} />
        )}
        <JobList jobs={filteredJobs} onJobClick={handleJobClick} />
      </div>
    </div>
  );
};

export default HomePage;
