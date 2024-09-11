import React from 'react';
import About from '../../components/About';

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <About />
      </div>
    </main>
  );
}

