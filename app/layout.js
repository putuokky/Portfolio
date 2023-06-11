'use client'
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// export const metadata = {
//   generator: 'Next.js',
//   applicationName: 'Portfolio',
//   referrer: 'origin-when-cross-origin',
//   keywords: ['NextJS', 'React', 'JavaScript', 'Portfolio'],
//   authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://mahesora.xyz/' }],
//   colorScheme: 'dark',
//   creator: 'Okky Maheswara',
//   publisher: 'Sebastian Markbåge',
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
// }

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
