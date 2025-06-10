import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './providers/theme-provider'
import { ToastProvider } from './providers/toast-provider'
import Navigation from './components/Navigation'
import CookieConsent from './components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GXM.Agency - Growth eXperience Management',
  description: 'GXM is the evolution of Go-To-Market — blending strategic execution, AI-powered automation, and full-cycle growth experience design into one unified framework.',
  keywords: 'GXM, Growth eXperience Management, AI automation, growth strategy, startups, scale-up',
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
            <CookieConsent />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}