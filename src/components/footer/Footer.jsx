import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-wrap">
        <div className="footer-logo">The Roysambu Action Hub</div>
        <div className="footer-tagline">Roysambu Action Hub · Nairobi, Kenya</div>
      </div>

      <ul className="footer-links">
        <li><a href="#manifesto">Manifesto</a></li>
        <li><a href="#pillars">The Work</a></li>
        <li><a href="#archive">Archive</a></li>
        <li><a href="#involve">Contact</a></li>
        <li><a href="/statement-of-purpose">Statement of Purpose</a></li>
      </ul>

      <div className="footer-copy">© 2026 RACH. Made with joy in Roysambu.</div>
    </footer>
  );
}

export default Footer;