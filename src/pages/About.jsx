import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-text">
          <h1>About</h1>
          <p className="mission">
            Empowering small businesses with AI-driven automation is our mission at Main Street Logic.
          </p>
          <p>
            Founded with the goal of helping local businesses thrive, we provide AI-assisted solutions
            designed to automate and optimize everyday operations.
          </p>
          <p>
            Our team is dedicated to making advanced technology accessible and beneficial for small
            businesses, enabling them to focus on what they do best.
          </p>
        </div>
        <img
          src="/assets/logo-transparent-blue-white.png"
          alt="Main Street Logic Logo"
          className="about-hero-logo"
        />
      </div>

      <div className="about-body">
        <section className="what-we-do">
          <div className="what-we-do-section">
            <div className="what-we-do-image">
              <img src="/assets/small-businesses.png" alt="Main Street Illustration" />
            </div>
            <div className="what-we-do-text">
              <h2>What We Do</h2>
              <p>
                At Main Street Logic, we work directly with small business owners to uncover high-impact opportunities for automation.
                Our mission is to deliver practical, intelligent software solutions that simplify operations, reduce manual overhead,
                and unlock growth – without the complexity of enterprise systems.
              </p>
              <p>
                We enable practical usage of AI solutions customized for your business such as automatic transcription, storage,
                and triage of voicemails, monitoring of social media reviews, website facelifts, Search Engine Optimization, and more.
              </p>
            </div>
          </div>
        </section>

        <section className="our-history-section">
          <div className="content-container">
            <h2>Our History</h2>
            <div className="history-columns">
              <div className="history-column">
                <p>
                  <strong>Founded in 2025</strong>, Main Street Logic was created by seasoned technologists with deep experience
                  in software engineering, artificial intelligence, and cloud-native architectures.
                </p>
              </div>
              <div className="history-column">
                <p>
                  Before launching Main Street Logic, our team spent years modernizing Fortune 100 financial
                  service organizations—bringing complex, distributed systems into the cloud, building
                  microservice platforms, and developing AI-driven solutions at scale.
                </p>
              </div>
              <div className="history-column">
                <p>
                  Now, we bring that expertise to Main Street—making modern technology accessible, effective,
                  and personal for the businesses that power our communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="locations-we-serve-section">
          <div className="locations-we-serve-content">
            <div className="locations-we-serve-image">
              <img
                src="/assets/richmond-skyline.png"
                alt="Richmond skyline illustration"
                className="richmond-skyline-image"
              />
            </div>
            <div className="locations-we-serve-text">
              <h2>Locations We Serve</h2>
              <p>
                Main Street Logic is capable of providing solutions globally, but focuses on creating exceptional
                customer experiences in Richmond, Virginia and the surrounding area. We are available for in-person 
                consultation if desired.
              </p>
              <p>
                We run solutions for some clients directly in the cloud, taking advantage of superior scalability
                and reliability while building practical AI and automation solutions with cutting edge cloud provider
                solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}