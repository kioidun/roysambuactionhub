import React from "react";
import "./getinvolved.css";

function Getinvolved() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <section className="involve" id="involve">
      <div className="involve-left">
        <div className="section-label reveal">Growth</div>

        <h2 className="reveal reveal-delay-1">
          Join the
          <br />
          Collective.
        </h2>

        <p className="reveal reveal-delay-2">
          Roysambu&apos;s power lives in its people. Whether you bring code, cameras,
          seeds, or stories — there&apos;s a place for your genius here. Let&apos;s build
          something that lasts.
        </p>

        <div className="involve-socials reveal reveal-delay-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="social-pill"
          >
            ↗ Instagram
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="social-pill"
          >
            ↗ Twitter/X
          </a>

          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noreferrer"
            className="social-pill"
          >
            ↗ WhatsApp
          </a>

          <a
            href="/statement-of-purpose"
            className="social-pill"
          >
            ↗ Statement of Purpose
          </a>
        </div>
      </div>

      <div className="involve-right reveal reveal-delay-1">
        <form className="involve-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div className="form-group">
            <label htmlFor="contribution">How would you like to contribute?</label>
            <select id="contribution" defaultValue="">
              <option value="" disabled>
                Select your path
              </option>
              <option>Volunteer my time</option>
              <option>Partner with RCIC</option>
              <option>Share a Story</option>
              <option>Fund a Program</option>
              <option>Bring Digital Skills</option>
              <option>Join the Green Transition</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Tell us more (optional)</label>
            <textarea
              id="message"
              placeholder="What's your vision? What do you bring to the collective?"
            />
          </div>

          <button type="submit" className="form-submit">
            Send it →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Getinvolved;