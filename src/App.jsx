import React from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative w-full h-full scroll-smooth box-border">
      <Navigation />

      <main className='*:lg:px-20 *:lg:py-16 *:md:px-16 *:md:py-12 *:px-8 *:py-8 w-full overflow-hidden animate-ease-in-out'>
        <Hero />
        <About />
        <Projects />
        {/* <Skills /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;