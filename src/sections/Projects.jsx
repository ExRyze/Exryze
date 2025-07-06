import React from 'react';
import project from './../assets/project1.jpg'

const projectsData = [
  {
    id: 1,
    title: 'Cre:HA Project',
    description: 'Project based learning at Bali State Polytechnic in the semester 3. Developed a custom Content Management System (CMS) for Cre:HA Project Community, focusing on article and page management.',
    image: project,
    link: 'https://crehaproject.com',
  },
  {
    id: 2,
    title: 'ECOMMERCE STORE',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: project,
    link: '#',
  },
  {
    id: 3,
    title: 'PORTFOLIO V.1',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    image: project,
    link: '#',
  },
];

const Projects = () => {
  const currentProject = projectsData[0];
  const leftProject = projectsData[1];
  const rightProject = projectsData[2];

  return (
    <section id="projects" className="relative bg-black min-h-screen flex flex-col items-center justify-center text-white py-12 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight pb-4 border-b-2 border-sky-500 text-center">
        Projects
      </h2>

      <div className="relative w-full max-w-7xl flex flex-col items-center justify-center space-y-8 z-10">
        <div className="relative w-full flex justify-center items-center h-80 sm:h-96 md:h-[400px] lg:h-[500px] mt-20">
          <div className="absolute left-1/2 transform -translate-x-[120%] -translate-y-1/2 top-1/2 w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] lg:w-[400px] lg:h-[250px] bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out filter grayscale blur-sm opacity-70">
            <img src={leftProject.image} alt={leftProject.title} className="w-full h-full object-cover filter grayscale opacity-80" />
          </div>

          <div className="relative z-20 h-[300px] sm:h-[400px] lg:h-[450px] aspect-video bg-gray-700 rounded-lg shadow-2xl overflow-hidden transition-all duration-500 ease-in-out">
            <img src={currentProject.image} alt={currentProject.title} className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-700 to-transparent opacity-50 flex gap-4 items-end p-4">
              <div className='flex flex-col gap-2'>
                <h3 className="text-white text-2xl font-bold">{currentProject.title}</h3>
                <p className="text-gray-400 text-lg sm:text-xl leading-relaxed line-clamp-2">
                  {currentProject.description}
                </p>
              </div>
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-300 border border-gray-700 hover:border-white"
                >
                  View
                </a>
            </div>
          </div>

          <div className="absolute right-1/2 transform translate-x-[120%] -translate-y-1/2 top-1/2 w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] lg:w-[400px] lg:h-[250px] bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out filter grayscale blur-sm opacity-70">
            <img src={rightProject.image} alt={rightProject.title} className="w-full h-full object-cover filter grayscale opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;