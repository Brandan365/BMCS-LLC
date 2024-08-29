import React from 'react';

const ContactSection = () => {
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="relative group md:px-16 md:py-28 px-6 py-8 bg-black overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 group-hover:scale-[1.05] transition-transform bg-[url(courier-one.jpg)] bg-cover bg-center opacity-75"></div>

      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Column: Heading and Description */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="max-w-md mx-auto lg:max-w-full">
            <h2 className="text-xl w-2/6 md:text-3xl font-bold text-white mb-4 border-b-2 border-yellow-400 pb-2">
              Are You Tired of Not Having Peace of Mind When Sending Your Shipments?
            </h2>
            <p className="text-white">
              Your logistics headaches have ended because brandan's courier services will give you the peace of mind you are looking for when sending your precious time-critical or temperature-sensitive shipments from anywhere to anywhere.
            </p>
          </div>
        </div>

        {/* Right Column: Button */}
        <div className="w-full lg:w-1/2 px-4 flex justify-center lg:justify-end">
          <a onClick={() => handleClick("contact")} className="bg-black cursor-pointer text-white px-6 py-3 rounded-lg shadow-md group">
            <h1 className='borderef'>Contact Us </h1>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
