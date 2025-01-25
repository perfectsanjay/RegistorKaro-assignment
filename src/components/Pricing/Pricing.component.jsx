import React from 'react';
import './StepsComponent.scss';

const StepsComponent = () => {
  const steps = [
    { icon: '📝', text: 'Fill up Application Form' },
    { icon: '💳', text: 'Make Online Payment' },
    { icon: '👩‍💼', text: 'Executive will Process Application' },
    { icon: '📧', text: 'Get Confirm Mail' },
  ];

  return (
    <div className="steps-container">
      {steps.map((step, index) => (
        <div key={index} className="step">
          <div className="icon">{step.icon}</div>
          <div className="text">{step.text}</div>
        </div>
      ))}
    </div>
  );
};

export default StepsComponent;
