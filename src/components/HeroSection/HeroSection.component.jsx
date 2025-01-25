import { Star, ArrowRight } from "lucide-react"
import './HeroSection.style.scss'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__rating">
            <Star className="hero__rating-star" />
            <span>Google Rating</span>
            <div className="hero__rating-stars">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="hero__rating-star filled" />
              ))}
            </div>
          </div>

          <h1 className="hero__title">
            Your trusted partner
            <br />
            for compliance business needs
          </h1>

          <p className="hero__description">
            An online business compliance platform that helps entrepreneurs and other individuals with various,{" "}
            <span>registrations, tax filings,</span> and other <span>legal matters.</span>
          </p>

          <div className="hero__stats">
            <div className="hero__stat">
              <h3>4.5+</h3>
              <p>Customer Rating</p>
            </div>
            <div className="hero__stat">
              <h3>20,000+</h3>
              <p>Clients</p>
            </div>
            <div className="hero__stat">
              <h3>99.8%</h3>
              <p>Financial Stability</p>
            </div>
          </div>

          <div className="hero__actions">
            <button className="hero__button hero__button--primary">Talk An Expert</button>
            <button className="hero__button hero__button--secondary">
              See how it works
              <ArrowRight className="hero__button-icon" />
            </button>
          </div>
        </div>

        <div className="hero__illustration">
          <img
            src="/public/images/herosection.png"
            alt="Business Compliance Illustration"
          />
        </div>

        <div className="hero__services">
          <button className="hero__service">Annual Compliance</button>
          <button className="hero__service">Payroll Services</button>
          <button className="hero__service">Company Formation</button>
          <button className="hero__service">Annual Compliance</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;

