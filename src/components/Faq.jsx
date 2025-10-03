import React, { useState } from "react";
import "../styles/Faq.css";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take to launch my MVP with LaunchPad Labs?",
      answer:
        "We specialize in speed. Most MVPs are launched in as little as 2–4 weeks, depending on complexity.",
    },
    {
      question: "What exactly is included in the MVP package?",
      answer: "",
    },
    {
      question: "Do I need to have all my ideas finalized before starting?",
      answer: "",
    },
    {
      question: "How involved will I be during the development process?",
      answer: "",
    },
    {
      question: "Can I scale my MVP into a full product later?",
      answer: "",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      {/* FAQ Pill */}
      <div className="faq-pill">
        <div className="faq-pill-inner">
          <span className="faq-dot"></span>
          <span className="faq-text">FAQ</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="faq-heading">Got Questions? We’ve Got Answers</h2>
      <p className="faq-subheading">
        Simple explanations for your most important questions
      </p>

      {/* FAQ Boxes */}
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            className={`faq-box ${openIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-box-header" onClick={() => toggleFaq(index)}>
              <span className="faq-question">{item.question}</span>
              {openIndex === index ? (
                <MinusIcon className="faq-icon" />
              ) : (
                <PlusIcon className="faq-icon" />
              )}
            </div>

            {openIndex === index && item.answer && (
              <div className="faq-answer-box">
                <p className="faq-answer">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
