import React from 'react';
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex flex-row space-x-4">
      <a 
        href="https://wa.me/089604926399" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-white transition duration-200 transform hover:scale-110"
      >
        <FaWhatsapp size={22} />
      </a>
      <a 
        href="https://www.instagram.com/exryze/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-white transition duration-200 transform hover:scale-110"
      >
        <FaInstagram size={22} />
      </a>
      <a 
        href="https://github.com/ExRyze" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-white transition duration-200 transform hover:scale-110"
      >
        <FaGithub size={22} />
      </a>
      <a 
        href="https://www.linkedin.com/in/vaisya-govinanda-s/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-white transition duration-200 transform hover:scale-110"
      >
        <FaLinkedin size={22} />
      </a>
    </div>
  );
};

export default SocialIcons;