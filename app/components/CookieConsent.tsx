'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
    // Initialize analytics here
  }

  const rejectNonEssential = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-700 p-4 z-50">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          We use cookies to analyze traffic and improve your experience. 
        </p>
        <div className="flex gap-3">
          <button
            onClick={rejectNonEssential}
            className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm bg-neon-primary text-black rounded-lg hover:bg-opacity-80 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
