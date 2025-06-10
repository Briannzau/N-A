'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { 
  LightBulbIcon, 
  ChartBarIcon, 
  RocketLaunchIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

// Dynamic import to avoid SSR issues
const HexagonParticles = dynamic(() => import('../components/HexagonParticles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0a0c1c]" />
})

const values = [
  {
    icon: LightBulbIcon,
    title: 'Neural Clarity',
    description: 'We cut through the noise to identify what really drives exponential growth for your business.'
  },
  {
    icon: ChartBarIcon,
    title: 'ROI Obsession',
    description: 'Every recommendation is backed by data and engineered to deliver measurable results.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Future-Forward Innovation',
    description: 'We deploy bleeding-edge AI and automation to give you unfair competitive advantages.'
  }
]

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [storyRef, storyInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0a0c1c] overflow-hidden">
      {/* Hexagon Particles Background */}
      {mounted && <HexagonParticles />}

      <div className="relative z-10 pt-16">
        {/* Hero Section - Transparent background */}
        <section ref={heroRef} className="py-section md:py-32 relative">
          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className={`section-animate ${heroInView ? 'in-view' : ''} text-center`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                About <span className="text-[#00FFDD]">GXM</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                GXM is the evolution of Go-To-Market — blending strategic execution, AI-powered automation, 
                and full-cycle growth experience design into one unified framework.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values - Glass background */}
        <section ref={valuesRef} className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-black/10 dark:bg-white/5 backdrop-blur-md border-y border-white/10 dark:border-gray-700/20"></div>
          
          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className={`section-animate ${valuesInView ? 'in-view' : ''} text-center mb-16`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Neural Core</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We exist to help ambitious companies build GXM systems that scale faster than traditional approaches 
                through intelligent automation and AI-powered insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`section-animate ${valuesInView ? 'in-view' : ''} text-center card-hover bg-white/10 dark:bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/20 dark:border-gray-700/30 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-[#00FFDD]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-[#00FFDD]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story - Glass background */}
        <section ref={storyRef} className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-md border-y border-white/20 dark:border-gray-700/30"></div>
          
          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className={`section-animate ${storyInView ? 'in-view' : ''} text-center`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Origin Story</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
                <p>
                  GXM was born from frustration. As operators at high-growth startups, we kept seeing the same 
                  problems: manual processes that don't scale, disconnected tools, and strategies that worked five 
                  years ago but fail in today's AI-first world.
                </p>
                <p>
                  We realized that traditional go-to-market playbooks are obsolete. Companies need neural systems 
                  that can operate 24/7, learn from data, and adapt in real-time. That's why we created GXM—
                  Growth eXperience Management.
                </p>
                <p>
                  We're not just consultants—we're operators who have been in the trenches, scaling companies 
                  from stealth to unicorn status. We bridge the gap between cutting-edge AI technology and 
                  battle-tested growth strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Glass background */}
        <section className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-black/10 dark:bg-white/5 backdrop-blur-md border-y border-white/10 dark:border-gray-700/20"></div>
          
          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Scale?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss your growth challenges and explore how we can help you build an AI-powered 
                GXM system that scales faster than traditional approaches.
              </p>

              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/20 dark:border-gray-700/30 max-w-2xl mx-auto">
                <div className="text-center">
                  <ClockIcon className="h-16 w-16 text-[#00FFDD] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Neural Discovery Session</h3>
                  <p className="text-gray-300 mb-6">
                    Free GXM audit and AI automation consultation
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#00FFDD] rounded-full mr-3"></div>
                      <span className="text-gray-300">30-minute strategy call</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#00FFDD] rounded-full mr-3"></div>
                      <span className="text-gray-300">Free GXM audit</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#00FFDD] rounded-full mr-3"></div>
                      <span className="text-gray-300">Custom recommendations</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#00FFDD] rounded-full mr-3"></div>
                      <span className="text-gray-300">No sales pitch—just insights</span>
                    </div>
                  </div>
                  
                  <a
                    href="https://calendly.com/briannzau/n-a-intro-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-8 py-4 bg-[#00FFDD] text-[#0a0c1c] font-semibold rounded-lg transition-all duration-300 hover:bg-[#00D4AA] hover:shadow-[0_0_30px_rgba(0,255,221,0.3)] hover:scale-105 transform"
                  >
                    Enter the Matrix
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}