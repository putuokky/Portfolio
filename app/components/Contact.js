import Link from 'next/link'
import React from 'react'
import { sosmeds } from '@lib/datas'

export default function Contact() {
  const emails = [{ email: 'okkymahes@gmail.com' }]

  return (
    <div className='hidden lg:block'>
      <div className='fixed bottom-0 left-0 w-[105px]'>
        <div className='flex flex-col items-center' data-aos='fade-up'>
          {sosmeds.map((sosmed, index) => (
            <div key={index} data-aos="fade-right" data-aos-delay={`${index}00`} data-aos-duration="600">
              <div className='px-2 py-3 transition-all duration-300 cursor-pointer text-primary hover:-translate-y-1 hover:text-accent' title={sosmed.name}>
                <Link href={sosmed.link} target='_blank'>{sosmed.icon}</Link>
              </div>
            </div>
          ))}
          <div className='mt-4 h-20 w-[1px] bg-primary'></div>
        </div>
      </div>
      <div className='fixed bottom-0 right-0 w-[105px]'>
        <div className='flex flex-col items-center' data-aos='fade-up'>
          {emails.map((email, index) => (
            <div key={index} data-aos='fade-left' data-aos-duration='600'>
              <Link href={'mailto:' + email.email} target='_blank' className='px-3 py-3 font-mono text-sm tracking-[0.075em] text-primary transition-all duration-300 hover:translate-y-1 hover:text-accent' style={{ writingMode: 'vertical-rl' }}>{email.email}</Link>
            </div>
          ))}
          <div className='mt-4 h-20 w-[1px] bg-primary'></div>
        </div>
      </div>
    </div >
  )
}
