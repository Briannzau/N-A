"use client"

import HeroSection from "@/components/home/hero-section"
import ServicesPreview from "@/components/home/services-preview"
import PortfolioPreview from "@/components/home/portfolio-preview"
import AboutPreview from "@/components/home/about-preview"
import LogosCarousel from "@/components/home/logos-carousel"
import CTASection from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <HeroSection />
      <ServicesPreview />
      <PortfolioPreview />
      <AboutPreview />
      <LogosCarousel />
      <CTASection />
    </div>
  )
}
