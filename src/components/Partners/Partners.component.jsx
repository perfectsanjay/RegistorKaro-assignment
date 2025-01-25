import './Partners.style.scss'
const TrustedBy = () => {
    const companies = [
      {
        name: "Oracle",
        logo: "/public/images/oracle.png",
        class: "oracle",
      },
      {
        name: "Morpheus",
        logo: "/public/images/morpheus.png",
        class: "morpheus",
      },
      {
        name: "Samsung",
        logo: "public/images/samsung.png",
        class: "samsung",
      },
      {
        name: "Monday.com",
        logo: "public/images/monday.png",
        class: "monday",
      },
      {
        name: "Segment",
        logo: "public/images/segment.png",
        class: "segment",
      },
    ];
  
    return (
      <section className="trusted-by">
        <div className="trusted-by__container">
          <h2 className="trusted-by__title">Trusted By Over 100+ Startups and freelance business</h2>
          <div className="trusted-by__logos">
            {companies.map((company, index) => (
              <div key={index} className={`trusted-by__logo ${company.class}`}>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedBy;
  