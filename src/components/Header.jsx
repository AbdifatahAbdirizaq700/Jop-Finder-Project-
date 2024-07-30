// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center">
        <img src="https://placehold.co/40x40/eeeeee/4B5563/png?text=Logo" alt="Logo" className="mr-3 h-8" />
        <span className="text-2xl font-semibold text-gray-900 dark:text-white">MyWebsite</span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-900 dark:text-white hover:underline">Home</Link>
        <Link to="/about" className="text-gray-900 dark:text-white hover:underline">About</Link>
        <Link to="/services" className="text-gray-900 dark:text-white hover:underline">Services</Link>
        <Link to="/contact" className="text-gray-900 dark:text-white hover:underline">Contact</Link>
      </nav>
      <div className="flex items-center">
        <button type="button" className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
          <img src="https://placehold.co/40x40/eeeeee/4B5563/png?text=Profile" alt="Profile" className="w-full h-full object-cover" />
        </button>
      </div>
    </header>
  );
};

export default Header;
