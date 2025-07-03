import React from 'react';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}