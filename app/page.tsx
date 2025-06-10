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
    <div className="overflow-hidden">
      {/* Hero Section with tsParticles */}
      <HeroSection />

      {/* Process Section - Reduced padding */}
      <section 
        ref={processRef}
        className="py-12 md:py-16 bg-light-section dark:bg-dark-section"
      >
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${processInView ? 'in-view' : ''} text-center mb-8`}>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Our 4-Step Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From discovery to optimization, we guide you through every step of your AI-powered GTM transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`section-animate ${processInView ? 'in-view' : ''} card-hover bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-neon-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-neon-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Reduced padding */}
      <section ref={servicesRef} className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${servicesInView ? 'in-view' : ''} text-center mb-8`}>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Tailored AI-Powered Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your go-to-market success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`section-animate ${servicesInView ? 'in-view' : ''} card-hover bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg border border-transparent hover:border-neon-primary/30`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-neon-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-neon-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <Link 
                  href="/services"
                  className="text-neon-primary font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with Us - Reduced padding */}
      <section 
        ref={aboutRef}
        className="py-16 md:py-20 bg-light-section dark:bg-dark-section relative"
      >
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${aboutInView ? 'in-view' : ''} text-center mb-12`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Partner with Us?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover the advantages that set us apart in the AI-powered GTM space.
            </p>
          </div>

          {/* Redesigned Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Content Area - Reduced height */}
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
                  <div className="bg-white dark:bg-dark-bg rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-neon-primary/10 rounded-2xl flex items-center justify-center mr-6">
                        <reason.icon className="h-8 w-8 text-neon-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neon-primary mb-1">{reason.highlight}</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text">{reason.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
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
                className="flex items-center justify-center w-12 h-12 bg-white dark:bg-dark-bg rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:border-neon-primary transition-all duration-200 group"
                aria-label="Previous slide"
              >
                <ArrowLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-neon-primary" />
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {partnershipReasons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-neon-primary scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-neon-primary/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="flex items-center justify-center w-12 h-12 bg-white dark:bg-dark-bg rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:border-neon-primary transition-all duration-200 group"
                aria-label="Next slide"
              >
                <ArrowRightIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-neon-primary" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-neon-primary transition-all duration-300 ease-out"
                style={{ 
                  width: `${((currentSlide + 1) / partnershipReasons.length) * 100}%`
                }}
              />
            </div>

            {/* Auto-play Control */}
            <div className="text-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-neon-primary transition-colors duration-200"
              >
                {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Reduced padding */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-gutter">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Schedule your free 30-minute strategy call
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
              We&apos;ll audit your GTM strategy and explore AI workflow opportunities. No sales pitch—just 
              actionable insights you can implement immediately.
            </p>
            
            <div className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6">
              <div className="text-center">
                <ClockIcon className="h-12 w-12 text-neon-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">30-Minute Strategy Call</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Free GTM audit and AI automation consultation
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-neon-primary rounded-full mr-3"></div>
                    <span className="text-sm">30-minute discovery call</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-neon-primary rounded-full mr-3"></div>
                    <span className="text-sm">GTM strategy audit</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-neon-primary rounded-full mr-3"></div>
                    <span className="text-sm">AI automation opportunities</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-neon-primary rounded-full mr-3"></div>
                    <span className="text-sm">Custom roadmap & recommendations</span>
                  </div>
                </div>
                
                <a
                  href="https://calendly.com/briannzau/n-a-intro-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block w-full text-center"
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