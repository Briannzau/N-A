'use client'

import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const caseStudies = [
  {
    title: 'SaaS Startup: 0 to $1M ARR in 18 Months',
    company: 'TechFlow (Series A)',
    industry: 'B2B SaaS',
    challenge: 'Early-stage startup struggling to find product-market fit and scale their GTM efforts efficiently.',
    solution: 'Implemented AI-powered lead generation, automated nurture sequences, and predictive analytics dashboard.',
    results: [
      { metric: 'ARR Growth', value: '$0 → $1M', icon: CurrencyDollarIcon },
      { metric: 'Lead Quality', value: '+300%', icon: ChartBarIcon },
      { metric: 'Sales Cycle', value: '-40%', icon: ClockIcon },
      { metric: 'Team Efficiency', value: '+250%', icon: UserGroupIcon }
    ],
    testimonial: {
      quote: "N/A didn't just help us find product-market fit—they built us a GTM machine that scales. The AI workflows they implemented generated our first $1M in ARR.",
      author: "Sarah Chen, CEO"
    },
    timeline: '6 months',
    tags: ['Lead Generation', 'Product-Market Fit', 'Automation']
  },
  {
    title: 'E-commerce Brand: GTM Stack Overhaul',
    company: 'StyleSync (Growth Stage)',
    industry: 'E-commerce',
    challenge: 'Fragmented tools, manual processes, and poor customer data visibility limiting growth potential.',
    solution: 'Complete GTM stack integration with 12+ tools, automated customer journey mapping, and AI-powered personalization.',
    results: [
      { metric: 'Conversion Rate', value: '+85%', icon: ChartBarIcon },
      { metric: 'Customer LTV', value: '+120%', icon: CurrencyDollarIcon },
      { metric: 'Response Time', value: '-75%', icon: ClockIcon },
      { metric: 'Automation Coverage', value: '95%', icon: UserGroupIcon }
    ],
    testimonial: {
      quote: "The integrated system N/A built transformed our entire customer experience. We went from reactive to predictive, and our customers love it.",
      author: "Marcus Rodriguez, VP Growth"
    },
    timeline: '8 months',
    tags: ['Stack Integration', 'Customer Experience', 'Personalization']
  },
  {
    title: 'Tech Company: AI-Powered Outbound at Scale',
    company: 'DataVault (Series B)',
    industry: 'Enterprise Software',
    challenge: 'Manual outbound processes couldn\'t scale with growth targets. Low response rates and high CAC.',
    solution: 'Deployed AI agents for personalized outbound, automated follow-up sequences, and intelligent lead scoring.',
    results: [
      { metric: 'Qualified Meetings', value: '+500%', icon: UserGroupIcon },
      { metric: 'Response Rate', value: '+180%', icon: ChartBarIcon },
      { metric: 'Manual Work', value: '-80%', icon: ClockIcon },
      { metric: 'CAC Reduction', value: '-60%', icon: CurrencyDollarIcon }
    ],
    testimonial: {
      quote: "The AI outbound system N/A built is like having 10 SDRs working 24/7. Our pipeline has never been healthier.",
      author: "Emily Watson, Head of Sales"
    },
    timeline: '4 months',
    tags: ['Outbound Automation', 'AI Agents', 'Lead Scoring']
  }
]

export default function CaseStudiesPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [casesRef, casesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="py-section md:py-32 bg-hero-light dark:bg-hero-dark">
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${heroInView ? 'in-view' : ''} text-center`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Case <span className="text-neon-primary">Studies</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real companies, real results. See how we've helped businesses transform their go-to-market 
              strategies with AI-powered automation.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="py-section md:py-section">
        <div className="max-w-content mx-auto px-gutter">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`section-animate ${casesInView ? 'in-view' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white dark:bg-dark-bg rounded-lg shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-neon-primary/10 to-neon-secondary/10 p-8">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-neon-primary/20 text-neon-primary rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {study.timeline} implementation
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{study.title}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {study.company} • {study.industry}
                    </p>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Challenge & Solution */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-neon-secondary">Challenge</h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-neon-primary">Solution</h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-light-section dark:bg-dark-section p-6 rounded-lg">
                          <blockquote className="text-lg italic mb-4">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <cite className="text-neon-primary font-medium">
                            — {study.testimonial.author}
                          </cite>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-xl font-semibold mb-6">Results</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div
                              key={resultIndex}
                              className="bg-light-section dark:bg-dark-section p-6 rounded-lg text-center card-hover"
                            >
                              <div className="w-12 h-12 bg-neon-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <result.icon className="h-6 w-6 text-neon-primary" />
                              </div>
                              <div className="text-2xl font-bold text-neon-primary mb-2">
                                {result.value}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {result.metric}
                              </div>
                            </div>
                          ))}
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

      {/* CTA Section */}
      <section className="py-section md:py-section bg-light-section dark:bg-dark-section">
        <div className="max-w-content mx-auto px-gutter text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to be our next <span className="text-neon-primary">success story</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your GTM challenges and build a custom solution that delivers similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Book a Strategy Call
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}