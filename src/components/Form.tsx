import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgkeyn");
  if (state.succeeded) {
    return (
      <p className="thanks">
        Thanks for submitting!{" "}
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "0.5rem",
            background: "red",
            color: "white",
            fontSize: "1.2rem",
            border: "0",
            borderRadius: "20px",
          }}
        >
          Submit Again
        </button>
      </p>
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="name-div">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
        </div>

        <ValidationError prefix="name" field="name" errors={state.errors} />
        <div className="email-div">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="email"
            placeholder="Enter your email address"
            autoComplete="off"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="btn">
          <button type="submit" className="connect" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
