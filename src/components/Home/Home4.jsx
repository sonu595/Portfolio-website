import React from 'react'
import { motion } from 'framer-motion'
import img from '../../assets/laptop.jpg'

const wordVariant = {
  hidden: { y: 80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
}

const LINES = [
  {
    text: ["Where"],
    justify: "justify-start",
    styles: "text-[8vw] md:text-[6vw] font-light font-serif",
  },
  {
    text: ["DEVELOPER &"],
    justify: "justify-end",
    styles: "text-[10vw] md:text-[8vw] font-bold font-sans",
  },
  {
    text: ["SOFTWARE"],
    justify: "justify-start",
    styles: "text-[9vw] md:text-[7vw] font-semibold font-mono",
  },
  {
    text: ["ENGINEER"],
    justify: "justify-end",
    styles: "text-[10vw] md:text-[8vw] font-bold font-sans",
  },
]

const Home4 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center text-white relative">

      {/* TEXT */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="relative z-20 pt-[10vh] px-4 w-full max-w-7xl mx-auto"
      >
        {LINES.map((line, i) => (
          <div
            key={i}
            className={`flex flex-wrap md:flex-nowrap ${line.justify} gap-x-3 md:gap-x-6`}
          >
            {line.text.map((word) => (
              <motion.h1
                key={word}
                variants={wordVariant}
                className={`${line.styles} text-white hover-text cursor-none leading-tight`}
              >
                {word}
              </motion.h1>
            ))}
          </div>
        ))}
      </motion.div>

      {/* IMAGE */}
      <div className="hidden md:block absolute right-0 top-0 w-[30%] h-full overflow-hidden">
        <motion.img
          src={img}
          alt="preview"
          className="w-full h-full object-cover object-top"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
      </div>

    </div>
  )
}

export default Home4