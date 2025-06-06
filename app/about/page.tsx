"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const values = [
  {
    title: "AI-First Approach",
    description: "We deploy cutting-edge AI agents and automation to eliminate manual GTM bottlenecks.",
  },
  {
    title: "Results-Driven",
    description: "Every strategy, every implementation, every optimization is measured by revenue impact.",
  },
  {
    title: "Technology-Enabled",
    description: "We leverage the latest AI and automation tools to accelerate GTM functions and scale operations.",
  },
  {
    title: "Systems Mindset",
    description: "We build scalable GTM systems, not one-off campaigns or manual processes.",
  },
]

export default function AboutPage() {
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
            About <span className="text-green-500">N/A</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            We engineer AI-powered GTM systems that scale faster than traditional approaches. Through intelligent automation and cutting-edge tools, we eliminate manual bottlenecks and accelerate revenue growth for frontier companies.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-space-grotesk">
              Why <span className="text-green-500">N/A</span>?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 font-space-grotesk">
                The name says it all: <span className="text-green-500">Not Applicable</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Traditional GTM advice doesn't apply to modern AI-native businesses. Manual processes, outdated playbooks, and human-dependent workflows? Not applicable.
                </p>
                <p>
                  We leverage advanced AI agents, intelligent automation, and modern GTM stacks to build systems that operate 24/7. Our approach combines machine learning, predictive analytics, and automated workflows to accelerate every stage of your go-to-market engine.
                </p>
                <p>
                  From AI-powered lead qualification and automated outbound sequences to intelligent pipeline management and predictive revenue forecasting—we deploy technology that scales beyond human limitations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
              Our <span className="text-green-500">Approach</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4 font-space-grotesk text-green-500">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
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
            Ready to automate your <span className="text-green-500">GTM</span>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              asChild
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-full"
            >
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}