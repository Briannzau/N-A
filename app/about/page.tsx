'use client'

import { useInView } from 'react-intersection-observer'
import { 
  LightBulbIcon, 
  ChartBarIcon, 
  RocketLaunchIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'
import ContactForm from '../components/ContactForm'

const values = [
  {
    icon: LightBulbIcon,
    title: 'Strategic Clarity',
    description: 'We cut through the noise to identify what really drives growth for your business.'
  },
  {
    icon: ChartBarIcon,
    title: 'ROI Obsession',
    description: 'Every recommendation is backed by data and designed to deliver measurable results.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Innovation',
    description: 'We leverage cutting-edge AI and automation to give you unfair advantages.'
  }
]

const team = [
  {
    name: 'Alex Chen',
    title: 'Founder & CEO',
    bio: 'Former VP of Growth at two unicorn startups. Built and scaled GTM teams from 0 to $100M ARR.',
    linkedin: 'https://linkedin.com/in/alexchen'
  },
  {
    name: 'Sarah Rodriguez',
    title: 'Head of AI Strategy',
    bio: 'Ex-Google AI researcher turned GTM operator. Expert in ML-powered sales and marketing automation.',
    linkedin: 'https://linkedin.com/in/sarahrodriguez'
  },
  {
    name: 'Marcus Johnson',
    title: 'Senior GTM Consultant',
    bio: 'Former Salesforce solutions architect. Specializes in CRM optimization and sales process automation.',
    linkedin: 'https://linkedin.com/in/marcusjohnson'
  },
  {
    name: 'Emily Watson',
    title: 'Data & Analytics Lead',
    bio: 'Former data scientist at Stripe. Builds custom analytics and reporting systems for GTM teams.',
    linkedin: 'https://linkedin.com/in/emilywatson'
  }
]

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [careersRef, careersInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="py-section md:py-32 bg-hero-light dark:bg-hero-dark">
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${heroInView ? 'in-view' : ''} text-center`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <span className="text-neon-primary">N/A</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We're a team of GTM operators and AI experts who believe that traditional go-to-market strategies 
              are no longer applicable in today's AI-driven world. That's why we're called N/A—Not Applicable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section ref={valuesRef} className="py-section md:py-section">
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${valuesInView ? 'in-view' : ''} text-center mb-16`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We exist to help ambitious companies build GTM engines that scale faster than traditional approaches 
              through intelligent automation and AI-powered insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`section-animate ${valuesInView ? 'in-view' : ''} text-center card-hover bg-white dark:bg-dark-bg p-8 rounded-lg shadow-lg`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-neon-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-neon-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section md:py-section bg-light-section dark:bg-dark-section">
        <div className="max-w-content mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
                <p>
                  N/A was born from frustration. As GTM operators at high-growth startups, we kept seeing the same 
                  problems: manual processes that don't scale, disconnected tools, and strategies that worked five 
                  years ago but fail today.
                </p>
                <p>
                  We realized that traditional GTM playbooks are simply not applicable (N/A) in an AI-first world. 
                  Companies need systems that can operate 24/7, learn from data, and adapt in real-time.
                </p>
                <p>
                  So we built N/A to bridge the gap between cutting-edge AI technology and proven GTM strategies. 
                  We're not just consultants—we're operators who have been in your shoes and know what it takes to scale.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-neon-primary/20 to-neon-secondary/20 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-neon-primary mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Companies Scaled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-primary mb-2">$500M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-primary mb-2">300%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Avg Growth Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">AI Systems Running</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-section md:py-section">
        <div className="max-w-content mx-auto px-gutter">
          <div className={`section-animate ${teamInView ? 'in-view' : ''} text-center mb-16`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A diverse team of GTM operators, AI experts, and data scientists united by a passion for helping 
              companies scale faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`section-animate ${teamInView ? 'in-view' : ''} text-center group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-neon-primary to-neon-secondary rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold group-hover:scale-105 transition-transform duration-200">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-primary hover:text-white transition-colors"
                    >
                      <BriefcaseIcon className="h-8 w-8" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-neon-primary font-medium mb-3">{member.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section ref={careersRef} className="py-section md:py-section bg-light-section dark:bg-dark-section">
        <div className="max-w-content mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`section-animate ${careersInView ? 'in-view' : ''}`}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We're always looking for talented GTM operators, AI engineers, and data scientists who share our 
                vision of building the future of go-to-market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <UserGroupIcon className="h-6 w-6 text-neon-primary mr-3" />
                  <span>Remote-first culture</span>
                </div>
                <div className="flex items-center">
                  <AcademicCapIcon className="h-6 w-6 text-neon-primary mr-3" />
                  <span>Continuous learning budget</span>
                </div>
                <div className="flex items-center">
                  <RocketLaunchIcon className="h-6 w-6 text-neon-primary mr-3" />
                  <span>Equity in a fast-growing company</span>
                </div>
              </div>
            </div>

            <div className={`section-animate ${careersInView ? 'in-view' : ''} bg-white dark:bg-dark-bg p-8 rounded-lg shadow-lg`}>
              <h3 className="text-2xl font-semibold mb-6">Interested in joining us?</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}