import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CalendarSection from "@/components/calendar-section"
import UpcomingEvents from "@/components/upcoming-events"
import HighlightsCarousel from "@/components/highlights-carousel"
import RegistrationSection from "@/components/registration-section"
import AdvertisementsSection from "@/components/advertisements-section"
import Footer from "@/components/footer"
import ScrollAnimations from "@/components/scroll-animations"
import FloatingBackground from "@/components/floating-background"
import EnhancedScrollAnimations from "@/components/enhanced-scroll-animations"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingBackground />
      <ScrollAnimations />
      <EnhancedScrollAnimations />
      <Header />

      <div className="relative z-10">
        <div className="animate-on-scroll">
          <HeroSection />
        </div>

        <div className="animate-on-scroll delay-100">
          <CalendarSection />
        </div>

        <div className="scale-in-scroll delay-200">
          <UpcomingEvents />
        </div>

        <div className="fade-in-scroll delay-300">
          <HighlightsCarousel />
        </div>

        <div className="slide-in-left">
          <RegistrationSection />
        </div>

        <div className="slide-in-right">
          <AdvertisementsSection />
        </div>

        <Footer />
      </div>
    </div>
  )
}
