import React from "react"
import "./why-choose.scss"
import { Shield, CheckCircle, SmilePlus, UserCog } from "lucide-react"

const WhySection = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="header">
          <span className="subtitle">WHY REGISTERKARO.IN</span>
          <h1 className="title">Why Choose Register Karo</h1>
          <p className="description">
            It is with consistent services and results that build trust with the people and that in turn help us to
            serve the business better.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card red-bg">
            <div className="icon-container">
              <Shield className="icon" />
            </div>
            <h3>Confidential & Safe</h3>
            <p>All your private information is safe with us</p>
          </div>

          <div className="feature-card green-bg">
            <div className="icon-container">
              <CheckCircle className="icon" />
            </div>
            <h3>No Hidden Fee</h3>
            <p>Everything is put before you with no hidden charges or conditions</p>
          </div>

          <div className="feature-card blue-bg">
            <div className="icon-container">
              <SmilePlus className="icon" />
            </div>
            <h3>Guaranteed Satisfaction</h3>
            <p>We ensure that you stay 100% satisfied with our offered services</p>
          </div>

          <div className="feature-card pink-bg">
            <div className="icon-container">
              <UserCog className="icon" />
            </div>
            <h3>Expert CA/CS Assistance</h3>
            <p>Prompt support from our in-house expert professionals</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySection;