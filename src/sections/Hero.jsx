import React from 'react';
import profile from './../assets/profile.png'
import Light from './../components/Light'
import SocialIcons from './../components/SocialIcons'

const Hero = () => {
  return (
    <section id='profile' className="relative bg-black min-h-screen flex items-center justify-around text-white">
      <div className='w-1/4 relative'>
        <Light />
        <img src={profile} alt="Profile image" className='opacity-75 rounded-b-full' />
      </div>
      <div className="relative text-left w-3/5">
        <div className='pb-10'>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
            <span className='font-normal text-6xl sm:text-7xl lg:text-7xl'>VAISYA</span><br />
            GOVINANDA
          </h1>
          <p className="text-md sm:text-lg uppercase text-gray-400 mt-2 font-light tracking-wide">ExRyze</p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className="text-2xl sm:text-3xl lg:text-4xl uppercase text-gray-400 mt-2 font-light tracking-widest">Fullstack Developer</p>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default Hero;