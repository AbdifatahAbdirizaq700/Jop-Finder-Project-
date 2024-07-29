// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-400">Job Finder App</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/statistics" className="hover:text-gray-400">Statistics</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
