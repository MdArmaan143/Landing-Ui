import React from "react";
import "../styles/Footer.css";

// ✅ React Icons Import
import { FaXTwitter, FaDiscord, FaLinkedinIn, FaMastodon } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column: Logo and Description */}
        <div className="footer-left">
        <div className="navbar-logo">
          <img src="/images/famicons_rocket.png" alt="logo" className="logo-img" />
          <span className="logo-text">
            <span className="logo-highlight">LaunchPad</span> Labs
          </span>
        </div>
          <p className="footer-description">
            We build high-quality MVPs to transform your ideas into reality.
          </p>

          {/* ✅ Social Icons */}
          <div className="social-icons">
            <div className="social-box">
              <FaXTwitter className="social-icon" />
            </div>
            <div className="social-box">
              <FaDiscord className="social-icon" />
            </div>
            <div className="social-box">
              <FaLinkedinIn className="social-icon" />
            </div>
            <div className="social-box">
              <FaMastodon className="social-icon" />
            </div>
          </div>
        </div>

        {/* Right Columns */}
        <div className="footer-right">
          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li>MVP Development</li>
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">About</h3>
            <ul className="footer-links">
              <li>Our Process</li>
              <li>How We Work</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Portfolio</h3>
            <ul className="footer-links">
              <li>Case Studies</li>
              <li>Success Stories</li>
              <li>MVP Showcase</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Text */}
      <p className="footer-bottom">© 2025 LinkVerse. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
