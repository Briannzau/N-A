'use client'

import { useInView } from 'react-intersection-observer'
import { 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="py-section md:py-32 bg-hero-light dark:bg-hero-dark">
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${heroInView ? 'in-view' : ''} text-center`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Let's <span className="text-neon-primary">Talk</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to transform your go-to-market strategy with AI? Let's discuss your challenges and 
              explore how we can help you scale faster.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPinIcon className="h-16 w-16 text-neon-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">San Francisco, CA</h3>
            <p className="text-gray-600 dark:text-gray-400">Remote-first company</p>
          </div>
        </div>
      </section>

      {/* Calendar Booking */}
      <section ref={formRef} className="py-section md:py-section">
        <div className="max-w-content mx-auto px-gutter">
          <div className="max-w-4xl mx-auto">
            <div className={`section-animate ${formInView ? 'in-view' : ''} text-center mb-12`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Strategy Call</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Schedule your 30-minute strategy call directly and get started on your GTM transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calendar Booking */}
              <div className={`section-animate ${formInView ? 'in-view' : ''}`}>
                <div className="bg-white dark:bg-dark-bg p-8 rounded-lg shadow-lg">
                  <div className="text-center">
                    <ClockIcon className="h-16 w-16 text-neon-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">30-Minute Strategy Call</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Free GTM audit and AI automation consultation
                    </p>
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

              {/* What to Expect */}
              <div className={`section-animate ${formInView ? 'in-view' : ''}`}>
                <div className="bg-white dark:bg-dark-bg p-8 rounded-lg shadow-lg mb-8">
                  <h3 className="text-xl font-semibold mb-6">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-neon-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">30-minute discovery call</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-neon-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">Free GTM audit and actionable recommendations</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-neon-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">Custom proposal if there's a good fit</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-neon-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">No sales pitch—just valuable insights</p>
                    </div>
                  </div>
                </div>

                <div className="bg-light-section dark:bg-dark-section p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Why Book a Call?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-neon-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">Get expert insights on your current GTM approach</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-neon-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">Discover AI automation opportunities specific to your business</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-neon-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">Receive a custom roadmap for scaling your operations</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-neon-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-400">Learn from operators who've scaled companies to millions in ARR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-section md:py-section bg-light-section dark:bg-dark-section">
        <div className="max-w-content mx-auto px-gutter text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Other Ways to Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Follow us on social media for GTM insights, AI automation tips, and company updates.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/company/na-agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white dark:bg-dark-bg px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 card-hover"
            >
              <span className="font-medium">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com/na_agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white dark:bg-dark-bg px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 card-hover"
            >
              <span className="font-medium">Twitter</span>
            </a>
            <a 
              href="https://calendly.com/briannzau/n-a-intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-neon-primary text-black px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 card-hover"
            >
              <ClockIcon className="h-5 w-5" />
              <span className="font-medium">Book a Call</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}