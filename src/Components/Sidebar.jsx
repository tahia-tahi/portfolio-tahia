import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import picture from '../assets/6.jpg';

const navItems = ['about', 'skill', 'education', 'projects', 'contact'];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Optional: Smooth scroll on nav click
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // On mobile, close sidebar after click
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Responsive toggle button visible only on small screens
  return (
    <>
      {/* Toggle Button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-primary text-secondary p-2 rounded shadow"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-primary text-secondary shadow-lg flex flex-col items-center py-8
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:flex`}
        aria-label="Sidebar navigation"
      >
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
                  onClick={(e) => handleNavClick(e, item)}
                  className="block capitalize py-2 hover:bg-secondary hover:text-base-100 rounded-md transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 mt-auto pt-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/tahia-tahi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
