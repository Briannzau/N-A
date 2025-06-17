"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      pulsePhase: number
    }> = []

    // Create pure gold particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      // Clear with pure white background
      ctx.fillStyle = "#FFFFFF"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Update pulse phase
        particle.pulsePhase += 0.02

        // Calculate pulsing opacity
        const pulseOpacity = particle.opacity * (0.8 + 0.2 * Math.sin(particle.pulsePhase))

        // Pure gold color
        const [r, g, b] = [212, 175, 55]

        // Draw particle with gold glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        // Add gold glow effect
        const glowSize = particle.size * 2
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowSize)

        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${pulseOpacity})`)
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${pulseOpacity * 0.5})`)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

        ctx.fillStyle = gradient
        ctx.fill()

        // Draw connections with pure gold
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)

            // Pure gold connections with subtle pulsing
            const connectionOpacity = 0.3 * (1 - distance / 100) * (0.9 + 0.1 * Math.sin(time * 2))
            ctx.strokeStyle = `rgba(212, 175, 55, ${connectionOpacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }} />
}
