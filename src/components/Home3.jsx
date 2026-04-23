import React from 'react'
import { motion } from 'framer-motion'

const Home3 = () => {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24'>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className='max-w-5xl mx-auto w-full'
      >
        <p className='text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed md:leading-loose text-gray-300 font-light px-2'>
          I have been working for the past 
          <span className='text-white font-bold mx-1'> +10 years </span> 
          with 
          <span className='text-white font-bold mx-1'> Javascript/Typescript</span>.
          I've been writing/refactoring code and connecting RESTful APIs using 
          <span className='text-white font-bold mx-1'> Angular, React and Vue</span> 
          for a couple of years but I also worked with different stacks in the past. 
          I can help/guide your developers with best practices as well.
        </p>

        <div className='flex justify-center mt-10 sm:mt-12 mb-10 sm:mb-12'>
          <div className='w-20 h-0.5 bg-white'></div>
        </div>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6'>
          
        <button className='group relative px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold overflow-hidden border-2 border-white rounded-full bg-transparent text-white transition-all duration-300 hover:border-white'>
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-8">
            Know more →
          </span>
          <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
            Know more →
          </span>
        </button>

          <button className='group relative px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold overflow-hidden border-2 border-white rounded-full bg-transparent text-white transition-all duration-300 hover:border-white'>
            <span className="inline-block transition-all duration-300 ease-out group-hover:-translate-y-full">
              Contact
            </span>
            
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out translate-y-full group-hover:translate-y-0">
              Contact
            </span>
          </button>

        </div>
      </motion.div>
    </div>
  )
}

export default Home3