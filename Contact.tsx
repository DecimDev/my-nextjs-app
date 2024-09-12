import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <Header includeBackground={true}>
      <section className="text-secondary py-8 flex flex-col items-center justify-center">
        <div className="container mx-auto px-8 text-left">
          <h2 className="text-3xl font-bold mb-8 text-tertiary">About Me</h2>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <p className="mb-4">
                Hi, I'm DecimDev, a software engineer from the US. I've been
                working in the industry for 5 years now. Always eager to grow my
                skillset and impart my knowledge to others. I am a husband, a
                father of 3, and a hobbyist in many things, including
                woodworking, gaming, and music.
              </p>
              <p className="mb-4">
                I specialize in full-stack development, systems architecture,
                devops and AWS cloud services. I have experience building
                frontend user interfaces and design systems to enterprise level
                microservices and everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Header>
  );
};

export default Contact;