// src/components/NavLinks.jsx
import React from 'react';

const navItems = [
  { href: "#home", label: "HOME" },
  { href: "#us", label: "WHO WE ARE" },
  { href: "#service", label: "OUR SERVICES" },
  { href: "#contact", label: "CONTACT US" },
];

export default function NavLinks() {
  return (
    <ul className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12">
      {navItems.map((item) => (
        <li key={item.href} className="group relative cursor-pointer">
          <a href={item.href} className="block">
            {item.label}
            {/* Underline effect on hover */}
            <span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      ))}
    </ul>
  );
}