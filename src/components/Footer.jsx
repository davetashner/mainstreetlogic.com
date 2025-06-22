import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" style={{ textAlign: 'center', padding: '1rem', fontSize: '0.9rem', color: '#666' }}>
      <p>&copy; {currentYear} Main Street Logic LLC. All rights reserved.</p>
    </footer>
  );
}

export default Footer;