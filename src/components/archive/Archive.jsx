import React, { useState } from "react";
import Digitallaptop from "../../images/digitallaptop.jpg";
import Plant from "../../images/plant.jpg";
import Market from "../../images/marketafrica.jpg";
import Infrastructure from "../../images/infrastructure.jpg";
import Ameal from "../../images/ameal.jpg";
import "./archive.css";

function Archive() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const archiveItems = [
    {
      id: 1,
      image: Digitallaptop,
      alt: "Digital Genius Golden Hour on the keyboard",
      overlay: "Roysambu's Resilience",
    },
    {
      id: 2,
      image: Plant,
      alt: "Green Rituals Hands in Soil",
      overlay: "Oral Histories",
    },
    {
      id: 3,
      image: Market,
      alt: "Everyday Resistance The Market At Dusk",
      overlay: "Community Memory",
    },
    {
      id: 4,
      image: Infrastructure,
      alt: "Infrastructure Our Streets, Our Gallery",
      overlay: "Everyday Joy",
    },
    {
      id: 5,
      image: Ameal,
      alt: "Collective Joy A Shared Meal",
      overlay: "Youth & Hope",
    },
  ];

  return (
    <section className="archive" id="archive">
      <div className="archive-container">
        <div className="archive-header">
          <div>
            <h3>Living Archive</h3>
            <h2>
              The Roysambu Archive:
              <br />
              Volume I.
            </h2>
          </div>

          <p className="archive-caption">
            "Documenting the everyday resistance of being happy and whole."
          </p>
        </div>

        <div className="archive-grid">
          {archiveItems.map((item, index) => (
            <div
              key={item.id}
              className={`archive-item ${index === 0 ? "archive-item-large" : ""}`}
              onClick={() => setLightboxImage(item.image)}
            >
              <div className="archive-item-inner">
                <img src={item.image} alt={item.alt} />
                <span className="lightbox-hint"></span>
              </div>

              <div className="archive-overlay">
                <span className="archive-overlay-text">{item.overlay}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImage(null);
            }}
          >
            ×
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Expanded archive view" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Archive;