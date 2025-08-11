"use client"

import { useEffect } from "react"

export default function EnhancedScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add stagger delay based on element position
          setTimeout(() => {
            entry.target.classList.add("visible")
          }, index * 100)
        }
      })
    }, observerOptions)

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .fade-in-scroll, .scale-in-scroll, .slide-in-left, .slide-in-right",
    )

    animatedElements.forEach((el) => observer.observe(el))

    const magneticElements = document.querySelectorAll(".magnetic")

    magneticElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`
      })

      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0px, 0px) scale(1)"
      })
    })

    return () => {
      observer.disconnect()
      magneticElements.forEach((el) => {
        el.removeEventListener("mousemove", () => {})
        el.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return null
}
