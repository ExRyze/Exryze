import React from 'react';
import profile from './../assets/profile2.png'
import Light from './../components/Light'

const About = () => {
  return (
    <section id='About' className="relative bg-black h-fit lg:min-h-screen flex flex-row-reverse items-center lg:items-start justify-around text-white">
      <div className='w-0 md:w-1/4 relative invisible md:visible'>
        <Light />
        <img src={profile} alt="Profile image 2" className='opacity-75 rounded-b-full' data-aos="fade-up"  data-aos-delay="1000" />
      </div>
      <div className="relative text-center md:text-left w-full md:w-3/5 pt-10">
        <div className='pb-4'>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight pb-4 border-b-2 border-sky-500 w-fit mx-auto md:mx-0" data-aos="fade-left">
            About Me
          </h2>
          <p className="text-md sm:text-lg text-gray-400 mt-2 font-light tracking-wide" data-aos="fade-left" data-aos-delay="100">vaisyagovinandas@gmail.com</p>
        </div>
				<div className='text-md sm:text-lg text-gray-400 tracking-wide w-4/5 md:mx-0 mx-auto'>
					<p className='pb-4' data-aos="fade-left" data-aos-delay="350">
						I am a passionate Programmer with a strong focus on building sustainable and scalable systems.
						I specialize in backend development using Laravel integration, but I also enjoy trying new experiences with other technologies that I think can add value to the systems being developed.
						Technologies that I have explored: Web Development, Flutter, Machine Learning, Robotics, and IoT
					</p>
					<div className='text-white text-center font-bold'>
						<p className='mb-2' data-aos="fade-up" data-aos-delay="500">
							"Step by step, we rise carrying hopes, dreams, and memories not just our own. To rise is not to forget the pain, but to walk through it with purpose."
						</p>
						<p className='text-lg sm:text-xl' data-aos="fade-up" data-aos-delay="600">
							<span className='text-sky-500 mr-4'>===</span>
							ExRyze
							<span className='text-sky-500 ml-4'>===</span>
						</p>
					</div>
				</div>
			</div>
    </section>
  );
};

export default About;