"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Settings, Zap } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Find Product-Market Fit",
    description: "Messaging strategy, persona dev, and early testing loops",
    details: "We identify ICPs, test channels, and refine value props to hit traction faster.",
  },
  {
    icon: Settings,
    title: "Build the GTM Stack",
    description: "From HubSpot to Segment to Apollo to Notion, we build your stack to match your motion.",
    details: "Includes CRM setup, event-driven workflows, lead routing, and pipeline ops.",
  },
  {
    icon: Zap,
    title: "Automate Everything",
    description: "We deploy AI agents to automate sales follow-ups, reporting, and GTM insights",
    details: "So your team scales without headcount.",
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Full-Stack <span className="text-green-500">GTM Execution</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 h-full backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-green-400 font-medium">{service.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
