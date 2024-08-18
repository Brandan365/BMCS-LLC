// src/components/PricingCard.jsx
import React from "react";

const PricingCard = ({ plan }) => {
  return (
    <div className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-center text-2xl font-semibold text-gray-900">
        {plan.name}
      </h3>
      <p className="mb-6 text-center text-lg text-gray-600">
        {plan.description}
      </p>
      <div className="text-center">
        <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
        <span className="text-gray-600">/mo</span>
      </div>
      <ul className="mb-8 mt-6 space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
