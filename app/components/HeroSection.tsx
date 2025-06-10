'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamic import to avoid SSR issues
const HexagonParticles = dynamic(() => import('./HexagonParticles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0a0c1c]" />
})

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0c1c]">
      {/* tsParticles Background */}
      {mounted && <HexagonParticles />}
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
          The Future of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFDD] to-[#00D4AA] animate-pulse">
            GXM
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
          Growth eXperience Management
        </p>
        
        <a
          href="https://calendly.com/briannzau/n-a-intro-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-[#00FFDD] text-[#0a0c1c] font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-[#00D4AA] hover:shadow-[0_0_30px_rgba(0,255,221,0.5)] hover:scale-105 transform"
        >
          Enter the Matrix
        </a>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0c1c]/20 pointer-events-none" />
    </section>
  )
}