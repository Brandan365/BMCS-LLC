// src/components/sections/AboutSection.jsx
import React from 'react';

export default function AboutSection() {
  return (
    <section id="us" className="grid grid-cols-1 bg-black md:grid-cols-2">
      {/* Text Content */}
      <div className="flex flex-col justify-center p-8 text-white md:p-14">
        <h2 className="mb-6 w-max border-b border-yellow-400 text-2xl md:mb-8 md:text-3xl">
          Our Roots and Future...
        </h2>
        <div className="space-y-4 font-nunito text-base text-gray-300">
          <p>
            With a strong foundation established in 2021, we bring a wealth of
            experience to the courier industry. Our expertise allows us to
            provide top-notch pickup and delivery solutions for a wide range of
            clients.
          </p>
          <p>
            Our business is committed to growth and expansion. As we look
            forward, we seek new customers who value reliable and efficient
            courier services.
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