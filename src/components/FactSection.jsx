import React, { useState, useEffect, useRef } from 'react';
import {
    FaTruck,
    FaChartLine, // You might want to update this to a more suitable icon if FaChartLine isn't fitting for "States"
    FaHeadset,
    FaCity,
    FaRegCalendarAlt
  } from "react-icons/fa";
// Import the content.json file
import content from '../content.json'; // Adjust path based on your file structure

// Mapping for icons, as these are not directly in content.json
// You can extend this mapping if you add more fact types or icons in the future.
const iconMap = {
  "Shipments": <FaTruck/>,
  "States": <FaCity/>, // Changed to FaCity, FaChartLine might imply growth/charts more than locations
  "Years of Experience": <FaRegCalendarAlt />,
  "Operations": <FaHeadset/>,
};


const FactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Initialize counters state with 0s, based on the number of facts from content.json
  const [counters, setCounters] = useState(content.factSection.facts.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 } // Adjust threshold as needed
      );
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };

    handleScroll();
    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        // Disconnect if observer is still active
        // This is less critical with `observer.disconnect()` inside the effect,
        // but good practice for robustness.
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    if (isVisible) {
      const newCounters = [...counters];
      // Use content.factSection.facts directly
      content.factSection.facts.forEach((fact, index) => {
        let count = 0;
        const increment = fact.number / 100; // Adjust increment value for smoother or faster counting
        const interval = setInterval(() => {
          count += increment;
          if (count >= fact.number) {
            clearInterval(interval);
            count = fact.number; // Ensure it stops exactly at the target number
          }
          newCounters[index] = Math.floor(count);
          setCounters([...newCounters]);
        }, 20); // Adjust the interval speed as needed
        // Return a cleanup function for setInterval
        return () => clearInterval(interval);
      });
    }
  }, [isVisible, content.factSection.facts]); // Add content.factSection.facts to dependencies for robustness

  return (
    <section ref={sectionRef} className="relative px-16 py-28  bg-white">
      {/* Background overlay */}
      <div style={{ backgroundImage: `url('courier-three.jpg')`}} className="absolute inset-0 bg-cover bg-center opacity-75"></div>


      {/* Container */}
      <div className="container mx-auto relative text-white px-4">
        {/* Title for the fact section - added this based on content.json structure */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 border-b-2 border-yellow-400 pb-2 w-max mx-auto">
          {content.factSection.title}
        </h2>
        <div className="flex flex-wrap -mx-4">
          {/* Map over content.factSection.facts */}
          {content.factSection.facts.map((fact, index) => (
            <div key={index} className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <div className="text-center hover:bg-black/20 hover:-translate-y-3 p-6 hover:shadow-lg rounded-lg transition-all delay-150">
                <div className="flex justify-center mb-4">
                 {/* Use icon from iconMap based on fact.title */}
                 <p className='text-6xl'>{iconMap[fact.title]}</p>
                </div>
                <div>
                  <span className="text-3xl font-bold ">
                    {counters[index]}
                    {/* Use fact.suffix directly from content.json */}
                    {fact.suffix}
                  </span>
                  <h3 className="text-lg font-medium mt-2">{fact.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactSection;