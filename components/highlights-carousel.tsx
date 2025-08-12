"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Award, Users, Calendar } from "lucide-react"

interface Highlight {
  id: string
  title: string
  category: "Educational" | "Games" | "Sports"
  date: string
  participants: number
  image: string
  type: "photo" | "video"
  description: string
}

const highlights: Highlight[] = [
  {
    id: "1",
    title: "Annual Science Olympiad Victory",
    category: "Educational",
    date: "2024-12-15",
    participants: 150,
    image: "/kids-science-olympiad-victory.png",
    type: "photo",
    description: "Our young scientists dominated the regional competition",
  },
  {
    id: "2",
    title: "Epic Gaming Tournament Finale",
    category: "Games",
    date: "2024-12-08",
    participants: 200,
    image: "/gaming-tournament-finale.png",
    type: "video",
    description: "Intense final matches with incredible gameplay",
  },
  {
    id: "3",
    title: "Basketball Championship Win",
    category: "Sports",
    date: "2024-11-30",
    participants: 80,
    image: "/basketball-champions.png",
    type: "photo",
    description: "Undefeated season culminated in championship glory",
  },
  {
    id: "4",
    title: "Coding Workshop Success",
    category: "Educational",
    date: "2024-11-22",
    participants: 120,
    image: "/kids-coding-projects.png",
    type: "video",
    description: "Young developers showcased amazing projects",
  },
  {
    id: "5",
    title: "Chess Masters Tournament",
    category: "Games",
    date: "2024-11-15",
    participants: 60,
    image: "/placeholder.svg?height=300&width=400",
    type: "photo",
    description: "Strategic battles and brilliant moves",
  },
]

export default function HighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = () => {
    setIsAutoPlaying(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  const stopAutoPlay = () => {
    setIsAutoPlaying(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    stopAutoPlay()
    setCurrentIndex((prev) => (prev + 1) % highlights.length)
  }

  const prevSlide = () => {
    stopAutoPlay()
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Educational":
        return "bg-[#00AEEF] text-white"
      case "Games":
        return "bg-[#FFC52C] text-[#00367D]"
      case "Sports":
        return "bg-gradient-to-r from-[#00AEEF] to-[#FFC52C] text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <section id="highlights" className="py-20 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#FFC52C] to-[#00AEEF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-[#00AEEF] to-[#FFC52C] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">Past Highlights</h2>
          <p className="text-xl text-[#F6F6F6] max-w-2xl mx-auto">
            Relive the most memorable moments from our recent events
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={highlights[currentIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onMouseEnter={stopAutoPlay}
                onMouseLeave={startAutoPlay}
              >
                <Card className="glass glow-border hover-glow transition-all duration-500 group">
                  <div className="relative h-96 overflow-hidden ">
                    <motion.img
                      src={highlights[currentIndex].image || "/placeholder.svg"}
                      alt={highlights[currentIndex].title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2 }}
                    />

                    {highlights[currentIndex].type === "video" && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Button
                          size="lg"
                          aria-label="Play video highlight"
                          className="group relative flex items-center justify-center w-16 h-16 rounded-full 
             bg-gradient-to-tr from-[#FFC52C] to-[#FFD85E] text-[#00367D] 
             shadow-lg shadow-[#FFC52C]/30 
             transition-all duration-300 ease-out 
             hover:scale-110 hover:shadow-xl hover:shadow-[#FFC52C]/40"
                        >
                          <Play className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />

                          {/* Subtle pulse animation ring */}
                          <span className="absolute inset-0 rounded-full border border-[#FFC52C]/50 animate-ping"></span>
                        </Button>

                      </motion.div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#00367D]/85 via-transparent to-transparent"></div>

                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md ${getCategoryColor(
                          highlights[currentIndex].category
                        )}`}
                      >
                        {highlights[currentIndex].category}
                      </div>
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    <motion.h3
                      className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFC52C] transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {highlights[currentIndex].title}
                    </motion.h3>

                    <motion.p
                      className="text-[#F6F6F6] mb-4 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {highlights[currentIndex].description}
                    </motion.p>

                    <div className="flex items-center justify-between text-sm text-[#F6F6F6]">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-[#FFC52C]" />
                        {new Date(highlights[currentIndex].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-[#FFC52C]" />
                        {highlights[currentIndex].participants} participants
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-[#FFC52C]" />
                        Success
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <Button
            onClick={prevSlide}
            aria-label="Previous highlight"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#FFC52C]/90 hover:bg-[#FFC52C] text-[#00367D] rounded-full w-12 h-12 p-0 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={nextSlide}
            aria-label="Next highlight"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FFC52C]/90 hover:bg-[#FFC52C] text-[#00367D] rounded-full w-12 h-12 p-0 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {highlights.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => {
                  setCurrentIndex(index)
                  stopAutoPlay()
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#FFC52C] scale-125" : "bg-[#F6F6F6]/50 hover:bg-[#F6F6F6]/80"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
