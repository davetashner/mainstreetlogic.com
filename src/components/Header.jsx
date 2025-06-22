
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-logo">LOGO</h1>
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
