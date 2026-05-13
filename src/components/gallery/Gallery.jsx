import React, { useMemo, useState } from "react";
import Digitallaptop from "../../images/digitallaptop.jpg";
import Plant from "../../images/plant.jpg";
import Market from "../../images/marketafrica.jpg";
import MarketTwo from "../../images/markettwo.jpg";
import MarketThree from "../../images/marketthree.jpg";
import MarketStreet from "../../images/market.jpg";
import Tech from "../../images/tech.jpg";
import Infrastructure from "../../images/infrastructure.jpg";
import InfrastructureThree from "../../images/infrastructurethree.jpg";
import InfrastructureFour from "../../images/infrastructurefour.jpg";
import InfrastructureFive from "../../images/infrastructurefive.jpg";
import InfrastructureTwo from "../../images/roysa.jpg";
import Ameal from "../../images/ameal.jpg";
import Football from "../../images/football.jpg";
import FootballOne from "../../images/footballone.jpg";
import FootballThree from "../../images/footballthree.jpg";
import FootballFour from "../../images/footballfour.jpg";
import FootballFive from "../../images/footballfive.jpg";
import FootballSix from "../../images/footballsix.jpg";
import FootballSeven from "../../images/footballseven.jpg";
import FootballEight from "../../images/footballeight.jpg";
import FootballNine from "../../images/footballnine.jpg";
import FootballTen from "../../images/footballten.jpg";
import FootballEleven from "../../images/footballeleven.jpg";
import FootballTwelve from "../../images/footballtwelve.jpg";
import FootballThirteen from "../../images/footballthirteen.jpg";
import FootballFourteen from "../../images/footballfourteen.jpg";
import FootballFifteen from "../../images/footballfifteen.jpg";
import FootballSixteen from "../../images/footballsixteen.jpg";
import FootballSeventeen from "../../images/footballseventeen.jpg";
import FootballEighteen from "../../images/footballeighteen.jpg";
import FootballNineteen from "../../images/footballnineteen.jpg";
import "./gallery.css";

const galleryItems = [
  {
    id: 1,
    image: InfrastructureTwo,
    title: "Roysambu Streets",
    category: "Infrastructure",
    alt: "Roysambu street infrastructure and movement",
  },
  {
    id: 2,
    image: Market,
    title: "Market Life",
    category: "Markets",
    alt: "Community market activity in Roysambu",
  },
  {
    id: 3,
    image: Plant,
    title: "Green Rituals",
    category: "Environment",
    alt: "Hands planting seedlings in soil",
  },
  {
    id: 4,
    image: Tech,
    title: "Digital Skills",
    category: "Youth",
    alt: "Hands working on a keyboard",
  },
  {
    id: 5,
    image: Ameal,
    title: "Shared Meals",
    category: "Community",
    alt: "A shared community meal",
  },
  {
    id: 6,
    image: Infrastructure,
    title: "Public Works",
    category: "Infrastructure",
    alt: "Infrastructure project view",
  },
  {
    id: 7,
    image: MarketTwo,
    title: "Local Enterprise",
    category: "Markets",
    alt: "Local market enterprise scene",
  },
  {
    id: 8,
    image: Digitallaptop,
    title: "Connected Learning",
    category: "Youth",
    alt: "Laptop used for digital learning",
  },
  {
    id: 9,
    image: MarketThree,
    title: "Everyday Trade",
    category: "Markets",
    alt: "Everyday trade in a local market",
  },
  {
    id: 10,
    image: MarketStreet,
    title: "Street Commerce",
    category: "Markets",
    alt: "Street commerce in the ward",
  },
  {
    id: 11,
    image: InfrastructureThree,
    title: "Road Access",
    category: "Infrastructure",
    alt: "Infrastructure progress in Roysambu",
  },
  {
    id: 12,
    image: InfrastructureFour,
    title: "Ward Improvements",
    category: "Infrastructure",
    alt: "Ward infrastructure improvement work",
  },
  {
    id: 13,
    image: InfrastructureFive,
    title: "Community Works",
    category: "Infrastructure",
    alt: "Community infrastructure works",
  },
  {
    id: 14,
    image: Football,
    title: "Football Day",
    category: "Sports",
    alt: "Community football activity in Roysambu",
  },
  {
    id: 15,
    image: FootballOne,
    title: "Match Moments",
    category: "Sports",
    alt: "Football match moment",
  },
  {
    id: 16,
    image: FootballThree,
    title: "Team Spirit",
    category: "Sports",
    alt: "Football team spirit",
  },
  {
    id: 17,
    image: FootballFour,
    title: "On The Pitch",
    category: "Sports",
    alt: "Football players on the pitch",
  },
  {
    id: 18,
    image: FootballFive,
    title: "Youth Football",
    category: "Sports",
    alt: "Youth football in Roysambu",
  },
  {
    id: 19,
    image: FootballSix,
    title: "Game Time",
    category: "Sports",
    alt: "Football game time",
  },
  {
    id: 20,
    image: FootballSeven,
    title: "Sideline Energy",
    category: "Sports",
    alt: "Football sideline energy",
  },
  {
    id: 21,
    image: FootballEight,
    title: "Community Match",
    category: "Sports",
    alt: "Community football match",
  },
  {
    id: 22,
    image: FootballNine,
    title: "Match Focus",
    category: "Sports",
    alt: "Focused football match play",
  },
  {
    id: 23,
    image: FootballTen,
    title: "Local Talent",
    category: "Sports",
    alt: "Local football talent",
  },
  {
    id: 24,
    image: FootballEleven,
    title: "Football Gathering",
    category: "Sports",
    alt: "Football gathering in Roysambu",
  },
  {
    id: 25,
    image: FootballTwelve,
    title: "Pitch Action",
    category: "Sports",
    alt: "Football pitch action",
  },
  {
    id: 26,
    image: FootballThirteen,
    title: "Team Play",
    category: "Sports",
    alt: "Football team play",
  },
  {
    id: 27,
    image: FootballFourteen,
    title: "Ward Sports",
    category: "Sports",
    alt: "Ward sports football activity",
  },
  {
    id: 28,
    image: FootballFifteen,
    title: "Football Community",
    category: "Sports",
    alt: "Community football scene",
  },
  {
    id: 29,
    image: FootballSixteen,
    title: "Match Day",
    category: "Sports",
    alt: "Match day football scene",
  },
  {
    id: 30,
    image: FootballSeventeen,
    title: "Youth In Motion",
    category: "Sports",
    alt: "Youth football in motion",
  },
  {
    id: 31,
    image: FootballEighteen,
    title: "Final Whistle",
    category: "Sports",
    alt: "Football final whistle moment",
  },
  {
    id: 32,
    image: FootballNineteen,
    title: "After The Match",
    category: "Sports",
    alt: "After match football moment",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = useMemo(
    () => ["All", ...new Set(galleryItems.map((item) => item.category))],
    []
  );

  const visibleItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <p className="gallery-kicker">Photo Gallery</p>
          <h2>Roysambu in pictures</h2>
          <p>
            Moments from community life, public spaces, enterprise, youth work,
            and the everyday energy of the ward.
          </p>
        </div>
      </section>

      <section className="gallery-section" aria-label="Roysambu photo gallery">
        <div className="gallery-toolbar" aria-label="Gallery filters">
          {categories.map((category) => (
            <button
              key={category}
              className={category === activeCategory ? "is-active" : ""}
              type="button"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visibleItems.map((item, index) => (
            <button
              key={item.id}
              className={`gallery-card ${index % 5 === 0 ? "gallery-card-wide" : ""}`}
              type="button"
              onClick={() => setSelectedItem(item)}
            >
              <img src={item.image} alt={item.alt} />
              <span className="gallery-card-meta">
                <strong>{item.title}</strong>
                <small>{item.category}</small>
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedItem && (
        <div className="gallery-lightbox" onClick={() => setSelectedItem(null)}>
          <button
            className="gallery-lightbox-close"
            type="button"
            aria-label="Close gallery image"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedItem(null);
            }}
          >
            ×
          </button>

          <figure
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedItem.image} alt={selectedItem.alt} />
            <figcaption>
              <strong>{selectedItem.title}</strong>
              <span>{selectedItem.category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}

export default Gallery;
