import React from 'react';
import { FaCode } from 'react-icons/fa'; // For the code icon

const About = () => {
    return (
        <section id="about" className="bg-base-100 px-6 py-16 text-secondary">
            {/* Section Title */}
            <div className="text-center mb-12">
                <p className="text-accent text-xs font-normal uppercase tracking-widest"><span className='bg-primary p-1'>About Me</span></p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Know Me More</h2>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
                {/* Left Text Content */}
                <div className="md:w-2/3 space-y-4">
                    <h2 className="text-2xl font-bold">
                        I am <span className="border-b-4 border-primary inline-block">Tahia</span>
                    </h2>
                    <p className="text-lg leading-relaxed">
                        I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is my motto.
                    </p>
                </div>

                {/* Right Icon */}
                <div className="md:w-1/3 flex justify-center">
                    <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <FaCode size={140} className="text-secondary" />
                    </div>
                </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto text-sm md:text-base">
                <div>
                    <p className="font-semibold">Name:</p>
                    <p>Kazi Tahia Idris</p>
                </div>
                <div>
                    <p className="font-semibold">Email:</p>
                    <p>tahiaofficial1@gmail.com</p>
                </div>
                <div>
                    <p className="font-semibold">Date of Birth:</p>
                    <p>11 September, 1999</p>
                </div>
                <div>
                    <p className="font-semibold">From:</p>
                    <p>Chattogram, Bangladesh</p>
                </div>
            </div>
        </section>
    );
};

export default About;
