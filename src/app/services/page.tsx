"use client";

import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { servicesData } from "@/lib/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    servicesData[0].service
  );
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-28">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Listado de servicios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            similique vitae eum voluptates neque cumque, consequuntur, esse
            culpa eligendi aperiam explicabo odit labore, vel modi. Suscipit
            saepe quo nisi numquam?
          </p>
        </header>
        <section className="flex flex-col">
          <form className="flex flex-row items-center justify-center gap-5 w-full">
            <input
              type="search"
              className="w-2/3 bg-transparent border border-gray-500  px-3 py-2 rounded-md"
              placeholder="Buscar un servicio"
            />
            <Button>Buscar</Button>
          </form>
          <h5 className="text-center my-6">
            O seleccione una categoria para mostrar:
          </h5>
          <section className="flex flex-row col-span-3">
            <Tabs
              defaultValue={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <div className="mb-8">
                <TabsList className="flex flex-wrap h-auto gap-2 justify-center">
                  {servicesData.map((category) => (
                    <TabsTrigger
                      key={category.service}
                      value={category.service}
                      className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {category.service}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {servicesData.map((category) => (
                <TabsContent
                  key={category.service}
                  value={category.service}
                  className="mt-0"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">{category.service}</h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.options.map((service) => (
                      <Card key={service.name} className="h-full">
                        <CardHeader>
                          <CardTitle>{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-between items-center">
                          <Badge className="text-sm font-medium">
                            {`Price: $${service.price.toString()}`}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
