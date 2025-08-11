import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Star } from "lucide-react"

interface UpcomingEvent {
  id: string
  title: string
  category: "Educational" | "Games" | "Sports"
  date: string
  time: string
  location: string
  image: string
  featured: boolean
  price: string
}

const upcomingEvents: UpcomingEvent[] = [
  {
    id: "1",
    title: "Science Fair Extravaganza",
    category: "Educational",
    date: "2025-01-25",
    time: "10:00 AM",
    location: "Innovation Hub",
    image: "/science-fair-experiments.png",
    featured: true,
    price: "Free",
  },
  {
    id: "2",
    title: "Gaming Championship Finals",
    category: "Games",
    date: "2025-01-28",
    time: "2:00 PM",
    location: "Esports Arena",
    image: "/gaming-tournament.png",
    featured: true,
    price: "$15",
  },
  {
    id: "3",
    title: "Basketball Skills Camp",
    category: "Sports",
    date: "2025-02-01",
    time: "9:00 AM",
    location: "Sports Complex",
    image: "/kids-basketball-camp.png",
    featured: false,
    price: "$25",
  },
  {
    id: "4",
    title: "Coding Bootcamp for Teens",
    category: "Educational",
    date: "2025-02-05",
    time: "1:00 PM",
    location: "Tech Center",
    image: "/teenagers-programming.png",
    featured: false,
    price: "$30",
  },
  {
    id: "5",
    title: "Board Game Marathon",
    category: "Games",
    date: "2025-02-08",
    time: "11:00 AM",
    location: "Community Center",
    image: "/families-playing-board-games.png",
    featured: false,
    price: "$10",
  },
  {
    id: "6",
    title: "Swimming Competition",
    category: "Sports",
    date: "2025-02-12",
    time: "8:00 AM",
    location: "Aquatic Center",
    image: "/swimming-pool-competition.png",
    featured: true,
    price: "$20",
  },
]

export default function UpcomingEvents() {
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
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-72 h-72 bg-gradient-to-br from-[#FFC52C] to-[#00AEEF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-br from-[#00AEEF] to-[#FFC52C] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">Upcoming Events</h2>
          <p className="text-xl text-[#F6F6F6] max-w-2xl mx-auto">
            Don't miss out on these exciting upcoming events across all categories
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className={`group relative overflow-hidden rounded-2xl hover-glow transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                event.featured ? "glow-border" : ""
              }`}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00367D]/80 via-transparent to-transparent"></div>

                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#FFC52C] text-[#00367D] font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <div className="glass rounded-lg px-3 py-1">
                    <span className="text-white font-semibold">{event.price}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 glass">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC52C] transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
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
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#00AEEF] hover:bg-[#0099D4] text-white font-semibold transition-all duration-300"
                  >
                    Register
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#FFC52C] text-[#FFC52C] hover:bg-[#FFC52C] hover:text-[#00367D] transition-all duration-300 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
