import React, { useState } from 'react';
import DeeLogo from '../images/Dee_Logo.png';
import { FaBars } from 'react-icons/fa';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="nav-logo">
          <img src={DeeLogo} alt="Dee Logo" className="logo-image" />
        </div>
        <button className="nav-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation; 