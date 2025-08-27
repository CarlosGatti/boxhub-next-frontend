import { Menu, X } from "lucide-react"
import { ReactNode, useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { LoginDropdown } from "../components/_ui/Header/LoginDropdown"

export function PublicLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image/brand/pires-logo.png"
              alt="Pires Builders logo"
              width={140}
              height={140}
              className="transition-all duration-300 hover:grayscale-0"
            />
            {/* <span className="font-semibold hidden sm:inline">Pires Builders Inc.</span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {/* <Link href="/#features" className="hover:text-primary">Features</Link> */}


            <Link href="/#about" className="hover:text-primary">About</Link>
            <Link href="/#projects" className="hover:text-primary">Projects</Link>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <Link href="/subcontractors/register" className="hover:text-primary">Work With Us</Link>
            <Link href="/faq" className="hover:text-primary">FAQ</Link>
            <Link href="/#contact" className="hover:text-primary">Contact</Link>
            <LoginDropdown />
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden border-t bg-white px-4 py-4 space-y-4 text-lg font-medium transition-all duration-300 ease-in-out">
            {/* <Link href="/#features" onClick={() => setIsOpen(false)} className="block">Features</Link> */}
            <Link href="/get-started" onClick={() => setIsOpen(false)} className="block">Get Started</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block">Blog</Link>
            <Link href="/subcontractors/register" onClick={() => setIsOpen(false)} className="block">Partner With Us</Link>
            <Link href="/faq" onClick={() => setIsOpen(false)} className="block">FAQ</Link>
            {/* <Link href="/#usecases" onClick={() => setIsOpen(false)} className="block">Use Cases</Link> */}
            <Link href="/#about" onClick={() => setIsOpen(false)} className="block">About</Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
            <Link href="/account/login" onClick={() => setIsOpen(false)} className="block">Login</Link>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="w-full border-t py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/image/brand/pires-logo.png"
                  alt="Pires Builders logo"
                  width={120}
                  height={120}
                  className="transition-all duration-300"
                />
              </div>
              <p className="text-sm text-gray-600 max-w-xs">
                Delivering quality construction and remodeling services across Massachusetts with over a decade of experience.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#about" className="text-gray-600 hover:text-gray-900 transition">About Us</Link></li>
                <li><Link href="/#projects" className="text-gray-600 hover:text-gray-900 transition">Our Projects</Link></li>
                <li><Link href="/#services" className="text-gray-600 hover:text-gray-900 transition">Services</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-gray-900 transition">Blog</Link></li>
                <li><Link href="/subcontractors/register" className="text-gray-600 hover:text-gray-900 transition">Partner With Us</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</Link></li>
                <li><Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">Home Renovations</li>
                <li className="text-gray-600">New Construction</li>
                <li className="text-gray-600">Project Management</li>
                <li className="text-gray-600">Commercial Projects</li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Connect With Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>📧</span>
                  <a href="mailto:the@piresbuilders.com" className="hover:text-gray-900 transition">the@piresbuilders.com</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>📞</span>
                  <a href="tel:+18573507504" className="hover:text-gray-900 transition">+1 (857) 350-7504</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>🌐</span>
                  <a href="https://piresbuilders.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">piresbuilders.com</a>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="pt-2">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://www.instagram.com/piresbuildersinc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:scale-105 transition-transform"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t pt-8 text-center">
            <p className="text-sm text-gray-600">
              © 2025 Pires Builders Inc. - All Rights Reserved. - Developed by{' '}
              <Link href="https://www.carlosgatti.com" className="text-brand-orange hover:underline">
                Carlos Gatti
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
