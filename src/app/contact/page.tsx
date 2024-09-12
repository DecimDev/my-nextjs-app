import Contact from '@/components/Contact';
import React from 'react';

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center py-36">
    <div className="container mx-auto px-4 flex items-center justify-center">
      <Contact />
    </div>
  </main>
  );
}
