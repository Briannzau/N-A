"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Calendar } from "lucide-react"

export default function ContactPage() {
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
            Let's <span className="text-green-500">Talk</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Ready to engineer a GTM system that scales? Let's discuss your challenges and build a custom solution.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-8 font-space-grotesk">Get Your Free GTM Audit</h2>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input placeholder="John" className="bg-black/50 border-gray-700 focus:border-green-500 h-12" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input placeholder="Doe" className="bg-black/50 border-gray-700 focus:border-green-500 h-12" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        className="bg-black/50 border-gray-700 focus:border-green-500 h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        placeholder="Your Company"
                        className="bg-black/50 border-gray-700 focus:border-green-500 h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company Size</label>
                      <Select>
                        <SelectTrigger className="bg-black/50 border-gray-700 focus:border-green-500 h-12">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Current ARR (if applicable)</label>
                      <Select>
                        <SelectTrigger className="bg-black/50 border-gray-700 focus:border-green-500 h-12">
                          <SelectValue placeholder="Select ARR range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pre-revenue">Pre-revenue</SelectItem>
                          <SelectItem value="0-100k">$0-$100k</SelectItem>
                          <SelectItem value="100k-1m">$100k-$1M</SelectItem>
                          <SelectItem value="1m-10m">$1M-$10M</SelectItem>
                          <SelectItem value="10m+">$10M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">What's your biggest GTM challenge?</label>
                      <Textarea
                        placeholder="Tell us about your current challenges, goals, and what you're looking to achieve..."
                        rows={4}
                        className="bg-black/50 border-gray-700 focus:border-green-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-4 text-lg"
                    >
                      Get My Free Audit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Get in Touch</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Prefer to talk directly? We're here to help. Schedule a call or reach out via email.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">hello@na-gtm.com</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Book a Call</p>
                    <p className="text-gray-400">Schedule a 30-min strategy session</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">San Francisco, CA (Remote-first)</p>
                  </div>
                </motion.div>
              </div>

              <Card className="bg-gray-900/30 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-space-grotesk">What to Expect</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <p className="text-gray-300">30-minute discovery call within 24 hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <p className="text-gray-300">Free GTM audit and recommendations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <p className="text-gray-300">Custom proposal if there's a fit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-4">
                Book a Strategy Call
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
              Frequently Asked <span className="text-green-500">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical engagement take?",
                answer:
                  "Most projects range from 4-12 weeks depending on scope. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with early-stage startups?",
                answer:
                  "Absolutely. We work with companies from pre-revenue to $100M+ ARR. Our approach scales with your business.",
              },
              {
                question: "What's included in the free GTM audit?",
                answer:
                  "We'll analyze your current GTM approach, identify gaps and opportunities, and provide actionable recommendations—all at no cost.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, we offer retainer-based support for optimization, training, and strategic guidance after implementation.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/30 border-gray-800 hover:border-green-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 font-space-grotesk">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
