"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { LightBulbIcon, ChartBarIcon, RocketLaunchIcon, ClockIcon } from "@heroicons/react/24/outline"

// Dynamic import to avoid SSR issues
const HexagonParticles = dynamic(() => import("../components/HexagonParticles"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-white" />,
})

const values = [
  {
    icon: LightBulbIcon,
    title: "Strategic Clarity",
    description: "We cut through the noise to identify what really drives growth for your business.",
  },
  {
    icon: ChartBarIcon,
    title: "ROI Obsession",
    description: "Every recommendation is backed by data and designed to deliver measurable results.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Innovation",
    description: "We leverage cutting-edge AI and automation to give you a streamlined workflow.",
  },
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
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Hexagon Particles Background */}
      {mounted && <HexagonParticles />}

      <div className="relative z-10 pt-16">
        {/* Hero Section - Transparent background */}
        <section ref={heroRef} className="py-section md:py-32 relative">
          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className={`section-animate ${heroInView ? "in-view" : ""} text-center`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-luxury-charcoal">
                About <span className="text-luxury-gold">Velkara</span>
              </h1>
              <p className="text-lg md:text-xl text-luxury-charcoal max-w-4xl mx-auto leading-relaxed">
                Velkara is the evolution of Go-To-Market — blending strategic execution, AI-powered automation, and
                full-cycle growth experience design into one unified framework.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values - Glass background */}
        <section ref={valuesRef} className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-luxury-white/80 backdrop-blur-md border-y border-luxury-gold/10"></div>

          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className={`section-animate ${valuesInView ? "in-view" : ""} text-center mb-16`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-luxury-charcoal">Our Mission & Values</h2>
              <p className="text-lg text-luxury-charcoal max-w-3xl mx-auto">
                We exist to help ambitious companies build GTM engines that scale faster than traditional approaches
                through intelligent automation and AI-powered insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`section-animate ${valuesInView ? "in-view" : ""} text-center card-hover bg-luxury-white p-8 rounded-lg border border-luxury-gold/30 hover:border-luxury-gold transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-luxury-gold/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-luxury-charcoal">{value.title}</h3>
                  <p className="text-luxury-charcoal">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story - Glass background */}
        <section ref={storyRef} className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-luxury-white/90 backdrop-blur-md border-y border-luxury-gold/20"></div>

          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className={`section-animate ${storyInView ? "in-view" : ""} text-center`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-luxury-charcoal">Our Story</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-luxury-charcoal">
                <p>
                  Velkara was born from frustration. As GTM consultants at high-growth startups, we kept seeing the same
                  problems: manual processes that don't scale, disconnected tools, and strategies that worked five years
                  ago but fail today.
                </p>
                <p>
                  We realized that traditional GTM playbooks are simply not applicable in an AI-first world. Companies
                  need systems that can operate 24/7, learn from data, and adapt in real-time.
                </p>
                <p>
                  So we built Velkara to bridge the gap between cutting-edge AI technology and proven GTM strategies.
                  We're not just consultants—we're experts who have been in your shoes and know what it takes to scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Glass background */}
        <section className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-luxury-white/80 backdrop-blur-md border-y border-luxury-gold/10"></div>

          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-luxury-charcoal">Ready to Scale?</h2>
              <p className="text-lg text-luxury-charcoal mb-8 max-w-3xl mx-auto">
                Let's discuss your GTM challenges and explore how we can help you build an AI-powered system that scales
                faster than traditional approaches.
              </p>

              <div className="bg-luxury-white border border-luxury-gold/30 p-8 rounded-lg max-w-2xl mx-auto">
                <div className="text-center">
                  <ClockIcon className="h-16 w-16 text-luxury-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-luxury-charcoal">30-Minute Strategy Call</h3>
                  <p className="text-luxury-charcoal mb-6">Free GTM audit and AI automation consultation</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                      <span className="text-luxury-charcoal">30-minute strategy call</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                      <span className="text-luxury-charcoal">Free GTM audit</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                      <span className="text-luxury-charcoal">Custom recommendations</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                      <span className="text-luxury-charcoal">No sales pitch—just insights</span>
                    </div>
                  </div>

                  <a
                    href="https://calendly.com/briannzau/valkara-intro-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-8 py-4 bg-luxury-gold text-white font-semibold rounded-lg transition-all duration-300 hover:bg-luxury-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transform"
                  >
                    Schedule Your Call
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
