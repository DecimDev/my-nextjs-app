import React from 'react';
import Header from './Header';

const About: React.FC = () => {
    return (
        <Header includeBackground={true}>
            <section className="text-secondary py-8 flex flex-col items-center justify-center">
                <div className="container mx-auto px-8 text-left">
                <h2 className="text-3xl font-bold mb-8 text-tertiary">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="mb-4">
                            Hello! I'm a passionate Software Engineer with a keen interest in building innovative and efficient solutions. 
                            My journey in the world of programming has been exciting and full of continuous learning.
                        </p>
                        <p className="mb-4">
                            I specialize in full-stack development, with expertise in technologies like React, Node.js, and TypeScript. 
                            I'm always eager to tackle new challenges and stay up-to-date with the latest industry trends.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-accent">Skills</h3>
                        <ul className="list-disc list-inside">
                            <li>JavaScript/TypeScript</li>
                            <li>React & Next.js</li>
                            <li>Node.js</li>
                            <li>SQL & NoSQL Databases</li>
                            <li>RESTful API Design</li>
                            <li>Git & Version Control</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </Header>
    );
};

export default About;
