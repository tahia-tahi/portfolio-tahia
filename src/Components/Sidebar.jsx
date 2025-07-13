import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import picture from '../assets/6.jpg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['about', 'skill', 'education', 'projects', 'contact'];

  return (
    <>
      {/* Hamburger Icon - Only visible on mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(true)} className="text-primary text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-64 bg-primary text-secondary shadow-lg flex-col items-center py-8 z-40">
        {/* Profile Picture */}
        <div className="mb-4">
          <a href="#home" aria-label="Home">
            <img
              src={picture}
              alt="profile"
              className="w-28 h-28 rounded-full border-4 border-secondary shadow-lg cursor-pointer"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-1 w-full">
          <ul className="space-y-2 text-center font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="block capitalize py-2 hover:bg-secondary hover:text-base-100 rounded-md transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 mt-auto pt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 hover:text-accent" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-accent" />
          </a>
          <a href="https://github.com/tahia-tahi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 hover:text-accent" />
          </a>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary text-secondary z-50 flex flex-col items-center py-8 transition-all duration-300">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-2xl text-secondary"
          >
            <FaTimes />
          </button>

          {/* Profile Picture */}
          <div className="mb-4 mt-8">
            <a href="#home" onClick={() => setIsOpen(false)}>
              <img
                src={picture}
                alt="profile"
                className="w-28 h-28 rounded-full border-4 border-secondary shadow-lg cursor-pointer"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex-1 w-full">
            <ul className="space-y-4 text-center font-semibold text-lg">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)}
                    className="block capitalize py-2 hover:text-accent transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6 mt-auto pb-8 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-accent" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-accent" />
            </a>
            <a href="https://github.com/tahia-tahi" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-accent" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
