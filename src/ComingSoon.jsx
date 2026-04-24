import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' }
})

const ComingSoon = () => {
  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden'>

      <div className='absolute inset-0 pointer-events-none'
        style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
      />

      {/* Vertical line */}
      <motion.div
        className='w-px bg-white/20 mb-10'
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        style={{ height: 80, transformOrigin: 'top' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Label */}
      <motion.p
        className='text-[11px] tracking-[0.3em] uppercase text-white/40 mb-5'
        {...fadeUp(0.3)}
      >
        Sonu Singh — Portfolio
      </motion.p>

      {/* Title */}
      <motion.h1
        className='font-[Playfair_Display] italic font-normal leading-none tracking-tight text-white mb-3'
        style={{ fontSize: 'clamp(48px, 10vw, 96px)' }}
        {...fadeUp(0.5)}
      >
        Coming Soon
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className='font-light text-white/50 tracking-wider mb-14 text-center'
        style={{ fontSize: 'clamp(13px, 2vw, 15px)' }}
        {...fadeUp(0.7)}
      >
        Something crezzyyyy just wait.
      </motion.p>

      {/* Footer */}
      <motion.p
        className='text-[11px] tracking-[0.2em] uppercase text-white/20 mt-10'
        {...fadeUp(0.9)}
      >
        © 2026 Sonu Singh
      </motion.p>

    </div>
  )
}

export default ComingSoon