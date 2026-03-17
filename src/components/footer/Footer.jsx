import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="footer-logo">The Roysambu Action Hub</div>
        <div className="footer-tagline">Roysambu Action Hub · Nairobi, Kenya</div>
      </div>

      <ul className="footer-links">
        <li>
          <Link to="/manifesto">Manifesto</Link>
        </li>
        <li>
          <Link to="/pillars">The Work</Link>
        </li>
        <li>
          <Link to="/archive">Archive</Link>
        </li>
        <li>
          <Link to="/getinvolved">Contact</Link>
        </li>
        <li>
          <Link to="/statement-of-purpose">Statement of Purpose</Link>
        </li>
      </ul>

      <div className="footer-copy">© 2026 RACH. Made with joy in Roysambu.</div>
    </div>
  );
}

export default Footer;