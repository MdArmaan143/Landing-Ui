import React from "react";
import "../styles/OurWork.css";

const OurWork = () => {
  const cards = [
    { id: 1, title: "BillFlow", img: "/images/BillFlows.png" },
    { id: 2, title: "FinSub", img: "/images/Finesub.png" },
    { id: 3, title: "FitAI", img: "/images/FitAi.png" },
    { id: 4, title: "FitAI", img: "/images/BillFlows.png" },
    { id: 1, title: "BillFlow", img: "/images/BillFlows.png" },
    { id: 2, title: "FinSub", img: "/images/Finesub.png" },
    { id: 3, title: "FitAI", img: "/images/FitAi.png" },
    { id: 4, title: "FitAI", img: "/images/BillFlows.png" },
    { id: 1, title: "BillFlow", img: "/images/BillFlows.png" },
    { id: 2, title: "FinSub", img: "/images/Finesub.png" },
  ];

  return (
    <section className="ourwork-container">
      {/* Badge */}
      <div className="ourwork-badge">
        <div className="badge-inner">
          <span className="dot"></span>
          <span className="badge-text">Our Work</span>
        </div>
      </div>

      {/* Headings */}
      <h2 className="ourwork-heading">We craft MVPs, not mockups</h2>
      <p className="ourwork-subheading">
        We don’t just launch quickly – we launch products that real users can’t
        wait to try
      </p>

      {/* Cards */}
      <div className="ourwork-cards-wrapper">
        <div className="ourwork-cards-moving">
          {cards.map((card) => (
            <div className="ourwork-card" key={card.id}>
              <div className="ourwork-card-img-container">
                <img src={card.img} alt={card.title} className="ourwork-card-img" />
              </div>
              <div className="ourwork-card-footer">
                <span className="ourwork-card-title">{card.title}</span>
                <span className="ourwork-arrow">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
