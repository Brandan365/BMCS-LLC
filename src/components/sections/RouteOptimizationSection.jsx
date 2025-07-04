// src/components/sections/RouteOptimizationSection.jsx
import React from 'react';

export default function RouteOptimizationSection() {
  return (
    <section id="route" className="grid grid-cols-1 md:grid-cols-2">
      {/* Text Content */}
      <div className="order-2 flex flex-col justify-center bg-gray-100 p-8 md:order-1 md:p-16">
        <img
          className="h-16 w-16 md:h-20 md:w-20"
          src="mapd.png" // Ensure this image is in your public folder
          alt="Route optimization icon"
        />
        <h2 className="py-6 text-3xl font-bold text-gray-900 md:py-8 md:text-4xl">
          Route Optimization
        </h2>
        <p className="font-nunito text-lg text-gray-700">
          In today's fast-paced world, efficient delivery is crucial. Our
          cutting-edge technology analyzes traffic, locations, and vehicle
          capacity to create optimal delivery routes, unlocking maximum
          efficiency and minimizing costs for you.
        </p>
      </div>

      {/* Image */}
      <div className="group order-1 min-h-[350px] overflow-hidden md:order-2 md:min-h-full">
        <img
          src="bg-content.jpg" // Ensure this image is in your public folder
          alt="A map showing an optimized delivery route on a tablet"
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
    </section>
  );
}