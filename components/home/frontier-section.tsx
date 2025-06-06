"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Brain, Workflow } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "GTM Execution for AI Startups",
    description: "End-to-end GTM systems built for rapid iteration and scale. From positioning to pipeline automation.",
  },
  {
    icon: Brain,
    title: "Automated Sales Agents & Workflows",
    description: "AI-powered outbound that works 24/7. Custom agents trained on your pitch, integrated with your stack.",
  },
  {
    icon: Workflow,
    title: "Modern Stack Integration",
    description: "Systems built on best-in-class tools like Vercel, Notion, Segment & HubSpot. Seamless, scalable, future-proof.",
  },
]

export default function FrontierSection() {
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-green-500">
            Built for the Frontier
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We help AI-native startups and fast-moving companies go from zero to GTM-ready. Whether you're refining product-market fit or scaling outbound with AI agents, N/A provides full-stack GTM systems designed for speed, clarity, and conversion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-gray-800 card-hover h-full backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <feature.icon className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-4 text-green-500">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}