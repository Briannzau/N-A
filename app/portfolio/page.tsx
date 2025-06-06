"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Zap, Target, BarChart, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const caseStudies = [
  {
    id: "saas-startup-pmf",
    title: "SaaS Startup: 0 to $1M ARR in 18 Months",
    category: "Product-Market Fit",
    client: "TechFlow (Stealth Mode)",
    industry: "B2B SaaS",
    description:
      "A early-stage B2B SaaS startup struggling to find product-market fit and scale their go-to-market efforts.",
    challenge: "No clear ICP, scattered messaging, manual processes, and burning through runway without traction.",
    solution: "Complete GTM overhaul: ICP research, messaging framework, automated outbound, and stack implementation.",
    results: [
      { metric: "ARR Growth", value: "$0 → $1M", icon: TrendingUp },
      { metric: "Qualified Leads", value: "+300%", icon: Target },
      { metric: "CAC Reduction", value: "-85%", icon: BarChart },
      { metric: "Time to Close", value: "-60%", icon: Clock },
    ],
    image: "/placeholder.svg?height=600&width=800",
    testimonial: {
      quote: "N/A didn't just consult—they became our GTM team. The results speak for themselves.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
    },
    tags: ["Product-Market Fit", "Messaging", "Automation", "B2B SaaS"],
  },
  {
    id: "ecommerce-stack",
    title: "E-commerce: Complete GTM Stack Transformation",
    category: "Stack Implementation",
    client: "GreenLife Essentials",
    industry: "E-commerce",
    description: "A growing e-commerce brand with fragmented tools and manual processes limiting their scale.",
    challenge: "Disconnected tools, manual data entry, poor customer experience, and inability to scale operations.",
    solution: "Integrated 12+ tools into a unified GTM stack with automated workflows and real-time analytics.",
    results: [
      { metric: "Conversion Rate", value: "+40%", icon: TrendingUp },
      { metric: "Response Time", value: "-60%", icon: Clock },
      { metric: "Automation Coverage", value: "90%", icon: Zap },
      { metric: "Customer LTV", value: "+35%", icon: Users },
    ],
    image: "/placeholder.svg?height=600&width=800",
    testimonial: {
      quote: "Our operations went from chaos to clockwork. We can finally focus on growth instead of firefighting.",
      author: "Marcus Rodriguez",
      role: "Founder, GreenLife Essentials",
    },
    tags: ["Stack Integration", "Automation", "E-commerce", "CRM"],
  },
  {
    id: "ai-outbound",
    title: "Tech Company: AI-Powered Outbound at Scale",
    category: "Automation",
    client: "DataSync Pro",
    industry: "Enterprise Software",
    description: "An enterprise software company needing to scale outbound sales without increasing headcount.",
    challenge: "Manual outbound processes, low response rates, sales team overwhelmed, and high cost per acquisition.",
    solution: "Deployed AI agents for prospecting, personalization, follow-ups, and meeting scheduling.",
    results: [
      { metric: "Qualified Meetings", value: "+500%", icon: Target },
      { metric: "Manual Work", value: "-80%", icon: Zap },
      { metric: "Close Rate", value: "+25%", icon: TrendingUp },
      { metric: "Cost per Lead", value: "-70%", icon: BarChart },
    ],
    image: "/placeholder.svg?height=600&width=800",
    testimonial: {
      quote: "The AI agents work 24/7 and book more qualified meetings than our entire sales team used to.",
      author: "Jennifer Park",
      role: "VP Sales, DataSync Pro",
    },
    tags: ["AI Automation", "Outbound Sales", "Lead Generation", "Enterprise"],
  },
]

export default function PortfolioPage() {
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
            Our <span className="text-green-500">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Real companies, real results. Explore detailed case studies of how we've helped businesses engineer scalable
            go-to-market systems.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-6">
                  <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">{study.title}</h2>

                <div className="space-y-4 mb-8 text-gray-300">
                  <p>
                    <strong className="text-white">Client:</strong> {study.client}
                  </p>
                  <p>
                    <strong className="text-white">Industry:</strong> {study.industry}
                  </p>
                  <p>
                    <strong className="text-white">Challenge:</strong> {study.challenge}
                  </p>
                  <p>
                    <strong className="text-white">Solution:</strong> {study.solution}
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {study.results.map((result, resultIndex) => (
                    <motion.div
                      key={resultIndex}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center"
                    >
                      <result.icon className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-500 mb-1">{result.value}</div>
                      <div className="text-sm text-gray-400">{result.metric}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial */}
                <Card className="bg-gray-900/50 border-gray-800 mb-8">
                  <CardContent className="p-6">
                    <p className="text-lg italic mb-4">"{study.testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-400">{study.testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button asChild className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                  <Link href={`/portfolio/${study.id}`}>
                    View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden"
                >
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
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
            Ready to be our next <span className="text-green-500">success story</span>?
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
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            >
              <Link href="/contact">Start Your GTM Transformation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
