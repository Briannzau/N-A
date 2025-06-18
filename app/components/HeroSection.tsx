"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-gutter relative">
        <div className="max-w-content mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-20 bg-luxury-gold/20 rounded mb-6"></div>
            <div className="h-6 bg-luxury-gold/10 rounded mb-8 max-w-2xl mx-auto"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-12 w-32 bg-luxury-gold/20 rounded"></div>
              <div className="h-12 w-32 bg-luxury-gold/10 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const TypingAnimation = () => {
    const words = ["Velocity", "Growth", "Momentum", "ROI"]
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
      const currentWord = words[currentWordIndex]

      const timeout = setTimeout(
        () => {
          if (isPaused) {
            setIsPaused(false)
            setIsDeleting(true)
            return
          }

          if (isDeleting) {
            setCurrentText(currentWord.substring(0, currentText.length - 1))

            if (currentText === "") {
              setIsDeleting(false)
              setCurrentWordIndex((prev) => (prev + 1) % words.length)
            }
          } else {
            setCurrentText(currentWord.substring(0, currentText.length + 1))

            if (currentText === currentWord) {
              setIsPaused(true)
            }
          }
        },
        isDeleting ? 100 : isPaused ? 2000 : 150,
      )

      return () => clearTimeout(timeout)
    }, [currentText, isDeleting, isPaused, currentWordIndex, words])

    return (
      <span className="luxury-text-gradient relative">
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="inline-block w-1 h-[0.9em] bg-luxury-gold ml-1 align-middle"
        />
      </span>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-gutter relative">
      <div className="max-w-content mx-auto text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-luxury-charcoal"
        >
          Turn Vision into <TypingAnimation />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-luxury-charcoal mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Velkara is the evolution of Go-To-Market — blending strategic execution, AI-powered automation, and full-cycle
          growth experience design into one unified framework.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://calendly.com/briannzau/velkara-intro-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 inline-block"
          >
            Get Your Free GTM Audit
          </a>

          <Link href="/services" className="btn-secondary text-base px-8 py-4 inline-block">
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
