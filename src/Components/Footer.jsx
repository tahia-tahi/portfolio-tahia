import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-base-100 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        {/* Left Side */}
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Kazi Tahia Idris. All rights reserved.
        </p>

        {/* Right Side */}
        <div className="flex gap-6 text-sm sm:text-base">
          <a
            href="#about"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
