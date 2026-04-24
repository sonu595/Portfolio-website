import React from 'react'
import {motion} from 'framer-motion'
import SlideButton from '../../hooks/Button'
import resume from '../../assets/Sonu_Singh_Resume.pdf'

const About2 = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto w-full"
    >
      {/* Title */}
      <h1 className="italic font-[Playfair_Display] text-5xl sm:text-4xl text-center mb-4">
        the Resume
      </h1>

      {/* Bio text */}
      <p className="text-center text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed md:leading-loose text-gray-300 font-light px-2">
        I have been working for the past
        <span className="text-white font-bold mx-1">1+ years</span>
        with
        <span className="text-white font-bold mx-1">Java.</span>
        I've been writing and debugging code and connecting RESTful APIs using
        <span className="text-white font-bold mx-1">Springboot, React and PostgreSQL</span>
        for a couple of months, and currently I am working on a production ready web app.
      </p>

      <div className="flex flex-col mt-4 sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <SlideButton href={resume} label="Go to resume →"/>
      </div>
    </motion.div>
  </div>
  )
}

export default About2