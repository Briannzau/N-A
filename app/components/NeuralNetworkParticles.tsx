'use client'

import { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Container, Engine } from 'tsparticles-engine'

export default function NeuralNetworkParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional callback when particles are loaded
  }, [])

  const options = useMemo(() => ({
    background: {
      color: {
        value: 'transparent', // Let the gradient background show through
      },
    },
    fpsLimit: 60, // Optimized for performance
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.8,
          },
        },
      },
    },
    particles: {
      color: {
        value: '#00FFDD', // Neon aqua
      },
      links: {
        color: '#00FFDD',
        distance: 120,
        enable: true,
        opacity: 0.3,
        width: 1,
        triangles: {
          enable: false,
        },
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: {
          default: 'out' as const,
        },
        random: true,
        speed: 0.8, // Slow drift
        straight: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 50, // Moderate number for performance
      },
      opacity: {
        value: 0.6,
        random: {
          enable: true,
          minimumValue: 0.2,
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.2,
          sync: false,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 6 },
        random: {
          enable: true,
          minimumValue: 2,
        },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 2,
          sync: false,
        },
      },
      // Pulse effect
      life: {
        duration: {
          sync: false,
          value: 3,
        },
        count: 0,
        delay: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: 1,
        },
      },
    },
    detectRetina: true,
    // Add subtle pulse animation
    emitters: {
      autoPlay: true,
      fill: true,
      life: {
        wait: false,
      },
      rate: {
        quantity: 1,
        delay: 3, // Pulse every 3 seconds
      },
      shape: 'circle',
      startCount: 0,
      size: {
        mode: 'percent',
        height: 0,
        width: 0,
      },
      particles: {
        shape: {
          type: 'circle',
        },
        size: {
          value: 8,
          animation: {
            enable: true,
            speed: 10,
            minimumValue: 2,
            sync: true,
            startValue: 'max',
            destroy: 'min',
          },
        },
        opacity: {
          value: 0.8,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0,
            sync: true,
            startValue: 'max',
            destroy: 'min',
          },
        },
        color: {
          value: '#00FFDD',
        },
        move: {
          enable: false,
        },
        life: {
          duration: {
            sync: true,
            value: 2,
          },
          count: 1,
        },
      },
      position: {
        x: { random: true },
        y: { random: true },
      },
    },
  }), [])

  return (
    <Particles
      id="neural-network-particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  )
}