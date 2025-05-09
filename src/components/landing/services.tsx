
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Briefcase, Target, Lightbulb } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const servicePackages = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary mb-4" />,
    title: "Digital Strategy",
    price: "$999",
    period: "/month",
    features: [
      "Market Research & Analysis",
      "Competitor Audits",
      "Custom Strategy Development",
      "Performance Tracking",
    ],
    dataAiHint: "strategy chart"
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary mb-4" />,
    title: "Content Marketing",
    price: "$1499",
    period: "/month",
    features: [
      "SEO Blog Writing",
      "Social Media Content",
      "Email Marketing Campaigns",
      "Video Production Basics",
    ],
    dataAiHint: "writing desk"
  },
  {
    icon: <Target className="h-10 w-10 text-primary mb-4" />,
    title: "Performance Ads",
    price: "$1999",
    period: "/month",
    features: [
      "Google Ads Management",
      "Social Media Advertising",
      "A/B Testing & Optimization",
      "Detailed Reporting",
    ],
    dataAiHint: "dashboard analytics"
  },
]

export default function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="services" ref={ref} className="py-20 bg-secondary">
      <div className={cn(
          "container mx-auto px-4 scroll-animate",
          isVisible && "scroll-animate-visible"
        )}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Service Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to elevate your marketing efforts and achieve your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg, index) => (
            <Card 
              key={index} 
              className={cn(
                "flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 scroll-animate",
                isVisible && "scroll-animate-visible"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
              data-ai-hint={pkg.dataAiHint}
            >
              <CardHeader className="items-center text-center">
                {pkg.icon}
                <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                <CardDescription className="text-3xl font-semibold text-primary">
                  {pkg.price}
                  <span className="text-sm font-normal text-muted-foreground">{pkg.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6">
                  Purchase Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
