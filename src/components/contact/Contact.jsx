import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaSms } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SectionHeader from "../sectionHeader/SectionHeader";

function Contact() {
  const form = useRef();
  // idle | sending | sent | error. The form only clears on success, so a failed
  // send never throws away what the visitor typed.
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_gala3gf", "template_26339xl", form.current, {
        publicKey: "Ks9sFr6A4mNkGbrP_",
      })
      .then(() => {
        form.current.reset();
        setStatus("sent");
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        setStatus("error");
      });
  };

  return (
    <section id="contact">
      <SectionHeader
        eyebrow="Get in touch"
        title="Contact"
        lead="Open to Product Owner conversations."
      />
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h3>Email</h3>
            <p className="contact_option_value">josephgvillanueva24@gmail.com</p>
            <a href="mailto:josephgvillanueva24@gmail.com">Send an email</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h3>Messenger</h3>
            <p className="contact_option_value">Joseph G. Villanueva</p>
            <a href="https://m.me/bracezz/" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaSms className="contact_option_icon" />
            <h3>Phone Number</h3>
            <p className="contact_option_value">+63 917 527 0524</p>
            <p>Send a text!</p>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            aria-label="Your full name"
            autoComplete="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your email"
            autoComplete="email"
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            aria-label="Your message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          <p
            className={`contact_status contact_status-${status}`}
            role="status"
          >
            {status === "sent" && "Thanks, your message was sent."}
            {status === "error" &&
              "Something went wrong. Your message is still here; try again or email me directly."}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
