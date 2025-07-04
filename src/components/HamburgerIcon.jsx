// src/components/HamburgerIcon.jsx
import React from 'react';

export default function HamburgerIcon({ isOpen, ...props }) {
  return (
    <button className="block focus:outline-none md:hidden" {...props}>
      <svg
        className="h-8 w-8 text-white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {/* The 'X' shape for when the menu is open */}
        <path d="M6 18L18 6M6 6l12 12" className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
        {/* The hamburger shape for when the menu is closed */}
        <path d="M4 6h16M4 12h16M4 18h16" className={`transition-opacity duration-300 ${!isOpen ? 'opacity-100' : 'opacity-0'}`} />
      </svg>
    </button>
  );
}