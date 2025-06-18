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
          <div className="content-container">
            <div className={`section-animate ${heroInView ? "in-view" : ""} text-section align-center`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-luxury-charcoal">
                Our <span className="text-luxury-gold">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-luxury-charcoal max-w-3xl">
                End-to-end AI-powered solutions designed to accelerate your go-to-market success and drive sustainable
                growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section ref={servicesRef} className="section-responsive">
          <div className="content-container">
            <div className="grid-container grid-1" style={{ gap: "var(--spacing-3xl)" }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`section-animate ${servicesInView ? "in-view" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid-container grid-2 items-center">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="card-icon" style={{ marginBottom: "var(--spacing-lg)" }}>
                        <service.icon className="h-8 w-8 text-luxury-gold" />
                      </div>
                      <h2
                        className="text-3xl md:text-4xl font-bold text-luxury-charcoal"
                        style={{ marginBottom: "var(--spacing-lg)" }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-lg text-luxury-charcoal" style={{ marginBottom: "var(--spacing-xl)" }}>
                        {service.description}
                      </p>

                      <div style={{ marginBottom: "var(--spacing-xl)" }}>
                        <h3
                          className="text-xl font-semibold text-luxury-charcoal"
                          style={{ marginBottom: "var(--spacing-md)" }}
                        >
                          Key Features:
                        </h3>
                        <ul className="feature-list">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="feature-list-item">
                              <CheckIcon
                                className="h-5 w-5 text-luxury-gold flex-shrink-0"
                                style={{ marginTop: "2px" }}
                              />
                              <span className="text-luxury-charcoal">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href="/contact" className="btn-primary">
                        Get Started
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                      </Link>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="card-hover">
                        <div className="card-content">
                          <div className="card-body">
                            <h3 className="text-xl font-semibold text-luxury-charcoal">What You'll Get:</h3>
                            <ul className="feature-list">
                              {service.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="feature-list-item">
                                  <div className="feature-bullet"></div>
                                  <span className="text-luxury-charcoal">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="card-footer">
                            <div className="p-4 bg-luxury-gold/10 rounded-lg border border-luxury-gold/20">
                              <p className="text-sm text-luxury-charcoal">
                                <strong className="text-luxury-charcoal">Timeline:</strong> {service.timeline}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="section-responsive">
          <div className="content-container">
            <div className={`section-animate ${faqInView ? "in-view" : ""} text-section align-center`}>
              <h2 className="text-3xl md:text-5xl font-bold text-luxury-charcoal">Frequently Asked Questions</h2>
              <p className="text-lg text-luxury-charcoal">
                Everything you need to know about our services and process.
              </p>
            </div>

            <div className="grid-container grid-1">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`section-animate ${faqInView ? "in-view" : ""} card-hover`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-content">
                    <h3 className="text-xl font-semibold text-luxury-charcoal">{faq.question}</h3>
                    <p className="text-luxury-charcoal">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-responsive">
          <div className="content-container">
            <div className="text-section align-center">
              <h2 className="text-3xl md:text-5xl font-bold text-luxury-charcoal">
                Ready to <span className="text-luxury-gold">accelerate</span> your growth?
              </h2>
              <p className="text-lg text-luxury-charcoal max-w-2xl">
                Let's discuss your GTM challenges and build a custom AI-powered solution that drives results.
              </p>
            </div>
            <div className="button-group">
              <Link href="/contact" className="btn-primary">
                Book a Strategy Call
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
