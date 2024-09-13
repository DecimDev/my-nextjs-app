import React from 'react';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center py-36">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <About />
      </div>
    </main>
  );
}

