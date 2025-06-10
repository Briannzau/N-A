'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { 
  ClockIcon,
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

// Dynamic import to avoid SSR issues
const HexagonParticles = dynamic(() => import('../components/HexagonParticles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0a0c1c]" />
})

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true })
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
                Let's <span className="text-[#00FFDD]">Talk</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your go-to-market strategy with AI? Let's discuss your challenges and 
                explore how we can help you scale faster.
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Booking - Glass background */}
        <section ref={formRef} className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-black/10 dark:bg-white/5 backdrop-blur-md border-y border-white/10 dark:border-gray-700/20"></div>
          
          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className={`section-animate ${formInView ? 'in-view' : ''} text-center mb-12`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Book Your Strategy Call</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Schedule your 30-minute strategy call directly and get started on your GTM transformation.
                </p>
              </div>

              {/* Main CTA Section */}
              <div className={`section-animate ${formInView ? 'in-view' : ''} mb-16`}>
                <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/20 dark:border-gray-700/30 max-w-2xl mx-auto">
                  <div className="text-center">
                    <ClockIcon className="h-16 w-16 text-[#00FFDD] mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-white">30-Minute Strategy Call</h3>
                    <p className="text-gray-300 mb-6">
                      Free GTM audit and AI automation consultation
                    </p>
                    <a
                      href="https://calendly.com/briannzau/n-a-intro-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-8 py-4 bg-[#00FFDD] text-[#0a0c1c] font-semibold rounded-lg transition-all duration-300 hover:bg-[#00D4AA] hover:shadow-[0_0_30px_rgba(0,255,221,0.3)] hover:scale-105 transform"
                    >
                      Schedule Your Call
                    </a>
                  </div>
                </div>
              </div>

              {/* 3-Column Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* What to Expect */}
                <div className={`section-animate ${formInView ? 'in-view' : ''}`}>
                  <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 dark:border-gray-700/30 h-full">
                    <div className="w-12 h-12 bg-[#00FFDD]/20 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircleIcon className="h-6 w-6 text-[#00FFDD]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-white">What to Expect</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">30-minute discovery call</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Free GTM audit</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Custom proposal if there's a fit</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">No sales pitch—just insights</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Book a Call */}
                <div className={`section-animate ${formInView ? 'in-view' : ''}`}>
                  <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 dark:border-gray-700/30 h-full">
                    <div className="w-12 h-12 bg-[#00FFDD]/20 rounded-lg flex items-center justify-center mb-4">
                      <LightBulbIcon className="h-6 w-6 text-[#00FFDD]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Why Book a Call?</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Expert insights on your GTM approach</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">AI automation opportunities</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Custom roadmap for scaling</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Learn from proven operators</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Who We Help */}
                <div className={`section-animate ${formInView ? 'in-view' : ''}`}>
                  <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 dark:border-gray-700/30 h-full">
                    <div className="w-12 h-12 bg-[#00FFDD]/20 rounded-lg flex items-center justify-center mb-4">
                      <UserGroupIcon className="h-6 w-6 text-[#00FFDD]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Who We Help</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Early-stage startups</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Growing SaaS companies</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">AI-native businesses</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00FFDD] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">Scale-up companies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}