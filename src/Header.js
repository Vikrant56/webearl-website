import React from 'react';
import './Header.css';
import logo from './images/logo.jpg'


const Header = () => {
  return (
    <div>
    <header className="header">
      <div className="logo"> <img src = {logo} alt ='' /> </div>
      <nav>
        <ul>
        
          <li><a href="/home">Home</a></li>
          <li><a href="/">Free listing</a></li>
          <li><a href="/">Service</a></li>
          <li><a href="/">Contact US</a></li>
          <li><a href="/">Login/Register</a></li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;
