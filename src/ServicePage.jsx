import React from "react";
import {
  FaFlask,
  FaClinicMedical,
  FaFileAlt,
  FaPlane,
  FaTruck,
  FaHospital,
  FaBoxOpen,
  FaMedkit,
  FaBriefcaseMedical,
  FaRoute,
  FaHandsHelping,
  FaBoxes,
  FaClock,
  FaShieldVirus,
  FaLuggageCart,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// import required modules
import { Grid, Pagination, Autoplay } from "swiper/modules";
// import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import Footer from "./Footer";
import Header from "./Header";
const services = [
  {
    name: "Lab Specimens",
    icon: <FaFlask />,
    desc: "Ensure the safe and secure delivery of your laboratory animal specimens. We understand the critical nature of your research and provide a specialized courier service to protect your valuable shipments. Don't leave anything to chance—choose us to handle your specimens with the utmost care and precision.",
  },
  {
    name: "Pharma Runs",
    icon: <FaClinicMedical />,
    desc: "Reliable pharmaceutical delivery services tailored to your needs. We handle your pharma runs with speed and accuracy, ensuring your medicines and supplies arrive exactly when and where they're needed. Trust us to keep your pharmacy running smoothly.",
  },
  {
    name: "Clinics",
    icon: <FaHospital />,
    desc: "Our courier services are designed to meet the unique demands of clinics. Whether it's patient records, medical supplies, or urgent deliveries, we provide fast, dependable service that helps you focus on what matters most—your patients.",
  },
  {
    name: "Letters & Documents",
    icon: <FaFileAlt />,
    desc: "Your important letters and documents deserve the utmost attention. We offer secure, timely delivery to ensure your confidential information arrives at its destination safely. From legal documents to sensitive communications, we’ve got you covered.",
  },
  {
    name: "Hospital",
    icon: <FaHospital />,
    desc: "We specialize in supporting hospitals with critical courier services. Whether it’s transporting medical equipment, patient records, or urgent lab results, our team is ready to deliver with precision and care, 24/7.",
  },
  {
    name: "Doctors Offices",
    icon: <FaBriefcaseMedical />,
    desc: "Keep your practice running efficiently with our specialized courier services for doctors' offices. From patient samples to vital documents, we provide a reliable, hassle-free solution for all your delivery needs.",
  },
  {
    name: "Stat Medical Equipment",
    icon: <FaMedkit />,
    desc: "When time is of the essence, count on us for fast, reliable delivery of critical medical equipment. We understand the urgency and are committed to getting your equipment where it needs to be, stat.",
  },
  {
    name: "International Airport Support",
    icon: <FaPlane />,
    desc: "Navigating international logistics can be challenging—let us handle it for you. Our airport support services ensure smooth, efficient delivery of your cargo, from customs clearance to final delivery, so you can focus on your business.",
  },
  {
    name: "UPMC Pinnacle Logistics",
    icon: <FaTruck />,
    desc: "Partner with us for comprehensive logistics support. We provide tailored solutions for UPMC Pinnacle and other healthcare organizations, ensuring timely, safe delivery of everything from medical supplies to critical equipment.",
  },
  {
    name: "Same Day Courier Services",
    icon: <FaClock />,
    desc: "Need it today? Our same-day courier services guarantee fast, reliable delivery for all your urgent needs. From documents to packages, we ensure your deliveries arrive on time, every time.",
  },
  {
    name: "Delivery Services",
    icon: <FaTruck />,
    desc: "Your go-to for all delivery needs. Whether it’s local or long-distance, small packages or large freight, our professional team provides dependable service tailored to your schedule.",
  },
  {
    name: "Luggage Delivery",
    icon: <FaLuggageCart />,
    desc: "Travel light with our luggage delivery service. We take care of your bags, ensuring they arrive at your destination safe and sound, so you can focus on enjoying your journey.",
  },
  {
    name: "On-Demand Courier Services",
    icon: <FaTruck />,
    desc: "Get what you need, when you need it with our on-demand courier services. We’re ready to handle urgent deliveries with flexibility and speed, so you’re never left waiting.",
  },
  {
    name: "Nursing Homes",
    icon: <FaHandsHelping />,
    desc: "Support your nursing home operations with our reliable courier services. From medications to essential supplies, we deliver with care and precision, helping you maintain the highest standard of resident care.",
  },
  {
    name: "Route Delivery",
    icon: <FaRoute />,
    desc: "Optimize your delivery routes with our professional route delivery services. We ensure consistent, timely deliveries that help keep your business running smoothly and efficiently.",
  },
  {
    name: "Local & Wide Area Services",
    icon: <FaRoute />,
    desc: "From local deliveries to wider area coverage, our services are designed to meet all your transportation needs. We provide reliable, scalable solutions that grow with your business.",
  },
  {
    name: "Stat Runs",
    icon: <FaBoxes />,
    desc: "For those critical, time-sensitive deliveries, our stat runs provide the speed and reliability you need. Count on us to get your shipment to its destination in record time.",
  },
  {
    name: "International Courier Services",
    icon: <FaPlane />,
    desc: "Expand your reach with our international courier services. We handle all the details of cross-border logistics, from documentation to delivery, ensuring a seamless process every step of the way.",
  },
  {
    name: "Sterile Processes",
    icon: <FaShieldVirus />,
    desc: "Maintain the highest standards of sterility with our specialized delivery services. We ensure that sterile medical supplies and equipment are transported in accordance with strict protocols to preserve their integrity and safety.",
  },
];

const ServicePage = () => {
  return (
    <>
      {/* <Header/> */}
      <div className="relative overflow-hidden bg-white py-12 border-b ">
        {/* <div className="inset-0 absolute -z-10 top-[-80%] left-0 bg-gradient-radial bg-cover filter blur-[8px] brightness-50 backdrop-brightness-0 bg-center"></div> */}
        {/* <svg
          className="absolute bottom-0 left-[-75%] rotate-90"
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
        </svg> */}
        <div className="container mx-auto px-4">
          <h1 className="mx-auto md:w-[460px] p-2 border-b-2 border-yellow-400 text-3xl md:text-center font-figtree md:text-4xl font-bold text-gray-900">
          We Simply Remove The Headache From Logistics
          </h1>
          <p className="mb-8 p-2 md:w-[520px] mx-auto md:text-center">We understand that you have a life and you simply want to go home and relax while we take care of your time critical shipments...</p>

          <Swiper
            // direction={'vertical'}
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={18}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "rgb(250 204 21)",
            }}
            modules={[Grid, Pagination, Autoplay]}
            className="mySwiper h-[580px] md:h-[680px] cursor-grab p-2 active:cursor-grabbing"
            breakpoints={{
              0: { // Mobile devices
                slidesPerView: 1,
                grid: {
                  rows: 2,
                },
              },
              640: { // Tablets and above
                slidesPerView: 2,
                grid: {
                  rows: 2,
                },
              },
              1024: { // Desktop and above
                slidesPerView: 3,
                grid: {
                  rows: 2,
                },
              },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="group transform rounded-lg min-h-[280px] bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex justify-between">
                    <div className="mb-4 h-max w-max rounded-full p-3 text-3xl md:text-5xl text-black transition-all delay-150 group-hover:rotate-[360deg] group-hover:text-yellow-400">
                      {service.icon}
                    </div>
                    <h2 className="mb-4 h-max p-2 text-xl font-semibold text-gray-800 group-hover:text-yellow-400">
                      {service.name}
                    </h2>
                  </div>
                  <p className="col-span-2 text-left text-sm text-gray-600">
                    {service.desc}.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default ServicePage;
