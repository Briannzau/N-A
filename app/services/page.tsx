"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Settings, Zap, Users, BarChart, Brain, Workflow, MessageSquare, Database } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "Product-Market Fit Discovery",
    description: "Find your ideal customer profile and perfect your value proposition",
    features: [
      "ICP Research & Validation",
      "Messaging Framework Development",
      "Channel Testing & Optimization",
      "Value Proposition Refinement",
      "Early Customer Feedback Loops",
    ],
    price: "Starting at $15k",
    timeline: "4-6 weeks",
  },
  {
    icon: Settings,
    title: "GTM Stack Implementation",
    description: "Build and integrate your complete go-to-market technology stack",
    features: [
      "CRM Setup & Configuration",
      "Marketing Automation",
      "Sales Enablement Tools",
      "Analytics & Reporting",
      "Lead Routing & Scoring",
    ],
    price: "Starting at $25k",
    timeline: "6-8 weeks",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Deploy intelligent agents to automate your entire GTM process",
    features: [
      "AI Sales Development Reps",
      "Automated Lead Qualification",
      "Personalized Outreach at Scale",
      "Intelligent Follow-up Sequences",
      "Predictive Analytics",
    ],
    price: "Starting at $35k",
    timeline: "8-12 weeks",
  },
  {
    icon: Users,
    title: "Team Training & Enablement",
    description: "Upskill your team on modern GTM strategies and tools",
    features: [
      "GTM Strategy Workshops",
      "Tool-Specific Training",
      "Process Documentation",
      "Performance Optimization",
      "Ongoing Support",
    ],
    price: "Starting at $10k",
    timeline: "2-4 weeks",
  },
  {
    icon: BarChart,
    title: "Performance Optimization",
    description: "Continuously improve your GTM performance with data-driven insights",
    features: [
      "Conversion Rate Optimization",
      "A/B Testing Programs",
      "Performance Analytics",
      "ROI Measurement",
      "Strategic Recommendations",
    ],
    price: "Starting at $20k",
    timeline: "Ongoing",
  },
  {
    icon: Brain,
    title: "GTM Strategy Consulting",
    description: "Strategic guidance from experienced GTM operators",
    features: [
      "Market Analysis",
      "Competitive Intelligence",
      "Go-to-Market Planning",
      "Channel Strategy",
      "Growth Roadmapping",
    ],
    price: "Starting at $12k",
    timeline: "3-5 weeks",
  },
]

const addOns = [
  {
    icon: Workflow,
    title: "Custom Integrations",
    description: "Connect any tools in your stack with custom APIs and webhooks",
  },
  {
    icon: MessageSquare,
    title: "Content Creation",
    description: "AI-powered content generation for all your GTM channels",
  },
  {
    icon: Database,
    title: "Data Migration",
    description: "Seamlessly migrate data from legacy systems to your new stack",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 font-space-grotesk"
          >
            Our <span className="text-green-500">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            End-to-end GTM solutions designed to scale your business. From strategy to execution, we handle it all.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-green-500" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-500">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.timeline}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 font-space-grotesk">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Add-ons Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
              Additional <span className="text-green-500">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enhance any package with these specialized services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gray-900/30 border-gray-800 hover:border-green-500/30 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <addon.icon className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-space-grotesk">{addon.title}</h3>
                    <p className="text-gray-400 text-sm">{addon.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-8 font-space-grotesk"
          >
            Ready to <span className="text-green-500">scale</span>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              asChild
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-full"
            >
              <Link href="/contact">Book a Strategy Call</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-6 rounded-full"
            >
              <Link href="/portfolio">View Case Studies</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
