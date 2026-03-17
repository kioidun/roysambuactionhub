import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'
function Hero() {
  return (
   <section className="hero">
    <div className="hero-content">
      <p>I See You. <span className="beautiful-text">You Are Beautiful.</span> <br></br>This is Roysambu</p>
      <div className="hero-buttons">
        <Link to="/#involve" className="btn btn-primary">
          Join the Collective
        </Link>
        <Link to="/#archive" className="btn btn-secondary">
          Explore the Archive
        </Link>
      </div>
    </div>
   </section>
  )
}

export default Hero
