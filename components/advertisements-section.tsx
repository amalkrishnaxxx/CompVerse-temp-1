"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Award, Zap } from "lucide-react"

interface Advertisement {
  id: string
  title: string
  company: string
  description: string
  image: string
  link: string
  featured: boolean
  category: "sponsor" | "partner" | "featured"
}

const advertisements: Advertisement[] = [
  {
    id: "1",
    title: "Premium Sports Equipment",
    company: "SportsTech Pro",
    description: "Get 20% off on all sports equipment for CompVerse participants",
    image: "/sports-equipment-ad.jpg",
    link: "#",
    featured: true,
    category: "sponsor",
  },
  {
    id: "2",
    title: "Educational Software Suite",
    company: "LearnMax Solutions",
    description: "Free 3-month trial of our award-winning learning platform",
    image: "/educational-software-ad.jpg",
    link: "#",
    featured: false,
    category: "partner",
  },
  {
    id: "3",
    title: "Gaming Gear & Accessories",
    company: "GameZone Elite",
    description: "Professional gaming equipment with exclusive CompVerse discounts",
    image: "/gaming-gear-ad.jpg",
    link: "#",
    featured: true,
    category: "featured",
  },
  {
    id: "4",
    title: "Healthy Snacks for Events",
    company: "NutriKids",
    description: "Nutritious snacks to fuel your performance at every event",
    image: "/healthy-snacks-ad.jpg",
    link: "#",
    featured: false,
    category: "sponsor",
  },
]

export default function AdvertisementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % advertisements.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "sponsor":
        return <Award className="w-4 h-4" />
      case "partner":
        return <Star className="w-4 h-4" />
      case "featured":
        return <Zap className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "sponsor":
        return "bg-[#00AEEF] text-white"
      case "partner":
        return "bg-[#FFC52C] text-[#00367D]"
      case "featured":
        return "bg-gradient-to-r from-[#00AEEF] to-[#FFC52C] text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <section className="py-20 relative bg-gradient-to-r from-[#00367D] via-[#004080] to-[#00367D]">
      {/* Angled Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/20 via-transparent to-[#FFC52C]/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">Our Partners</h2>
          <p className="text-xl text-[#F6F6F6] max-w-2xl mx-auto">
            Discover amazing offers from our trusted partners and sponsors
          </p>
        </div>

        {/* Rotating Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass glow-border hover-glow transition-all duration-500 overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src={advertisements[currentIndex].image || "/placeholder.svg"}
                alt={advertisements[currentIndex].title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00367D]/80 via-transparent to-[#00367D]/80"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center max-w-2xl">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 ${getCategoryColor(
                        advertisements[currentIndex].category,
                      )}`}
                    >
                      {getCategoryIcon(advertisements[currentIndex].category)}
                      {advertisements[currentIndex].category.toUpperCase()}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {advertisements[currentIndex].title}
                  </h3>
                  <p className="text-xl text-[#FFC52C] font-semibold mb-4">{advertisements[currentIndex].company}</p>
                  <p className="text-lg text-[#F6F6F6] mb-6">{advertisements[currentIndex].description}</p>

                  <Button className="bg-gradient-to-r from-[#FFC52C] to-[#00AEEF] text-[#00367D] font-semibold px-8 py-3 rounded-xl hover-glow">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {advertisements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#FFC52C] scale-125" : "bg-[#F6F6F6]/50 hover:bg-[#F6F6F6]/80"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advertisements.map((ad) => (
            <Card key={ad.id} className="glass hover-glow transition-all duration-300 cursor-pointer group">
              <CardContent className="p-4">
                <div className="relative h-32 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={ad.image || "/placeholder.svg"}
                    alt={ad.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {ad.featured && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-[#FFC52C] text-[#00367D] px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                <h4 className="text-white font-semibold mb-1 group-hover:text-[#FFC52C] transition-colors">
                  {ad.title}
                </h4>
                <p className="text-[#00AEEF] text-sm font-medium mb-2">{ad.company}</p>
                <p className="text-[#F6F6F6] text-xs leading-relaxed">{ad.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
