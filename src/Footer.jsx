import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative h-[600px] overflow-hidden py-8 md:h-auto md:py-12">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 top-[-80%] bg-gradient-radial md:top-[-180%]"></div>
      </div>

      <div className="relative mx-auto px-8 text-white md:container md:grid md:grid-cols-3 md:grid-rows-1 md:gap-8">
        <div className="mt-8 md:mt-0">
          <img src="icon-white.png" width={"80px"} alt="" />
          <h3 className="mb-4 text-3xl font-bold">
            The agency for better clients®
          </h3>
        </div>

        <div className="mt-8 max-w-min text-left text-sm md:mt-0 md:w-min md:text-left md:text-base">
          <h4 className="mb-2 font-semibold md:mb-4">CAMPHILL</h4>
          <p>Brandan365_@BrandansRetailCourierServicesLLC.Com</p>
          <p>
            {" "}
            <b>Phone:</b> +1 (717)-439-9685
          </p>
          <p>
            {" "}
            <b>Adress:</b> 128 32nd Street, Camphill Pa 17011,
          </p>
          <p>Camphill Shopping Center, Harrisburg Pennsylvania</p>
          <a href="#map" className="mt-2 block underline hover:text-yellow-400">
            SEE ON MAP →
          </a>
        </div>

        <div className="px-auto mt-8 w-full text-sm md:absolute md:right-0 md:mr-24 md:mt-0 md:block md:w-auto md:p-0 md:text-base">
          <h4 className="font-semibold md:mb-4">
            WANT TO HAVE NEWS OF OFFRES?
          </h4>
          <a href="#" className="mb-4 block underline hover:text-yellow-400">
            SIGN UP FOR OUR NEWSLETTER →
          </a>
          <h4 className="mb-2 font-semibold md:mb-4">FOLLOW US</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white text-3xl hover:text-yellow-400">
              <FaFacebook/>
            </a>
            <a href="#" className="text-white text-3xl hover:text-yellow-400">
              <FaTwitter/>
            </a>
            <a href="#" className="text-white text-3xl hover:text-yellow-400">
              <FaInstagram/>
            </a>
            <a href="#" className="text-white text-3xl hover:text-yellow-400">
              <FaLinkedinIn/>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] w-full translate-x-[-50%] text-center">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Brandan's Courier. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
