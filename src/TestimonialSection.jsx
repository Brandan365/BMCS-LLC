'use client'

import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Pagination, Autoplay } from 'swiper/modules'
import TestimonialCard from "./TestimonialCard"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

// Import reviews data
// import reviews from './reviews.json'

const TestimonialSection =() => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false); // State for mobile view

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/reviews.json'); // Fetch relative to the public directory
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const actualData = await response.json();
        setReviews(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    // Check if 'reviews.json' exists before fetching to prevent errors if missing
    fetch('/reviews.json')
      .then((res) => {
        if (res.ok || res.status === 404) {
          fetchReviews(); // Safe to fetch now (either it exists or we'll handle the 404)
        } else {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
      })
      .catch((err) => {
        console.error('Error checking or fetching reviews:', err);
        setError(err.message);
        setLoading(false); // Important to set loading to false if error occurs
      });

  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []); 


  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p>Error loading reviews: {error}</p>;
  }

  return (
    <div className="relative bg-gray-100 p-8 md:p-12 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffd700"
          fillOpacity="1"
          d="M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,192C672,160,768,96,864,90.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
          fill="#ffd700"
          fillOpacity="0.7"
          d="M0,32L48,32C96,32,192,32,288,42.7C384,53,480,75,576,117.3C672,160,768,224,864,224C960,224,1056,160,1152,149.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <h2 className="mx-auto mb-8 mt-12 w-[260px] md:w-max border-b-2 border-b-yellow-400 text-center font-figtree text-3xl font-bold text-gray-900 md:text-4xl">
        What Our Clients are Saying
      </h2>
      <Swiper
        effect={isMobile ? 'cards' : 'slide'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Pagination, Autoplay]}
        className={`${isMobile ? 'max-w-sm' : 'max-w-6xl'} mb-12 min-h-[360px]`}
      >
        {reviews.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} isMobile={isMobile} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSection