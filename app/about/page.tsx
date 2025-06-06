"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const team = [
  {
    name: "Alex Chen",
    role: "Founder & GTM Strategist",
    bio: "Former VP of Growth at Vercel. Built and scaled GTM operations from $0 to $100M ARR. Expert in product-market fit and automated outbound.",
    experience: ["Vercel", "Netlify", "Stripe"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex@na-gtm.com",
    },
  },
  {
    name: "Sarah Rodriguez",
    role: "Head of Operations",
    bio: "Former Director of Sales Operations at JumpCrew. Specialized in GTM stack implementation and process automation. 8+ years in B2B SaaS.",
    experience: ["JumpCrew", "Splash", "HubSpot"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@na-gtm.com",
    },
  },
  {
    name: "Marcus Kim",
    role: "AI & Automation Lead",
    bio: "Former ML Engineer at OpenAI. Builds AI agents for sales and marketing automation. PhD in Computer Science from Stanford.",
    experience: ["OpenAI", "Anthropic", "Google"],
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marcus@na-gtm.com",
    },
  },
]

const values = [
  {
    title: "Operator-First",
    description: "We're not consultants—we're operators who've built and scaled GTM systems ourselves.",
  },
  {
    title: "Results-Driven",
    description: "Every strategy, every implementation, every optimization is measured by revenue impact.",
  },
  {
    title: "Technology-Enabled",
    description: "We leverage the latest AI and automation tools to give our clients unfair advantages.",
  },
  {
    title: "Partnership Mindset",
    description: "We become an extension of your team, not just another vendor.",
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
            We're GTM operators who've been in your shoes. We've built, scaled, and optimized go-to-market systems at
            some of the fastest-growing companies in tech. Now we're here to help you do the same.
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

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 font-space-grotesk">
                The name says it all: <span className="text-green-500">Not Applicable</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Traditional GTM advice doesn't apply to modern businesses. Cookie-cutter strategies, outdated
                  playbooks, and one-size-fits-all solutions? Not applicable.
                </p>
                <p>
                  We believe every company needs a custom-engineered GTM system that fits their unique market, product,
                  and growth stage. That's why we don't use templates—we build from scratch.
                </p>
                <p>
                  Our team has been on the front lines of GTM at companies like Vercel, Netlify, and JumpCrew. We know
                  what works because we've done it ourselves.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm border border-green-500/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Companies Scaled</span>
                    <span className="text-3xl font-bold text-green-500">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Combined ARR Generated</span>
                    <span className="text-3xl font-bold text-green-500">$500M+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Average Growth Rate</span>
                    <span className="text-3xl font-bold text-green-500">300%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Client Satisfaction</span>
                    <span className="text-3xl font-bold text-green-500">100%</span>
                  </div>
                </div>
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
              Our <span className="text-green-500">Values</span>
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
                whileHover={{ y: -5 }}
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

      {/* Team Section */}
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
              Meet the <span className="text-green-500">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              GTM operators with proven track records at the world's fastest-growing companies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-500 h-full overflow-hidden">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 font-space-grotesk">{member.name}</h3>
                    <p className="text-green-500 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>

                    <div className="mb-6">
                      <p className="text-sm text-gray-400 mb-2">Previously at:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.experience.map((company, companyIndex) => (
                          <span key={companyIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-green-500 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href={member.social.twitter} className="text-gray-400 hover:text-green-500 transition-colors">
                        <Twitter size={20} />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-green-500 transition-colors"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
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
            Ready to work with <span className="text-green-500">operators</span>?
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
