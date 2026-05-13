import React, { useState } from "react";
import "./getinvolved.css";

const CONTACT_EMAIL = "roysambucommunityactionhub@outlook.com";
const CONTACT_ENDPOINT = process.env.REACT_APP_CONTACT_ENDPOINT;
const CONTACT_ACCESS_KEY = process.env.REACT_APP_CONTACT_ACCESS_KEY;

function Getinvolved() {
  const [statusMessage, setStatusMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = formData.get("fullName").trim();
    const email = formData.get("email").trim();
    const contribution = formData.get("contribution");
    const message = formData.get("message").trim();

    const subject = `Roysambu Community Action Hub: ${contribution}`;

    formData.set("fullName", fullName);
    formData.set("email", email);
    formData.append("subject", subject);
    formData.append("to", CONTACT_EMAIL);
    formData.append("message", message || "No message provided.");

    if (CONTACT_ACCESS_KEY) {
      formData.append("access_key", CONTACT_ACCESS_KEY);
    }

    if (!CONTACT_ENDPOINT) {
      setSubmitStatus("error");
      setStatusMessage("Email service is not connected yet. Please add the form endpoint.");
      return;
    }

    setSubmitStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form service rejected the message.");
      }

      form.reset();
      setSubmitStatus("sent");
      setStatusMessage("Thanks. Your message has been sent.");
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Your message could not be sent. Please try again in a moment.");
    }
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
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contribution">How would you like to contribute?</label>
            <select id="contribution" name="contribution" defaultValue="" required>
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
              name="message"
              placeholder="What's your vision? What do you bring to the collective?"
            />
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={submitStatus === "sending"}
          >
            {submitStatus === "sending" ? "Sending..." : "Send it →"}
          </button>

          {statusMessage && (
            <p className={`form-status form-status-${submitStatus}`} role="status">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Getinvolved;
