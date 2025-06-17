"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Sticky Navigation */}
      <nav className="nav-sticky">
        <div className="max-w-content mx-auto px-gutter h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/velkara-logo.png"
                alt="Velkara"
                width={240}
                height={72}
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(58%) sepia(69%) saturate(1000%) hue-rotate(21deg) brightness(96%) contrast(86%)",
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link-enhanced text-sm ${pathname === item.href ? "text-luxury-gold" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary-enhanced text-sm px-6 py-3">Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-luxury-charcoal hover:text-luxury-gold transition-colors"
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
          className="fixed inset-0 z-40 bg-luxury-white/95 backdrop-blur-md md:hidden"
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
                  className="text-2xl font-medium text-luxury-charcoal hover:text-luxury-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <button className="btn-primary-enhanced text-lg px-8 py-3">Get Started</button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  )
}
