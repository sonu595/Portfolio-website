import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = ["Work", "About", "Contact", "Blog"];

// Desktop: slide-up animation on hover
const DesktopLink = ({ text, index, linkRefs }) => (
  <div className="animated-link-wrapper group">
    <span
      ref={(el) => (linkRefs.current[index] = el)}
      className="relative overflow-hidden inline-block cursor-none hover-text"
      style={{ lineHeight: '1.2' }}
    >
      <span className="inline-block transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
        {text}
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out translate-y-full group-hover:translate-y-0 text-white/80">
        {text}
      </span>
    </span>
  </div>
);

// Mobile: staggered fade-in on menu open
const MobileLink = ({ text, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.07 }}
    onClick={onClick}
    className="w-full text-center py-4 text-2xl font-light tracking-widest text-white border-b border-white/10 active:opacity-60 transition-opacity"
  >
    {text}
  </motion.div>
);

const Nav = ({ isHoveringRef }) => {
  const linkRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center text-white z-50 px-4 sm:px-8">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-none py-4 hover-text">
          Sonu Singh
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 lg:gap-16 py-6 px-3 text-xl lg:text-2xl items-center">
          {NAV_LINKS.slice(0, 3).map((link, i) => (
            <DesktopLink key={link} text={link} index={i} linkRefs={linkRefs} />
          ))}
          <span className="text-gray-500 text-3xl">|</span>
          <DesktopLink text="Blog" index={3} linkRefs={linkRefs} />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-3xl text-white py-4 focus:outline-none"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl text-white focus:outline-none"
            >
              ✕
            </button>

            <span className="text-white/20 text-sm tracking-widest uppercase mb-10">
              Sonu Singh
            </span>

            <div className="flex flex-col items-center w-full max-w-xs">
              {NAV_LINKS.map((link, i) => (
                <MobileLink
                  key={link}
                  text={link}
                  index={i}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;