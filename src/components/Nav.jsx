// Nav.jsx
import React, { useRef } from 'react';

const Nav = ({ isHoveringRef }) => {
  const linkRefs = useRef([]);
  // No need for duplicate cursor logic here

  const AnimatedLink = ({ text, index }) => (
    <div
      ref={el => linkRefs.current[index] = el}
      className="relative overflow-hidden cursor-pointer group px-1 py-1 animated-link-wrapper hover-text"
    >
      <span className="inline-block transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
        {text}
      </span>
      <span className="absolute top-0 left-0 inline-block transition-all duration-300 ease-out translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-white/70 group-hover:text-white/85">
        {text}
      </span>
    </div>
  );

  return (
    <div className='absolute top-0 left-0 w-full flex text-white justify-between items-center z-50 px-4 sm:px-8'>
      <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer py-4'>Sonu Singh</span>

      <div className='hidden md:flex gap-6 lg:gap-16 py-6 px-3 text-xl lg:text-2xl items-center'>
        <AnimatedLink text="Work" index={0} />
        <AnimatedLink text="About" index={1} />
        <AnimatedLink text="Contact" index={2} />
        <h2 className="text-gray-500 text-3xl">|</h2>
        <AnimatedLink text="Blog" index={3} />
      </div>

      <div className='md:hidden'>
        <button className='text-3xl'>☰</button>
      </div>
    </div>
  );
};

export default Nav;