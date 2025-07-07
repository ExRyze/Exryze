import React from 'react';
import profile from './../assets/profile.png'
import Light from './../components/Light'
import SocialIcons from './../components/SocialIcons'

const Hero = () => {
  return (
    <section id='Profile' className="relative bg-black min-h-screen flex flex-col md:flex-row items-center justify-between text-white lg:gap-16 md:gap-12 gap-8 overflow-visible">
      <div className='w-full md:w-2/6 h-fit relative flex justify-center overflow-visible'>
        <Light />
        <img src={profile} alt="Profile image" className='opacity-75 rounded-b-full' data-aos="fade-up"/>
      </div>
      <div className="relative text-left w-full md:w-4/6 h-fit">
        <div className='pb-10'>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight" data-aos="fade-left" data-aos-delay="100">
            <span className='font-normal text-6xl sm:text-7xl lg:text-7xl'>VAISYA</span><br />
            GOVINANDA
          </h1>
          <p className="text-md sm:text-lg uppercase text-gray-400 mt-2 font-light tracking-wide" data-aos="fade-left" data-aos-delay="350">ExRyze</p>
        </div>
        <div className='flex flex-col gap-4' data-aos="fade-left" data-aos-delay="600">
          <p className="text-2xl sm:text-3xl lg:text-4xl uppercase text-gray-400 mt-2 font-light tracking-widest">Fullstack Developer</p>
          <SocialIcons dataAos={"fade-left"} dataAosDelay={700} />
        </div>
      </div>
    </section>
  );
};

export default Hero;