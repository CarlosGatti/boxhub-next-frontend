import { Cloud, Menu, QrCode, Search, X } from "lucide-react"

import Image from "next/image"
import Link from "next/link"
import { PublicLayout } from "../layouts/PublicLayout"
import { useState } from "react"

export default function LandingPage() {
  return (
    <PublicLayout>
    <HeroSection />
    <FeaturesSection />
    <UseCasesSection />
    <AboutSection />
    <ContactSection />
  </PublicLayout>
  )
}


function UseCasesSection() {
  return (
    <section id="usecases" className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Versatility in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
            Whether you're at home or on the job, BoxHub adapts to your workflow. See it in action.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-md mx-auto">
              <Image
                src="/image/cia-storage.png"
                alt="Home storage with QR boxes"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Organized Garage</h3>
              <p className="text-sm text-gray-600 mt-2">
                Keep seasonal items and tools in order with easy-to-scan labels.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-md mx-auto">
              <Image
                src="/image/van-storage.png"
                alt="Worker placing box in a van"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Professional On-the-Go</h3>
              <p className="text-sm text-gray-600 mt-2">
                Quickly locate and transport essential tools and materials to any job site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 gap-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Simplify your inventory.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Organize and access your items effortlessly with BoxHub. A smooth, fast, and intuitive way to manage your storage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
            href="/get-started"
             className="rounded-lg bg-black border border-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition">
              Get Started
            </Link>
            
            <Link
              href="/account/login"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Lado Direito: Imagem */}
        <div className="flex-1">
          <Image
            src="/image/garage-storage.png"
            alt="Organized garage with QR coded boxes"
            width={300}
            height={500}
            className="rounded-lg shadow-lg mx-auto"
            priority
          />
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
              <Cloud className="grayscale transition-all duration-300 hover:grayscale-0" />
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
    <section id="about" className="w-full py-16 md:py-20 bg-gray-50">
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

function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Contact
          </h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            We'd love to connect with you. Feel free to reach out anytime!
          </p>

          <div className="flex flex-col items-center space-y-2 text-gray-700 mt-8">
            <p className="text-base md:text-lg">
              🌐 Website: <a href="https://carlosgatti.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">carlosgatti.com</a>
            </p>
            <p className="text-base md:text-lg">
              📧 Email: <a href="mailto:the@carlosgatti.com" className="text-blue-600 hover:underline">the@carlosgatti.com</a>
            </p>
            <p className="text-base md:text-lg">
              📞 Phone: <a href="tel:+18573507504" className="text-blue-600 hover:underline">+1 (857) 350-7504</a>
            </p>
          </div>
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
