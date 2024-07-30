// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Statistics from './components/Statistics';
import Services from './components/Services';
import News from './components/News';
import HeroPage from './pages/HeroPage ';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Header />
      <HeroPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
