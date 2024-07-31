// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Statistics from './components/Statistics';
import Services from './components/Services';
import News from './components/News';

import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import HeroPage from './pages/HeroPage ';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroPage />
              <Statistics />
              <HomePage />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
