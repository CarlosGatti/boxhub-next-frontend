import { Menu, X } from "lucide-react"
import { ReactNode, useState } from "react"

import Image from "next/image"
import Link from "next/link"

export function PublicLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image/brand/rh-blue.png"
              alt="BoxHub logo"
              width={40}
              height={40}
              className="grayscale transition-all duration-300 hover:grayscale-0"
            />
            <span className="font-semibold hidden sm:inline">BoxHub</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/#features" className="hover:text-primary">Features</Link>
            <Link href="/#usecases" className="hover:text-primary">Use Cases</Link>
            <Link href="/#about" className="hover:text-primary">About</Link>
            <Link href="/#contact" className="hover:text-primary">Contact</Link>
            <Link href="/account/login" className="hover:text-primary">Login</Link>
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
    <Link href="/#features" onClick={() => setIsOpen(false)} className="block">Features</Link>
    <Link href="/#usecases" onClick={() => setIsOpen(false)} className="block">Use Cases</Link>
    <Link href="/#about" onClick={() => setIsOpen(false)} className="block">About</Link>
    <Link href="/#contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
    <Link href="/account/login" onClick={() => setIsOpen(false)} className="block">Login</Link>
  </nav>
)}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="w-full border-t py-6 md:py-8 bg-white">
        <div className="container mx-auto text-center text-sm text-muted-foreground px-4">
          © 2025 BoxHub - All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
