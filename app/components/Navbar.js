import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Sitename from './Sitename';
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { usePathname, useSearchParams } from 'next/navigation';

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('#38bdf8')
  const searchParams = useSearchParams();
  const pathname = usePathname()

  const handleNav = () => {
    setNav(!nav);
  }

  // useEffect(() => {
  //   const changeColor = () => {
  //     if (window.scrollY >= 90) {
  //       setColor('#111827')
  //       setTextColor('#38bdf8')
  //     } else {
  //       setColor('transparent')
  //       setTextColor('#38bdf8')
  //     }
  //   }
  //   window.addEventListener('scroll', changeColor)
  // }, [])

  // useEffect(() => {
  //   const url = pathname + searchParams.toString()
  //   console.log(url)

  // }, [pathname, searchParams])

  const menus = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Projects', href: '/projects' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <header className='top-0 left-0 z-10 flex w-full'>
      {/* <header className='fixed top-0 left-0 z-10 flex w-full'> */}
      <nav className='container flex items-center justify-between mx-8 my-4 bg-transparent'>
        <Link href='/'>
          <h1 className='text-3xl font-bold capitalize text-sky-400 hover:text-sky-300 hover:duration-300 hover:ease-in'><Sitename /></h1>
        </Link>

        {/* menu */}
        <ul className='hidden text-gray-400 sm:flex'>
          {menus.map((menu) => (
            <li key={menu.text} className={`p-4 font-semibold hover:underline-offset-8 hover:decoration-1 hover:underline hover:decoration-sky-400 hover:text-sky-300 ${pathname == menu.href ? 'active' : ''}`}>
              <Link href={menu.href}>{menu.text}</Link>
            </li>
          ))}
        </ul>
        {/* <button type="button" class="flex justify-center items-center text-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-sky-500 focus:outline-none bg-sky-950 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Resume</button> */}

        {/* menu mobile */}
        <div onClick={handleNav} className='z-10 block sm:hidden'>
          {nav ? (
            <AiOutlineClose
              size={32}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <BiMenuAltRight
              size={32}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        <ul className={`absolute top-0 bottom-0 ${nav ? "left-0" : "left-[100%]"
          } right-0 flex flex-col items-center justify-center w-full h-screen text-center duration-300 ease-in bg-gray-900 text-gray-400 sm:hidden`}>
          {menus.map((menu) => (
            <li key={menu.text} className={`p-4 font-semibold hover:underline-offset-8 hover:decoration-1 hover:underline hover:decoration-sky-400 ${pathname == menu.href ? 'active' : ''}`}>
              <Link href={menu.href}>{menu.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header >
  )
}
