"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement

          // Add animation classes based on data attributes
          if (element.dataset.animation === "fade-up") {
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
          } else if (element.dataset.animation === "fade-in") {
            element.style.opacity = "1"
          } else if (element.dataset.animation === "scale-in") {
            element.style.opacity = "1"
            element.style.transform = "scale(1)"
          } else if (element.dataset.animation === "blur-reveal") {
            element.style.filter = "blur(0px)"
            element.style.opacity = "1"
          }
        }
      })
    }, observerOptions)

    // Observe elements with animation data attributes
    const animatedElements = document.querySelectorAll("[data-animation]")
    animatedElements.forEach((el) => {
      const element = el as HTMLElement

      // Set initial states
      if (element.dataset.animation === "fade-up") {
        element.style.opacity = "0"
        element.style.transform = "translateY(30px)"
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      } else if (element.dataset.animation === "fade-in") {
        element.style.opacity = "0"
        element.style.transition = "opacity 0.8s ease"
      } else if (element.dataset.animation === "scale-in") {
        element.style.opacity = "0"
        element.style.transform = "scale(0.95)"
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      } else if (element.dataset.animation === "blur-reveal") {
        element.style.filter = "blur(5px)"
        element.style.opacity = "0"
        element.style.transition = "filter 0.8s ease, opacity 0.8s ease"
      }

      observer.observe(element)
    })

    // Cleanup
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
      observer.disconnect()
    }
  }, [])

  return null
}
