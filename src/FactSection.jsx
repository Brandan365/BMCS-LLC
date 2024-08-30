import React, { useState, useEffect, useRef } from 'react';
import {
    FaTruck,
    FaChartLine,
    FaHeadset,
    FaCity,
    FaRegCalendarAlt 
  } from "react-icons/fa";
// Fun facts data array
const funFacts = [
  { icon: <FaTruck/>, number: 10000, title: 'Shipments' },
  { icon: <FaCity/> , number: 12, title: 'Cities' },
  { icon: < FaRegCalendarAlt />, number: 5, title: 'Years of Experience' },
  { icon: <FaHeadset/>, number: 24, title: 'Operations' },
];

const FactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(funFacts.map(() => 0)); // Initialize counters state for animation
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
  }, []);

  useEffect(() => {
    if (isVisible) {
      const newCounters = [...counters];
      funFacts.forEach((fact, index) => {
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
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative px-16 py-28  bg-white">
      {/* Background overlay */}
      <div style={{ backgroundImage: `url('courier-three.jpg')`}} className="absolute inset-0 bg-cover bg-center opacity-75"></div>


      {/* Container */}
      <div className="container mx-auto relative text-white z-10 px-4">
        <div className="flex flex-wrap -mx-4">
          {funFacts.map((fact, index) => (
            <div key={index} className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <div className="text-center hover:bg-black/20 hover:-translate-y-3 p-6 hover:shadow-lg rounded-lg transition-all delay-150">
                <div className="flex justify-center mb-4">
                 <p className='text-6xl'>{fact.icon}</p>
                </div>
                <div>
                  <span className="text-3xl font-bold ">
                    {counters[index]}
                    {fact.number > 24 && '+'}
                    {fact.number < 24 && '+'}
                    {fact.number === 24 && '/7'}
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
