"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])
  const y3 = useTransform(scrollY, [0, 1000], [0, -50])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      layer: number
    }> = []

    // Create particles for different layers
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        layer: Math.floor(Math.random() * 3) + 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Move particles based on layer speed
        const layerSpeed = particle.layer * 0.3
        particle.x += particle.vx * layerSpeed
        particle.y += particle.vy * layerSpeed

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Mouse interaction with different intensities per layer
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150 / particle.layer

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.02 * particle.layer
          particle.x -= dx * force
          particle.y -= dy * force
        }

        // Draw particle with layer-based styling
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        const alpha = particle.opacity * (0.3 + particle.layer * 0.2)
        ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`
        ctx.fill()

        // Draw connections within same layer
        particles.forEach((otherParticle) => {
          if (particle.layer === otherParticle.layer) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxConnectionDistance = 80 + particle.layer * 20

            if (distance < maxConnectionDistance) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              const connectionAlpha = (1 - distance / maxConnectionDistance) * 0.1 * particle.layer
              ctx.strokeStyle = `rgba(34, 197, 94, ${connectionAlpha})`
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mousePosition])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Gradient layers with parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 bg-gradient-to-tl from-emerald-500/3 via-transparent to-emerald-500/3"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/2 to-transparent"
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
