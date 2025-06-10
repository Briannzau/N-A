import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-dark-section">
      <div className="max-w-content mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">N/A</h3>
            <p className="text-gray-400 text-sm">AI GTM Architects</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-neon-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-neon-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-neon-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-neon-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">AI Lead Generation</span></li>
              <li><span className="text-gray-400">Outbound Automation</span></li>
              <li><span className="text-gray-400">Growth Analytics</span></li>
              <li><span className="text-gray-400">Customer Success AI</span></li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <a href="https://linkedin.com" className="block text-gray-400 hover:text-neon-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" className="block text-gray-400 hover:text-neon-primary transition-colors">
                Twitter
              </a>
              <Link href="/privacy" className="block text-gray-400 hover:text-neon-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-neon-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 N/A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}