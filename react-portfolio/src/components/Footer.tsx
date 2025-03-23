import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const yourName = 'Abhinav Ingle';
  
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="social-links">
          <a href="https://github.com" target="_blank" className="social-icon" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" className="social-icon" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" className="social-icon" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">© {currentYear} {yourName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 