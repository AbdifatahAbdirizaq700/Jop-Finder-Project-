// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar';
import PopularSearches from '../PopularSearches ';
import JobDescription from './JobDescription';
import JobList from '../JobList';


const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from the server
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

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <PopularSearches />
      <div className="flex">
        <JobDescription />
        <JobList jobs={filteredJobs} />
      </div>
    </div>
  );
};

export default HomePage;
