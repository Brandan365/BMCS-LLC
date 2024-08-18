import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "leaflet/dist/leaflet.css";
import "./App.css";
import TestimonialSection from "./TestimonialSection";
// import PricingSection from "./PricingSection";
import Footer from "./Footer";
import Header from "./Header";

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
  // const handleClick = (id) => {
  //   document.getElementById(id).scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
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

  return (
    <>
      <Header/>
      <main className="font-lora">
        {/* roots */}
        <div id="us" className="relative bg-black md:grid md:grid-cols-2">
          <section
            ref={sibSec}
            style={{ height: sheight }}
            className="absolute left-0 top-0 mr-16 p-8 text-white *:my-4 md:static md:h-[449px] md:bg-black md:p-20"
          >
            <h1 className="w-max border-b border-yellow-400 text-xl md:mb-8 md:text-3xl">
              Our Roots and future...
            </h1>
            <p className="text-xs md:text-base">
              Our business is committed to growth and expansion. As we look
              forward to 2023 and beyond, we seek new customers who value
              reliable and efficient courier services.
            </p>
            <h1 className="text-xs md:text-base">
              With a strong foundation established in 2021, we bring a wealth of
              experience to the courier industry. Our expertise allows us to
              provide top-notch pickup and delivery solutions for a wide range
              of clients.
            </h1>
            <h1 className="text-xs md:text-base">
              My Business is looking to Expand More in 2023 & Going Forward I am
              looking for Consumers & Customers that would be interested in My
              Courier Services
            </h1>
          </section>
          <section ref={imgSec} className="h-[400px] w-full md:h-min">
            <img src="courier-dark.jpg" alt="" />
          </section>
        </div>
        {/* services */}
        <div className="overflow-hidden md:grid md:grid-cols-2">
          <section
            ref={imgSec}
            className="group/ser relative h-min w-full overflow-hidden"
          >
            <img
              src="courier-two.jpg"
              className="transition-all delay-200 ease-in-out group-hover/ser:scale-[1.1]"
            />
            <h1 className="group-hover/ser:backrop-brightness-50 absolute left-0 top-0 h-full w-full p-12 text-xl text-white backdrop-brightness-75 md:p-24 md:text-3xl">
              As a Courier Service Provider That is Familiar with the Courier
              Business & Has Experience in it We Offer Services to those who
              require Pick-Up & Delivery Services for
            </h1>
          </section>
          <section
            ref={sibSec}
            style={{ height: sheight }}
            className="relative bg-yellow-400 p-8 md:p-12"
          >
            <h1 className="flex items-end text-lg font-semibold md:text-3xl">
              We Provide
              <p className="ml-3 text-xs font-medium md:text-sm">
                services in....
              </p>
            </h1>
            <div className="absolute left-0 top-0 grid cursor-pointer grid-cols-3 font-nunito font-semibold *:scale-[.6] md:static md:my-6 md:gap-2 md:*:scale-100">
              <ul className="text-center md:*:mb-3">
                <li className="translate-x-3 text-lg transition-all hover:scale-125">
                  lab Specimens
                </li>
                <li className="text-md transition-all hover:scale-125">
                  Pharma runs
                </li>
                <li className="translate-x-2 text-2xl transition-all hover:scale-125 md:text-sm">
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
                <li className="text-2xl transition-all hover:scale-125 md:text-lg">
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
                <li className="text-lg transition-all hover:scale-125 md:text-2xl">
                  Route Delivery
                </li>
                <li className="translate-x-2 text-sm transition-all hover:scale-125">
                  local & wide area services
                </li>
                <li className="text-xl transition-all hover:scale-125 md:text-4xl">
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
        <div id="route" className="md:flex">
          <section className="p-12 md:aspect-square md:w-3/6 md:p-24">
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
          <section className="group/img relative aspect-square overflow-hidden md:w-3/6">
            <img src="bg-content.jpg" alt="" />
          </section>
        </div>
        {/* //Certified */}
        <div className="relative flex h-[240px] flex-col items-center overflow-hidden bg-neutral-900 p-12 text-white">
          <h1 className="border-b border-b-yellow-400 text-lg md:text-2xl">
            WE ARE CERTIFIED
          </h1>
          <div className="m-12 flex animate-infinite-scroll justify-start gap-24 text-sm *:min-w-max md:gap-12 md:text-base">
            <h1 className=" ">UPMC-Vendor</h1>
            <h1>Valued-Vendor</h1>
            <h1>TSA-Certified</h1>
          </div>
          <div className="absolute left-[-20%] top-0 h-full w-[40%] bg-neutral-900 blur-lg filter md:left-0"></div>
          <div className="absolute right-[-20%] top-0 h-full w-[40%] bg-neutral-900 blur-lg filter md:right-0"></div>
        </div>
        {/* testomonials */}
        <div className="overflow-hidden">
          <TestimonialSection />
        </div>
        {/* //map */}
        <div
          id="map"
          className="relative grid grid-cols-1 grid-rows-2 overflow-hidden bg-black text-white md:grid-cols-2 md:grid-rows-1"
        >
          <div className="absolute inset-0 top-[-10%] bg-gradient-radial"></div>
          <section className="p-12 md:aspect-video">
            <h1 className="my-8 w-4/6 border-b-2 border-b-yellow-400 py-2 text-xl md:w-max md:text-3xl">
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
              center={[40.234936, -76.935199]}
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
              <Marker position={[40.234936, -76.935199]}>
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
          className="grid-cols-2 bg-gray-50 font-nunito text-neutral-950 md:grid"
        >
          <section className="flex-col items-center justify-center p-12 md:flex md:p-0">
            <div>
              <h1 className="flex w-max items-end gap-2 border-b-2 border-b-yellow-400 font-figtree text-4xl font-bold">
                Contact us
              </h1>
              <p className="text-xl md:text-2xl">
                Don't hesitate to reach out to us!
              </p>
            </div>
          </section>
          <section className="px-12 pb-12 md:p-0">
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
                <label htmlFor="name" className="label">
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
                <label htmlFor="email" className="label">
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
                  className="mb-2 block w-[90%] translate-x-4 translate-y-[-180%] bg-white font-bold text-neutral-300 transition-all group-hover/f:w-min group-hover/f:translate-y-[-90%] group-hover/f:bg-transparent"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="focus:shadow-outline rounded-full border bg-white px-4 py-2 font-bold text-gray-300 shadow-lg hover:border-yellow-400 hover:bg-yellow-400 hover:text-black focus:outline-none"
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
