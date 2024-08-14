import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "leaflet/dist/leaflet.css";
import "./App.css";
import TestimonialSection from "./TestimonialSection";
import PricingSection from "./PricingSection";
import Footer from "./Footer";

function App() {
  const imgSec = useRef(null);
  const sibSec = useRef(null);
  const [sheight, setSheight] = useState("auto");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  //func to adjust height of sections
  const updateHeight = () => {
    if (imgSec.current) {
      const height = imgSec.current.offsetHeight;
      setSheight(`${height}px`);
    }
  };
  //useEffect
  useEffect(() => {
    setTimeout(() => {
      updateHeight();
    }, 1000);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  //nav function
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      name,
      email,
      message,
    };
    //http://localhost:3000
    try {
      const response = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };
  // quote function
  const handleGetQuote = () => {
    // Add your quote handling logic here, e.g., open a modal, navigate to a form, etc.
    console.log("Get Quote button clicked!");
  };

  return (
    <>
      <header
        id="home"
        className="relative box-border h-screen w-auto overflow-hidden px-24 py-16 font-lora text-white"
      >
        <video
          className="absolute left-0 top-0 -z-10 w-full blur-sm filter backdrop-brightness-0"
          loop
          autoPlay
          preload="metadata"
          muted
        >
          <source
            src="https://www.choicelogistics.com/wp-content/uploads/banner_home.mp4"
            type="video/mp4"
          />
        </video>
        <nav className="flex items-center justify-between">
          <h1 className="flex text-3xl">
            <img src="icon-white.png" className="w-10" alt="icon" /> BRANDAN'S
            COURIER
          </h1>
          <ul className="flex gap-12 font-nunito text-sm font-semibold">
            <li className="cursor-pointer border-b-2 border-transparent hover:border-white">
              <a onClick={() => handleClick("home")}>HOME</a>
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-white">
              <a onClick={() => handleClick("us")}>WHO WE ARE</a>
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-white">
              <a onClick={() => handleClick("route")}>HOW WE DO IT</a>
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-white">
              <a onClick={() => handleClick("contact")}>CONTACT US</a>
            </li>
          </ul>
        </nav>
        <div className="mt-48 w-4/6">
          <h1 className="my-8 text-6xl">
            Brandan's Retail Courier Services LLC
          </h1>
          <p className="font-nunito text-xl font-semibold">
          Is here to provide Fast and Reliable Courier Services at Your Doorstep. "Delivering Packages Safely and On Time, Every Time"
          </p>
          <div className="my-12">
      <button
        onClick={handleGetQuote}
        className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-neutral-200 focus:outline-none"
      >
        Get a Quote
      </button>
    </div>
        </div>
      </header>
      <main className="font-lora">
        
        {/* roots */}
        <div id="us" className="grid grid-cols-2">
          <section
            ref={sibSec}
            style={{ height: sheight }}
            className="h-[449px] bg-black p-20 *:my-4 text-white"
          >
            <h1 className="mb-8 text-3xl">Our Roots and future...</h1>
            <p>
              Our business is committed to growth and expansion. As we look
              forward to 2023 and beyond, we seek new customers who value
              reliable and efficient courier services.
            </p>
            <h1>
              With a strong foundation established in 2021, we bring a wealth of
              experience to the courier industry. Our expertise allows us to
              provide top-notch pickup and delivery solutions for a wide range
              of clients.
            </h1>
            <h1>
              My Business is looking to Expand More in 2023 & Going Forward
              I am looking for Consumers & Customers that would be interested in
              My Courier Services
            </h1>
          </section>
          <section ref={imgSec} className="h-min w-full">
            <img src="courier-dark.jpg" alt="" />
          </section>
        </div>
        {/* services */}
        <div className="grid grid-cols-2">
          <section ref={imgSec} className="group/ser h-min w-full relative overflow-hidden">
            <img src="courier-two.jpg" className="group-hover/ser:scale-[1.1] delay-200 transition-all ease-in-out" />
            <h1 className="absolute top-0 left-0 text-3xl w-full h-full p-24 backdrop-brightness-75 group-hover/ser:backrop-brightness-50 text-white">As a Courier Service Provider That is Familiar
            with the Courier Business & Has Experience in it We Offer Services
            to those who require Pick-Up & Delivery Services for</h1>
          </section>
          <section
            ref={sibSec}
            style={{ height: sheight }}
            className="bg-yellow-400 p-12"
          >
            <h1 className="flex items-end text-3xl font-semibold">
              We Provide
              <p className="ml-3 text-sm font-medium">services in....</p>
            </h1>
            <div className="my-6 grid cursor-pointer grid-cols-3 gap-2 font-nunito font-semibold">
              <ul className="hover:scale-2 text-center *:mb-3">
                <li className="translate-x-3 text-lg transition-all hover:scale-125">
                  lab Specimens
                </li>
                <li className="text-md transition-all hover:scale-125">
                  Pharma runs
                </li>
                <li className="translate-x-2 text-sm transition-all hover:scale-125">
                  Clinics
                </li>
                <li className="text-md transition-all hover:scale-125">
                  Letters & Documents Delivery
                </li>
                <li className="-translate-x-2 text-2xl transition-all hover:scale-125">
                  Hospital
                </li>
                <li className="text-sm transition-all hover:scale-125">
                  Doctors Offices
                </li>
                <li className="text-lg transition-all hover:scale-125">
                  Stat Medical Equipment
                </li>
              </ul>
              <ul className="text-center *:mb-3">
                <li className="translate-x-3 text-lg transition-all hover:scale-125">
                  International Airport Cargo/Baggage
                </li>
                <li className="translate-x-2 text-sm transition-all hover:scale-125">
                  UPMC Pinnacle
                </li>
                <li className="text-3xl transition-all hover:scale-125">
                  logistics
                </li>
                <li className="text-md -translate-x-2 transition-all hover:scale-125">
                  Same day Courier Services
                </li>
                <li className="text-2xl transition-all hover:scale-125">
                  Delivery Services
                </li>
                <li className="text-sm transition-all hover:scale-125">
                  Luggage Delivery
                </li>
              </ul>
              <ul className="text-center *:mb-3">
                <li className="text-lg transition-all hover:scale-125">
                  On-Demand Courier Services
                </li>
                <li className="translate-x-3 text-lg transition-all hover:scale-125">
                  Nursing Homes
                </li>
                <li className="text-2xl transition-all hover:scale-125">
                  Route Delivery
                </li>
                <li className="translate-x-2 text-sm transition-all hover:scale-125">
                  local & wide area services
                </li>
                <li className="text-4xl transition-all hover:scale-125">
                  Stat runs
                </li>
                <li className="text-sm transition-all hover:scale-125">
                  International Courier Services
                </li>
                <li className="text-md -translate-x-2 transition-all hover:scale-125">
                  Sterlile processes
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* route optimization */}
        <div id="route" className="flex">
          <section className="aspect-square w-3/6 p-24">
            <img className="w-24" src="mapd.png" alt="" />
            <h1 className="py-8 text-4xl">Route Optimization</h1>
            <p className="text-lg">
              In today's fast-paced world, efficient delivery is crucial for
              courier services. Route optimization is the key to unlocking
              maximum efficiency and minimizing costs. Our cutting-edge
              technology analyzes various factors such as traffic conditions,
              delivery locations, and vehicle capacity to create optimal
              delivery routes.
            </p>
          </section>
          <section className="group/img relative aspect-square w-3/6 overflow-hidden">
            <img src="bg-content.jpg" alt="" />
          </section>
        </div>
        {/* //Certified */}
        <div className="relative flex h-[240px] flex-col items-center overflow-hidden bg-neutral-950 p-12 text-white">
          <h1 className="text-2xl">WE ARE CERTIFIED</h1>
          <div className="m-12 flex animate-infinite-scroll items-center justify-center gap-12 md:justify-start">
            <h1>UPMC-Vendor</h1>
            <h1>Valued-Vendor</h1>
            <h1>TSA-Certified</h1>
          </div>
          <div className="absolute left-0 top-0 h-full w-[40%] bg-neutral-950 blur-lg filter"></div>
          <div className="absolute right-0 top-0 h-full w-[40%] bg-neutral-950 blur-lg filter"></div>
        </div>
        {/* pricing */}
        <div>
          <PricingSection/>
        </div>
        {/* testomonials */}
        <div>
          <TestimonialSection/>
        </div>
        {/* //map */}
        <div id="map" className="grid grid-cols-2 overflow-hidden bg-black relative text-white">
          <div className="absolute top-[-10%] inset-0 bg-gradient-radial"></div>
          <section className="aspect-video p-12">
            <h1 className="my-8 text-3xl">
              Local Support, Anywhere you want..
            </h1>
            <p>
              My Company also has routes for John Deer Parts that Require a
              Bigger Box truck or Bigger Spaced SemiTruck that delivers to wide
              area locations- Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus quis minima est iste nam eveniet.
              Ipsum, perferendis aliquam eos nulla tempora nam molestiae optio
              quod illo minima, aperiam debitis? Cum.{" "}
            </p>
          </section>
          <section>
            <MapContainer
              center={[40.239913, -76.919928]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              whenCreated={(mapInstance) => {
                mapRef.current = mapInstance;
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[40.239913, -76.919928]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </section>
        </div>
        {/* form */}
        <div
          id="contact"
          className="grid grid-cols-2 bg-gray-50 font-nunito text-neutral-950"
        >
          <section className="flex flex-col items-center justify-center">
            <div>
            <h1 className="text-4xl font-bold border-b-yellow-400 border-b-2 w-max font-figtree flex items-end gap-2">Contact us</h1>
            <p className="text-2xl">Don't hesitate to reach out to us!</p>
            </div>
          </section>
          <section className="">
            <form
              onSubmit={handleSubmit}
              className="group/f mx-auto my-8 max-w-md"
            >
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="input"
                />
                <label
                  htmlFor="name"
                  className="label"
                >
                  Name
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input"
                />
                <label
                  htmlFor="email"
                  className="label"
                >
                  Email
                </label>
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full rounded-[26px] border bg-white px-4 py-2 text-black shadow-lg focus:outline-none"
                  rows="4"
                ></textarea>
                <label
                  htmlFor="message"
                  className="mb-2 block w-[90%] translate-x-4 translate-y-[-180%] bg-white font-bold text-neutral-300 transition-all group-hover/f:w-min group-hover/f:translate-y-[-95%] group-hover/f:bg-transparent"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="focus:shadow-outline rounded-full bg-white px-4 py-2 font-bold border text-gray-300 shadow-lg hover:border-yellow-400 hover:bg-yellow-400 hover:text-black focus:outline-none"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
