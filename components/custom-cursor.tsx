"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.getAttribute("role") === "button" ||
        target.closest("button") ||
        target.closest("a")
      setIsHovering(!!isInteractive)
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-2 h-2 bg-green-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed w-8 h-8 border border-green-500/50 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />

      {/* Hover effect ring */}
      <motion.div
        className="fixed w-12 h-12 border border-green-500/20 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 2 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />
    </>
  )
}
