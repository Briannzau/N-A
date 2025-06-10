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

const services = [
  {
    icon: SparklesIcon,
    title: 'AI-Driven Lead Generation',
    description: 'Transform your prospecting with intelligent automation that identifies, enriches, and engages your ideal customers at scale.',
    features: [
      'Automated prospect identification using AI',
      'Real-time data enrichment and validation',
      'Personalized outreach sequences',
      'Lead scoring and qualification',
      'Multi-channel engagement workflows'
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
    title: 'Outbound & Inbound Workflows',
    description: 'Intelligent sequences that nurture leads through every stage of your funnel, from first touch to closed deal.',
    features: [
      'Smart email sequences with AI personalization',
      'Multi-touch campaigns across channels',
      'Behavioral trigger automation',
      'Lead nurturing workflows',
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
    title: 'Growth Analytics & Reporting',
    description: 'Custom dashboards and AI-powered insights that help you make data-driven decisions and optimize your GTM performance.',
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
    title: 'Customer Success Automation',
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-section md:py-32 bg-gradient-to-br from-light-bg via-light-section to-light-bg dark:from-dark-bg dark:via-dark-section dark:to-dark-bg relative overflow-hidden"
      >
        {/* Animated wave background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0,300 C300,200 600,400 1200,300 L1200,600 L0,600 Z" fill="currentColor" className="text-neon-primary">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" 
                values="M0,300 C300,200 600,400 1200,300 L1200,600 L0,600 Z;
                        M0,300 C300,400 600,200 1200,300 L1200,600 L0,600 Z;
                        M0,300 C300,200 600,400 1200,300 L1200,600 L0,600 Z" />
            </path>
          </svg>
        </div>

        <div className="max-w-content mx-auto px-gutter relative z-10">
          <div className={`section-animate ${heroInView ? 'in-view' : ''} text-center`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-neon-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              End-to-end AI-powered solutions designed to accelerate your go-to-market success and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section ref={servicesRef} className="py-section md:py-section">
        <div className="max-w-content mx-auto px-gutter">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`section-animate ${servicesInView ? 'in-view' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-neon-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-neon-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-neon-primary mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href="/contact"
                      className="inline-flex items-center btn-primary"
                    >
                      Get Started
                      <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-white dark:bg-dark-bg p-8 rounded-lg shadow-lg">
                      <h3 className="text-xl font-semibold mb-6">What You'll Get:</h3>
                      <ul className="space-y-4">
                        {service.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-neon-primary rounded-full mr-3"></div>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 p-4 bg-neon-primary/5 rounded-lg border border-neon-primary/20">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Timeline:</strong> 4-8 weeks implementation + ongoing optimization
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

      {/* FAQ Section */}
      <section ref={faqRef} className="py-section md:py-section bg-light-section dark:bg-dark-section">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className={`section-animate ${faqInView ? 'in-view' : ''} text-center mb-16`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`section-animate ${faqInView ? 'in-view' : ''} bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section md:py-section">
        <div className="max-w-content mx-auto px-gutter text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-neon-primary">accelerate</span> your growth?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your GTM challenges and build a custom AI-powered solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book a Strategy Call
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}