import React from 'react'

export const metadata = {
  title: 'blog detail',
  description: 'blog detail',
}

export default function Slug({ params }) {
  return (
    <>
      My post {params.slug}
    </>
  )
}
