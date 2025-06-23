
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="logo-container">
        <NavLink to="/">
          <img
            src="/assets/logo-white.png"
            alt="Main Street Logic Logo"
            className="site-logo"
          />
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
