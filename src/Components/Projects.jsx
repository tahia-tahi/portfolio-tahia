import React, { useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle, FaServer } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../assets/Jazz Events.png'; 
import img2 from '../assets/Collab Learn.png'; 
import img3 from '../assets/LawnShaper.png'; 

const projects = [
  {
    id: 1,
    title: 'Jazz Events',
    description: 'A modern event management web app where users can book jazz shows...',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'DaisyUI'],
    image: img1,
    liveLink: 'https://jass-event.web.app/',
    githubLink: 'https://github.com/tahia-tahi/jazz-events',
    detailsLink: '/assets/jazz-events.pdf',
  },
  {
    id: 2,
    title: 'Collab Learn',
    description: 'A collaborative learning platform where users can create/join courses...',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'DaisyUI', 'MongoDB', 'Express.js', 'JWT', 'Vite'],
    image: img2,
    liveLink: 'https://collab-learn-b1813.web.app/',
    githubLink: 'https://github.com/tahia-tahi/collab-learn',
    serverLink: 'https://github.com/tahia-tahi/collab-learn-server',
    detailsLink: '/assets/collab-learn.pdf',
  },
  {
    id: 3,
    title: 'Lawn Shaper',
    description: 'A lawn care service marketplace where customers can hire gardeners...',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'DaisyUI', 'MongoDB', 'Express.js', 'Vite'],
    image: img3,
    liveLink: 'https://lawn-shaper.web.app/',
    githubLink: 'https://github.com/tahia-tahi/lawn-shaper',
    serverLink: 'https://github.com/tahia-tahi/lawn-shaper-server',
    detailsLink: '/assets/lawn-shaper.pdf',
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="bg-base-100 px-4 sm:px-6 md:px-12 py-16 text-secondary">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-accent text-xs sm:text-sm font-normal uppercase tracking-widest">
          <span className="bg-primary p-1 text-secondary font-semibold">Projects</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-accent">Featured Work</h2>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-white border border-primary rounded-lg shadow-md p-6"
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            {/* Image */}
            <div className="w-full md:w-3/5">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="rounded-lg shadow-md w-full max-w-full object-cover mb-4 md:mb-0"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-2/5 space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-bold text-secondary">{project.title}</h3>
              <p className="text-secondary">{project.description}</p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary text-secondary px-2 py-1 rounded text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 justify-center md:justify-start mt-4 flex-wrap">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <FaExternalLinkAlt /> <span className="text-sm">Live</span>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <FaGithub /> <span className="text-sm">GitHub</span>
                </a>
                {project.serverLink && (
                  <a
                    href={project.serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110"
                  >
                    <FaServer /> <span className="text-sm">Server</span>
                  </a>
                )}
                <a
                  href={project.detailsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <FaInfoCircle /> <span className="text-sm">Details</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
