import React from 'react';
import Navigation from '../../components/Navigation';
import ParticleBackground from '../../components/ParticleBackground';

export default function Interests() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      <Navigation />
      <ParticleBackground />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-tertiary">My Interests</h1>
        <section className="text-secondary">
          <ul className="list-disc list-inside space-y-4">
            <li>Programming and Software Development</li>
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Web Technologies and Frontend Frameworks</li>
            <li>Open Source Contributions</li>
            <li>Cybersecurity and Ethical Hacking</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
