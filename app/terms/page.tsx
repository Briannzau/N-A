export default function TermsPage() {
  return (
    <div className="pt-16 py-section md:py-section">
      <div className="max-w-4xl mx-auto px-gutter">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Last updated: January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using our services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily use our services for personal, non-commercial 
              transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p className="mb-4">
              The materials on our website are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim all other warranties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@gxm.agency" className="text-neon-primary hover:underline">
                legal@gxm.agency
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
