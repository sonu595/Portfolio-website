import React, { useState, useEffect, useRef } from "react";
import contactimg from "../../assets/contactimage.jpg";
import github from "../../assets/github.svg";
import x from "../../assets/twitter-original.svg";
import whatsapp from "../../assets/whatsapp.svg";
import insta from "../../assets/instagram.svg";
import { motion } from "framer-motion";

const iconVariants = {
  top: {
    hidden: { opacity: 0, x: "-50%", y: 0, scale: 0.8 },
    visible: { opacity: 1, x: "-50%", y: -56, scale: 1 },
  },
  right: {
    hidden: { opacity: 0, x: 0, y: "-50%", scale: 0.8 },
    visible: { opacity: 1, x: 56, y: "-50%", scale: 1 },
  },
  bottom: {
    hidden: { opacity: 0, x: "-50%", y: 0, scale: 0.8 },
    visible: { opacity: 1, x: "-50%", y: 56, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: 0, y: "-50%", scale: 0.8 },
    visible: { opacity: 1, x: -56, y: "-50%", scale: 1 },
  },
};

const Home7 = () => {
  const text = "SAY HELLO ! ";
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="w-full overflow-hidden pt-16 sm:pt-20">
        <div className="flex animate-marquee w-max text-white font-bold gap-8 text-6xl sm:text-7xl md:text-9xl lg:text-[10rem]">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="whitespace-nowrap">
              {text}
            </span>
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={`dup-${i}`} className="whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0 my-10 sm:my-10 md:my-10 lg:my-10 px-6 py-8 sm:px-10 sm:py-15 md:px-16 md:py-20 lg:px-20 lg:py-30">
        <div className="w-full md:w-1/2 text-white">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Hey there.
          </p>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4 sm:mt-6">
            Got an idea, a project, or a problem to solve? I'm always open to
            building, collaborating, and exploring new opportunities.
          </p>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4">
            I enjoy turning ideas into real-world applications and continuously
            improving my skills along the way.
          </p>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6">
            Drop a message — let's make something real.
          </p>
        </div>

<div className="w-full md:w-1/2 flex justify-center  relative overflow-visible">
  <div
    ref={imageRef}
    className="relative group w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-60 sm:h-64 md:h-72 lg:h-80 xl:h-96"
  >
    {/* ── RING ── */}
    <div
      className="absolute top-1/2 left-1/2 rounded-full border border-white pointer-events-none"
      style={{
        width: "140%",
        height: "140%",
        transform: "translate(-50%, -50%) scale(0)",
        opacity: 0,
        animation: isVisible
          ? "ringExpand 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s forwards"
          : "none",
        zIndex: 5,
      }}
    />

    {/* ── PROFILE IMAGE ── */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full"
    >
      <img
        src={contactimg}
        alt="Contact"
        className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all relative z-10"
      />
    </motion.div>

    {/* ── GITHUB — Top ── */}
    <motion.a
      href="https://github.com/sonu595"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHoveredIcon("github")}
      onMouseLeave={() => setHoveredIcon(null)}
      className="absolute left-1/2 z-20 flex flex-col items-center gap-1"
      style={{ top: "-7%", transform: "translate(-50%, -50%)" }}
      variants={iconVariants.top}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      {hoveredIcon === "github" && (
        <span className="text-xs text-gray-400 whitespace-nowrap mb-1">GitHub</span>
      )}
      <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
        <img className="md:h-10 md:w-10 h-6 w-6" src={github} alt="GitHub" />
      </div>
    </motion.a>

    {/* ── INSTAGRAM — Right ── */}
    <motion.a
      href="https://www.instagram.com/code___ez?igsh=MWhmN2xtZDhnbGlnNA=="
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHoveredIcon("instagram")}
      onMouseLeave={() => setHoveredIcon(null)}
      className="absolute top-1/2 z-20 flex flex-col items-center gap-1"
      style={{ right: "-7%", transform: "translate(50%, -50%)" }}
      variants={iconVariants.right}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      {hoveredIcon === "instagram" && (
        <span className="text-xs text-gray-400 whitespace-nowrap">Instagram</span>
      )}
      <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
        <img className="md:h-10 md:w-10 h-6 w-6" src={insta} alt="Instagram" />
      </div>
    </motion.a>

    {/* ── WHATSAPP — Bottom ── */}
    <motion.a
      href="https://wa.me/8279278341"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHoveredIcon("whatsapp")}
      onMouseLeave={() => setHoveredIcon(null)}
      className="absolute left-1/2 z-20 flex flex-col items-center gap-1"
      style={{ bottom: "-7%", transform: "translate(-50%, 50%)" }}
      variants={iconVariants.bottom}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
        <img className="md:h-10 md:w-10 h-6 w-6" src={whatsapp} alt="WhatsApp" />
      </div>
      {hoveredIcon === "whatsapp" && (
        <span className="text-xs text-gray-400 whitespace-nowrap mt-1">WhatsApp</span>
      )}
    </motion.a>

    {/* ── X / TWITTER — Left ── */}
    <motion.a
      href="https://x.com/sonu2016841"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHoveredIcon("twitter")}
      onMouseLeave={() => setHoveredIcon(null)}
      className="absolute top-1/2 z-20 flex flex-col items-center gap-1"
      style={{ left: "-7%", transform: "translate(-50%, -50%)" }}
      variants={iconVariants.left}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay: 0.65, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      {hoveredIcon === "twitter" && (
        <span className="text-xs text-gray-400 whitespace-nowrap">Twitter / X</span>
      )}
      <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
        <img className="md:h-10 md:w-10 h-6 w-6" src={x} alt="X" />
      </div>
    </motion.a>

  </div>
</div>
      </div>
    </div>
  );
};

export default Home7;