import React from "react";
import Header from "./Header";

const Experience: React.FC = () => {
  return (
    <Header includeBackground={true}>
      <section className="text-secondary py-8 px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-tertiary">
            Work Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-primary p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-accent">
                Lead, Software Engineer
              </h3>
              <p className="text-tertiary mb-2">
                Prudential Financial | 2023 - Present
              </p>
              <ul className="list-disc list-inside">
                <li>
                  a leader for the frontend development of the Prudential Stages
                  application, a digital platform for managing and tracking
                  financial goals and progress.
                </li>
                <li>
                  Working on a team overseeing the construction and design of
                  new Java microservices to replace a critical legacy system.
                </li>
                <li>
                  Contributing to many facets of development including frontend
                  development, system architecture, cloud infrastructure and
                  backend development.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "AWS",
                  "Java",
                  "TypeScript",
                  "Node.js",
                  "Docker",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent text-primary rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-accent">
                Full Stack Developer
              </h3>
              <p className="text-tertiary mb-2">
                WebSolutions Co. | 2017 - 2020
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Developed and maintained multiple client-facing web
                  applications
                </li>
                <li>
                  Optimized database queries, resulting in 30% faster load times
                </li>
                <li>
                  Collaborated with UX team to implement responsive designs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Header>
  );
};

export default Experience;
