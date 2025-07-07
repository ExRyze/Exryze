import React from 'react';
import { FaBookOpen, FaCameraRetro, FaPencilRuler, FaPlane } from 'react-icons/fa'; // Contoh ikon untuk Hobbies
// Anda mungkin perlu mencari atau membuat SVG untuk ikon Adobe jika Anda ingin persis

// Data Dummy
const softwareSkills = [
  { name: 'Photoshop', icon: null },
  { name: 'AI', icon: null },
  { name: 'Illustrator', icon: null },
  { name: 'InDesign', icon: null },
  { name: 'Premiere', icon: null },
  { name: 'After Effect', icon: null },
];

const whatCanIDo = [
  'Logo - Stationery - Branding',
  'Newsletter - Packaging - Catalog',
  'Strategy - Advertisement',
];

const Skills = () => {
  return (
    <section id="Skills" className="relative min-h-screen bg-black">
      {/* Konten Utama Resume */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-20 md:mt-32">
        {/* Kolom Kiri */}
        <div className="space-y-12">
          {/* Software Skills */}
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-2">SOFTWARE SKILLS</h3>
            <div className="space-y-4">
              {softwareSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  {/* Placeholder ikon Adobe */}
                  <div className="w-5 h-5 bg-gray-500 rounded-sm flex-shrink-0"></div> 
                  <span className="flex-grow">{skill.name}</span>
                  {/* Progress bar placeholder */}
                  <div className="relative w-24 h-1 bg-gray-700 rounded-full">
                    <div className="absolute left-0 top-0 h-1 bg-teal-400 rounded-full w-[80%]"></div> {/* Sesuaikan width untuk level */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-teal-400 rounded-full border border-gray-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="lg:col-span-1 space-y-12">
          {/* What Can I Do */}
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-2">WHAT CAN I DO ?</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {whatCanIDo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;