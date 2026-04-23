import React from 'react'
import { motion } from 'framer-motion'

// Reusable button with slide-up text animation via Framer variants
const SlideButton = ({ label }) => (
  <motion.div
    whileHover="hover"
    initial="rest"
    style={{
      position: 'relative',
      borderRadius: '9999px',
      border: '2px solid white',
      overflow: 'hidden',
      cursor: 'pointer',
      padding: '12px 40px',
      fontSize: '1.125rem',
      fontWeight: 600,
      color: 'white',
      minWidth: '160px',
      textAlign: 'center',
      userSelect: 'none',
    }}
  >
    {/* Visible text — slides out upward */}
    <motion.span
      style={{ display: 'block' }}
      variants={{ rest: { y: 0 }, hover: { y: '-200%' } }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      {label}
    </motion.span>

    {/* Hidden text — slides in from below */}
    <motion.span
      style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      variants={{ rest: { y: '200%' }, hover: { y: 0 } }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      {label}
    </motion.span>
  </motion.div>
);

const Home3 = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto w-full"
    >
      {/* Bio text */}
      <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed md:leading-loose text-gray-300 font-light px-2">
        I have been working for the past
        <span className="text-white font-bold mx-1">+10 years</span>
        with
        <span className="text-white font-bold mx-1">Javascript/Typescript</span>.
        I've been writing/refactoring code and connecting RESTful APIs using
        <span className="text-white font-bold mx-1">Angular, React and Vue</span>
        for a couple of years but I also worked with different stacks in the past.
        I can help/guide your developers with best practices as well.
      </p>

      {/* Divider */}
      <div className="flex justify-center my-10 sm:my-12">
        <div className="w-20 h-px bg-white" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <SlideButton label="Know more →" />
        <SlideButton label="Contact" />
      </div>
    </motion.div>
  </div>
);

export default Home3;