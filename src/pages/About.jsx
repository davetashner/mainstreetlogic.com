import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            At Main Street Logic, we work directly with small business owners to uncover high-impact
            opportunities for automation. Our mission is to deliver practical, intelligent software solutions
            that simplify operations, reduce manual overhead, and unlock growth - without the complexity of
            enterprise systems.
          </p>
          <p>
            We will enable practical usage of AI solutions customized for your business such as automatic
            transcription, storage, and triage of voicemails, monitoring of social media reviews, website facelifts,
            Search Engine Optimization, and more.  
          </p>
        </section>

        <section className="about-section">
          <h2>Our History</h2>
          <p>
            Founded in 2025, Main Street Logic was created by seasoned technologists with deep experience
            in software engineering, artificial intelligence, and cloud-native architectures.
          </p>
          <p>
            Before launching Main Street Logic, our team spent years modernizing Fortune 100 financial
            service organizations—bringing complex, distributed systems into the cloud, building
            microservice platforms, and developing AI-driven solutions at scale.
          </p>
          <p>
            Now, we bring that expertise to Main Street—making modern technology accessible, effective,
            and personal for the businesses that power our communities.
          </p>
        </section>
      </div>
    </section>
  );
}