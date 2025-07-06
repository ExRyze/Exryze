import React from 'react';

const Light = ({ className = '' }) => {
  return (
    <div
      className={`
        absolute top-0 left-1/2 transform -translate-x-1/2 z-10
        w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-sky-500
        bg-gradient-to-br from-gray-700 via-gray-900 to-transparent 
        opacity-25 rounded-full 
        filter blur-3xl 
        pointer-events-none 
        ${className}
      `}
    ></div>
  );
};

export default Light;