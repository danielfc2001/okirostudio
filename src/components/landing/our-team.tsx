"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { TeamMemberCard, TeamMemberProps } from "./TeamMemberCard";

const teamMembers: TeamMemberProps[] = [
  {
    name: "María García",
    role: "CEO & Fundadora",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: [
      { type: "twitter", url: "https://twitter.com" },
      { type: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Tecnología",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: [
      { type: "github", url: "https://github.com" },
      { type: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Ana Martínez",
    role: "Diseñadora UX/UI",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: [
      { type: "twitter", url: "https://twitter.com" },
      { type: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Javier López",
    role: "Desarrollador Frontend",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: [
      { type: "github", url: "https://github.com" },
      { type: "linkedin", url: "https://linkedin.com" },
    ],
  },
];

export default function OurTeam() {
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
            Nuestro equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detrás de cada proyecto exitoso hay un equipo comprometido. En Okiro
            Studio, contamos con profesionales apasionados, creativos y
            dedicados a ofrecer soluciones de calidad. Trabajamos juntos para
            hacer realidad tus ideas, combinando experiencia, innovación y
            atención personalizada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
