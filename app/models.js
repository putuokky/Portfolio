"use client";
import LoadingSpinner from '@/components/loading/loading-spinner';
import Spline from '@splinetool/react-spline'
import React, { useState } from 'react'

export default function Dominos() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Spline onLoad={() => setLoading(false)} scene='https://prod.spline.design/BJjm9TZpZw1fn-BD/scene.splinecode' />
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center'><LoadingSpinner /></div>
      )}
    </>
  )
}
