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
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#FFC52C] to-[#00AEEF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-[#00AEEF] to-[#FFC52C] rounded-full blur-3xl"></div>
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
          <div className="glass rounded-xl p-2 flex">
            {(["Kids", "Adults"] as AgeGroup[]).map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#00AEEF] to-[#FFC52C] text-white glow-border"
                    : "bg-transparent text-[#F6F6F6] hover:text-[#FFC52C]"
                }`}
              >
                {tab}
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
                className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-[#FFC52C] bg-[#FFC52C] text-[#00367D] font-semibold"
                    : "border-[#F6F6F6] text-[#F6F6F6] hover:border-[#FFC52C] hover:text-[#FFC52C]"
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
              className={`glass hover-glow transition-all duration-300 cursor-pointer ${
                event.isActive ? "glow-border" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                  {event.isActive && <div className="w-3 h-3 bg-[#FFC52C] rounded-full animate-pulse"></div>}
                </div>
                <CardTitle className="text-white text-lg font-semibold">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-[#F6F6F6] text-sm">{event.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-[#F6F6F6] text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-[#FFC52C]" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-[#F6F6F6] text-sm">
                    <Clock className="w-4 h-4 mr-2 text-[#FFC52C]" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-[#F6F6F6] text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-[#FFC52C]" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-[#F6F6F6] text-sm">
                    <Users className="w-4 h-4 mr-2 text-[#FFC52C]" />
                    {event.participants}/{event.maxParticipants} participants
                  </div>
                </div>

                <div className="pt-3">
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#00AEEF] to-[#FFC52C] text-white font-semibold hover-glow"
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
