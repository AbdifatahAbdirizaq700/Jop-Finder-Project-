// src/components/HomePage.jsx
import React from 'react';
import SearchBar from './components/SearchBar';
import PopularSearches from './components/PopularSearches';
import JobSidebar from './components/JobSidebar';
import JobList from './components/JobList';

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
