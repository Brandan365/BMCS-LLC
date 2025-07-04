import React, { useState } from "react";
import StarRating from "./StarRating";

const TestimonialCard = ({ testimonial , isMobile }) => {
  const defaultAvatar = "https://via.placeholder.com/150x150?text=User";
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const isLongText = testimonial.text.length > 140; // Adjust the limit as needed

  return (
    <div className={ `${isMobile ? "shadow-none font-medium text-lg" : "shadow-lg transition-transform hover:scale-105"} bg-white rounded-xl  p-6 h-full flex flex-col justify-between `}>
      <div>
        <p
          className={`mb-4  text-gray-700 ${
            isExpanded ? "max-h-none" : "max-h-32"
          } overflow-hidden`}
          style={{ WebkitLineClamp: isExpanded ? "none" : 4, display: "-webkit-box", WebkitBoxOrient: "vertical" }}
        >
          "{testimonial.text}"
        </p>
        {isLongText && (
          <button
            onClick={toggleExpand}
            className="text-blue-500 hover:underline mt-2"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
      <div className="flex items-center mt-4">
        <div className="relative w-12 h-12 mr-4">
          <img
            src={testimonial.reviewerPhotoUrl || defaultAvatar}
            alt={`${testimonial.name}'s avatar`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const { target } = e;
              target.onerror = null;
              target.src = defaultAvatar;
            }}
          />
        </div>
        <div className="flex-grow">
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <StarRating rating={testimonial.stars} />
          <p className="text-sm text-yellow-600">{testimonial.publishAt}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
