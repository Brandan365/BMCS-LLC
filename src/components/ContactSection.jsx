// src/component/contactSection
import React from 'react';
// Import the content.json file
import content from '../content.json'; // Adjust path based on your file structure

const ContactSection = () => {
  // Destructure the contactSection content
  const { contactSection } = content;

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative group md:px-16 md:py-28 px-6 py-8 bg-black overflow-hidden">
      {/* Background overlay */}
      <div style={{ backgroundImage: `url('courier-one.jpg')`}} className="absolute inset-0 group-hover:scale-[1.05] transition-transform bg-cover bg-center opacity-75"></div>

      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Column: Heading and Description */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="max-w-md mx-auto lg:max-w-full">
            {/* Use headline from content.json */}
            <h2 className="text-xl w-2/6 md:w-5/6 md:text-3xl font-bold text-white mb-4 border-b-2 border-yellow-400 pb-2">
              {contactSection.headline}
            </h2>
            {/* Use description from content.json */}
            <p className="text-white">
              {contactSection.description}
            </p>
          </div>
        </div>

        {/* Right Column: Button */}
        <div className="w-full lg:w-1/2 px-4 flex justify-center lg:justify-end">
          <a onClick={() => handleClick("contact")} className="bg-black cursor-pointer text-white px-6 py-3 rounded-lg shadow-md group">
            {/* The "Contact Us" text on the button can be made dynamic if you add a property for it
                e.g., contactSection.buttonText */}
            <h1 className='borderef'>Contact Us </h1>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;