import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="bg-base-100 px-6 py-16 text-secondary">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-accent text-xs font-normal uppercase tracking-widest">
          <span className="bg-primary p-1">Education</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">My Academic Journey</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        {/* Icon on Left */}
        <div className="md:w-1/3 flex justify-center">
          <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <FaGraduationCap size={140} className="text-secondary" />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-bold">Bachelor of Business Administration (BBA)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
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
              <p>2018–2024</p> {/* You can change this if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
