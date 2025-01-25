import React from "react"
import { FaFacebook, FaGoogle, FaApple, FaInstagram, FaArrowUp } from "react-icons/fa"
import "./Footer.scss"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p className="footer__description">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Google">
              <FaGoogle />
            </a>
            <a href="#" aria-label="Apple">
              <FaApple />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__column">
            <h3>START A BUSINESS</h3>
            <nav>
              <a href="#">Features</a>
              <a href="#">Solutions</a>
              <a href="#">Integrations</a>
              <a href="#">Enterprise</a>
              <a href="#">Solutions</a>
            </nav>
          </div>

          <div className="footer__column">
            <h3>GOVERNMENT REGISTRATION</h3>
            <nav>
              <a href="#">Partners</a>
              <a href="#">Community</a>
              <a href="#">Developers</a>
              <a href="#">App</a>
              <a href="#">Blog</a>
            </nav>
          </div>

          <div className="footer__column">
            <h3>COMPLIANCE & TAX</h3>
            <nav>
              <a href="#">Channels</a>
              <a href="#">Scale</a>
              <a href="#">Watch the Demo</a>
              <a href="#">Our Competition</a>
            </nav>
          </div>

          <div className="footer__column">
            <h3>BIS & CDSCO</h3>
            <nav>
              <a href="#">About Us</a>
              <a href="#">News</a>
              <a href="#">Leadership</a>
              <a href="#">Media Kit</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="last">
      <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
      <div className="footer__copyright">© 2024 Registerkaro. All Rights Reserved.</div>
    </div>
    </footer>
  )
}

export default Footer;

