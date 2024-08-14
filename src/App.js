// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Search from './components/Search';
// import Funds from './components/Funds'
import './App.css';
import Funds from './components/Funds';
import Voting from './components/Voting';
// import News from './components/News'
// import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/about-us" element={<HeroSection />} />
          <Route path="/search-companies" element={<Search type1="Company" />} />
          <Route path="/search-funds" element={<Funds type="Fund" />} />
          <Route path="/sell-overpaid-ceo" element={<div>Sell the Overpaid CEO Virtual Portfolio Page</div>} />
          <Route path="/master-voting-template" element={<Voting/>}/>
          <Route path="/" element={<Home />} />
          {/* <News/> */}
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    
    {/* Additional components or content for the home page can be added here */}
  </>
);

export default App;
