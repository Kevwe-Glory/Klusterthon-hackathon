import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaBars } from 'react-icons/fa';
import { Landingmage, Prescribe, Set, Track } from '../../asset/image';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="text-[#224AA0] p-4 md:p-10 flex justify-between items-center">
        <div>
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center">
          {/* Hamburger menu button for small screens */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black p-2 focus:outline-none"
          >
            <FaBars size={24} />
          </button>

          {/* Navigation links */}
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <div className="md:mr-5">
              <Link
                to="/professional/login"
                className="block md:inline text-black py-2 px-4 border border-gray-500 text-lg md:mb-2"
              >
                Login
              </Link>
            </div>
            <div>
              <Link
                to="/professional/register"
                className="block md:inline bg-[#224AA0] text-white py-2 px-4 rounded text-lg"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Body */}
      <div className="container mx-auto mt-6 p-8 text-center">
        {/* First div */}
        <div className="flex flex-col-reverse md:flex-row mb-8 items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 text-center md:text-left md:pr-4">
            <h2 className="text-4xl font-bold mb-4 text-[#224AA0]">Get prescribed medications with the help of our solution</h2>
            <p className="text-sm text-[#898989]">
              Get personalized prescribed medications by contacting health professionals and also set reminders to use your prescribed medications, all in just one solution!
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Landingmage} alt="Landing" className="w-full h-auto" />
          </div>
        </div>

        {/* Second div */}
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-9 pb-9 text-[#224AA0]">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2">16k+</h2>
            <p>Treated Patients</p>
          </div>
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2">2k+</h2>
            <p>Health Professionals</p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2">50k+</h2>
            <p>Reviews</p>
          </div>
        </div>

        {/* Third div */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#224AA0] p-4 rounded-md text-white flex flex-col items-center w-3/4">
            <img src={Prescribe} alt="Prescribe" className="mb-4 p-7" />
            <h2 className="text-xl font-semibold mb-2">Prescribe Medications</h2>
            <p>Prescribe Medications Get prescribed medications from our experienced health professionals, dedicated to ensuring your well-being.</p>
          </div>
          <div className="bg-[#224AA0] p-4 rounded-md text-white flex flex-col items-center w-3/4">
            <img src={Track} alt="Track" className="mb-4 p-7" />
            <h2 className="text-xl font-semibold mb-2">Track Medications</h2>
            <p>Track Medications Seamlessly monitor and manage your medications, fostering a proactive approach to well-being.</p>
          </div>
          <div className="bg-[#224AA0] p-4 rounded-md text-white flex flex-col items-center w-3/4">
            <img src={Set} alt="Set" className="mb-4 p-7" />
            <h2 className="text-xl font-semibold mb-2">Set Reminders</h2>
            <p>Never miss a dose with our personalized reminder feature. Lift up your medical adherence effortlessly by setting reminders.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='bg-[#224AA0] text-white mt-10 p-11'>
        <div className='pt-9 text-center'>
          <hr className="w-1/2 mx-auto my-9" />
          <p className='pt-9 text-bold'>All Rights Reserved</p>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-4 pt-7">
          <a href="/" className="text-white text-2xl"><FaLinkedin /></a>
          <a href="/" className="text-white text-2xl"><FaTwitter /></a>
          <a href="/" className="text-white text-2xl"><FaInstagram /></a>
        </div>
        <div className='flex justify-around'>
          <div>
            <h5 className='text-bold pb-3'>Company</h5>
            <p className='text-sm'>About Us</p>
            <p className='text-sm'>Team</p>
            <p className='text-sm'>Blog</p>
          </div>
          <div>
            <h5 className='text-bold pb-3'>Resources</h5>
            <p className='text-sm'>Prescription</p>
            <p className='text-sm'>Articles</p>
            <p className='text-sm'>Health Tips</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
