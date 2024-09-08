import React from 'react';
import Experience from '../../components/Experience';
import Navigation from '../../components/Navigation';
import ParticleBackground from '../../components/ParticleBackground';

export default function Work() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      <Navigation />
      <ParticleBackground />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-tertiary">Work Experience</h1>
        <Experience />
      </div>
    </main>
  );
}
