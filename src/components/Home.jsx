import React from 'react';
import { motion } from 'framer-motion';
import video from '../assets/video2.mp4';

const Home = ({ isHoveringRef }) => {
  
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className='h-screen flex justify-center text-white items-center relative'>
      <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover z-0'>
        <source src={video} type='video/mp4' />
      </video>
      <div className='absolute top-0 left-0 w-full h-full bg-black/40 -z-10'></div>
      
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className='relative z-20 pt-20 md:pt-30 px-4 w-full max-w-7xl mx-auto'
      >
        <div className='flex flex-wrap items-baseline justify-center md:justify-start'>
          <motion.h1 variants={item} className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl hover-text cursor-pointer'>I'm a</motion.h1>
          <motion.h1 variants={item} className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl  hover-text cursor-pointer'>FULL-STACK</motion.h1>
        </div>
        <div className='flex justify-end'>
          <motion.h1 variants={item} className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl  flex justify-end hover-text cursor-pointer'>DEVELOPER &</motion.h1>
        </div>
        <div className='flex items-start'>
          <motion.h1 variants={item} className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl  hover-text cursor-pointer'>SOFTWARE</motion.h1>
        </div>
        <div className='flex justify-end'>
          <motion.h1 variants={item} className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl hover-text cursor-pointer'>ENGINEER</motion.h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;