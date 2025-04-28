import { Cloud, Menu, QrCode, Search, X } from "lucide-react"

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
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">BoxHub</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Link href="/account/login" className="text-sm font-medium transition-colors hover:text-primary">
            Login
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <div variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open Menu">
        <Menu className="h-5 w-5" />
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">BoxHub</span>
            </Link>
            <div onClick={() => setIsOpen(false)} aria-label="Close Menu">
              <X className="h-5 w-5" />
            </div>
          </div>
          <nav className="container mx-auto grid gap-6 py-6">
            <Link
              href="#features"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/account/login/"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Manage Your Items with Ease
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Organize, track, and find your belongings efficiently with BoxHub's intuitive inventory management system.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <div size="lg" className="px-8">
              Get Started
            </div>
            <div size="lg" variant="outline" className="px-8">
              Try Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Key Features</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Discover how BoxHub can transform your inventory management experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-4">
              <QrCode className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">QR Code Management</h3>
            <p className="text-center text-muted-foreground">
              Generate and scan QR codes for easy tracking of all your items.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-4">
              <Cloud className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Cloud Storage</h3>
            <p className="text-center text-muted-foreground">
              Access your data anytime from anywhere with secure cloud storage.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Advanced Search</h3>
            <p className="text-center text-muted-foreground">
              Quickly find items using filters and categories for efficient management.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About BoxHub</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              BoxHub is an intuitive inventory management system designed to help you organize and track your items with
              ease.
            </p>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-muted-foreground">
              Whether you're a business managing inventory or an individual organizing personal belongings, BoxHub
              provides the tools you need to stay organized and efficient. Our platform combines simplicity with
              powerful features to deliver an exceptional user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
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
