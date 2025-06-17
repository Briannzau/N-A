'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-primary/20 to-neon-secondary/20 animate-gradient-shift"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Glitch 404 */}
        <div className="mb-8">
          <h1 className="glitch text-8xl md:text-9xl font-black" data-text="404">
            404
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Looks like you're lost in the matrix. Let's get you back on track to building 
          your AI-powered GTM strategy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="btn-primary inline-flex items-center animate-pulse-glow"
          >
            Return Home
          </Link>
          
          <a 
            href="mailto:support@gxm.agency"
            className="text-neon-primary hover:text-neon-secondary transition-colors duration-200 underline"
          >
            Report an issue
          </a>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-neon-primary rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
