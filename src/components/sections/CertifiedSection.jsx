// src/components/sections/CertifiedSection.jsx
import React from 'react';

const certifications = ["UPMC-Vendor", "Valued-Vendor", "TSA-Certified"];

export default function CertifiedSection() {
  return (
    <section className="relative flex h-48 flex-col items-center justify-center overflow-hidden bg-neutral-900 py-12 text-white">
      <h2 className="border-b border-b-yellow-400 text-lg md:text-2xl">
        WE ARE CERTIFIED
      </h2>
      <div className="mt-12 flex w-full">
        {/* We render the list twice for a seamless loop */}
        <div className="flex w-max shrink-0 animate-infinite-scroll items-center">
          {certifications.map(cert => <span key={cert} className="mx-8 min-w-max text-lg md:mx-16 md:text-xl">{cert}</span>)}
          {certifications.map(cert => <span key={`${cert}-2`} className="mx-8 min-w-max text-lg md:mx-16 md:text-xl">{cert}</span>)}
        </div>
      </div>
      {/* Fades on the edges for a smoother effect */}
      <div className="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-neutral-900 to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-neutral-900 to-transparent"></div>
    </section>
  );
}