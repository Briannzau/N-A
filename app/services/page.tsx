'use client'

import { useInView } from 'react-intersection-observer'
import { 
  SparklesIcon, 
  BoltIcon, 
  PresentationChartLineIcon, 
  UserGroupIcon,
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Dynamic import to avoid SSR issues
const HexagonParticles = dynamic(() => import('../components/HexagonParticles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0a0c1c]" />
})

const services = [
  {
    icon: SparklesIcon,
    title: 'AI-Powered Lead Genesis',
    description: 'Transform your prospecting with autonomous intelligence that identifies, enriches, and engages your ideal customers at scale.',
    features: [
      'Autonomous prospect identification using neural networks',
      'Real-time data enrichment and validation',
      'Hyper-personalized outreach sequences',
      'Predictive lead scoring and qualification',
      'Multi-channel engagement orchestration'
    ],
    deliverables: [
      'Custom AI prospecting system',
      'Integrated CRM workflows',
      'Performance dashboards',
      'Training and documentation'
    ]
  },
  {
    icon: BoltIcon,
    title: 'Neural Growth Workflows',
    description: 'Intelligent sequences that adapt and evolve through every stage of your funnel, from first touch to expansion revenue.',
    features: [
      'Smart email sequences with AI personalization',
      'Multi-touch campaigns across channels',
      'Behavioral trigger automation',
      'Adaptive lead nurturing workflows',
      'Sales handoff optimization'
    ],
    deliverables: [
      'Automated nurture sequences',
      'Cross-channel campaign setup',
      'Lead routing system',
      'Performance tracking'
    ]
  },
  {
    icon: PresentationChartLineIcon,
    title: 'Predictive Growth Analytics',
    description: 'Custom dashboards and AI-powered insights that help you make data-driven decisions and optimize your GXM performance.',
    features: [
      'Real-time performance dashboards',
      'Predictive analytics and forecasting',
      'Attribution modeling',
      'ROI tracking and optimization',
      'Automated reporting and alerts'
    ],
    deliverables: [
      'Custom analytics dashboard',
      'Automated reporting system',
      'KPI tracking setup',
      'Data visualization tools'
    ]
  },
  {
    icon: UserGroupIcon,
    title: 'Autonomous Success Systems',
    description: 'AI-powered systems that proactively identify at-risk customers, automate support workflows, and drive expansion revenue.',
    features: [
      'Churn prediction and prevention',
      'Automated onboarding sequences',
      'Health score monitoring',
      'Expansion opportunity identification',
      'Support ticket automation'
    ],
    deliverables: [
      'Customer health monitoring',
      'Automated onboarding flows',
      'Churn prevention system',
      'Expansion tracking dashboard'
    ]
  }
]

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Most implementations take 4-8 weeks depending on complexity. We work in sprints to deliver value quickly and iterate based on results.'
  },
  {
    question: 'Do you work with early-stage startups?',
    answer: 'Yes! We work with companies from pre-revenue to $100M+ ARR. Our approach scales with your business and budget.'
  },
  {
    question: 'What tools do you integrate with?',
    answer: 'We work with all major CRM, marketing automation, and sales tools including HubSpot, Salesforce, Marketo, Outreach, and many others.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Absolutely. We offer retainer-based support for optimization, training, and strategic guidance after implementation.'
  },
  {
    question: 'How do you measure success?',
    answer: 'We focus on metrics that matter: qualified leads, conversion rates, deal velocity, and ultimately revenue growth. Every project includes clear KPIs and regular reporting.'
  }
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
    <div className="relative min-h-screen bg-[#0a0c1c] overflow-hidden">
      {/* Hexagon Particles Background */}
      {mounted && <HexagonParticles />}

      <div className="relative z-10 pt-16">
        {/* Hero Section - Transparent background */}
        <section 
          ref={heroRef}
          className="relative min-h-[80vh] flex items-center justify-center"
        >
          {/* Content */}
          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className={`section-animate ${heroInView ? 'in-view' : ''} text-center`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                Our <span className="text-[#00FFDD]">Neural Systems</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end AI-powered solutions designed to accelerate your growth velocity and drive sustainable expansion.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Section - Glass background */}
        <section ref={servicesRef} className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-black/10 dark:bg-white/5 backdrop-blur-md border-y border-white/10 dark:border-gray-700/20"></div>
          
          <div className="max-w-content mx-auto px-gutter relative z-10">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`section-animate ${servicesInView ? 'in-view' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="w-16 h-16 bg-[#00FFDD]/20 rounded-lg flex items-center justify-center mb-6">
                        <service.icon className="h-8 w-8 text-[#00FFDD]" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{service.title}</h2>
                      <p className="text-lg text-gray-300 mb-8">{service.description}</p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-white">Neural Capabilities:</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckIcon className="h-5 w-5 text-[#00FFDD] mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link 
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-[#00FFDD] text-black font-semibold rounded-lg hover:bg-[#00D4AA] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,221,0.3)]"
                      >
                        Deploy System
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                      </Link>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/20 dark:border-gray-700/30">
                        <h3 className="text-xl font-semibold mb-6 text-white">System Deliverables:</h3>
                        <ul className="space-y-4">
                          {service.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-[#00FFDD] rounded-full mr-3"></div>
                              <span className="text-gray-300">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-8 p-4 bg-[#00FFDD]/10 rounded-lg border border-[#00FFDD]/20">
                          <p className="text-sm text-gray-300">
                            <strong className="text-white">Deployment Timeline:</strong> 4-8 weeks implementation + ongoing optimization
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
          <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-md border-y border-white/20 dark:border-gray-700/30"></div>
          
          <div className="max-w-4xl mx-auto px-gutter relative z-10">
            <div className={`section-animate ${faqInView ? 'in-view' : ''} text-center mb-16`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Neural Network FAQ</h2>
              <p className="text-lg text-gray-300">
                Everything you need to know about our systems and deployment process.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`section-animate ${faqInView ? 'in-view' : ''} bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 dark:border-gray-700/30 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Glass background */}
        <section className="py-section md:py-section relative">
          {/* Glass background overlay */}
          <div className="absolute inset-0 bg-black/10 dark:bg-white/5 backdrop-blur-md border-y border-white/10 dark:border-gray-700/20"></div>
          
          <div className="max-w-content mx-auto px-gutter text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="text-[#00FFDD]">accelerate</span> your growth?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your growth challenges and build a custom AI-powered GXM system that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-[#00FFDD] text-black font-semibold rounded-lg hover:bg-[#00D4AA] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,221,0.3)]"
              >
                Enter the Matrix
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 border-2 border-[#00FFDD] text-[#00FFDD] font-semibold rounded-lg hover:bg-[#00FFDD] hover:text-black transition-all duration-300"
              >
                Learn About GXM
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}