// src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden rounded-lg p-6 max-w-sm mx-auto">
      <p className="text-gray-700 text-base mb-4">"{testimonial.quote}"</p>
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={testimonial.image}
          alt={`${testimonial.name}'s avatar`}
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{testimonial.name}</p>
          <p className="text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
