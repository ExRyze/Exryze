import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import Light from './../components/Light'

const Contact = () => {
  return (
    <section id="Contact" className="relative bg-black h-fit lg:min-h-screen flex items-center justify-center text-white">
      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-20 items-start justify-center z-10 mt-12 md:mt-0">
        <div className="flex-1 flex flex-col items-start max-w-lg">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight pb-4 border-b-2 border-sky-500 text-center mb-10" data-aos="fade-left">
            Contact
          </h2>
          <p className="text-gray-400 text-md sm:text-lg leading-relaxed mb-10" data-aos="fade-left" data-aos-delay="150">
            Jika Anda memiliki pertanyaan, masukan, atau ingin berkolaborasi, jangan ragu untuk menghubungi saya.
            Saya siap membantu Anda dengan sepenuh hati. Silakan gunakan informasi di bawah ini untuk terhubung dengan saya.
          </p>

          <div className="space-y-6 text-gray-300 text-lg">
            <div data-aos="fade-left" data-aos-delay="300">
              <h3 className="font-bold text-white mb-1">Address</h3>
              <p>Perum. Dukuh Sari, Sesetan, Denpasar Selatan</p>
            </div>
            <div data-aos="fade-left" data-aos-delay="400">
              <h3 className="font-bold text-white mb-1">Phone</h3>
              <a href='tel:+6289604926399' className='hover:underline hover:text-white transition-colors duration-200'>+62 896 0492 6399</a>
            </div>
            <div data-aos="fade-left" data-aos-delay="500">
              <h3 className="font-bold text-white mb-1">Email</h3>
              <p><a href="mailto:vaisyagovinandas@gmail.com" className="hover:text-white transition-colors duration-200 hover:underline">vaisyagovinandas@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="relative flex-1 w-full md:max-w-md bg-gray-900 rounded-xl p-8 shadow-xl" data-aos="fade-up" >
          <Light className='!-z-10' />
					<h3 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight pb-4 mb-4 border-b-[1px] border-sky-500" data-aos="fade-up" data-aos-delay="50">
						Contact Form
					</h3>
          <form className="space-y-4" action="mailto:vaisyagovinandas@gmail.com" method="POST" enctype="text/plain">
            <div data-aos="fade-up" data-aos-delay="100">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-4 bg-gray-950 text-gray-200 rounded-lg border border-gray-700 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300 placeholder-gray-500"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="150">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-4 bg-gray-950 text-gray-200 rounded-lg border border-gray-700 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300 placeholder-gray-500"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <input
                type="text"
                placeholder="Your subject"
                className="w-full p-4 bg-gray-950 text-gray-200 rounded-lg border border-gray-700 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300 placeholder-gray-500"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="250">
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-4 bg-gray-950 text-gray-200 rounded-lg border border-gray-700 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300 placeholder-gray-500 resize-y"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-gray-950 hover:bg-sky-500 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 border border-gray-700 hover:border-white hover:text-white" data-aos="fade-up" data-aos-delay="300"
            >
              <span>SEND MESSAGE</span>
              <FaPaperPlane size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;