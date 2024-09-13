import React from "react";
import Header from "./Header";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Header includeBackground={true}>
      <section className="text-secondary py-8 flex flex-col items-center justify-center">
        <div className="container mx-auto px-8 text-left">
          <h2 className="text-3xl font-bold mb-8 text-tertiary">Let&apos;s Connect</h2>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <p className="mb-4">
                If you&apos;d like to get in touch with me, please use the form below.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Header>
  );
};

export default Contact;