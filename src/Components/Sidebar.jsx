import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import picture from '../assets/6.jpg';
import logo from '../assets/My Logo.png'; // ⬅️ Import your logo

const Sidebar = () => {
    const navItems = ['about', 'skill', 'education', 'projects', 'contact'];

    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-primary text-secondary shadow-lg flex flex-col items-center py-8">
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


            {/* Logo */}
            <div className="mb-6">
                <img src={logo} alt="logo" className="w-24 h-auto" />
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
    );
};

export default Sidebar;
