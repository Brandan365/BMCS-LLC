import { useState } from 'react';
import { Transition } from '@headlessui/react';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
};
  // quote function
  const handleGetQuote = () => {
    // Add your quote handling logic here, e.g., open a modal, navigate to a form, etc.
    console.log("Get Quote button clicked!");
  };
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      id="home"
      className="relative box-border w-auto overflow-hidden px-6 py-7 font-lora text-white md:h-screen md:px-24 md:py-16"
    >
      <video
        className="absolute left-0 top-0 -z-10 w-full rotate-90 scale-[2.6] blur-sm filter backdrop-brightness-0 md:rotate-0 md:scale-100"
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
        <h1 className="flex text-lg md:text-3xl">
          <img
            src="icon-white.png"
            className="h-6 w-6 md:h-10 md:w-10"
            alt="icon"
          />{" "}
          BRANDAN'S COURIER
        </h1>
        
        {/* Hamburger Icon for small screens */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={handleMenuToggle}
        >
                    <svg
            className={`w-8 h-8 text-white transform transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45' : ''
            }`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={`transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
              d="M4 6h16"
            />
            <path d="M4 12h16" />
            <path
              className={`transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
              d="M4 18h16"
            />
          </svg>

        </button>

        {/* Navigation Menu */}
        <Transition
          show={isMenuOpen || window.innerWidth >= 768}
          enter="transition ease-out duration-300 transform"
          enterFrom="opacity-0 -translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-200 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-4"
          className="absolute right-10 top-20 min-w-max py-12 px-12 rounded-2xl bg-black/80  bg-opacity-90 md:px-0 md:static md:flex md:w-auto md:bg-transparent md:py-0 md:flex-row md:gap-12 font-nunito text-sm font-semibold"
        >
        <ul>
          <li className="group relative cursor-pointer">
            <a className="borderef" onClick={() => handleClick("home")}>
              HOME
            </a>
          </li>
          <li className="group relative cursor-pointer">
            <a className="borderef" onClick={() => handleClick("us")}>
              WHO WE ARE
            </a>
          </li>
          <li className="group relative cursor-pointer">
            <a className="borderef" onClick={() => handleClick("route")}>
              HOW WE DO IT
            </a>
          </li>
          <li className="group relative cursor-pointer">
            <a className="borderef" onClick={() => handleClick("contact")}>
              CONTACT US
            </a>
          </li>
        </ul>
        </Transition>
      </nav>
      <div className="mx-6 md:mx-0 md:mt-48 md:w-4/6">
        <h1 className="my-12 text-4xl md:my-8 md:text-6xl">
          Brandan's Retail Courier Services LLC
        </h1>
        <p className="font-nunito text-xl font-semibold">
          Is here to provide Fast and Reliable Courier Services at Your
          Doorstep. "Delivering Packages Safely and On Time, Every Time"
        </p>
        <div className="my-12 flex justify-center md:block">
          <button
            onClick={handleGetQuote}
            className="group relative self-center rounded-lg bg-white px-8 py-3 text-lg font-semibold text-black hover:text-black focus:outline-none"
          >
            <h1 className="borderef font-figtree font-semibold">
              Get a Quote
            </h1>
          </button>
        </div>
      </div>
    </header>
  );
}
