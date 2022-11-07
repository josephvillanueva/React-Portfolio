import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaSms } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gala3gf",
        "template_26339xl",
        form.current,
        "Ks9sFr6A4mNkGbrP_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>josephgvillanueva24@gmail.com</h5>
            <a href="mailto:josephgvillanueva24@gmail.com">Send an email</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>Joseph G. Villanueva</h5>
            <a href="https://m.me/bracezz/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaSms className="contact_option_icon" />
            <h4>Phone Number</h4>
            <h5>+63 917 527 0524</h5>
            <p>Send a text!</p>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" value="Send" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
