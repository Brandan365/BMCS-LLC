// src/components/sections/ServicesSection.jsx
import React from 'react';

// Data-driven approach for services list
const servicesList = [
  "Lab Specimens", "Pharma Runs", "Clinics", "Letters & Documents", "Hospitals",
  "Doctors Offices", "Stat Medical Equipment", "Airport Cargo/Baggage",
  "UPMC Pinnacle", "Logistics", "Same-day Courier", "Delivery Services",
  "Luggage Delivery", "On-Demand Courier", "Nursing Homes", "Route Delivery",
  "Local & Wide Area", "Stat Runs", "International Courier", "Sterile Processes"
];

export default function ServicesSection() {
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
          <h2 className="text-xl text-white md:p-12 md:text-3xl">
            Familiar with the courier business, we offer pick-up & delivery
            for...
          </h2>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-yellow-400 p-8 md:p-12">
        <h2 className="flex items-end text-lg font-semibold md:text-3xl">
          We Provide Services In...
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 font-nunito font-semibold text-black md:grid-cols-3 md:gap-y-3">
          {servicesList.map((service, index) => (
            <li key={index} className="transition-transform hover:scale-105 hover:font-bold">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}