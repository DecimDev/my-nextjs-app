import React from 'react';

const Experience: React.FC = () => {
    return (
        <section className="text-secondary py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-tertiary">Work Experience</h2>
                <div className="space-y-8">
                    <div className="bg-primary p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-2 text-accent">Senior Software Engineer</h3>
                        <p className="text-tertiary mb-2">TechCorp Inc. | 2020 - Present</p>
                        <ul className="list-disc list-inside">
                            <li>Led development of scalable microservices architecture</li>
                            <li>Implemented CI/CD pipelines, improving deployment efficiency by 40%</li>
                            <li>Mentored junior developers and conducted code reviews</li>
                        </ul>
                    </div>
                    <div className="bg-primary p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-2 text-accent">Full Stack Developer</h3>
                        <p className="text-tertiary mb-2">WebSolutions Co. | 2017 - 2020</p>
                        <ul className="list-disc list-inside">
                            <li>Developed and maintained multiple client-facing web applications</li>
                            <li>Optimized database queries, resulting in 30% faster load times</li>
                            <li>Collaborated with UX team to implement responsive designs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
