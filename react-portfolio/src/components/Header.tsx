import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'home-active' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <span className="brand-text">Abhinav Ingle</span>
          </Link>
          
          <button 
            className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
            type="button" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/skills"
                  onClick={closeMenu}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/projects"
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/blog"
                  onClick={closeMenu}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 