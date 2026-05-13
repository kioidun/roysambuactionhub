import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-container">
        <h1>Roysambu Action Hub</h1>

        <nav className="nav">
          <ul className="nav_ul">
            <li><Link to="/">HOME</Link></li>
            <li><a href="/#manifesto">MANIFESTO</a></li>
            <li><a href="/#pillars">PILLARS</a></li>
            <li><Link to="/gallery">GALLERY</Link></li>
            <li><Link to="/archive">ARCHIVE</Link></li>
            <li><a href="/#involve">GET INVOLVED</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
