"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-gold backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 magnetic">
            <div className="relative w-12 h-12 hover-glow-gold rounded-lg overflow-hidden">
              <Image src="/compverse-logo.png" alt="CompVerse Logo" fill className="object-contain" priority />
            </div>
            <span className="gradient-text-gold text-2xl font-bold font-mono tracking-wide">CompVerse</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white/90 hover:text-[var(--golden-yellow)] transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--golden-yellow)] to-[var(--electric-cyan)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#calendar"
              className="text-white/90 hover:text-[var(--electric-cyan)] transition-all duration-300 font-medium relative group"
            >
              Calendar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--electric-cyan)] to-[var(--golden-yellow)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#highlights"
              className="text-white/90 hover:text-[var(--golden-yellow)] transition-all duration-300 font-medium relative group"
            >
              Highlights
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--golden-yellow)] to-[var(--electric-cyan)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#register"
              className="text-white/90 hover:text-[var(--electric-cyan)] transition-all duration-300 font-medium relative group"
            >
              Register
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--electric-cyan)] to-[var(--golden-yellow)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-white/90 hover:text-[var(--golden-yellow)] transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--golden-yellow)] to-[var(--electric-cyan)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[var(--electric-cyan)] to-[var(--golden-yellow)] text-white font-bold px-8 py-3 rounded-xl hover-glow-cyan magnetic pulse-cyan border-0 shadow-lg">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[var(--golden-yellow)] transition-colors p-2 rounded-lg hover-glow-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 animate-on-scroll visible">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#home"
                className="text-white/90 hover:text-[var(--golden-yellow)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#calendar"
                className="text-white/90 hover:text-[var(--electric-cyan)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Calendar
              </a>
              <a
                href="#highlights"
                className="text-white/90 hover:text-[var(--golden-yellow)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Highlights
              </a>
              <a
                href="#register"
                className="text-white/90 hover:text-[var(--electric-cyan)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </a>
              <a
                href="#contact"
                className="text-white/90 hover:text-[var(--golden-yellow)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-gradient-to-r from-[var(--electric-cyan)] to-[var(--golden-yellow)] text-white font-bold px-6 py-3 rounded-xl hover-glow-cyan w-fit mt-2">
                Register Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
