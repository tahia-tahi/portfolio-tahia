import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-base-100 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center gap-4">
        {/* Left Side */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Kazi Tahia Idris. All rights reserved.</p>

        {/* Right Side */}
        <div className="flex gap-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
