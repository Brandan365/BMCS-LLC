// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-[-180%] inset-0 bg-gradient-radial"></div>
      </div>
      <div className="relative container mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-8 px-8 text-white">
        <div>
          <img src="icon-white.png" width={"80px"} alt="" />
          <h3 className="text-xl font-bold mb-4">The agency for better clients®</h3>
        </div>

        <div className='w-min'> 
          <h4 className="font-semibold mb-4">CAMPHILL</h4>
          <p>Brandan365_@BrandansRetailCourierServicesLLC.Com</p>
          <p>+1 (717)-439-9685</p>
          <p>128 32nd Street, Camphill Pa 17011,</p>
          <p>70 Market Street, Harrisburg Pennsylvania</p>
          <a href="#map" className="hover:text-yellow-400 underline mt-2 block">SEE ON MAP →</a>
        </div>


        <div className="right-0 absolute mr-24">
          <h4 className="font-semibold mb-4">WANT TO HAVE NEWS OF OFFRES?</h4>
          <a href="#" className="hover:text-yellow-400 underline block mb-4">SIGN UP FOR OUR NEWSLETTER →</a>
          <h4 className="font-semibold mb-4">FOLLOW US</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white">FaceBook</a>
            <a href="#" className="text-white">Twitter</a>
            <a href="#" className="text-white">Instagram</a>
            <a href="#" className="text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
