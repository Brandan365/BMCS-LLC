import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css'

function App() {
  const imgSec = useRef(null)
  const sibSec = useRef(null)
  const [sheight, setSheight] = useState('auto')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  //func to adjust height of sections
  const updateHeight = () => {
    if (imgSec.current) {
      const height = imgSec.current.offsetHeight;
      setSheight(`${height}px`)
    }
  }
  useEffect(() => {
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = {
      name,
      email,
      message
    };
    //http://localhost:3000
    try {
      const response = await fetch('http://localhost:3000/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };
  return (
    <>
      <header id="home" className="relative w-auto box-border h-screen px-24 py-16 overflow-hidden text-white font-lora">
        <video className="absolute top-0 left-0 -z-10 w-full backdrop-brightness-0 filter blur-sm" loop autoPlay preload="metadata" muted>
          <source src="https://www.choicelogistics.com/wp-content/uploads/banner_home.mp4" type="video/mp4" />
        </video>
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl flex"> <img src="icon-white.png" className="w-10" alt="icon" /> BRANDON'S COURIER</h1>
          <ul className="flex gap-12 font-semibold text-sm font-nunito">
            <li className="cursor-pointer border-b-2 border-transparent hover:border-white"><a onClick={() => handleClick("home")}>HOME</a></li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-white"><a onClick={() => handleClick("us")}>WHO WE ARE</a></li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-white"><a onClick={() => handleClick("route")}>HOW WE DO IT</a></li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-white"><a onClick={() => handleClick("contact")}>CONTACT US</a></li>
          </ul>
        </nav>
        <div className="mt-48 w-4/6">
          <h1 className="text-6xl my-8">Brandan's Retail Courier Services LLC Is here to provide Reliable Services.</h1>
          <p className="text-xl font-semibold font-nunito">Hello, My Business is looking to Expand More in 2023 & Going Forward I am looking for Consumers & Customers that would be interested in My Courier Services. As a Courier Service Provider That is Familiar with the Courier Business & Has Experience in it We Offer Services to those who require Pick-Up & Delivery Services for:</p>
        </div>
      </header>
      <main className="font-lora">
        {/* route optimization */}
        <div id="route" className="flex">
          <section className="w-3/6 aspect-square p-24">
            <img className="w-24" src="mapd.png" alt="" />
            <h1 className="text-4xl py-8">Route Optimization</h1>
            <p className="text-lg">In today's fast-paced world, efficient delivery is crucial for courier services. Route optimization is the key to unlocking maximum efficiency and minimizing costs. Our cutting-edge technology analyzes various factors such as traffic conditions, delivery locations, and vehicle capacity to create optimal delivery routes.</p>
          </section>
          <section className="w-3/6 group/img aspect-square overflow-hidden relative">
            <img src="bg-content.jpg" className="filter  transition-all group-hover/img:blur-sm" alt="" />
            <h1 className="hidden absolute group-hover/img:flex hover:flex  transition-all hover:scale-125 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white justify-center text-4xl font-bold font-nunito cursor-pointer ">Know more</h1>
          </section>
        </div>
        {/* roots */}
        <div id="us" className="grid grid-cols-2">
          <section ref={sibSec} style={{ height: sheight }} className="p-24 h-[449px] bg-black text-white">
            <h1 className="text-3xl mb-12">Our Roots and future...</h1>
            <p>Our business is committed to growth and expansion. As we look forward to 2023 and beyond, we seek new customers who value reliable and efficient courier services. </p>
            <h1>With a strong foundation established in 2021, we bring a wealth of experience to the courier industry. Our expertise allows us to provide top-notch pickup and delivery solutions for a wide range of clients.</h1>
          </section >
          <section ref={imgSec} className="w-full h-min">
            <img src="courier-dark.jpg" alt="" />
          </section>
        </div>
        {/* services */}
        <div className="grid grid-cols-2">
          <section ref={imgSec} className="w-full h-min">
            <img src="courier-two.jpg" />
          </section>
          <section ref={sibSec} style={{ height: sheight }} className="bg-amber-500 p-12">
            <h1 className="font-semibold text-3xl flex items-end">We Provide <p className="font-medium text-sm ml-3">services in....</p></h1>
            <div className="grid grid-cols-3 my-6 font-nunito cursor-pointer font-semibold gap-2">
              <ul className="text-center *:mb-3 hover:scale-2 ">
                <li className="hover:scale-125 transition-all text-lg translate-x-3">lab Specimens</li>
                <li className="hover:scale-125 transition-all text-md">Pharma runs</li>
                <li className="hover:scale-125 transition-all text-sm translate-x-2">Clinics</li>
                <li className="hover:scale-125 transition-all text-md">Letters & Documents Delivery</li>
                <li className="hover:scale-125 transition-all text-2xl -translate-x-2">Hospital</li>
                <li className="hover:scale-125 transition-all text-sm">Doctors Offices</li>
                <li className="hover:scale-125 transition-all text-lg">Stat Medical Equipment</li>
              </ul>
              <ul className="text-center *:mb-3">
                <li className="hover:scale-125 transition-all text-lg translate-x-3">International Airport Cargo/Baggage</li>
                <li className="hover:scale-125 transition-all text-sm translate-x-2">UPMC Pinnacle</li>
                <li className="hover:scale-125 transition-all text-3xl">logistics</li>
                <li className="hover:scale-125 transition-all text-md -translate-x-2">Same day Courier Services</li>
                <li className="hover:scale-125 transition-all text-2xl">Delivery Services</li>
                <li className="hover:scale-125 transition-all text-sm">Luggage Delivery</li>
              </ul>
              <ul className="text-center *:mb-3">
                <li className="hover:scale-125 transition-all text-lg">On-Demand Courier Services</li>
                <li className="hover:scale-125 transition-all text-lg translate-x-3">Nursing Homes</li>
                <li className="hover:scale-125 transition-all text-2xl">Route Delivery</li>
                <li className="hover:scale-125 transition-all text-sm translate-x-2">local & wide area services</li>
                <li className="hover:scale-125 transition-all text-4xl">Stat runs</li>
                <li className="hover:scale-125 transition-all text-sm">International Courier Services</li>
                <li className="hover:scale-125 transition-all text-md -translate-x-2">Sterlile processes</li>
              </ul>
            </div>
          </section>
        </div>
        {/* //Certified */}
        <div className='h-[240px] bg-neutral-950 text-white flex flex-col relative overflow-hidden items-center p-12'>
          <h1 className='text-2xl'>WE ARE CERTIFIED</h1>
          <div className='flex items-center justify-center md:justify-start gap-12 m-12 animate-infinite-scroll '>
            <h1>UPMC-Vendor</h1>
            <h1>Valued-Vendor</h1>
            <h1>TSA-Certified</h1>
          </div>
          <div className="absolute h-full w-[40%] filter bg-neutral-950 blur-lg top-0 left-0 "></div>
          <div className="absolute h-full w-[40%] filter bg-neutral-950 blur-lg top-0 right-0 "></div>
        </div>
        {/* //map */}
        <div className='grid grid-cols-2'>
          <section className='p-12 aspect-video'>
            <h1 className='text-3xl my-8 '>Local Support, Anywhere you want..</h1>
            <p>My Company also has routes for John Deer Parts that Require a Bigger Box truck or Bigger Spaced SemiTruck that delivers to wide area locations- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis minima est iste nam eveniet. Ipsum, perferendis aliquam eos nulla tempora nam molestiae optio quod illo minima, aperiam debitis? Cum. </p>
          </section>
          <section><MapContainer
            center={[40.239913, -76.919928]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
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
          </MapContainer></section>
        </div>
        {/* //form */}
        <div id="contact" className='grid grid-cols-2  bg-neutral-950 text-white font-nunito'>
          <section className=' p-12'>
            <h1 className="text-4xl font-bold">GET IN TOUCH</h1>
            <p className="text-2xl">Don't hesitate to reach out to us!</p>
          </section>
          <section className="">
            <form onSubmit={handleSubmit} className="max-w-md group/f mx-auto my-8">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 text-white border border-white bg-neutral-950 rounded-full focus:outline-none"
                />
                <label htmlFor="name" className="block mb-2 font-bold text-neutral-300 transition-all bg-neutral-950 w-[90%] translate-x-4 translate-y-[-140%] group-hover/f:translate-y-[-220%] group-hover/f:w-min ">Name</label>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 text-white border border-white bg-neutral-950 rounded-full focus:outline-none"
                />
                <label htmlFor="email" className="block mb-2 font-bold text-neutral-300 transition-all bg-neutral-950 w-[90%] translate-x-4 translate-y-[-140%] group-hover/f:translate-y-[-220%] group-hover/f:w-min ">Email</label>
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-2 text-white border border-white bg-neutral-950 rounded-[26px] focus:outline-none"
                  rows="4"
                ></textarea>
                <label htmlFor="message" className="block mb-2 font-bold text-neutral-300 transition-all bg-neutral-950 w-[90%] translate-x-4 translate-y-[-180%] group-hover/f:translate-y-[-95%] group-hover/f:w-min ">Message</label>
              </div>
              <button type="submit" className="px-4 py-2 font-bold text-white bg-black border-2 border-white rounded-full hover:bg-amber-500 hover:border-black hover:text-black focus:outline-none focus:shadow-outline">
                Send Message
              </button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </section>
        </div>
      </main>
      <footer>
        <div className='flex bg-amber-500 text-neutral-950 font-nunito'>
          <section className='flex flex-col w-[30%]  p-12 justify-center'>
            <img src="icon-black.png" className='w-[120px]' alt="" />
            <h1 className='font-bold text-2xl'>Brandon's Courier</h1>
          </section>
          <section className='py-12 '>
            <ul className='*:mt-4'>
              <li><h1 className="font-bold">Adress</h1><p className="text-sm tracking-wide">128 32nd St Camphill Pa 17011</p></li>
              <li><h1 className="font-bold">Phone</h1><p className="text-sm tracking-wide">(717)-439-9685</p></li>
              <li><h1 className="font-bold">Email</h1><p className="text-sm tracking-wide">Brandan365_@BrandansRetailCourierServicesLLC.Com</p></li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  )
}

export default App
