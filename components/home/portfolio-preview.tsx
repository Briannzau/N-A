"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const portfolioItems = [
  {
    title: "SaaS Startup: 0 to $1M ARR",
    category: "Product-Market Fit",
    description:
      "Helped a B2B SaaS startup find PMF and scale to $1M ARR in 18 months through strategic positioning and automated outbound.",
    metrics: ["300% increase in qualified leads", "85% reduction in CAC", "$1M ARR achieved"],
    icon: TrendingUp,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "E-commerce: GTM Stack Overhaul",
    category: "Stack Implementation",
    description:
      "Built a complete GTM stack for a growing e-commerce brand, integrating 12+ tools for seamless customer journey automation.",
    metrics: ["40% increase in conversion rate", "60% faster lead response time", "90% automation coverage"],
    icon: Users,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Tech Company: AI-Powered Outbound",
    category: "Automation",
    description:
      "Deployed AI agents for a tech company's outbound sales, resulting in 5x more qualified meetings with 80% less manual work.",
    metrics: ["500% increase in qualified meetings", "80% reduction in manual work", "25% higher close rate"],
    icon: Zap,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function PortfolioPreview() {
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
            Proven <span className="text-green-500">Results</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real companies, real growth. See how we've helped businesses scale their GTM operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-500 h-full backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <item.icon className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-space-grotesk">{item.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

                  <div className="space-y-2 mb-6">
                    {item.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                        <span className="text-green-400">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-green-500 font-medium cursor-pointer"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
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
            <Link href="/portfolio">View All Case Studies</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
