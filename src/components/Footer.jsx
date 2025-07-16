import React, { useState } from "react";
// Remove jsonfile and path as they are server-side only
// import jsonfile from "jsonfile";
// import path from "path";

// Import all icons needed
import {
  FaFacebook,
  FaTwitter,
  FaTiktok
} from "react-icons/fa";

// Import content.json
import content from '../content.json'; // Adjust path as needed

// Create an icon mapping for dynamic rendering
const socialIconMap = {
  FaFacebook: FaFacebook,
  FaTwitter: FaTwitter,
  FaTiktok: FaTiktok,
  // Add other icons if you plan to use them
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showNewsletterForm, setShowNewsletterForm] = useState(false); // Renamed for clarity
  const [newsletterStatus, setNewsletterStatus] = useState(""); // For displaying newsletter messages

  // Destructure footer content
  const { footer } = content;
  const currentYear = new Date().getFullYear();

  const toggleForm = () => {
    setShowNewsletterForm(!showNewsletterForm);
    setNewsletterStatus(""); // Clear status when toggling
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setNewsletterStatus(footer.newsletter.successAlert); // Use success message from JSON
      setEmail("");
      // In a real app, you would send this email to a backend API here:
      // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
      // For now, it's just a client-side alert message.
    } else {
      setNewsletterStatus("Please enter a valid email address."); // This specific error is not in JSON, could add it
    }
    setShowNewsletterForm(false); // Close form after submission attempt
  };

  // Helper function to handle smooth scroll
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative h-[600px] overflow-hidden py-8 md:h-auto md:py-12">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 top-[-80%] bg-gradient-radial md:top-[-180%]"></div>
      </div>

      <div className="relative mx-auto px-8 text-white md:grid md:grid-cols-3 md:grid-rows-1 md:gap-8">
        <div className="mt-8 md:mt-0">
          <img src="icon-white.png" width={"80px"} alt="" />
          {/* Use tagline from content.json */}
          <h3 className="mb-4 text-3xl font-bold">
            {footer.tagline}
          </h3>
        </div>

        <div className="mt-8 max-w-min text-left text-sm md:mt-0 md:w-min md:text-left md:text-base">
          {/* Use camphillDetails from content.json */}
          <h4 className="mb-2 font-semibold md:mb-4">{footer.camphillDetails.heading}</h4>
          <p>{footer.camphillDetails.email}</p>
          <p>
            {" "}
            <b>Phone:</b> {footer.camphillDetails.phone}
          </p>
          <p>
            {" "}
            <b>Adress:</b> {footer.camphillDetails.addressLine1}
          </p>
          <p>{footer.camphillDetails.addressLine2}</p>
          <a onClick={() => handleClick("map")} className="mt-2 block underline hover:text-yellow-400 cursor-pointer">
            SEE ON MAP →
          </a>
        </div>

        <div className="px-auto mt-8 w-full text-sm md:absolute md:right-0 md:mr-24 md:mt-0 md:block md:w-auto md:p-0 md:text-base">
          {/* Use newsletter heading from content.json */}
          <h4 className="font-semibold md:mb-4">
            {footer.newsletter.heading}
          </h4>
          <a onClick={toggleForm} className="cursor-pointer mb-4 block underline hover:text-yellow-400">
            {footer.newsletter.callToAction}
          </a>

          {showNewsletterForm && (
            <form onSubmit={handleSubmit} className="email-form flex items-center justify-center fixed inset-0 z-50 bg-black/70">
              <div className="flex border-2 justify-between rounded-full border-black p-1 w-[326px] overflow-hidden bg-white">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={footer.newsletter.placeholder}
                  className="p-2 focus:outline-none bg-white text-black flex-grow" // flex-grow to make input take available space
                />
                <button type="submit" className="w-max rounded-full bg-stone-700 hover:bg-stone-600 text-white px-8 py-3">
                  {footer.newsletter.submitButton} {/* Use submit button text from JSON */}
                </button>
              </div>
              {/* Optional: Add a close button to the modal */}
              <button
                type="button"
                onClick={toggleForm}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                ×
              </button>
            </form>
          )}
          {newsletterStatus && <p className="mt-2 text-white text-center md:text-left">{newsletterStatus}</p>} {/* Display newsletter status */}

          {/* Social Media */}
          <h4 className="mb-2 font-semibold md:mb-4">{footer.followUs}</h4>
          <div className="flex space-x-4">
            {footer.socialMedia.map((platform, index) => {
              const IconComponent = socialIconMap[platform.icon]; // Get the React Icon component
              return IconComponent ? (
                <a key={index} href={platform.url} className="text-white text-3xl md:text-xl hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
                  <IconComponent />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] w-full translate-x-[-50%] text-center">
        <p className="text-sm text-white">
          {/* Use copyright from content.json and replace {{year}} */}
          {footer.copyright.replace('{{year}}', currentYear)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;