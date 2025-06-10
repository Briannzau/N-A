'use client'

import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ParticleBackground from './components/ParticleBackground'
import ContactForm from './components/ContactForm'
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
  CpuChipIcon
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
    description: 'Our AI-powered systems handle the heavy lifting so your team can focus on strategy and high-value activities.',
    stats: '3x faster growth with 50% less manual work',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: LightBulbIcon,
    title: 'Proven GTM Expertise',
    description: 'We\'re not just consultants—we\'re operators who have scaled startups from zero to millions in ARR.',
    stats: '$100M+ in revenue generated for clients',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: CpuChipIcon,
    title: 'Cutting-Edge AI Technology',
    description: 'Leverage the latest AI and automation tools to gain unfair advantages over your competition.',
    stats: '24/7 automated workflows that never sleep',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Measurable ROI',
    description: 'Every strategy and implementation is designed to deliver measurable results from day one.',
    stats: 'Average 300% ROI within 6 months',
    color: 'from-orange-500 to-red-500'
  }
]

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
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
    }, 4000)
    
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
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-hero-light dark:bg-hero-dark"
      >
        <ParticleBackground />
        <div className="relative z-10 max-w-content mx-auto px-gutter text-center">
          <div className={`section-animate ${heroInView ? 'in-view' : ''}`}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-neon-primary">AI-Powered</span> Go-To-Market<br />
              Strategies for Tomorrow&apos;s Startups
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              We consult, design, and implement seamless AI workflows that turn ideas into scalable growth.
            </p>
            <Link 
              href="/contact"
              className="inline-block btn-primary text-lg px-8 py-4 animate-pulse-glow"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processRef}
        className="py-16 md:py-20 bg-light-section dark:bg-dark-section"
      >
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${processInView ? 'in-view' : ''} text-center mb-12`}>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Our 4-Step Process</h2>
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

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${servicesInView ? 'in-view' : ''} text-center mb-12`}>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Tailored AI-Powered Services</h2>
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

      {/* Why Partner with Us - Animated Carousel */}
      <section 
        ref={aboutRef}
        className="py-16 md:py-20 bg-light-section dark:bg-dark-section relative overflow-hidden"
      >
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${aboutInView ? 'in-view' : ''} text-center mb-12`}>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Why Partner with Us?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the advantages that set us apart in the AI-powered GTM space.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative h-96 md:h-80 overflow-hidden rounded-2xl">
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
                  <div className={`h-full bg-gradient-to-br ${reason.color} p-8 md:p-12 text-white relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 50%, white 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                      }} />
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                          <reason.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold">{reason.title}</h3>
                          <p className="text-white/80 text-sm md:text-base">{reason.stats}</p>
                        </div>
                      </div>
                      <p className="text-lg md:text-xl leading-relaxed text-white/90">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
              aria-label="Previous slide"
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
              aria-label="Next slide"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {partnershipReasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div 
                className="h-full bg-white transition-all duration-100 ease-linear"
                style={{ 
                  width: isAutoPlaying && aboutInView ? `${((currentSlide + 1) / partnershipReasons.length) * 100}%` : '0%'
                }}
              />
            </div>
          </div>

          {/* Auto-play Control */}
          <div className="text-center mt-8">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-neon-primary transition-colors duration-200"
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Schedule your free 30-minute strategy call
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We&apos;ll audit your GTM strategy and explore AI workflow opportunities. No sales pitch—just 
                actionable insights you can implement immediately.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-primary rounded-full mr-3"></div>
                  <span className="text-sm">30-minute discovery call</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-primary rounded-full mr-3"></div>
                  <span className="text-sm">GTM strategy audit</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-primary rounded-full mr-3"></div>
                  <span className="text-sm">AI automation opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-neon-primary rounded-full mr-3"></div>
                  <span className="text-sm">Custom roadmap & recommendations</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}