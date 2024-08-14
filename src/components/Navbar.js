// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>My Say on Pay</h1>
      </div>
      <div className="navbar-middle">
        <Link to="/about-us">About Us</Link>
        <Link to="/search-companies">Search Companies</Link>
        <Link to="/search-funds">Search Funds</Link>
        <Link to="/sell-overpaid-ceo">Sell the Overpaid CEO Virtual Portfolio</Link>
        <Link to="/master-voting-template">Master Voting</Link>
      </div>
      <div className="navbar-right">
        <button>Sign Out</button>
        <button>Sign In</button>
        <button>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
