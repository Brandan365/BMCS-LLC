// src/components/MainContent.jsx
import React, { Suspense } from 'react';
// import RouteOptimizationSection from './sections/RouteOptimizationSection';

// Lazy load all main content sections
const AboutSection = React.lazy(() => import('./sections/AboutSection'));
const ServicesSection = React.lazy(() => import('./sections/ServicesSection'));
const CertifiedSection = React.lazy(() => import('./sections/CertifiedSection'));
const LocationMapSection = React.lazy(() => import('./sections/LocationMapSection'));
const RouteOptimizationSection = React.lazy(() => import('./sections/RouteOptimizationSection'));

// Lazy load your other existing components
// const ServicePage = React.lazy(() => import('./ServicePage'));
const TestimonialSection = React.lazy(() => import('./TestimonialSection'));
const FactSection = React.lazy(() => import('./FactSection'));
const ContactSection = React.lazy(() => import('./ContactSection'));
const Contact = React.lazy(() => import('./Contact'));

// A smaller, inline spinner for sections if needed, or use the main one.
const SectionSpinner = () => <div className="h-96 w-full bg-gray-900"></div>;

export default function MainContent() {
  return (
    <main className="font-lora">
      <Suspense fallback={<SectionSpinner />}>
        <AboutSection />
        <ServicesSection />
        {/* <ServicePage /> */}
        <RouteOptimizationSection />
        <ContactSection />
        <CertifiedSection />
        <TestimonialSection />
        <FactSection />
        <LocationMapSection />
        <Contact />
      </Suspense>
    </main>
  );
}