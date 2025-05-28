"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import FeatureCard, { Features } from "./feature-card";

const features: Features[] = [
  {
    name: "Marketing",
    description:
      "Estrategias y soluciones creativas para posicionar tu marca y aumentar su visibilidad.",
    vector: `
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7ZM12 15C14.67 15 17.31 16.17 19 18H5C6.69 16.17 9.33 15 12 15Z" fill="#fff"/>
      </svg>
    `,
  },
  {
    name: "Diseño",
    description:
      "Soluciones visuales innovadoras que capturan la esencia de tu marca y comunican tu mensaje.",
    vector: `
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="#fff"/>
      </svg>
    `,
  },
  {
    name: "Desarrollo",
    description:
      "Creación de soluciones digitales a medida como sitios web, apps y plataformas interactivas.",
    vector: `
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5V7H5V17H8V19H3V5H8ZM10.5 14.5L14 18L22 10L20.59 8.59L14 15.17L11.91 13.09L10.5 14.5Z" fill="#fff"/>
      </svg>
    `,
  },
];

export default function OurFeatures() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="services" ref={ref} className="py-20 bg-secondary">
      <div
        className={cn(
          "container mx-auto px-4 scroll-animate",
          isVisible && "scroll-animate-visible"
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nuestros servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detrás de cada proyecto exitoso hay un equipo comprometido. En Okiro
            Studio, contamos con profesionales apasionados, creativos y
            dedicados a ofrecer soluciones de calidad. Trabajamos juntos para
            hacer realidad tus ideas, combinando experiencia, innovación y
            atención personalizada.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {features.map((feat, index) => (
            <FeatureCard
              key={feat.name}
              vector={feat.vector}
              name={feat.name}
              description={feat.description}
              className={cn(
                "bg-white dark:bg-accent-foreground flex flex-col items-center border px-5 py-10 rounded-lg shadow-md flex-grow overflow-hidden hover:shadow-xl transition-all duration-300 group scroll-animate",
                isVisible && "scroll-animate-visible"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
