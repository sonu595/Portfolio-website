import React from 'react';
import { motion } from 'framer-motion';
import video from '../assets/video2.mp4';

// Each word animates up one by one
const wordVariant = {
  hidden: { y: 80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const LINES = [
  { text: ["I'm a", "FULL-STACK"],  justify: "justify-center md:justify-start" },
  { text: ["DEVELOPER &"],          justify: "justify-end" },
  { text: ["SOFTWARE"],             justify: "justify-start" },
  { text: ["ENGINEER"],             justify: "justify-end" },
];

const Home = () => (
  <div className="h-screen flex justify-center items-center text-white relative">
    {/* Background video */}
    <video
      autoPlay loop muted playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src={video} type="video/mp4" />
    </video>

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40 z-10" />

    {/* Text */}
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      className="relative z-20 pt-20 md:pt-30 px-4 w-full max-w-7xl mx-auto"
    >
      {LINES.map((line, i) => (
        <div key={i} className={`flex flex-wrap ${line.justify}`}>
          {line.text.map((word) => (
            <motion.h1
              key={word}
              variants={wordVariant}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl hover-text cursor-none"
            >
              {word}
            </motion.h1>
          ))}
        </div>
      ))}
    </motion.div>
  </div>
);

export default Home;