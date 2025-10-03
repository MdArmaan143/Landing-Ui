import React from "react";
import { Rocket, TrendingUp, Check } from "lucide-react";
import "../styles/Pricing.css"; 

// Plans data yahan define karo
const plans = [
  {
    title: "Starter Plan",
    subtitle: "Perfect for individuals",
    price: "$29",
    priceSuffix: "/mo",
    description: "Basic features to get you started",
    badge: "",
    billingNote: "Billed monthly",
    highlight: false,
    icon: "rocket",
    features: [
      "Basic analytics dashboard",
      "Up to 3 active projects",
      "Community support",
      "Email notifications",
    ],
  },
  {
    title: "Pro Plan",
    subtitle: "Best for teams",
    price: "$79",
    priceSuffix: "/mo",
    description: "Advanced tools for growing businesses",
    badge: "Most Popular",
    billingNote: "Billed monthly",
    highlight: true,
    icon: "trending",
    features: [
      "Everything in Starter",
      "Unlimited active projects",
      "Priority email support",
      "Advanced reporting",
    ],
  },
];

// Card component
function PricingCard({ plan }) {
  const Icon = plan.icon === "rocket" ? Rocket : TrendingUp;

  return (
    <div className="pricing-card-wrapper">
      {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

      <div className={`pricing-card-outer ${plan.highlight ? "highlight" : ""}`}>
        <div className={`pricing-card-inner ${plan.highlight ? "highlight" : ""}`}>
          <div className="pricing-card-content">
            <div className="pricing-header">
              <div className="pricing-icon">
                <Icon className="icon" />
              </div>
              {plan.billingNote && (
                <p className="billing-note">{plan.billingNote}</p>
              )}
            </div>

            <div className="pricing-title-section">
              <h3 className="pricing-title">{plan.title}</h3>
              <p className="pricing-subtitle">{plan.subtitle}</p>
            </div>

            <div className="pricing-price-section">
              <span className="pricing-price">{plan.price}</span>
              {plan.priceSuffix && (
                <span className="pricing-suffix">{plan.priceSuffix}</span>
              )}
            </div>

            <p className="pricing-description">{plan.description}</p>

            <div className="pricing-button-wrapper">
              <button
                className={`pricing-button ${plan.highlight ? "highlight" : ""}`}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="pricing-features-section">
            <h4 className="features-heading">
              {plan.highlight ? "Monthly Services" : "What's Included"}
            </h4>
            <div className="features-list">
              {plan.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <Check className="feature-check" strokeWidth={2.4} />
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Section
function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {/* <span className="section-badge"> Pricing</span> */}
         {/* Pill */}
         <div className="impact-pill11">
        <div className="pill-inner11">
          <span className="dot11"></span>
          <span className="pill-text11">Pricing</span>
        </div>
      </div>
        <h2 className="pricing-main-title">Flexible Plans for Everyone</h2>
        <p className="pricing-main-description">
          Choose the plan that best fits your needs and start scaling your business today.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
