import React from "react";
import "./VideoSection.scss";

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="content">
        <h2>Our Video Introductions</h2>
        <p>
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt apis dui.
        </p>
        <div className="features">
          <div className="feature">
            <div className="icon">
              <span role="img" aria-label="lightbulb">
                💡
              </span>
            </div>
            <div className="text">
              <h3>Explore ideas together</h3>
              <p>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <span role="img" aria-label="presentation">
                📊
              </span>
            </div>
            <div className="text">
              <h3>Bring those ideas to life</h3>
              <p>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="video">
        <div className="video-thumbnail">
          <img className="video-img" src="public/images/videoSection.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
