import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#00367D] pt-16 pb-8">
      {/* Top Radial Gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-b from-[#00AEEF]/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFC52C] to-[#00AEEF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-mono">CV</span>
              </div>
              <span className="text-white text-xl font-bold font-mono">CompVerse</span>
            </div>
            <p className="text-[#F6F6F6] leading-relaxed">
              The ultimate platform for discovering and joining exciting events in Education, Games, and Sports for all
              ages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#calendar" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                  Event Calendar
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                  Past Highlights
                </a>
              </li>
              <li>
                <a href="#register" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                  Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#FFC52C]" />
                <span className="text-[#F6F6F6]">info@compverse.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#FFC52C]" />
                <span className="text-[#F6F6F6]">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#FFC52C]" />
                <span className="text-[#F6F6F6]">123 Event Street, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F6F6F6]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#F6F6F6] text-center md:text-left">© 2025 CompVerse. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors text-sm">
                Accessibility
              </a>
              <a href="#" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors text-sm">
                Sitemap
              </a>
              <a href="#" className="text-[#F6F6F6] hover:text-[#FFC52C] transition-colors text-sm">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
