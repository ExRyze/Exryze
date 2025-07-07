import React from 'react';
import SocialIcons from './../components/SocialIcons';

function Footer() {
  return (
    <div className='flex flex-col gap-10 bg-black text-white w-full h-fit'>
			<div className='flex justify-between md:items-end flex-col md:flex-row gap-4'>
				<div data-aos="fade-left" >
					<h3 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight pb-4">
						EXRYZE
					</h3>
					<p className='text-sky-500 font-bold border-t-2 border-sky-500 pt-2'>
						Rise with every step. Carry the dream.
					</p>
				</div>
				<SocialIcons dataAos={"fade-right"} dataAosDelay={0} reverse />
			</div>
			<p className='text-center text-gray-400 border-t-2 border-gray-300 pt-4' data-aos="zoom-in" data-aos-delay="100" >
				Made by <a href="http://" className='font-bold hover:underline' >ExRyze</a>
			</p>
    </div>
  );
}

export default Footer;