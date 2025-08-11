"use client"

import { useEffect, useState } from "react"

export default function FloatingBackground() {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      left: number
      top: number
      delay: number
    }>
  >([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--navy-blue)] to-[var(--deep-navy)] opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--golden-yellow)]/5 via-transparent to-[var(--electric-cyan)]/5" />
    </div>
  )
}
