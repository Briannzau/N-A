"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-12"
        >
          Built by <span className="text-green-500">GTM Operators</span>, Not Freelancers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-300 leading-relaxed"
        >
          With experience driving growth at companies like <span className="text-green-500 font-semibold">Vercel</span>,{" "}
          <span className="text-green-500 font-semibold">Netlify</span>,{" "}
          <span className="text-green-500 font-semibold">JumpCrew</span>, and{" "}
          <span className="text-green-500 font-semibold">Splash</span>, we've built and led outbound, lifecycle, and
          product marketing motions. Our team blends technical fluency, strategic thinking, and hands-on execution to
          deliver revenue results.
        </motion.p>
      </div>
    </section>
  )
}
