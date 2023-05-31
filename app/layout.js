'use client';
import Navbar from '@/components/Navbar'
import './globals.css'
// import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

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
        <main className='w-full text-white'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
