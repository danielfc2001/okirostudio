
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const images = [
  { src: "https://picsum.photos/1920/1080?random=1", alt: "Inspiring workplace", dataAiHint: "modern workplace" },
  { src: "https://picsum.photos/1920/1080?random=2", alt: "Team brainstorming session", dataAiHint: "team meeting" },
  { src: "https://picsum.photos/1920/1080?random=3", alt: "Successful project outcome", dataAiHint: "project success" },
]

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 7000) // Change image every 7 seconds
    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <section id="about" ref={ref} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className={cn(
              "transition-opacity duration-2000 ease-in-out",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
            priority={index === 0} // Prioritize loading the first image
            data-ai-hint={image.dataAiHint}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Dark overlay for text contrast */}
      </div>

      {/* Content */}
      <div className={cn(
          "relative z-20 container mx-auto px-4 text-center text-white scroll-animate",
          isVisible && "scroll-animate-visible"
        )}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md animate-fade-in-up animation-delay-200">
          Welcome to MarkDev
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-sm animate-fade-in-up animation-delay-400">
          We are a passionate team of marketing experts dedicated to helping your business thrive in the digital world. Our innovative strategies and creative solutions drive growth and deliver measurable results.
        </p>
        <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-fade-in-up animation-delay-600 shadow-lg">
          Discover Our Story
        </Button>
      </div>
    </section>
  )
}
