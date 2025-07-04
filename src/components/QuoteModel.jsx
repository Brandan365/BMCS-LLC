// src/components/QuoteModal.jsx
import React from 'react';
import { Transition } from "@headlessui/react";
import MapComponent from "./MapComponent"; // Assuming MapComponent is in the same folder

export default function QuoteModal({ isOpen, onClose }) {
  return (
    <Transition
      show={isOpen}
      as="div" // Use 'as' prop to render a div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {/* The modal panel */}
      <div className="relative mx-4 w-full max-w-lg rounded-lg bg-gray-900/90 p-6 text-white shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <h2 className="w-max border-b-2 border-yellow-400 text-xl font-bold">
            Get a Quote
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            aria-label="Close modal"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-4 max-h-[70vh] overflow-y-auto">
           <MapComponent />
        </div>
      </div>
    </Transition>
  );
}