import React, {useState, useEffect, useRef, Suspense } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
const TestimonialSection = React.lazy(() => import('./TestimonialSection'));
const Footer = React.lazy(() => import('./Footer'));
const Header = React.lazy(() => import('./Header'));
const Contact = React.lazy(() => import('./Contact'));
const ServicePage = React.lazy(() => import('./ServicePage'));
const ContactSection = React.lazy(() => import('./ContactSection'));
const FactSection = React.lazy(() => import('./FactSection'));
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-opacity-75"></div>
  </div>
);
function HomePage() {
  const imgSec = useRef(null);
  const sibSec = useRef(null);
  const [sheight, setSheight] = useState("auto");
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

  return (
    <>
    <Suspense fallback={<LoadingSpinner/>}>
      <Header />
      <main className="font-lora">
        {/* roots */}
        <div id="us" className="relative bg-black md:grid md:grid-cols-2">
          <section
            ref={sibSec}
            style={{ height: sheight }}
            className="absolute left-0 top-0 md:mr-16 p-8 text-white *:my-4 md:static md:h-[449px] md:bg-black md:p-14"
          >
            <h1 className="w-max border-b border-yellow-400 text-2xl md:mb-8 md:text-3xl">
              Our Roots and future...
            </h1>
            <p className="text-sm w-[132px] md:w-auto md:text-base">
              Our business is committed to growth and expansion. As we look
              forward to 2023 and beyond, we seek new customers who value
              reliable and efficient courier services.
            </p>
            <h1 className="text-md md:text-base">
              With a strong foundation established in 2021, we bring a wealth of
              experience to the courier industry. Our expertise allows us to
              provide top-notch pickup and delivery solutions for a wide range
              of clients.
            </h1>
            <h1 className="text-md md:text-base">
              My Business is looking to Expand More in 2023 & Going Forward I am
              looking for Consumers & Customers that would be interested in My
              Courier Services
            </h1>
          </section>
          <section ref={imgSec} className="h-[620px] w-full md:h-min">
            <img src="courier-dark.jpg" alt="" />
          </section>
        </div>
        {/* services */}
        <div id ="service" className="overflow-hidden md:grid md:grid-cols-2">
          <section
            ref={imgSec}
            className="group/ser relative h-min w-full overflow-hidden"
          >
            <img
              src="courier-two.jpg"
              className="transition-all delay-200 ease-in-out group-hover/ser:scale-[1.05] opacity-[90%]"
            />
            <h1 className="group-hover/ser:backrop-brightness-50 absolute left-0 top-0 h-full w-full p-12 text-xl text-white md:p-24 md:text-3xl">
              As a Courier Service Provider That is Familiar with the Courier
              Business & Has Experience in it We Offer Services to those who
              require Pick-Up & Delivery Services for...
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
        <ServicePage />
        {/* contactsec */}
        <ContactSection/>
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
        {/* facts */}
        <FactSection/>
        {/* //map */}
        <div
          id="map"
          className="relative grid grid-cols-1 grid-rows-2 overflow-hidden bg-black text-white md:grid-cols-2 md:grid-rows-1"
        >
          <div className="absolute inset-0 top-[-10%] bg-gradient-radial"></div>
          <section className="p-12 md:aspect-video">
            <h1 className="my-8 w-5/6 border-b-2 border-b-yellow-400 py-2 text-2xl md:w-max md:text-3xl">
              Local Support, Anywhere you want..
            </h1>
            <p>
              At Brandan's Retail Courier Services LLC, we're more than just a
              delivery service — we're your local partner. Conveniently located
              at 28 32nd Street, Camphill, PA 17011, in the Camphill Shopping
              Center, Harrisburg, Pennsylvania, we're ready to meet your courier
              needs with speed and reliability. Whether you’re shipping locally
              or need something delivered across town, our team is here to
              ensure your package arrives safely and on time. Trust us for all
              your courier needs and experience the difference of personalized
              local support.
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
                  We are here. <br /> Come visit us.
                </Popup>
              </Marker>
            </MapContainer>
          </section>
        </div>
        {/* form */}
        <Contact />
      </main>
      <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;
