import React from 'react';
import background from '../assets/2.png';
import { TypeAnimation } from 'react-type-animation';

const MainContent = () => {
    return (
        <div id="home" className="w-full min-h-screen text-secondary">
            {/* Full-Screen Header Section with Background */}
            <div className="relative h-screen">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-70 sm:opacity-80"></div>
                </div>

                {/* Centered Content */}
                <header className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto">
                    {/* Adjust font sizes: smaller on mobile, bigger on md+ */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                        Myself Kazi Tahia Idris
                    </h1>

                    <TypeAnimation
                        sequence={[
                            'React Developer',
                            2000,
                            'Frontend Engineer',
                            2000,
                            'JavaScript Enthusiast',
                            2000,
                        ]}
                        wrapper="h2"
                        cursor={true}
                        repeat={Infinity}
                        className="text-3xl sm:text-4xl md:text-5xl text-base-100 mt-2"
                    />

                    <p className="text-primary mt-1 text-sm sm:text-base">Based in Bangladesh</p>

                    <a
                        href="/resume.pdf"
                        className="inline-block bg-primary text-secondary hover:text-base-100 px-5 py-2 mt-6 rounded hover:bg-accent transition text-sm sm:text-base"
                        download
                    >
                        Download Resume
                    </a>
                </header>
            </div>
        </div>
    );
};

export default MainContent;
