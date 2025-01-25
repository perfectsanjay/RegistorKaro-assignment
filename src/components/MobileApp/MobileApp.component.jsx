import React from "react";
import "./MobileApp.style.scss";

const MobileAppSection = () => {
  return (
    <div className="mobile-app-section">
      <div className="content-wrapper">
        <h2>Manage Your Services by your Mobile Phone</h2>
        <p>
          Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
        </p>
        <p>Get the App</p>
        <div className="app-buttons">
          <a href="#" className="app-button">
            <img src="/images/applelogo.png" alt="Apple Logo" />
            <div>
              <span>Get it on</span>
              <strong>App Store</strong>
            </div>
          </a>
          <a href="#" className="app-button">
            <img src="/images/Vector.png" alt="Google Play Logo" />
          
            <div>
                
              <span>Get it on</span>
              <strong>Google Play</strong>
            </div>
          </a>
        </div>
       
      </div>
      <div className="phoneImg"><img className="phone" src="/images/phoneImg.png" alt="phoneImg" /></div>
    </div>
  );
};

export default MobileAppSection;
