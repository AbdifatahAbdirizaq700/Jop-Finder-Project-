// src/components/HomePage.jsx
import React from 'react';


import SearchBar from '../SearchBar';
import PopularSearches from '../PopularSearches ';
import FilterSidebar from './FilterSidebar';
import JobList from '../JobList';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Let's Find you the Perfect Job!</h1>
      <p className="text-center mb-6">Learn ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi debitis veniam.</p>
      <SearchBar />
      <PopularSearches />

      <div className="flex mt-6">
        <FilterSidebar />
        <div className="flex-1 ml-4">
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
