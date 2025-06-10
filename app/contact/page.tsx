'use client'

import { useInView } from 'react-intersection-observer'
import ContactForm from '../components/ContactForm'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: 'support@na-agency.ai',
    description: 'Send us an email anytime'
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: '(123) 456-7890',
    description: 'Mon-Fri from 8am to 6pm PST'
  },
  {
    icon: MapPinIcon,
    title: 'Location',
    details: 'San Francisco, CA',
    description: 'Remote-first company'
  },
  {
    icon: ClockIcon,
    title: 'Response Time',
    details: '< 24 hours',
    description: 'We respond to all inquiries quickly'
  }
]

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

      {/* Contact Form & Info */}
      <section ref={formRef} className="py-section md:py-section">
        <div className="max-w-content mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`section-animate ${formInView ? 'in-view' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free GTM Audit</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Schedule a 30-minute strategy call where we'll audit your current GTM approach and identify 
                AI automation opportunities—completely free, no strings attached.
              </p>
              
              <div className="bg-white dark:bg-dark-bg p-8 rounded-lg shadow-lg">
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className={`section-animate ${formInView ? 'in-view' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Prefer to reach out directly? Here are all the ways you can contact us.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white dark:bg-dark-bg rounded-lg shadow-lg card-hover"
                  >
                    <div className="w-12 h-12 bg-neon-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-neon-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-neon-primary font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="bg-light-section dark:bg-dark-section p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-neon-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-400">30-minute discovery call within 24 hours</p>
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
              href="mailto:support@na-agency.ai"
              className="flex items-center space-x-2 bg-neon-primary text-black px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 card-hover"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span className="font-medium">Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}