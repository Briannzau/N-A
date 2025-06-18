"use client"

import { useCallback, useMemo } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"

export default function HexagonParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional callback when particles are loaded
  }, [])

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Make background transparent instead of white
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#D4AF37", // Pure gold particles
        },
        links: {
          color: "#D4AF37", // Pure gold connections
          distance: 150,
          enable: true,
          opacity: 0.2, // Increased from 0.1
          width: 1.5,
          triangles: {
            enable: false,
          },
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80, // Increased from 40
        },
        opacity: {
          value: 0.25, // Increased from 0.15
          random: {
            enable: true,
            minimumValue: 0.1, // Increased from 0.05
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1, // Increased from 0.05
            sync: false,
          },
        },
        shape: {
          type: "polygon",
          polygon: {
            sides: 6, // Hexagon
          },
        },
        size: {
          value: { min: 1, max: 6 }, // Increased max from 4 to 6
          random: {
            enable: true,
            minimumValue: 1,
          },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0 w-full h-full min-h-screen"
      style={{ zIndex: -1 }}
    />
  )
}
