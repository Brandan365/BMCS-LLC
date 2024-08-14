// src/components/PricingSection.jsx
import React from 'react';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    name: 'Basic',
    description: 'For individuals just getting started.',
    price: '19',
    features: [
      '5 GB Storage',
      'Basic Support',
      'Single User',
    ],
  },
  {
    name: 'Pro',
    description: 'Perfect for small teams and businesses.',
    price: '49',
    features: [
      '50 GB Storage',
      'Priority Support',
      'Up to 10 Users',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Best for large enterprises.',
    price: '99',
    features: [
      'Unlimited Storage',
      'Dedicated Support',
      'Unlimited Users',
    ],
  },
];

const PricingSection = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Our Pricing Plans..it is but a placeholder and will be removed later</h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
