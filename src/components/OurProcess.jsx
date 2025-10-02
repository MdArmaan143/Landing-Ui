import React from "react";
import "../styles/OurProcess.css";

const OurProcess = () => {
  return (
    <section className="ourprocess-container">
      
          {/* Pill */}
          <div className="impact-pill1">
        <div className="pill-inner1">
          <span className="dot1"></span>
          <span className="pill-text1">Our Process</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="process-heading">The LaunchPad Process</h2>
      <p className="process-subheading">
        A transparent, efficient journey from first idea to full MVP — ready to
        launch in just 5 weeks.
      </p>

      {/* Cards Row 1 */}
      <div className="cards-row">
        <div className="process-card">
          <img src="/images/Frame 636.png" alt="process step 1" />
        </div>
        <div className="process-card">
          <img src="/images/Frame 637.png" alt="process step 2" />
        </div>
        <div className="process-card">
          <img src="/images/Frame 638.png" alt="process step 3" />
        </div>
      </div>

      {/* Cards Row 2 */}
      <div className="cards-row row-2">
        <div className="process-card wide">
          <img src="/images/Frame 639.png" alt="process step 4" />
        </div>
        <div className="process-card wide">
          <img src="/images/last.png" alt="process step 5" />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
