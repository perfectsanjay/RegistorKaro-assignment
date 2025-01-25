import React, { useState } from "react";
import "./Faq.style.scss";

const Faq = () => {
  const [visibleFAQs, setVisibleFAQs] = useState(5);

  const faqData = [
    { id: 1, question: "Can I recover deleted files from desktop with this software?" },
    { id: 2, question: "Can I recover deleted files from desktop with this software?" },
    { id: 3, question: "Can I recover deleted files from desktop with this software?" },
    { id: 4, question: "Can I recover deleted files from desktop with this software?" },
    { id: 5, question: "Can I recover deleted files from desktop with this software?" },
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h3>FAQ</h3>
        <h2>Frequent Ask Questions</h2>
      </div>
      <div className="faq-list">
        {faqData.slice(0, visibleFAQs).map((faq) => (
          <div key={faq.id} className="faq-item">
            <span>{faq.question}</span>
            <div className="faq-icon">{">"}</div>
          </div>
        ))}
      </div>
      <button className="show-more-btn">
        Show more <span>{">"}</span>
      </button>
    </div>
  );
};

export default Faq;
