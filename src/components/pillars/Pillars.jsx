import React from "react";
import "./pillars.css";
function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <h2>
        Three Pillars of <br></br>Community Power.
      </h2>
      <div className="line"></div>
      <div className="pillars_cards">
        <div className="pillar">
          <span className="pillar-number">01</span>
          <span class="pillar-icon">⚡</span>
          <h3>Digital Transformation</h3>
          <p>
            Building capacity in STEM and digital literacy. We believe every
            resident should have the tools to archive their own history and
            build their own future. Coding, digital storytelling, and local
            economy creation — powered from within.
          </p>
        </div>
        <div className="pillar">
          <span className="pillar-number">02</span>
          <span class="pillar-icon">🌿</span>
          <h3>The Green Transition</h3>
          <p>
            Turning urban spaces into sanctuaries. Through urban farming and
            waste-to-value models, we practice the ritual of honoring our earth.
            Climate action that begins in the hands of those who know the land
            best.
          </p>
        </div>
        <div className="pillar">
          <span className="pillar-number">03</span>
          <span class="pillar-icon">🔗</span>
          <h3>Collective Resource Flow</h3>
          <p>
            A hub for mobilization. We identify and distribute the financial and
            technical resources necessary for grassroots leaders to thrive —
            building pipelines that flow toward community, not away from it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pillars;
