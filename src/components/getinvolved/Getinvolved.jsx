import React from "react";
import "./getinvolved.css";

function Getinvolved() {
  return (
    <section class="involve" id="involve">
      <div class="involve-left">
        <div class="section-label reveal">Growth</div>
        <h2 class="reveal reveal-delay-1">
          Join the<br></br>Collective.
        </h2>
        <p class="reveal reveal-delay-2">
          Roysambu's power lives in its people. Whether you bring code, cameras,
          seeds, or stories — there's a place for your genius here. Let's build
          something that lasts.
        </p>
        <div class="involve-socials reveal reveal-delay-3">
          <a href="#" class="social-pill">
            ↗ Instagram
          </a>
          <a href="#" class="social-pill">
            ↗ Twitter/X
          </a>
          <a href="#" class="social-pill">
            ↗ WhatsApp
          </a>
          <a href="#" class="social-pill">
            ↗ Statement of Purpose
          </a>
        </div>
      </div>

      <div class="involve-right reveal reveal-delay-1">
        <div class="involve-form">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Your name"></input>
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="your@email.com"></input>
          </div>
          <div class="form-group">
            <label>How would you like to contribute?</label>
            <select>
              <option value="" disabled selected>
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
          <div class="form-group">
            <label>Tell us more (optional)</label>
            <textarea placeholder="What's your vision? What do you bring to the collective?"></textarea>
          </div>
          <button class="form-submit" onclick="handleSubmit()">
            Send it →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Getinvolved;
