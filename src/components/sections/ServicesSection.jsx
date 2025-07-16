// src/components/sections/ServicesSection.jsx
import React from 'react';
// Import the content.json file
import content from '../../content.json'; // Adjust path based on your file structure

export default function ServicesSection() {
  // Destructure the servicesSection content
  const { servicesSection } = content;

  return (
    <section id="service" className="grid grid-cols-1 md:grid-cols-2">
      {/* Image with Overlay */}
      <div className="group relative min-h-[400px] overflow-hidden">
        <img
          src="courier-two.jpg"
          alt="Courier vehicle on the road"
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="relative flex h-full items-center bg-black/30 p-8">
          {/* Use introText from content.json */}
          <h2 className="text-xl text-white md:p-12 md:text-3xl">
            {servicesSection.introText}
          </h2>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-yellow-400 p-8 md:p-12">
        {/* "We Provide Services In..." is not in content.json, so it remains hardcoded.
            If you want it editable, add a title property to servicesSection in content.json. */}
        <h2 className="flex items-end text-lg font-semibold md:text-3xl">
          We Provide Services In...
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 font-nunito font-semibold text-black md:grid-cols-3 md:gap-y-3">
          {/* Use servicesList from content.json */}
          {servicesSection.servicesList.map((service, index) => (
            <li key={index} className="transition-transform hover:scale-105 hover:font-bold">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}