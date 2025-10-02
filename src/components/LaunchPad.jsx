import React from "react";
import "../styles/LaunchPad.css";


const LaunchPad = () => {
  return (
    <section className="launchpad-container">
     {/* Pill */}
     <div className="impact-pilll">
        <div className="pill-innerr">
          <span className="dott"></span>
          <span className="pill-textt">Why LaunchPad Labs</span>
        </div>
      </div>

      

      {/* Main Heading */}
      <h2 className="launchpad-heading">Launch Smarter with Us</h2>

      {/* Description */}
      <p className="launchpad-desc">
        At LaunchPad Labs, we light up your ideas with lightning-fast MVP
        development. We take your concept and transform it into a market-ready
        web or mobile product in just five weeks — so you can shine brighter
        than competitors in today&apos;s fast-moving tech world
      </p>

      {/* Boxes */}
      <div className="card-wrapper">
        {/* Card 1 */}
        <div className="card">
          <div className="card-img img1"></div>
          <h3 className="card-title">MVP Package</h3>
          <p className="card-text">
            Everything you need — web app, landing page, and SEO-ready content —
            built to launch fast.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-img img2"></div>
          <h3 className="card-title">Integrations</h3>
          <p className="card-text">
            We connect payments, logins, emails &amp; more — so you&apos;re
            launch-ready from day one.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-img img3"></div>
          <h3 className="card-title">Modern Stack</h3>
          <p className="card-text">
            Powered by the latest tech and AI to ensure speed, stability, and
            scalability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaunchPad;
