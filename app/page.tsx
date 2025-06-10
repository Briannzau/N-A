'use client'

import { useInView } from 'react-intersection-observer'
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
  PresentationChartLineIcon
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

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'CEO, TechFlow',
    quote: 'N/A transformed our GTM process. 300% increase in qualified leads within 3 months.',
  },
  {
    name: 'Marcus Rodriguez',
    title: 'VP Growth, DataSync',
    quote: 'The AI workflows they built saved us 20 hours per week on manual outreach.',
  },
  {
    name: 'Emily Watson',
    title: 'Founder, CloudScale',
    quote: 'ROI was immediate. Our conversion rates doubled with their automation.',
  },
]

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })

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

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="py-16 md:py-20 bg-light-section dark:bg-dark-section"
      >
        <div className="max-w-content mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className={`section-animate ${aboutInView ? 'in-view' : ''} lg:col-span-3`}>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Why Partner with Us?</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Our team combines deep GTM expertise with cutting-edge AI automation. We&apos;re not just consultants—we&apos;re 
                  operators who have scaled startups from zero to millions in ARR.
                </p>
                <p>
                  We believe in strategy first, automation second. Every AI workflow we build is grounded in proven 
                  GTM principles and designed to deliver measurable ROI from day one.
                </p>
                <p>
                  From lead generation to customer success, we help you build a GTM engine that scales without 
                  proportional headcount growth.
                </p>
              </div>
            </div>
            
            <div className={`section-animate ${aboutInView ? 'in-view' : ''} lg:col-span-2`}>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-neon-primary/20 to-neon-secondary/20 rounded-full flex items-center justify-center group hover:scale-105 transition-transform duration-200"
                  >
                    <div className="w-12 h-12 bg-white dark:bg-dark-bg rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-neon-primary">T</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-light-section to-white dark:from-dark-section dark:to-dark-bg">
        <div className="max-w-content mx-auto px-gutter">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-primary to-neon-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm">&quot;{testimonial.quote}&quot;</p>
              </div>
            ))}
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