import { Cloud, Menu, QrCode, Search, X } from "lucide-react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  return (

    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/image/brand/rh-blue.png"
            alt="Logo"
            width={40}
            height={40}
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">Features</Link>
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">About</Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
          <Link href="/account/login" className="text-sm font-medium transition-colors hover:text-primary">Login</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link href="#features" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Features</Link>
            <Link href="#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/account/login" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Login</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="w-full py-20">
    <div className="container mx-auto px-6 md:px-12 max-w-5xl">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
          Simplify your inventory.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Organize and access your items effortlessly with BoxHub. A smooth, fast, and intuitive way to manage your storage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="rounded-lg bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition">
            Get Started
          </button>
          <Link
            href="/account/login"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  </section>
  
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Key Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
            Discover how BoxHub transforms inventory management with elegant tools and intuitive design.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 rounded-full bg-gray-100 p-4">
              <QrCode className="grayscale transition-all duration-300 hover:grayscale-0" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">QR Code Management</h3>
            <p className="text-sm text-gray-600 mt-2">
              Generate and scan QR codes to track your items with ease.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 rounded-full bg-gray-100 p-4">
              <Cloud className="grayscale transition-all duration-300 hover:grayscale-0"/>
            </div>
            <h3 className="text-xl font-medium text-gray-900">Cloud Storage</h3>
            <p className="text-sm text-gray-600 mt-2">
              Access your data anywhere with our secure cloud system.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 rounded-full bg-gray-100 p-4">
              <Search className="grayscale transition-all duration-300 hover:grayscale-0" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">Advanced Search</h3>
            <p className="text-sm text-gray-600 mt-2">
              Filter and locate items instantly with smart search tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            About BoxHub
          </h2>
          <p className="text-gray-600 md:text-lg">
            BoxHub is a simple and powerful inventory management system that helps you organize and track your items with ease.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Whether you're managing business inventory or personal belongings, BoxHub offers a streamlined experience
            focused on clarity and speed. Enjoy features like QR code generation, cloud storage, and smart filtering —
            all designed to keep you efficient and in control.
          </p>
        </div>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer id="contact" className="w-full border-t py-6 md:py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">© 2025 BoxHub - All Rights Reserved.</p>
      </div>
    </footer>
  )
}
