"use client"

import { motion } from "framer-motion"

const logos = [
  "Vercel",
  "Netlify",
  "Salesforce",
  "ZoomInfo",
  "HubSpot",
  "Next.js",
  "React",
  "Outreach.io",
  "v0",
  "Cursor",
  "Bolt.new",
  "Apollo",
  "Segment",
  "Notion",
]

export default function LogosCarousel() {
  return (
    <section className="py-20 overflow-hidden border-y border-gray-800">
      <div className="relative">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex space-x-16 whitespace-nowrap"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, color: "#22c55e" }}
              className="flex-shrink-0 text-2xl md:text-3xl font-bold text-gray-500 hover:text-green-500 transition-colors duration-300 font-space-grotesk"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
