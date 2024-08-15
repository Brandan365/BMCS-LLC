// src/components/TestimonialSection.jsx
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards} from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-cards"
const testimonials = [
  {
    name: 'Jane Doe',
    position: 'CEO at Company',
    quote: 'This service is amazing! It has changed the way we do business.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Smith',
    position: 'Manager at Business',
    quote: 'The best decision we ever made was choosing this company!',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sara Wilson',
    position: 'Designer at Creative Co.',
    quote: 'Highly recommend this service to anyone looking for quality.',
    image: 'https://via.placeholder.com/150',
  },
  
];

const TestimonialSection = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-4xl mx-auto font-bold text-center font-figtree border-b-2 border-b-yellow-400 w-max text-gray-900 mb-8">What Our Clients Say</h2>
      {/* grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 */}
      <div className="flex justify-center items-center"> 
        {/* <Swiper
        effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="max-w-sm max-h-sm shadow-lg"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className='overflow-hidden' key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper> */}
        
          {testimonials.map((testimonial, index) => (
              <TestimonialCard testimonial={testimonial} />
          ))}
        
        </div>
    </div>
  );
};

export default TestimonialSection;
