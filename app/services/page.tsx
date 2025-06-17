"use client"

import { useInView } from "react-intersection-observer"
import {
  SparklesIcon,
  BoltIcon,
  PresentationChartLineIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// Dynamic import to avoid SSR issues
const HexagonParticles = dynamic(() => import("../components/HexagonParticles"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-white" />,
})

const services = [
  {
    icon: SparklesIcon,
    title: "Website Design & Modernization",
    description:
      "Transform your online presence with cutting-edge design and modern web technologies that convert visitors into customers.",
    features: [
      "Responsive design for all devices",
      "Modern UI/UX with conversion optimization",
      "Performance optimization and speed enhancement",
      "SEO-friendly architecture and structure",
      "Accessibility compliance and best practices",
    ],
    deliverables: [
      "Custom responsive website design",
      "Mobile-optimized user experience",
      "Performance optimization report",
      "SEO foundation setup",
    ],
    timeline: "6-12 weeks implementation + ongoing maintenance",
  },
  {
    icon: BoltIcon,
    title: "AI Workflow Optimizations for Marketing",
    description:
      "Streamline your marketing operations with intelligent automation that optimizes campaigns, personalizes content, and maximizes ROI across all channels.",
    features: [
      "Automated campaign optimization and A/B testing",
      "AI-powered content personalization at scale",
      "Cross-channel marketing automation workflows",
      "Predictive lead scoring and segmentation",
      "Real-time campaign performance optimization",
    ],
    deliverables: [
      "Custom marketing automation workflows",
      "AI-powered personalization engine",
      "Campaign optimization dashboard",
      "Lead scoring and segmentation system",
    ],
    timeline: "4-8 weeks implementation + ongoing optimization",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Growth Analytics & Reporting",
    description:
      "Custom dashboards and AI-powered insights that help you make data-driven decisions and optimize your GTM performance.",
    features: [
      "Real-time performance dashboards",
      "Predictive analytics and forecasting",
      "Attribution modeling",
      "ROI tracking and optimization",
      "Automated reporting and alerts",
    ],
    deliverables: [
      "Custom analytics dashboard",
      "Automated reporting system",
      "KPI tracking setup",
      "Data visualization tools",
    ],
    timeline: "3-6 weeks implementation + monthly reporting",
  },
]

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Most implementations take 4-8 weeks depending on complexity. We work in sprints to deliver value quickly and iterate based on results.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes! We work with companies from pre-revenue to $100M+ ARR. Our approach scales with your business and budget.",
  },
  {
    question: "What tools do you integrate with?",
    answer:
      "We work with all major CRM, marketing automation, and sales tools including HubSpot, Salesforce, Marketo, Outreach, and many others.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Absolutely. We offer retainer-based support for optimization, training, and strategic guidance after implementation.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We focus on metrics that matter: qualified leads, conversion rates, deal velocity, and ultimately revenue growth. Every project includes clear KPIs and regular reporting.",
  },
]

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true })
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
        <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center">
          {/* Content */}
          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className={`section-animate ${heroInView ? "in-view" : ""} text-center`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-luxury-charcoal">
                Our <span className="text-luxury-gold">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-luxury-charcoal max-w-3xl mx-auto">
                End-to-end AI-powered solutions designed to accelerate your go-to-market success and drive sustainable
                growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Section - Glass background */}
        <section ref={servicesRef} className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-luxury-white/80 backdrop-blur-md border-y border-luxury-gold/10"></div>

          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`section-animate ${servicesInView ? "in-view" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="w-16 h-16 bg-luxury-gold/20 rounded-lg flex items-center justify-center mb-6">
                        <service.icon className="h-8 w-8 text-luxury-gold" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-luxury-charcoal">{service.title}</h2>
                      <p className="text-lg text-luxury-charcoal mb-8">{service.description}</p>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-luxury-charcoal">Key Features:</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckIcon className="h-5 w-5 text-luxury-gold mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-luxury-charcoal">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-luxury-gold text-white font-semibold rounded-lg hover:bg-luxury-gold-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                      >
                        Get Started
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                      </Link>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="bg-luxury-white border border-luxury-gold/30 p-8 rounded-lg">
                        <h3 className="text-xl font-semibold mb-6 text-luxury-charcoal">What You'll Get:</h3>
                        <ul className="space-y-4">
                          {service.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                              <span className="text-luxury-charcoal">{deliverable}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8 p-4 bg-luxury-gold/10 rounded-lg border border-luxury-gold/20">
                          <p className="text-sm text-luxury-charcoal">
                            <strong className="text-luxury-charcoal">Timeline:</strong> {service.timeline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Glass background */}
        <section ref={faqRef} className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-luxury-white/90 backdrop-blur-md border-y border-luxury-gold/20"></div>

          <div className="max-w-4xl mx-auto px-gutter relative z-10">
            <div className={`section-animate ${faqInView ? "in-view" : ""} text-center mb-16`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-luxury-charcoal">Frequently Asked Questions</h2>
              <p className="text-lg text-luxury-charcoal">
                Everything you need to know about our services and process.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`section-animate ${faqInView ? "in-view" : ""} bg-luxury-white border border-luxury-gold/30 p-6 rounded-lg hover:border-luxury-gold transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-luxury-charcoal">{faq.question}</h3>
                  <p className="text-luxury-charcoal">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Glass background */}
        <section className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-luxury-white/80 backdrop-blur-md border-y border-luxury-gold/10"></div>

          <div className="max-w-content mx-auto px-gutter text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-luxury-charcoal">
              Ready to <span className="text-luxury-gold">accelerate</span> your growth?
            </h2>
            <p className="text-lg text-luxury-charcoal mb-8 max-w-2xl mx-auto">
              Let's discuss your GTM challenges and build a custom AI-powered solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-luxury-gold text-white font-semibold rounded-lg hover:bg-luxury-gold-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-lg hover:bg-luxury-gold hover:text-white transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
