import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./providers/theme-provider"
import { ToastProvider } from "./providers/toast-provider"
import Navigation from "./components/Navigation"
import CookieConsent from "./components/CookieConsent"
import ParticleBackground from "./components/ParticleBackground"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Velkara - AI-Powered Go-To-Market Strategies",
  description:
    "Velkara is the evolution of Go-To-Market — blending strategic execution, AI-powered automation, and full-cycle growth experience design into one unified framework.",
  keywords: "AI, go-to-market, GTM, automation, consulting, startups, growth",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-luxury-white text-luxury-charcoal relative`}
        style={{ "--font-inter": inter.style.fontFamily } as React.CSSProperties}
      >
        {/* Global animated background */}
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
        </div>

        <ThemeProvider>
          <ToastProvider>
            {/* Navigation with transparent background */}
            <div className="relative z-50">
              <Navigation />
            </div>

            {/* Main content with relative positioning */}
            <main className="relative z-10 min-h-screen">{children}</main>

            <div className="relative z-50">
              <CookieConsent />
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
