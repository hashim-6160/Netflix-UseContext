import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Audio and Subtitles</a>
          <a href="#">Media Center</a>
          <a href="#">Privacy</a>
          <a href="#">Contact Us</a>
          <a href="#">Investor Relations</a>
          <a href="#">Legal Notices</a>
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Corporate Information</a>
        </div>
        <div className="footer-social">
          <a href="#">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
          <a href="#">
            <img src="youtube-icon.png" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="footer-note">
        <p>&copy; 2024 Netflix, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
