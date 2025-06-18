"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Main Navigation - Fully transparent */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-content mx-auto px-gutter">
          <div className="flex items-center justify-between h-24 gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/velkara-logo.png"
                alt="Velkara"
                width={260}
                height={78}
                className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(58%) sepia(69%) saturate(1000%) hue-rotate(21deg) brightness(96%) contrast(86%)",
                }}
              />
            </Link>

            {/* Desktop Navigation - Right side with proper spacing */}
            <div className="hidden md:flex items-center space-x-10 flex-shrink-0">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link text-sm font-medium transition-colors whitespace-nowrap ${
                    pathname === item.href
                      ? "text-luxury-gold gold-glow-strong"
                      : "text-luxury-charcoal hover:text-luxury-gold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://calendly.com/briannzau/velkara-intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary ml-6 whitespace-nowrap"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-luxury-charcoal hover:text-luxury-gold transition-colors flex-shrink-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-luxury-white/95 backdrop-blur-md md:hidden mobile-menu-backdrop"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-2xl font-medium text-luxury-charcoal hover:text-luxury-gold transition-colors gold-glow"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <a
                href="https://calendly.com/briannzau/velkara-intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-3"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  )
}
