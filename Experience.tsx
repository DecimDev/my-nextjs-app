import React from "react";
import Header from "./Header";

const Experience: React.FC = () => {
  return (
    <Header includeBackground={true}>
      <section className="text-secondary py-8 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-tertiary">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-accent">
                Lead, Software Engineer
              </h3>
              <p className="text-tertiary mb-2">
                Prudential Financial | 2023 - Present
              </p>
              <p>
                Currently, I am developing a series of Java microservices as
                well as contributing to systems architecture for a new platform.
                Before this team, I was one of the lead developers on the Stages
                web app, where I wrote TS React for UI, a BFF layer in Java and
                was responsible for frontend code quality as well as release
                management.
              </p>

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
                    className="px-3 py-1 bg-primary border-2 border-accent text-accent rounded-full text-[10px] font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-accent">
                Software Engineer
              </h3>
              <p className="text-tertiary mb-2">Capco | 2022 - 2023</p>
              <p>
                Senior Software Engineer Consultant, where I contributed to a
                number of projects from web dev, to backend services, and data
                processing, specializing in React, Java and C# development.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "Java",
                  "TypeScript",
                  "C#",
                  "Docker",
                  "Python",
                  "PostgreSQL",
                  "NoSQL",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary border-2 border-accent text-accent rounded-full text-[10px] font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-accent">
                Full Stack Web Developer
              </h3>
              <p className="text-tertiary mb-2">Silvertech Inc | 2020 - 2023</p>
              <p>
                built out custom Jamstack apps for clients with the frontend in
                React and Vue, and the backend in C# ASP.NET Core.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "C#", "TypeScript", "Vue", "Docker"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary border-2 border-accent text-accent rounded-full text-[10px] font-semibold"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="bg-primary rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 text-accent">
                Intern/Full Stack Web Developer
              </h3>
              <p className="text-tertiary mb-2">GoPort | 2019 - 2020</p>
              <p>
                handled web development for the company site using React on the
                frontend and Laravel in PHP on the backend. Also helped maintain
                internal tools in PHP and SQL
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "C#",
                  "TypeScript",
                  "Vue",
                  "Docker",
                  "PHP",
                  "Laravel",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary border-2 border-accent text-accent rounded-full text-[10px] font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Header>
  );
};

export default Experience;
