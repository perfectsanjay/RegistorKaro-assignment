import React from "react";
import "./BrandSection.style.scss";
import coinbaseLogo from "/public/images/Company logo.png"; 
import spotifyLogo from "/public/images/spotify.png";
import slackLogo from "/public/images/Company logo (1).png";
import dropboxLogo from "/public/images/Company logo (2).png";
import webflowLogo from "/public/images/webflow.png";
import zoomLogo from "/public/images/Company logo (4).png";

const BrandSection = () => {
  const brands = [
    { src: coinbaseLogo, alt: "coinbase" },
    { src: spotifyLogo, alt: "Spotify" },
    { src: slackLogo, alt: "Slack" },
    { src: dropboxLogo, alt: "Dropbox" },
    { src: webflowLogo, alt: "Webflow" },
    { src: zoomLogo, alt: "Zoom" },
  ];

  return (
    <div className="brand-section">
      <div className="brands">
        {brands.map((brand, index) => (
          <img key={index} src={brand.src} alt={brand.alt} />
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
