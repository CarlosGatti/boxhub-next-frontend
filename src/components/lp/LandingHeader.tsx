import Image from 'next/image'
import Link from 'next/link'

export function LandingHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/image/brand/pires-logo.png"
              alt="Pires Builders Inc"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
            <div className="ml-3 hidden sm:block">
              <div className="text-sm text-gray-500">Licensed & Insured</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+15083136329"
              className="hidden md:flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 (508) 313-6329
            </a>
            
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
            >
              Main Site
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
