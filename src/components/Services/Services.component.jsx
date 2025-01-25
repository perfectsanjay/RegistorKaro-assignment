import { ArrowRight } from "lucide-react"
import './Services.style.scss'

const Services = () => {
  const services = [
    {
      icon: "🔧",
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
    },
    {
      icon: "📊",
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      icon: "👥",
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market.",
    },
    {
      icon: "📦",
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
    },
    {
      icon: "🛒",
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
    },
    {
      icon: "📢",
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology.",
    },
  ]

  return (
    <section className="services">
      <div className="services__container">
        <span className="services__welcome">WELCOME TO REGISTERKARO.IN</span>
        <h2 className="services__title">Explore Our Services</h2>

        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="services__card">
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
              <a href="#" className="services__card-link">
                Learn more <ArrowRight className="services__card-arrow" />
              </a>
            </div>
          ))}
        </div>

        <button className="services__button">See All Services</button>
      </div>
    </section>
  )
}

export default Services;

