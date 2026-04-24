import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ FIX 1: framer-motion/client nahi, react-router-dom

const NAV_LINKS = [
  { label: "Work",    to: "/work"    },
  { label: "About",   to: "/about"   },
  { label: "Contact", to: "/contact" }, // ✅ FIX 2: "/Contact" → "/contact"
  { label: "Blog",    to: "#"        },
];

// ✅ FIX 3: prop name "text" → "label", aur "to" prop add kiya
const DesktopLink = ({ label, to, index, linkRefs }) => (
  <Link to={to} className="animated-link-wrapper group" style={{ textDecoration: 'none', color: 'inherit' }}>
    <span
      ref={(el) => (linkRefs.current[index] = el)}
      className="relative overflow-hidden inline-block cursor-none hover-text"
      style={{ lineHeight: '1.2' }}
    >
      <span className="inline-block transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
        {label}
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out translate-y-full group-hover:translate-y-0 text-white/80">
        {label}
      </span>
    </span>
  </Link>
);

// ✅ FIX 3 cont: "text" → "label", "to" prop add kiya
const MobileLink = ({ label, to, index, onClick }) => (
  <Link to={to} onClick={onClick} className="w-full" style={{ textDecoration: 'none' }}>
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.07 }}
      className="w-full text-center py-4 text-2xl font-light tracking-widest text-white border-b border-white/10 active:opacity-60 transition-opacity"
    >
      {label}
    </motion.div>
  </Link>
);

const Nav = ({ isHoveringRef }) => {
  const linkRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 w-full flex justify-between items-center text-white z-50 px-4 sm:px-8">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-none py-4 hover-text">
            Sonu Singh
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 lg:gap-16 py-6 px-3 text-xl lg:text-2xl items-center">
          {/* ✅ FIX 4: link object se .label aur .to properly pass karo, key bhi link.label */}
          {NAV_LINKS.slice(0, 3).map((link, i) => (
            <DesktopLink key={link.label} label={link.label} to={link.to} index={i} linkRefs={linkRefs} />
          ))}
          <span className="text-gray-500 text-3xl">|</span>
          <DesktopLink label="Blog" to="#" index={3} linkRefs={linkRefs} />
        </div>

        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl text-white py-4 focus:outline-none"
            aria-label="Open menu"
          >
            ☰
          </button>
        )}
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-60 flex flex-col items-center justify-center md:hidden"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl text-white focus:outline-none"
            >
              ✕
            </button>

            <div className="flex flex-col items-center w-full max-w-xs">
              {/* ✅ FIX 4: yahan bhi same fix */}
              {NAV_LINKS.map((link, i) => (
                <MobileLink
                  key={link.label}
                  label={link.label}
                  to={link.to}
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