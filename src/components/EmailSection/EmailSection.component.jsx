import React from "react";
import "./EmailSection.style.scss";

const EmailSection = () => {
  return (
    <div className="email-section">
      <h4>1% OF THE INDUSTRY</h4>
      <h1>
        Welcome to your new digital reality. <span>Now.</span>
      </h1>
      <div className="email-input-container">
        <input type="email" placeholder="Enter Your Email" />
        <button type="submit">Submit</button>
      </div>
      <div className="features">
        <div>
          <span>✔</span> Instant results
        </div>
        <div>
          <span>✔</span> User-friendly interface
        </div>
        <div>
          <span>✔</span> Personalized customization
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
