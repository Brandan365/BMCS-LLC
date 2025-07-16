// src/components/sections/RouteOptimizationSection.jsx
import React from 'react';
// Import the content.json file
import content from '../../content.json'; // Adjust path based on your file structure

export default function RouteOptimizationSection() {
  // Destructure the routeOptimizationSection content
  const { routeOptimizationSection } = content;

  return (
    <section id="route" className="grid grid-cols-1 md:grid-cols-2">
      {/* Text Content */}
      <div className="order-2 flex flex-col justify-center bg-gray-100 p-8 md:order-1 md:p-16">
        <img
          className="h-16 w-16 md:h-20 md:w-20"
          src="mapd.png" // Ensure this image is in your public folder
          alt="Route optimization icon"
        />
        {/* Use title from content.json */}
        <h2 className="py-6 text-3xl font-bold text-gray-900 md:py-8 md:text-4xl">
          {routeOptimizationSection.title}
        </h2>
        {/* Use description from content.json */}
        <p className="font-nunito text-lg text-gray-700">
          {routeOptimizationSection.description}
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