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
        <section ref={heroRef} className="section-responsive">
          <div className="content-container">
            <div className={`section-animate ${heroInView ? "in-view" : ""} text-section align-center`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-luxury-charcoal">
                About <span className="text-luxury-gold">Velkara</span>
              </h1>
              <p className="text-lg md:text-xl text-luxury-charcoal max-w-4xl leading-relaxed">
                Velkara is the evolution of Go-To-Market — blending strategic execution, AI-powered automation, and
                full-cycle growth experience design into one unified framework.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section ref={valuesRef} className="section-responsive">
          <div className="content-container">
            <div className={`section-animate ${valuesInView ? "in-view" : ""} text-section align-center`}>
              <h2 className="text-3xl md:text-5xl font-bold text-luxury-charcoal">Our Mission & Values</h2>
              <p className="text-lg text-luxury-charcoal max-w-3xl">
                We exist to help ambitious companies build GTM engines that scale faster than traditional approaches
                through intelligent automation and AI-powered insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`section-animate ${valuesInView ? "in-view" : ""} card-hover`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-content align-center">
                    <div className="card-header justify-center">
                      <div className="card-icon">
                        <value.icon className="h-8 w-8 text-luxury-gold" />
                      </div>
                    </div>
                    <div className="card-body align-center">
                      <h3 className="text-xl font-semibold text-luxury-charcoal">{value.title}</h3>
                      <p className="text-luxury-charcoal">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section ref={storyRef} className="section-responsive">
          <div className="content-container">
            <div className={`section-animate ${storyInView ? "in-view" : ""} text-section align-center`}>
              <h2 className="text-3xl md:text-5xl font-bold text-luxury-charcoal">Our Story</h2>
              <div className="max-w-4xl space-y-6 text-lg text-luxury-charcoal">
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

        {/* Contact Section */}
        <section className="section-responsive">
          <div className="content-container">
            <div className="text-section align-center">
              <h2 className="text-3xl md:text-5xl font-bold text-luxury-charcoal">Ready to Scale?</h2>
              <p className="text-lg text-luxury-charcoal max-w-3xl">
                Let's discuss your GTM challenges and explore how we can help you build an AI-powered system that scales
                faster than traditional approaches.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="card-hover max-w-2xl text-center">
                <div className="card-content align-center">
                  <div className="card-header justify-center">
                    <ClockIcon className="h-16 w-16 text-luxury-gold" />
                  </div>
                  <div className="card-body align-center">
                    <h3 className="text-2xl font-bold text-luxury-charcoal">30-Minute Strategy Call</h3>
                    <p className="text-luxury-charcoal">Free GTM audit and AI automation consultation</p>

                    <ul className="feature-list">
                      <li className="feature-list-item">
                        <div className="feature-bullet"></div>
                        <span className="text-luxury-charcoal">30-minute strategy call</span>
                      </li>
                      <li className="feature-list-item">
                        <div className="feature-bullet"></div>
                        <span className="text-luxury-charcoal">Free GTM audit</span>
                      </li>
                      <li className="feature-list-item">
                        <div className="feature-bullet"></div>
                        <span className="text-luxury-charcoal">Custom recommendations</span>
                      </li>
                      <li className="feature-list-item">
                        <div className="feature-bullet"></div>
                        <span className="text-luxury-charcoal">No sales pitch—just insights</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://calendly.com/briannzau/velkara-intro-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full"
                    >
                      Schedule Your Call
                    </a>
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
