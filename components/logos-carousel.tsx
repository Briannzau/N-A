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
]

export default function LogosCarousel() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex space-x-16 whitespace-nowrap"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-2xl font-bold text-gray-500 hover:text-green-500 transition-colors duration-300"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
