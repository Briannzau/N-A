'use client'

import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import HeroSection from './components/HeroSection'
import { 
  MagnifyingGlassIcon, 
  MapIcon, 
  CogIcon, 
  ChartBarIcon,
  SparklesIcon,
  BoltIcon,
  UserGroupIcon,
  PresentationChartLineIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CpuChipIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const processSteps = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Discovery',
    description: 'Live consultation to explore your GTM strategy and AI workflow opportunities.',
  },
  {
    icon: MapIcon,
    title: 'Customized Roadmap',
    description: 'ROI estimates, tech stack, and timeline.',
  },
  {
    icon: CogIcon,
    title: 'Implementation & Integration',
    description: 'We build, test, and integrate AI workflows.',
  },
  {
    icon: ChartBarIcon,
    title: 'Optimization & Support',
    description: 'Ongoing tweaks and strategic audits.',
  },
]

const services = [
  {
    icon: SparklesIcon,
    title: 'AI-Driven Lead Generation',
    description: 'Automate prospect identification, enrichment, and personalized outreach.',
  },
  {
    icon: BoltIcon,
    title: 'Outbound & Inbound Workflows',
    description: 'Intelligent sequences that nurture leads and drive qualified meetings.',
  },
  {
    icon: PresentationChartLineIcon,
    title: 'Growth Analytics & Reporting',
    description: 'Custom dashboards, KPI management and AI insights.',
  },
  {
    icon: UserGroupIcon,
    title: 'Customer Success Automation',
    description: 'AI-powered ticket triage, feedback loops, and churn prevention.',
  },
]

const partnershipReasons = [
  {
    icon: RocketLaunchIcon,
    title: 'Scale Without Headcount',
    description: 'Our AI-powered systems handle the heavy lifting so your team can focus on strategy and high-value activities. Automate repetitive tasks, qualify leads 24/7, and scale your operations without adding overhead.',
    highlight: 'AI Automation'
  },
  {
    icon: LightBulbIcon,
    title: 'Proven GTM Expertise',
    description: 'We\'re not just consultants—we\'re operators who have scaled startups from zero to millions in ARR. Our team has hands-on experience building and optimizing GTM engines at high-growth companies.',
    highlight: 'Operator Experience'
  },
  {
    icon: CpuChipIcon,
    title: 'Cutting-Edge AI Technology',
    description: 'Leverage the latest AI and automation tools to gain unfair advantages over your competition. From predictive analytics to intelligent lead scoring, we deploy technology that gives you an edge.',
    highlight: 'Advanced Technology'
  },
  {
    icon: ChartBarIcon,
    title: 'Measurable ROI',
    description: 'Every strategy and implementation is designed to deliver measurable results from day one. We focus on metrics that matter: qualified leads, conversion rates, deal velocity, and revenue growth.',
    highlight: 'Data-Driven Results'
  }
]

export default function HomePage() {
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || !aboutInView) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partnershipReasons.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, aboutInView])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partnershipReasons.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partnershipReasons.length) % partnershipReasons.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="overflow-hidden relative">
      {/* Hero Section with tsParticles */}
      <HeroSection />

      {/* Process Section - Glass background */}
      <section 
        ref={processRef}
        className="py-12 md:py-16 relative"
      >
        {/* Glass background overlay */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-md border-y border-white/20 dark:border-gray-700/30"></div>
        
        <div className="max-w-content mx-auto px-gutter relative z-10">
          <div className={`section-animate ${processInView ? 'in-view' : ''} text-center mb-8`}>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Our 4-Step Process</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              From discovery to optimization, we guide you through every step of your AI-powered GTM transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`section-animate ${processInView ? 'in-view' : ''} card-hover bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 dark:border-gray-700/30 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[#00FFDD]/20 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-[#00FFDD]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-200 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Glass background */}
      <section ref={servicesRef} className="py-12 md:py-16 relative">
        {/* Glass background overlay */}
        <div className="absolute inset-0 bg-black/10 dark:bg-white/5 backdrop-blur-md border-y border-white/10 dark:border-gray-700/20"></div>
        
        <div className="max-w-content mx-auto px-gutter relative z-10">
          <div className={`section-animate ${servicesInView ? 'in-view' : ''} text-center mb-8`}>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Tailored AI-Powered Services</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your go-to-market success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`section-animate ${servicesInView ? 'in-view' : ''} card-hover bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 dark:border-gray-700/30 hover:bg-white/20 dark:hover:bg-black/30 hover:border-[#00FFDD]/50 transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[#00FFDD]/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-[#00FFDD]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <Link 
                  href="/services"
                  className="text-[#00FFDD] font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with Us - Glass background */}
      <section 
        ref={aboutRef}
        className="py-16 md:py-20 relative"
      >
        {/* Glass background overlay */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-md border-y border-white/20 dark:border-gray-700/30"></div>
        
        <div className="max-w-content mx-auto px-gutter relative z-10">
          <div className={`section-animate ${aboutInView ? 'in-view' : ''} text-center mb-12`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Why Partner with Us?</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Discover the advantages that set us apart in the AI-powered GTM space.
            </p>
          </div>

          {/* Redesigned Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Content Area */}
            <div className="relative min-h-[400px] md:min-h-[350px]">
              {partnershipReasons.map((reason, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 transform translate-x-0' 
                      : index < currentSlide 
                        ? 'opacity-0 transform -translate-x-full'
                        : 'opacity-0 transform translate-x-full'
                  }`}
                >
                  <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 dark:border-gray-700/30">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-[#00FFDD]/20 rounded-2xl flex items-center justify-center mr-6">
                        <reason.icon className="h-8 w-8 text-[#00FFDD]" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#00FFDD] mb-1">{reason.highlight}</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{reason.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="flex items-center justify-center w-12 h-12 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/30 hover:border-[#00FFDD] transition-all duration-200 group"
                aria-label="Previous slide"
              >
                <ArrowLeftIcon className="h-5 w-5 text-gray-200 group-hover:text-[#00FFDD]" />
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {partnershipReasons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-[#00FFDD] scale-125' 
                        : 'bg-white/30 hover:bg-[#00FFDD]/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="flex items-center justify-center w-12 h-12 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/30 hover:border-[#00FFDD] transition-all duration-200 group"
                aria-label="Next slide"
              >
                <ArrowRightIcon className="h-5 w-5 text-gray-200 group-hover:text-[#00FFDD]" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#00FFDD] transition-all duration-300 ease-out"
                style={{ 
                  width: `${((currentSlide + 1) / partnershipReasons.length) * 100}%`
                }}
              />
            </div>

            {/* Auto-play Control */}
            <div className="text-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-gray-300 hover:text-[#00FFDD] transition-colors duration-200"
              >
                {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Glass background with proper bottom spacing */}
      <section className="py-12 md:py-16 pb-20 md:pb-24 relative">
        {/* Glass background overlay */}
        <div className="absolute inset-0 bg-black/10 dark:bg-white/5 backdrop-blur-md border-y border-white/10 dark:border-gray-700/20"></div>
        
        <div className="max-w-content mx-auto px-gutter relative z-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              Schedule your free 30-minute strategy call
            </h2>
            <p className="text-gray-200 mb-6 max-w-3xl mx-auto">
              We&apos;ll audit your GTM strategy and explore AI workflow opportunities. No sales pitch—just 
              actionable insights you can implement immediately.
            </p>
            
            <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 dark:border-gray-700/30 max-w-2xl mx-auto mb-6">
              <div className="text-center">
                <ClockIcon className="h-12 w-12 text-[#00FFDD] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">30-Minute Strategy Call</h3>
                <p className="text-gray-200 mb-4">
                  Free GTM audit and AI automation consultation
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#00FFDD] rounded-full mr-3"></div>
                    <span className="text-sm text-gray-200">30-minute discovery call</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#00FFDD] rounded-full mr-3"></div>
                    <span className="text-sm text-gray-200">GTM strategy audit</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#00FFDD] rounded-full mr-3"></div>
                    <span className="text-sm text-gray-200">AI automation opportunities</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#00FFDD] rounded-full mr-3"></div>
                    <span className="text-sm text-gray-200">Custom roadmap & recommendations</span>
                  </div>
                </div>
                
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
        </div>
      </section>
    </div>
  )
}