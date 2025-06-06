"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
        >
          We Engineer{" "}
          <span className="text-green-500 relative">
            Go-To-Market
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-green-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </span>{" "}
          Systems That Scale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          From product-market fit to automated outbound, N/A helps startups and SMBs scale faster with AI-powered GTM
          strategies and stack execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            Get a Free GTM Audit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
