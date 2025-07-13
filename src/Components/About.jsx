import React from 'react';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-white px-4 sm:px-6 md:px-12 py-16 text-gray-800">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-primary text-xs sm:text-sm font-medium uppercase tracking-widest">
          <span className="bg-primary text-black px-2 py-1 rounded">About Me</span>
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">Know Me More</h2>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        {/* Left Text Content */}
        <motion.div
          className="md:w-2/3 space-y-4 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            I am <span className="border-b-4 border-primary inline-block">Tahia</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            I'm a designer and developer who finds joy in creating simple, clean, and user-focused websites that truly serve their purpose.
            I’m always eager to take on new projects and believe in working with dedication, clarity, and purpose.
            <br /><br />
            I enjoy staying focused on the task at hand and finishing my work with a strong, positive mindset.
            What I learn, I love to share — teaching others gives me joy.
            <br /><br />
            In my free time, I love experimenting with new recipes, spending peaceful time with myself, and getting lost in novels that take me to another world.
            Simplicity is something I cherish deeply — both in design and in life.
          </p>
        </motion.div>

        {/* Right Icon */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-primary flex items-center justify-center shadow-lg max-w-full">
            <FaCode size={120} className="text-white" />
          </div>
        </motion.div>
      </div>

      {/* Info Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto text-sm sm:text-base"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="font-semibold">Name:</p>
          <p>Kazi Tahia Idris</p>
        </div>
        <div>
          <p className="font-semibold">Email:</p>
          <p>tahiaofficial1@gmail.com</p>
        </div>
        <div>
          <p className="font-semibold">Date of Birth:</p>
          <p>11 September, 1999</p>
        </div>
        <div>
          <p className="font-semibold">From:</p>
          <p>Chattogram, Bangladesh</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
