import React from 'react';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import About from './Components/About';

const Portfolio = () => {
    return (
        <div className="flex">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Scrollable Right Content */}
            <div className="ml-64 w-full overflow-x-hidden">
                <MainContent />
                <About />
                {/* Add other sections like <Skill />, <Projects />, etc. here */}
            </div>
        </div>
    );
};

export default Portfolio;
