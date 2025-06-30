import React from 'react';
import background from '../assets/2.png';
import { TypeAnimation } from 'react-type-animation';

const MainContent = () => {
    return (
        <div className=" w-full min-h-screen text-secondary">
            {/* Full-Screen Header Section with Background */}
            <div className="relative h-screen">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                </div>

                {/* Centered Content */}
                <header className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                    <h1 className="text-4xl md:text-2xl font-bold text-primary">Myself Kazi Tahia Idris</h1>

                    <TypeAnimation
                        sequence={[
                            'React Developer', // Type
                            2000,              // Wait 2s
                            'Frontend Engineer', // Replace with next
                            2000,
                            'JavaScript Enthusiast',
                            2000,
                        ]}
                        wrapper="h2"
                        cursor={true}
                        repeat={Infinity}
                        className="text-5xl text-base-100 mt-2"
                    />

                    <p className="text-primary mt-1">Based in Bangladesh</p>
                    <a
                        href="/resume.pdf"
                        className="inline-block bg-secondary text-base-100 px-5 py-2 mt-4 rounded-xl hover:bg-accent transition"
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
