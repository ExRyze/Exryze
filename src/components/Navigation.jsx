import React from 'react';
import exryze from './../assets/exryze.png';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50 bg-opacity-30 backdrop-blur-md py-4 flex items-center justify-between lg:px-20 md:px-16 px-8">
      <div className="w-10" data-aos="fade-right">
        <img src={exryze} alt="Exryze logo" />
      </div>
      
      <div className="space-x-6 text-gray-300 text-lg">
        <a href="#Profile" className="hover:text-white transition duration-200" data-aos="fade-left" data-aos-delay="0">Profile</a>
        <a href="#About" className="hover:text-white transition duration-200" data-aos="fade-left" data-aos-delay="50">About</a>
        <a href="#Projects" className="hover:text-white transition duration-200" data-aos="fade-left" data-aos-delay="100">Projects</a>
        <a href="#Contact" className="hover:text-white transition duration-200" data-aos="fade-left" data-aos-delay="150">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;