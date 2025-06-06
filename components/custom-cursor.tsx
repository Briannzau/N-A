"use client"

import { motion, useMotionValue } from "framer-motion"
import { useState, useEffect } from "react"
import { useThrottledCallback } from "@/hooks/use-throttle"

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const updateMousePosition = useThrottledCallback((e: MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }, 16)

  useEffect(() => {
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

    document.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [updateMousePosition])

  // Hide cursor on mobile/touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed w-2 h-2 bg-green-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: -4,
          translateY: -4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 500,
        }}
      />

      <motion.div
        className="fixed w-8 h-8 border border-green-500/50 rounded-full pointer-events-none z-50"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: -16,
          translateY: -16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
        }}
      />
    </>
  )
}