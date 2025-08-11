import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0 spotlight-gradient"></div>

      {/* Background Images Collage */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-lg overflow-hidden transform rotate-12">
          <img src="/kids-educational-games.png" alt="Kids learning" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-40 right-20 w-40 h-40 rounded-lg overflow-hidden transform -rotate-6">
          <img src="/sports-event-competition.png" alt="Sports competition" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-32 left-20 w-36 h-36 rounded-lg overflow-hidden transform rotate-6">
          <img src="/workshop-learning.png" alt="Learning workshop" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-lg overflow-hidden transform -rotate-12">
          <img src="/team-building-outdoor.png" alt="Team activity" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono">
          <span className="block">Compete.</span>
          <span className="block text-[#FFC52C]">Conquer.</span>
          <span className="block text-[#00AEEF]">Connect.</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#F6F6F6] mb-8 max-w-2xl mx-auto leading-relaxed">
          Join the most exciting events in Education, Games & Sports.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#00AEEF] to-[#FFC52C] text-white font-semibold px-8 py-4 text-lg rounded-xl hover-glow transform transition-all duration-300 hover:scale-105"
          >
            View Events
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-[#FFC52C] text-[#FFC52C] bg-transparent hover:bg-[#FFC52C] hover:text-[#00367D] px-8 py-4 text-lg rounded-xl transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Stats or Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="glass rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-[#FFC52C] mb-2">500+</div>
            <div className="text-[#F6F6F6]">Active Events</div>
          </div>
          <div className="glass rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-[#00AEEF] mb-2">10K+</div>
            <div className="text-[#F6F6F6]">Participants</div>
          </div>
          <div className="glass rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-[#F6F6F6]">Categories</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#FFC52C] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#FFC52C] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
