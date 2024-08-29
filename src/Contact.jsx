import React from "react";
import { useState } from "react";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      name,
      email,
      message,
    };
    //http://localhost:3000:change it to backend link
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };
  return (
    <div
      id="contact"
      className="grid-cols-2 bg-gray-50 font-nunito text-neutral-950 md:grid"
    >
      <section className="flex-col items-center justify-center p-12 md:flex md:p-0">
        <div>
          <h1 className="flex w-max items-end gap-2 border-b-2 border-b-yellow-400 font-figtree text-4xl font-bold">
            Contact us
          </h1>
          <p className="text-xl md:text-2xl">
            Don't hesitate to reach out to us!
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
            <label htmlFor="name" className="label">
              Name
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
            <label htmlFor="email" className="label">
              Email
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
            <label
              htmlFor="message"
              className="mb-2 block w-[90%] translate-x-4 translate-y-[-180%] bg-white font-bold text-neutral-300 transition-all group-hover/f:w-min group-hover/f:translate-y-[-90%] group-hover/f:bg-transparent"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="focus:shadow-outline rounded-full border bg-white px-4 py-2 font-bold text-gray-300 shadow-lg hover:border-yellow-400 hover:bg-yellow-400 hover:text-black focus:outline-none"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center">{status}</p>}
        </form>
      </section>
    </div>
  );
}
