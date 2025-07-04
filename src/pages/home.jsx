// src/pages/Home.jsx
import React, { Suspense } from 'react';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load the larger parts of the page
const MainContent = React.lazy(() => import('../components/MainContent'));
const Footer = React.lazy(() => import('../components/Footer'));

export default function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <MainContent />
        <Footer />
      </Suspense>
    </>
  );
}