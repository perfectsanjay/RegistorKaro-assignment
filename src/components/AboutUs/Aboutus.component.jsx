import React from "react"
import "./about-section.scss"

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__content">
          <span className="about__welcome">WELCOME TO REGISTERKARO.IN</span>
          <h1 className="about__title">
            About <span className="about__title-highlight">Register Karo</span>
          </h1>
          <div className="about__text">
            <p>
              We have been using Intelegencia as our DevOps vendor for our field service applications over the last
              couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to
              adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer
              satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding
              everyone's expectations.
            </p>
            <p>
              I would strongly recommend their services to any organization that is looking for solid, reliable, and
              predictable outcomes.
            </p>
          </div>
          <button className="about__button">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
        <div className="about__image-container">
          <img
            src="/images/aboutus.png"
            alt="Register Karo team"
            className="about__image"
          />
          <div className="about__decoration"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

