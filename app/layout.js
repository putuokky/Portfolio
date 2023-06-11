'use client';
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export const metadata = {
  title: {
    template: '%s | Mahesora',
  },
  description: 'Layout',
  keywords: ['Next.js', 'React', 'JavaScript', 'Portfolio'],
};

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='container mx-auto text-white'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
