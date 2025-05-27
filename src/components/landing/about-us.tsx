"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const slides = [
  {
    src: "https://picsum.photos/1920/1080?random=1",
    alt: "Inspiring workplace",
    dataAiHint: "modern workplace",
    title: "Welcome to MarkDev",
    description:
      "We are a passionate team of marketing experts dedicated to helping your business thrive in the digital world. Our innovative strategies and creative solutions drive growth and deliver measurable results.",
    button: "Discover Our Story",
  },
  {
    src: "https://picsum.photos/1920/1080?random=2",
    alt: "Team brainstorming session",
    dataAiHint: "team meeting",
    title: "Collaboration at its Best",
    description:
      "Our team works closely with you to understand your goals and create tailored marketing solutions that make an impact.",
    button: "Meet the Team",
  },
  {
    src: "https://picsum.photos/1920/1080?random=3",
    alt: "Successful project outcome",
    dataAiHint: "project success",
    title: "Your Success, Our Mission",
    description:
      "From strategy to execution, we are committed to delivering results that matter and help your business grow.",
    button: "See Our Work",
  },
];

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  // Auto-slide every 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Handlers for manual navigation
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className={cn(
              "transition-opacity duration-2000 ease-in-out",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
            priority={index === 0}
            data-ai-hint={slide.dataAiHint}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Slider Controls (left/right) */}
      <button
        aria-label="Previous slide"
        onClick={goToPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
        style={{ width: 48, height: 48 }} // 12 * 4 = 48px
        tabIndex={0}
      >
        <span className="sr-only">Previous</span>
        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors">
          <svg
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      </button>
      <button
        aria-label="Next slide"
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
        style={{ width: 48, height: 48 }} // 12 * 4 = 48px
        tabIndex={0}
      >
        <span className="sr-only">Next</span>
        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors">
          <svg
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>

      {/* Content */}
      <div
        className={cn(
          "relative z-20 container mx-20 px-4 text-center text-white scroll-animate",
          isVisible && "scroll-animate-visible"
        )}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md animate-fade-in-up animation-delay-200">
          {slides[currentIndex].title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-sm animate-fade-in-up animation-delay-400">
          {slides[currentIndex].description}
        </p>
        <Button
          size="lg"
          variant="default"
          className="bg-primary hover:bg-primary/90 text-primary-foreground animate-fade-in-up animation-delay-600 shadow-lg"
        >
          {slides[currentIndex].button}
        </Button>
      </div>

      {/* Dots (bottom center, above the section bottom) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              idx === currentIndex
                ? "bg-primary shadow-lg scale-125"
                : "bg-white/40 hover:bg-primary/60"
            )}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  );
}
