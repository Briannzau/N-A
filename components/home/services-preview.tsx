"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Settings, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "Find Product-Market Fit",
    description: "Messaging strategy, persona dev, and early testing loops",
    details: "We identify ICPs, test channels, and refine value props to hit traction faster.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Settings,
    title: "Build the GTM Stack",
    description: "From HubSpot to Segment to Apollo to Notion, we build your stack to match your motion.",
    details: "Includes CRM setup, event-driven workflows, lead routing, and pipeline ops.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Zap,
    title: "Automate Everything",
    description: "We deploy AI agents to automate sales follow-ups, reporting, and GTM insights",
    details: "So your team scales without headcount.",
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-space-grotesk">
            Full-Stack <span className="text-green-500">GTM Execution</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just consult—we build, implement, and optimize your entire go-to-market engine.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-500 h-full backdrop-blur-sm overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6"
                    >
                      <service.icon className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 font-space-grotesk">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-green-400 font-medium mb-6">{service.details}</p>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center text-green-500 font-medium group-hover:text-green-400 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            asChild
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            <Link href="/services">Explore All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}