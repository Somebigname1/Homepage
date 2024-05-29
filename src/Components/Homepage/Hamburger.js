import React, { useState } from 'react';


const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="hamburger" onClick={toggleMenu}>


<img src={'images/Hamburgr.png'}/>

      </div>
      
      <div className={`menu ${menuOpen ? 'show' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>X</button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">What we do</a></li>
          <li><a href="#">Get Started</a></li>
        </ul>
        <a href='#' className='connects'>Connect with us</a>
      </div>
    </div>
  );
}

export default HamburgerMenu;


