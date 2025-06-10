import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './providers/theme-provider'
import { ToastProvider } from './providers/toast-provider'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'N/A - AI-Powered Go-To-Market Strategies',
  description: 'We consult, design, and implement seamless AI workflows that turn ideas into scalable growth.',
  keywords: 'AI, go-to-market, GTM, automation, consulting, startups, growth',
  authors: [{ name: 'N/A Agency' }],
  openGraph: {
    title: 'N/A - AI-Powered Go-To-Market Strategies',
    description: 'We consult, design, and implement seamless AI workflows that turn ideas into scalable growth.',
    url: 'https://na-agency.ai',
    siteName: 'N/A Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'N/A Agency - AI GTM Consulting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N/A - AI-Powered Go-To-Market Strategies',
    description: 'We consult, design, and implement seamless AI workflows that turn ideas into scalable growth.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text`}>
        <ThemeProvider>
          <ToastProvider>
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}