import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src="/images/famicons_rocket.png" alt="logo" className="logo-img" />
          <span className="logo-text">
            <span className="logo-highlight">LaunchPad</span> Labs
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li>How It Works</li>
          <li>Our Approach</li>
          <li>Our Process</li>
          <li>Our Founder</li>
          <li>Pricing</li>
        </ul>

        {/* Desktop Button */}
        <div className="nav-btn">
          <button>Contact Us</button>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>How It Works</li>
            <li>Our Approach</li>
            <li>Our Process</li>
            <li>Our Founder</li>
            <li>Pricing</li>
          </ul>
          <button className="mobile-btn">Contact Us</button>
        </div>
      )}
    </nav>
  );
};

export default Header;
