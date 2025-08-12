"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

type EventCategory = "Educational" | "Games" | "Sports"
type AgeGroup = "Kids" | "Adults"

interface Event {
  id: string
  title: string
  category: EventCategory
  ageGroup: AgeGroup
  date: string
  time: string
  location: string
  participants: number
  maxParticipants: number
  description: string
  isActive: boolean
}

const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Math Olympics Challenge",
    category: "Educational",
    ageGroup: "Kids",
    date: "2025-01-15",
    time: "10:00 AM",
    location: "Learning Center A",
    participants: 24,
    maxParticipants: 30,
    description: "Competitive math challenges for young minds",
    isActive: true,
  },
  {
    id: "2",
    title: "Chess Tournament",
    category: "Games",
    ageGroup: "Kids",
    date: "2025-01-16",
    time: "2:00 PM",
    location: "Game Hall",
    participants: 16,
    maxParticipants: 32,
    description: "Strategic thinking and planning competition",
    isActive: true,
  },
  {
    id: "3",
    title: "Soccer Championship",
    category: "Sports",
    ageGroup: "Kids",
    date: "2025-01-18",
    time: "9:00 AM",
    location: "Sports Complex",
    participants: 45,
    maxParticipants: 48,
    description: "Youth soccer tournament with prizes",
    isActive: false,
  },
  {
    id: "4",
    title: "Business Strategy Workshop",
    category: "Educational",
    ageGroup: "Adults",
    date: "2025-01-17",
    time: "6:00 PM",
    location: "Conference Room B",
    participants: 18,
    maxParticipants: 25,
    description: "Learn advanced business strategies",
    isActive: true,
  },
  {
    id: "5",
    title: "Poker Night",
    category: "Games",
    ageGroup: "Adults",
    date: "2025-01-19",
    time: "7:00 PM",
    location: "Recreation Center",
    participants: 12,
    maxParticipants: 20,
    description: "Texas Hold'em tournament",
    isActive: true,
  },
  {
    id: "6",
    title: "Marathon Training",
    category: "Sports",
    ageGroup: "Adults",
    date: "2025-01-20",
    time: "6:00 AM",
    location: "City Park",
    participants: 35,
    maxParticipants: 40,
    description: "Prepare for the city marathon",
    isActive: false,
  },
]

export default function CalendarSection() {
  const [activeTab, setActiveTab] = useState<AgeGroup>("Kids")
  const [activeFilter, setActiveFilter] = useState<EventCategory | "All">("All")

  const filteredEvents = sampleEvents.filter((event) => {
    const matchesTab = event.ageGroup === activeTab
    const matchesFilter = activeFilter === "All" || event.category === activeFilter
    return matchesTab && matchesFilter
  })

  const getCategoryColor = (category: EventCategory) => {
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
    <section id="calendar" className="py-20 relative">
      {/* Inline CSS for sleek design */}
      <style jsx>{`
        .glass {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(0, 194, 255, 0.4);
          transform: translateY(-4px);
        }
        .glow-border {
          border: 1px solid rgba(0, 194, 255, 0.8);
          animation: pulseBorder 2s infinite;
        }
        @keyframes pulseBorder {
          0%, 100% { box-shadow: 0 0 5px rgba(0, 194, 255, 0.4); }
          50% { box-shadow: 0 0 20px rgba(255, 197, 44, 0.6); }
        }
      `}</style>

      {/* Background gradient blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#FFC52C] to-[#00AEEF] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-[#00AEEF] to-[#FFC52C] rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">Event Calendar</h2>
          <p className="text-xl text-[#F6F6F6] max-w-2xl mx-auto">
            Discover upcoming events tailored for different age groups and interests
          </p>
        </div>

        {/* Age Group Tabs */}
        <div className="flex justify-center mb-8">
          <div className="glass rounded-xl p-2 flex gap-3">
            {(["Kids", "Adults"] as AgeGroup[]).map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative overflow-hidden px-8 py-3 rounded-lg font-medium transition-all duration-300
        ${activeTab === tab
                    ? "bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white shadow-md shadow-cyan-500/30"
                    : "bg-white/10 backdrop-blur-md text-gray-200 hover:text-white border border-transparent hover:border-white/20"
                  }
      `}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-full bg-white/80"></span>
                )}
              </Button>
            ))}
          </div>

        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3">
            {(["All", "Educational", "Games", "Sports"] as const).map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant="outline"
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
          ${activeFilter === filter
                    ? "bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white shadow-md shadow-cyan-500/30"
                    : "bg-white/5 backdrop-blur-md border border-white/20 text-gray-200 hover:border-cyan-300 hover:text-cyan-800"
                  }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>


        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 ease-out transform hover:-translate-y-1 ${event.isActive ? "border-cyan-400/40" : ""
                }`}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    className={`${getCategoryColor(event.category)} px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/80 to-blue-500/80 backdrop-blur-sm text-white shadow-md`}
                  >
                    {event.category}
                  </Badge>
                  {event.isActive && (
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow shadow-cyan-400/50"></div>
                  )}
                </div>
                <CardTitle className="text-white text-lg font-semibold tracking-wide">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>

                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-cyan-400" />
                    {event.participants}/{event.maxParticipants} participants
                  </div>
                </div>

                <div className="pt-3">
                  <Button
                    size="sm"
                    className={`w-full py-2.5 rounded-lg font-medium transition-all duration-300 ease-out ${event.isActive
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md hover:shadow-lg hover:shadow-cyan-500/40"
                      : "bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 hover:border-cyan-300 hover:text-white"
                      }`}
                  >
                    {event.isActive ? "Join Event" : "View Details"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="glass rounded-xl p-8 max-w-md mx-auto">
              <Calendar className="w-16 h-16 text-[#FFC52C] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Events Found</h3>
              <p className="text-[#F6F6F6]">
                No events match your current filters. Try selecting different categories.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
