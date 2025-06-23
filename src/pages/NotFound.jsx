import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Sorry, the page you’re looking for doesn’t exist.</p>
        <Link to="/" className="home-link">
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;