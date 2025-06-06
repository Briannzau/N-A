"use client"

import HeroSection from "@/components/home/hero-section"
import ServicesPreview from "@/components/home/services-preview"
import FrontierSection from "@/components/home/frontier-section"
import CTASection from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <HeroSection />
      <FrontierSection />
      <ServicesPreview />
      <CTASection />
    </div>
  )
}