import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-container">
        <h1>Roysambu Action Hub</h1>

        <nav className="nav">
          <ul className="nav_ul">
            <li><a href="/">HOME</a></li>
            <li><a href="#manifesto">MANIFESTO</a></li>
            <li><a href="#pillars">PILLARS</a></li>
            <li><a href="#archive">ARCHIVE</a></li>
            <li><a href="#involve">GET INVOLVED</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;