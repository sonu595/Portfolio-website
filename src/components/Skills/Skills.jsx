import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git', level: 80 },
    { name: 'SQL', level: 70 },
  ];

  return (
    <div ref={ref} className='bg-black min-h-screen text-white relative overflow-hidden py-20'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.h2
          className='text-4xl md:text-6xl font-sansHero font-bold text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Skillsou can open skills.html directly in a browser to view it, or integrate the structure into your React co
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className='bg-gray-900 p-6 rounded-lg'
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl font-semibold'>{skill.name}</h3>
                <span className='text-gray-400'>{skill.level}%</span>
              </div>
              <div className='w-full bg-gray-700 rounded-full h-2'>
                <motion.div
                  className='bg-white h-2 rounded-full'
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;