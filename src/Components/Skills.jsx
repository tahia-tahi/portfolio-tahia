import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'Tailwind CSS', percentage: 85 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'React', percentage: 85 },
  { name: 'MongoDB', percentage: 75 },
  { name: 'Express', percentage: 70 },
  { name: 'Web Development', percentage: 88 },
];

const Skills = () => {
  return (
    <section id="skill" className="bg-base-100 px-6 py-16 text-secondary">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-accent text-xs font-normal uppercase tracking-widest">
          <span className="bg-primary p-1">Skills</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">What I Know</h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="font-medium">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-primary h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Download CV Button */}
      <div className="text-center mt-12">
        <a
          href="/resume.pdf"
          download
                        className="inline-block bg-primary  text-secondary hover:text-base-100 px-5 py-2 mt-4 rounded hover:bg-accent transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Skills;
