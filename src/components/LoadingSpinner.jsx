// src/components/LoadingSpinner.jsx
import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-yellow-500 border-opacity-75"></div>
    </div>
  );
}