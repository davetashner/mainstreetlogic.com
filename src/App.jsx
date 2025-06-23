
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Team from './pages/Team';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;