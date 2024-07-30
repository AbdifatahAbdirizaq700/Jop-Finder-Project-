// src/components/HomePage.jsx
import React from 'react';
import SearchBar from './SearchBar';
import PopularSearches from './PopularSearches';
import JobSidebar from './JobSidebar';
import JobList from './JobList';

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <PopularSearches />
      <div className="flex">
        <JobSidebar />
        <JobList />
      </div>
    </div>
  );
};

export default HomePage;
