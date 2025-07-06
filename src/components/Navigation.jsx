import React from 'react';
import exryze from './../assets/exryze.png';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50 bg-opacity-30 backdrop-blur-md py-4 flex items-center justify-between lg:px-20 md:px-16 px-8">
      <div className="w-10">
        <img src={exryze} alt="Exryze logo" />
      </div>
      
      <div className="space-x-6 text-gray-300 text-lg">
        <a href="#profile" className="hover:text-white transition duration-200">Profile</a>
        <a href="#about" className="hover:text-white transition duration-200">About</a>
        <a href="#projects" className="hover:text-white transition duration-200">Projects</a>
        <a href="#contact" className="hover:text-white transition duration-200">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;