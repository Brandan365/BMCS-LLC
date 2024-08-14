// src/components/PricingCard.jsx
import React from 'react';

const PricingCard = ({ plan }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">{plan.name}</h3>
      <p className="text-center text-gray-600 text-lg mb-6">{plan.description}</p>
      <div className="text-center">
        <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
        <span className="text-gray-600">/mo</span>
      </div>
      <ul className="mt-6 mb-8 space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
