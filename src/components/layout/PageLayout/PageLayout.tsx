import React from 'react';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

/**
 * Layout general de page.
 */
export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-serif bg-nature-light">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
