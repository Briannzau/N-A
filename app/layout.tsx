import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition"
import CustomCursor from "@/components/custom-cursor"
import ParallaxBackground from "@/components/parallax-background"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "N/A - GTM Systems That Scale",
  description: "We Engineer Go-To-Market Systems That Scale",
  generator: "v0.dev"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        <Suspense fallback={null}>
          <ParallaxBackground />
        </Suspense>
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
        <Navigation />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}