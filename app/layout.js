'use client';
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
// import { poppins, roboto_mono } from './font';

export const metadata = {
  title: {
    template: '%s | Mahesora',
  },
  description: 'Layout',
  keywords: ['Next.js', 'React', 'JavaScript', 'Portfolio'],
};

export default function RootLayout({ children }) {
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
