import React from "react";
import "../styles/Impact.css";

const Impact = () => {
  return (
    <section className="impact-section">
      {/* Pill */}
      <div className="impact-pill">
        <span className="dot"></span>
        Our Impact
      </div>

      {/* Headline */}
      <h2 className="impact-heading">
        Delivering results for ambitious startups and founders
      </h2>

      {/* Stats Row */}
      <div className="impact-stats">
        <div className="stat-card">
          <span className="stat-value">$15M+</span>
          <span className="stat-label">Client Funding</span>
        </div>

        <div className="stat-card">
          <span className="stat-value">50+</span>
          <span className="stat-label">Products Built</span>
        </div>

        <div className="stat-card">
          <span className="stat-value">5</span>
          <span className="stat-label">Acquisitions</span>
        </div>
      </div>
    </section>
  );
};

export default Impact;
