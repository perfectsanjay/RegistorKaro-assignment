import { MoveRight } from "lucide-react";
import "./ClientLogoSection.scss";

function HappyClients() {
  return (
    <section className="container">
      <div className="content">
        <h2 className="title">Our Happy Clients</h2>
        <p className="description">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-<br/><p className="nextText">leveling customer service for
          state of the art customer service.</p>
        </p>
      </div>

      <div className="img-container">
        <img className="pagination" src="public/images/Pagination.png" />
      </div>

      <button className="show-more">
        Show more
        <MoveRight className="arrow" />
      </button>
    </section>
  );
}

export default HappyClients;
