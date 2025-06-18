"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CTAFooter() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-8"
        >
          Let's build your <span className="text-green-500">GTM machine</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-black text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            onClick={() =>
              window.open("https://calendly.com/briannzau/velkara-intro-call", "_blank", "noopener,noreferrer")
            }
          >
            Book a Free GTM Strategy Session
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" className="bg-black/50 border-gray-700 focus:border-green-500" />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="bg-black/50 border-gray-700 focus:border-green-500"
                  />
                </div>
                <Input placeholder="Company" className="bg-black/50 border-gray-700 focus:border-green-500" />
                <Textarea
                  placeholder="Tell us about your GTM challenges..."
                  rows={4}
                  className="bg-black/50 border-gray-700 focus:border-green-500"
                />
                <Button
                  type="button"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3"
                  onClick={() =>
                    window.open("https://calendly.com/briannzau/velkara-intro-call", "_blank", "noopener,noreferrer")
                  }
                >
                  Book a Free GTM Strategy Session
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
