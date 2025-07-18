import React from 'react';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const Portfolio = () => {
    return (
        <div className="flex">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Scrollable Right Content */}
            <div className="w-full md:ml-64 overflow-x-hidden">
                <MainContent />
                <About />
                <Skills />
                <Education />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Portfolio;
