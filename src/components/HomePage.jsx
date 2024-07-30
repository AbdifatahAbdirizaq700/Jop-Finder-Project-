// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterSidebar from './FilterSidebar';
import SearchBar from '../SearchBar';
import PopularSearches from '../PopularSearches ';
import JobDescription from './JobDescription';
import JobList from '../JobList';


const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then((response) => {
        setJobs(response.data);
        setFilteredJobs(response.data);
      })
      .catch((error) => console.error('Error fetching jobs:', error));
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
        (filters.contract ? job.contract === filters.contract : true) &&
        (filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
        (filters.company ? job.company.toLowerCase().includes(filters.company.toLowerCase()) : true)
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

  return (
    <div className="flex">
      <FilterSidebar onFilter={handleFilter} />
      <div className="flex-1">
        <SearchBar onSearch={handleSearch} />
        <PopularSearches />
        {selectedJob && (
          <JobDescription job={selectedJob} onClose={handleCloseDescription} />
        )}
        <JobList jobs={filteredJobs} onJobClick={handleJobClick} />
      </div>
    </div>
  );
};

export default HomePage;
