
"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const featuredProjects = [
  { id: 1, src: "https://picsum.photos/600/400?random=4", alt: "Project Alpha", title: "E-commerce Platform Redesign", dataAiHint: "website mockup" },
  { id: 2, src: "https://picsum.photos/600/400?random=5", alt: "Project Beta", title: "Mobile App Launch Campaign", dataAiHint: "mobile app" },
  { id: 3, src: "https://picsum.photos/600/400?random=6", alt: "Project Gamma", title: "Brand Identity Creation", dataAiHint: "brand logo" },
  { id: 4, src: "https://picsum.photos/600/400?random=7", alt: "Project Delta", title: "Social Media Growth Strategy", dataAiHint: "social media" },
]

const brandLogos = [
  { id: 1, src: "https://picsum.photos/150/80?random=8&grayscale", alt: "Brand Logo 1", dataAiHint: "logo abstract" },
  { id: 2, src: "https://picsum.photos/150/80?random=9&grayscale", alt: "Brand Logo 2", dataAiHint: "logo geometric" },
  { id: 3, src: "https://picsum.photos/150/80?random=10&grayscale", alt: "Brand Logo 3", dataAiHint: "logo minimalist" },
  { id: 4, src: "https://picsum.photos/150/80?random=11&grayscale", alt: "Brand Logo 4", dataAiHint: "logo bold" },
  { id: 5, src: "https://picsum.photos/150/80?random=12&grayscale", alt: "Brand Logo 5", dataAiHint: "logo tech" },
]

export default function FeaturedWorks() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-background">
      <div className={cn(
          "container mx-auto px-4 scroll-animate",
          isVisible && "scroll-animate-visible"
        )}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Featured Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into some of the successful projects we've delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={cn(
                "overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group scroll-animate",
                isVisible && "scroll-animate-visible"
                )}
              style={{ animationDelay: `${index * 0.15}s` }}
              data-ai-hint={project.dataAiHint}
              >
              <CardContent className="p-0">
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{objectFit: "cover"}}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    A brief description of the project, highlighting key achievements and client satisfaction.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={logosRef} className={cn(
            "mt-16 scroll-animate",
            logosVisible && "scroll-animate-visible"
          )}>
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">Trusted by Brands Like</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brandLogos.map((logo) => (
              <div key={logo.id} className="relative h-12 w-28 md:h-16 md:w-36 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                   data-ai-hint={logo.dataAiHint}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="150px"
                  style={{objectFit: "contain"}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
