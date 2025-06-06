"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <motion.section style={{ opacity, scale }} className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Replace blur-heavy gradient with optimized version */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.08), transparent 70%), linear-gradient(60deg, rgba(34, 197, 94, 0.05) 0%, transparent 50%, rgba(34, 197, 94, 0.05) 100%)",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight font-space-grotesk"
        >
          We Engineer{" "}
          <span className="relative">
            <motion.span
              className="text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Go-To-Market
            </motion.span>
            <motion.div
              className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              style={{ transformOrigin: "left" }}
            />
          </span>{" "}
          <br />
          Systems That{" "}
          <motion.span
            className="inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            style={{
              background: "linear-gradient(90deg, #22c55e, #10b981, #22c55e)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transform: "translateZ(0)",
              willChange: "background-position",
            }}
          >
            Scale
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-inter"
        >
          N/A helps startups and SMBs scale faster with AI-driven GTM strategies and stack execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            asChild
            className="bg-green-500 hover:bg-green-600 text-black text-lg px-8 py-6 rounded-full transition-transform duration-300 hover:scale-105"
          >
            <Link href="/contact">Get a Free GTM Audit</Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black text-lg px-8 py-6 rounded-full transition-transform duration-300"
          >
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20"
        >
          <p className="text-sm text-gray-500 mb-4">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-green-500 rounded-full mx-auto relative"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              className="w-1 h-3 bg-green-500 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}