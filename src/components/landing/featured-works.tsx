"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const featuredProjects = [
  {
    id: 1,
    src: "https://picsum.photos/600/400?random=4",
    alt: "Project Alpha",
    title: "E-commerce Platform Redesign",
    client: "Okiro",
    date: "2023-10-01",
    dataAiHint: "website mockup",
    toolsUsed: [
      {
        name: "Figma",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
      {
        name: "Shopify",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
      {
        name: "Webflow",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
      {
        name: "Stripe",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
    ],
  },
  {
    id: 2,
    src: "https://picsum.photos/600/400?random=5",
    alt: "Project Beta",
    title: "Mobile App Launch Campaign",
    client: "Okiro",
    date: "2023-10-01",
    dataAiHint: "mobile app",
    toolsUsed: [
      {
        name: "Adobe XD",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
      {
        name: "InVision",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
      {
        name: "Google Analytics",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
      {
        name: "Mailchimp",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
    ],
  },
  {
    id: 3,
    src: "https://picsum.photos/600/400?random=6",
    alt: "Project Gamma",
    title: "Brand Identity Creation",
    client: "Okiro",
    date: "2023-10-01",
    dataAiHint: "brand logo",
    toolsUsed: [
      {
        name: "Canva",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
      {
        name: "Adobe Illustrator",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
      {
        name: "CorelDRAW",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
      {
        name: "Affinity Designer",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3h18v18H3z'></path></svg>",
      },
    ],
  },
  {
    id: 4,
    src: "https://picsum.photos/600/400?random=7",
    alt: "Project Delta",
    title: "Social Media Growth Strategy",
    client: "Okiro",
    date: "2023-10-01",
    dataAiHint: "social media",
    toolsUsed: [
      {
        name: "Hootsuite",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><path d='M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74 9.94'/></svg>",
      },
      {
        name: "Buffer",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='3 7 12 2 21 7 12 12 3 7'/><polygon points='3 14 12 9 21 14 12 19 3 14'/><polygon points='3 21 12 16 21 21 12 26 3 21'/></svg>",
      },
      {
        name: "Meta Business Suite",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><path d='M12 6v6l4 2'/></svg>",
      },
      {
        name: "Google Data Studio",
        svg: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='3' width='7' height='7'/><rect x='14' y='3' width='7' height='7'/><rect x='3' y='14' width='7' height='7'/><rect x='14' y='14' width='7' height='7'/></svg>",
      },
    ],
  },
];

const brandLogos = [
  {
    id: 1,
    src: "https://picsum.photos/150/80?random=8&grayscale",
    alt: "Brand Logo 1",
    dataAiHint: "logo abstract",
  },
  {
    id: 2,
    src: "https://picsum.photos/150/80?random=9&grayscale",
    alt: "Brand Logo 2",
    dataAiHint: "logo geometric",
  },
  {
    id: 3,
    src: "https://picsum.photos/150/80?random=10&grayscale",
    alt: "Brand Logo 3",
    dataAiHint: "logo minimalist",
  },
  {
    id: 4,
    src: "https://picsum.photos/150/80?random=11&grayscale",
    alt: "Brand Logo 4",
    dataAiHint: "logo bold",
  },
  {
    id: 5,
    src: "https://picsum.photos/150/80?random=12&grayscale",
    alt: "Brand Logo 5",
    dataAiHint: "logo tech",
  },
];

export default function FeaturedWorks() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: logosRef, isVisible: logosVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-background">
      <div
        className={cn(
          "container mx-auto px-4 scroll-animate",
          isVisible && "scroll-animate-visible"
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Featured Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into some of the successful projects we've delivered for
            our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
              <CardContent className="flex flex-col-reverse md:flex-row p-0">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-row justify-between items-center mb-2">
                    <span className="flex flex-col items-start text-sm text-muted-foreground">
                      Cliente
                      {project.client && (
                        <span className=" text-xs text-primary">
                          {project.client}
                        </span>
                      )}
                    </span>
                    <span className="flex flex-col items-start text-sm text-muted-foreground">
                      Fecha
                      {project.date && (
                        <span className="text-xs text-primary">
                          {project.date}
                        </span>
                      )}
                    </span>
                    <span className="flex flex-col items-start text-sm text-muted-foreground">
                      Categoria
                      {project.dataAiHint && (
                        <span className=" text-xs text-primary">
                          {project.dataAiHint}
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A brief description of the project, highlighting key
                    achievements and client satisfaction.
                  </p>
                  <h4 className="mt-2">Herramientas usadas:</h4>

                  <div
                    className="grid grid-cols-4 gap-2 mt-4"
                    dangerouslySetInnerHTML={{
                      __html: project.toolsUsed
                        .map((tool) => tool.svg)
                        .join(" "),
                    }}
                  ></div>
                </div>
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "fill" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          ref={logosRef}
          className={cn(
            "mt-16 scroll-animate",
            logosVisible && "scroll-animate-visible"
          )}
        >
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Trusted by Brands Like
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brandLogos.map((logo) => (
              <div
                key={logo.id}
                className="relative h-12 w-28 md:h-16 md:w-36 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                data-ai-hint={logo.dataAiHint}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="150px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
