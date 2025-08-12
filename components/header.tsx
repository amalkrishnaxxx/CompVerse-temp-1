"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Calendar", href: "#calendar" },
    { label: "Highlights", href: "#highlights" },
    { label: "Register", href: "#register" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C0F14]/70 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12">
            <Image
              src="/compverse-logo.png"
              alt="CompVerse Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-white/90 font-medium relative group transition-colors duration-300 hover:text-[#1F8CFA]"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1F8CFA] to-[#8E2DE2] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-gradient-to-r from-[#1F8CFA] to-[#8E2DE2] 
                       text-white font-semibold px-6 py-3 rounded-lg
                       shadow-md hover:shadow-lg 
                       transition-all duration-300 ease-out
                       hover:scale-[1.03] active:scale-[0.98]
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F8CFA]"
          >
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white transition-colors p-2 rounded-lg hover:text-[#1F8CFA]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#0C0F14]/95 border-t border-white/10">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-white/90 hover:text-[#1F8CFA] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <Button
              className="bg-gradient-to-r from-[#1F8CFA] to-[#8E2DE2] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-[1.03] transition-all"
            >
              Register Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
