// src/components/TestimonialCard.jsx
import React from "react";
import StarRating from "./StarRating";
const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className={` ${testimonial.span} relative mx-auto max-w-sm rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-[1.1]`}
    >
      {/* <div className="absolute top-[-10%] text-center aspect-square w-[36px] h-[36px] bg-yellow-400 text-6xl text-white font-bold">"</div> */}
      <p className="mb-4 max-h-[12P0px] overflow-hidden text-base text-gray-700">
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
