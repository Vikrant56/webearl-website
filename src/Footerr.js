import React from 'react';
import './Footerr.css'; 

import logo from './images/logo.jpg';

const Footerr = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
  <div className="links-section">
    <div className="logo">
      <a href="#"><img src={logo} alt="Logo" /></a>
    </div>
    <div className="column">
      <h4>Links</h4>
      <ul>
        <li><a href="#">About US</a></li>
        <li><a href="#">Contact US</a></li>
        <li><a href="#">Customer care</a></li>
        <li><a href="#">Free listing</a></li>
        <li><a href="#">Media</a></li>
      </ul>
    </div>
    <div className="column">
      <h4>OC Expert</h4>
      <ul>
        <li><a href="#">Doctors</a></li>
        <li><a href="#">Contact US</a></li>
        <li><a href="#">Customer care</a></li>
        <li><a href="#">Free listing</a></li>
        <li><a href="#">Media</a></li>
      </ul>
    </div>
    <div className="column">
      <h4>OC Expert</h4>
      <ul>
        <li><a href="#">Doctors</a></li>
        <li><a href="#">Contact US</a></li>
        <li><a href="#">Customer care</a></li>
        <li><a href="#">Free listing</a></li>
        <li><a href="#">Media</a></li>
      </ul>
    </div>
    <div className="column">
      <h4>Connect us on</h4>
      <ul className="social-icons">
        <li><a href="#" className="facebook"></a></li>
        <li><a href="#" className="instagram"></a></li>
        <li><a href="#" className="twitter"></a></li>
        <li><a href="#" className="linkedin"></a></li>
      </ul>
      <div className="app-links">
        <a href="#"><img style={{width:"80px", height: "80px"}} src="https://th.bing.com/th?q=Google+App+and+Apple+Store+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="Google Playstore" /></a>
        {/* <a href="#"><img src="" alt="App Store" /></a> */}
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Your Company. All rights reserved.</p>
  </div>
  </div>

    </footer>
  );
};

export default Footerr;
