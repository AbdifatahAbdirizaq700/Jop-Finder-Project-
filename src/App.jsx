import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Statistics from './components/Statistics';
import ContactUs from './pages/ContactUs';
import HeroPage from './pages/HeroPage ';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <HeroPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
