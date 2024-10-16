import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">&#169; Copyright 2024</p>
        <ul className="footer-list list">
          <li className="footer-item">
            <a href="#about" target="_blank" rel="noopener noreferrer nofollow">
              Instagram
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://youtu.be/wzkwjoAyjss"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
