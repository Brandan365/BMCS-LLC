// src/components/TestimonialCard.jsx
import React from "react";
import StarRating from "./StarRating";
const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className={` ${testimonial.span} relative mx-auto md:h-auto max-w-sm rounded-lg bg-white p-6 shadow-lg transition-transform md:hover:scale-[1.1]`}
    >
      <p className="mb-4 max-h-[120px] md:max-h-max overflow-hidden text-base text-gray-700">
        "{testimonial.text}"
      </p>
      <div className="flex items-center">
        <img
          className="mr-4 h-12 w-12 rounded-full"
          src={testimonial.profile_photo_url}
          alt={`${testimonial.author_name}'s avatar`}
        />
        <div className="text-sm">
          <p className="leading-none text-gray-900">
            {testimonial.author_name}
          </p>
          <StarRating rating={testimonial.rating} />
          <p className="text-yellow-400">
            {testimonial.relative_time_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
