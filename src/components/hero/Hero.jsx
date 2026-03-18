import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p>
          I See You. <span className="beautiful-text">You Are Beautiful.</span>
          <br />
          This is Roysambu
        </p>

        <div className="hero-buttons">
          <a href="#involve" className="btn btn-primary">
            Join the Collective
          </a>
          <a href="#archive" className="btn btn-secondary">
            Explore the Archive
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;