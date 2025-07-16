// src/components/sections/AboutSection.jsx
import React from 'react';
// Import the content.json file
import content from '../../content.json'; // Adjust path based on your file structure

export default function AboutSection() {
  // Destructure the aboutSection content
  const { aboutSection } = content;

  return (
    <section id="us" className="grid grid-cols-1 bg-black md:grid-cols-2">
      {/* Text Content */}
      <div className="flex flex-col justify-center p-8 text-white md:p-14">
        {/* Use title from content.json */}
        <h2 className="mb-6 w-max border-b border-yellow-400 text-2xl md:mb-8 md:text-3xl">
          {aboutSection.title}
        </h2>
        <div className="space-y-4 font-nunito text-base text-gray-300">
          {/* Use paragraph1 from content.json */}
          <p>
            {aboutSection.paragraph1}
          </p>
          {/* Use paragraph2 from content.json */}
          <p>
            {aboutSection.paragraph2}
          </p>
        </div>
      </div>
      {/* Image */}
      <div className="h-[450px] w-full md:h-auto">
        <img
          src="courier-dark.jpg"
          alt="Courier sorting packages in a warehouse"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}