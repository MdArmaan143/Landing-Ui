import React from "react";
import "../styles/Impact.css";

const Impact = () => {
  return (
    <section className="impact-section">
      {/* Pill */}
      <div className="impact-pill">
        <div className="pill-inner">
          <span className="dot"></span>
          <span className="pill-text">Our Impact</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="impact-heading">
        Delivering results for ambitious startups and founders
      </h2>

      {/* Stats Row */}
      <div className="impact-stats">
        {/* 1st Box */}
        <div className="stat-card first-card">
          <span className="stat-value">$15M+</span>
          <span className="stat-label">Client Funding</span>
        </div>

        {/* 2nd Box */}
        <div className="stat-card second-card">
          <span className="stat-value">50+</span>
          <span className="stat-label">Products Built</span>
        </div>

        {/* 3rd Box */}
        <div className="stat-card third-card">
          <span className="stat-value">5</span>
          <span className="stat-label">Acquisitions</span>
        </div>
      </div>
    </section>
  );
};

export default Impact;
