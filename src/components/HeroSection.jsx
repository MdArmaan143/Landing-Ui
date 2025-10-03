import React from "react";
import "../styles/HeroSection.css";
import "../styles/Header.css"

const HeroSection= () => {
  return (
    <section className="hero-container">
      {/* Background curved lines */}
      {/* <img src="/images/line-left.svg" alt="" className="line-left-bg" />
      <img src="/images/line-right.svg" alt="" className="line-right-bg" /> */}
     

      {/* Floating side icons */}
      <img src="/images/setting.png" alt="settings" className="side-icon icon-left-top" />
      <img src="/images/rocket.png" alt="rocket" className="side-icon icon-left-bottom" />
      <img src="/images/system.png" alt="system" className="side-icon icon-right-top" />
      <img src="/images/light.png" alt="light" className="side-icon icon-right-bottom" />

      {/* Pill above heading */}
      <div className="pill">
        <img src="/images/avatars-group.png" alt="avatars" className="pill-avatars" />
        
      </div>

      {/* Heading */}
      <h1 className="hero-heading">
        LaunchPad Labs – Build &amp; Launch Your MVP
        <br />
        <span className="highlight">in Weeks, Not Months</span>
      </h1>

      {/* Subtext */}
      <p className="hero-subtext">
        We turn startup ideas into fully functional web and mobile apps — fast,
        affordable, and stress-free. At LaunchPad Labs, your product is live
        before others finish planning.
      </p>

      {/* Calendar + Timer card */}
      <div className="cards-wrapper">
        <img src="/images/calendar-card.png" alt="Calendar" className="card-img" />
        <img src="/images/Timer.png" alt="Timer" className="card-img" />

        {/* Book a call button */}
        <button className="book-btn">
          <img src="/images/bookacall.png" alt="call" className="btn-icon " />
          Book A Call
        </button>
      </div>

      {/* Trusted by */}
      <div className="trusted-section">
        <p className="trusted-text">Trusted by Founders from</p>

        {/* Lines going down from pill */}
        <img src="/images/line-left.svg" alt="" className="bottom-line bottom-left" />
        <img src="/images/line-right.svg" alt="" className="bottom-line bottom-right" />

        <div className="trusted-logos-wrapper">
  <div className="trusted-logos">
    <img src="/images/logo-qualcomm.png" alt="Qualcomm" />
    <img src="/images/logo-walmart.png" alt="Walmart" />
    <img src="/images/logo-amazon.png" alt="Amazon" />
    <img src="/images/logo-adobe.png" alt="Adobe" />
    <img src="/images/logo-deloitte.png" alt="Deloitte" />
  
    <img src="/images/logo-qualcomm.png" alt="Qualcomm" />
    <img src="/images/logo-walmart.png" alt="Walmart" />
    <img src="/images/logo-amazon.png" alt="Amazon" />
    <img src="/images/logo-adobe.png" alt="Adobe" />
    <img src="/images/logo-deloitte.png" alt="Deloitte" />
  </div>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
