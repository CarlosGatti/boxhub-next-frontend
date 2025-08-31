import Link from 'next/link'

export function FooterMini() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pires Builders Inc</h3>
            <p className="text-gray-300 mb-4">
              Quality construction and remodeling services in Massachusetts
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📞 +1 (857) 350-7504</p>
              <p>📧 contact@piresbuildersinc.com</p>
              <p>🌐 piresbuilders.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>🏠 Residential construction</li>
              <li>🔨 Renovations and remodeling</li>
              <li>🏗️ Commercial projects</li>
              <li>🔧 Building maintenance</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service" 
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Back to main site
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pires Builders Inc. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Licensed and insured in Massachusetts
          </p>
        </div>
      </div>
    </footer>
  )
}
