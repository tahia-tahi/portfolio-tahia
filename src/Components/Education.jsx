import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="bg-base-100 px-4 sm:px-6 md:px-12 py-16 text-secondary">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-widest">
          <span className="bg-primary p-1">Education</span>
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">My Academic Journey</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        {/* Icon on Left */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-primary flex items-center justify-center shadow-lg max-w-full">
            <FaGraduationCap size={110} className="text-secondary" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-2/3 space-y-6 text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Bachelor of Business Administration (BBA)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
            <div>
              <p className="font-semibold">University:</p>
              <p>University of Chittagong</p>
            </div>
            <div>
              <p className="font-semibold">Major:</p>
              <p>Management</p>
            </div>
            <div>
              <p className="font-semibold">Degree:</p>
              <p>Bachelor of Business Administration</p>
            </div>
            <div>
              <p className="font-semibold">Session:</p>
              <p>2018–2024</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
