"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPreview() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 font-space-grotesk"
        >
          Built by <span className="text-green-500">GTM Operators</span>, Not Freelancers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-12"
        >
          With experience driving growth at companies like{" "}
          <motion.span whileHover={{ scale: 1.1 }} className="text-green-500 font-semibold cursor-pointer">
            Vercel
          </motion.span>
          ,{" "}
          <motion.span whileHover={{ scale: 1.1 }} className="text-green-500 font-semibold cursor-pointer">
            Netlify
          </motion.span>
          ,{" "}
          <motion.span whileHover={{ scale: 1.1 }} className="text-green-500 font-semibold cursor-pointer">
            JumpCrew
          </motion.span>
          , and{" "}
          <motion.span whileHover={{ scale: 1.1 }} className="text-green-500 font-semibold cursor-pointer">
            Splash
          </motion.span>
          , we've built and led outbound, lifecycle, and product marketing motions. Our team blends technical fluency,
          strategic thinking, and hands-on execution to deliver revenue results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            asChild
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            <Link href="/about">Meet the Team</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
