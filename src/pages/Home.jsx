import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-page">
      <div className="home-hero-content">
        <h1>AI-Powered Solutions<br />for Small Businesses</h1>
        <p>
          Streamline your operations and boost productivity with our AI-assisted services
          tailored for local businesses.
        </p>
        <Link to="/contact" className="get-started-button">Get Started</Link>
      </div>
      <div className="home-hero-image-container">
        <img src="/assets/mountain-inspiration.png" alt="Mountain Inspiration" className="home-hero-image" />
      </div>
    </section>
  );
}

export default Home;