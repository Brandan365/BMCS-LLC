import React, { useState } from "react";
import emailjs from '@emailjs/browser';
// Import the content.json file
import content from '../content.json'; // Adjust path based on your file structure

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // Destructure contactForm content
  const { contactForm } = content;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(contactForm.sendingStatus); // Use dynamic status message

    try {
      await emailjs.send(
        'service_nig4r8h',
        'template_3026419',
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        'gvkL8XJM_SwIpdp67'
      );

      setStatus(contactForm.successStatus); // Use dynamic success message
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      setStatus(contactForm.errorStatus); // Use dynamic error message
    }
  };

  return (
    <div id="contact" className="grid-cols-2 bg-gray-50 font-nunito text-neutral-950 md:grid">
      <section className="flex-col items-center justify-center p-12 md:flex md:p-0">
        <div>
          {/* Use title from content.json */}
          <h1 className="flex w-max items-end gap-2 border-b-2 border-b-yellow-400 font-figtree text-4xl font-bold">
            {contactForm.title}
          </h1>
          {/* Use tagline from content.json */}
          <p className="text-xl md:text-2xl">
            {contactForm.tagline}
          </p>
        </div>
      </section>
      <section className="px-12 pb-12 md:p-0">
        <form onSubmit={handleSubmit} className="group/f mx-auto my-8 max-w-md">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input"
            />
            {/* Use nameLabel from content.json */}
            <label htmlFor="name" className="label">
              {contactForm.nameLabel}
            </label>
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
            {/* Use emailLabel from content.json */}
            <label htmlFor="email" className="label">
              {contactForm.emailLabel}
            </label>
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full rounded-[26px] border bg-white px-4 py-2 text-black shadow-lg focus:outline-none"
              rows="4"
            ></textarea>
            {/* Use messageLabel from content.json */}
            <label
              htmlFor="message"
              className="mb-2 block w-[90%] translate-x-4 translate-y-[-180%] bg-white font-bold text-neutral-300 transition-all group-hover/f:w-min group-hover/f:translate-y-[-90%] group-hover/f:bg-transparent"
            >
              {contactForm.messageLabel}
            </label>
          </div>
          <button
            type="submit"
            className="focus:shadow-outline rounded-full border bg-white px-4 py-2 font-bold text-gray-300 shadow-lg hover:border-yellow-400 hover:bg-yellow-400 hover:text-black focus:outline-none"
          >
            {/* Use sendButton text from content.json */}
            {contactForm.sendButton}
          </button>
          {status && <p className="mt-4 text-center">{status}</p>}
        </form>
      </section>
    </div>
  );
}