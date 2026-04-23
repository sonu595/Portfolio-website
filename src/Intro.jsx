import { motion } from "framer-motion";
import { useEffect } from "react";

const Intro = ({ onComplete }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      {/* Animated background particles effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-700" />
      </motion.div>
      
      {/* Main Text with scale effect */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: [0.34, 1.56, 0.64, 1],
          opacity: { duration: 0.5, delay: 0.2 }
        }}
        className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold z-10 tracking-tighter text-center px-4"
      >
        SONU SINGH
      </motion.h1>

      {/* Underline animation */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "80%", opacity: 1 }}
        exit={{ width: 0, opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        className="absolute bottom-1/3 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
      />

      {/* Curtain Reveal - Most Smooth */}
      <motion.div
        className="absolute inset-0 bg-black z-20 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          delay: 1.4,
          duration: 0.8,
          ease: [0.77, 0, 0.18, 1],
        }}
      />

    </motion.div>
  );
};

export default Intro;