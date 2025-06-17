"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-space-grotesk">
            Let's build your <span className="text-green-500">GTM machine</span>.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              asChild
              className="bg-green-500 hover:bg-green-600 text-black text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            >
              <Link href="/contact">Book a Free GTM Strategy Session</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black text-lg px-8 py-6 rounded-full transition-all duration-300"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center font-space-grotesk">Get Your Free GTM Audit</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" className="bg-black/50 border-gray-700 focus:border-green-500 h-12" />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="bg-black/50 border-gray-700 focus:border-green-500 h-12"
                  />
                </div>
                <Input placeholder="Company" className="bg-black/50 border-gray-700 focus:border-green-500 h-12" />
                <Textarea
                  placeholder="Tell us about your GTM challenges..."
                  rows={4}
                  className="bg-black/50 border-gray-700 focus:border-green-500"
                />
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
      </div>
    </section>
  )
}
