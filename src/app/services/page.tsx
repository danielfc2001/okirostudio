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
import { MouseEventHandler, useState } from "react";
import { X } from "lucide-react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    servicesData[0].service
  );
  const [selectedService, setSelectedService] = useState<string[]>([]);

  const handleCardClick = (e: MouseEvent) => {
    console.log("Card clicked");
    const card = e.currentTarget?.dataset.card;
    console.log(card);
    const services = [...selectedService, card];
    setSelectedService(services);
  };

  const onServiceSelectedScrolled = (e: React.SyntheticEvent) => {
    console.log("scrolled");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="w-full flex-grow py-28">
        <header className="text-center px-4 mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Nuestros servicios
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
          <section className="flex flex-row col-span-3">
            <Tabs
              defaultValue={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <div className="my-8">
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
                  {/*                   <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">{category.service}</h2>
                  </div> */}

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-20">
                    {category.options.map((service) => (
                      <Card
                        data-card={service.name}
                        key={service.name}
                        className="h-full hover:scale-105 transition-transform cursor-pointer"
                        onClick={handleCardClick}
                      >
                        <CardHeader>
                          <CardTitle>{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-between items-center">
                          <Badge className="text-sm font-medium">
                            {`Price: $${service.price.toString()}`}
                          </Badge>
                          {selectedService.includes(service.name) && (
                            <Badge className="text-sm font-medium">
                              Seleccionado
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>
          {selectedService.length === 0 ? (
            <span className="w-full text-center my-3 text-muted-foreground">
              No hay servicios seleccionados
            </span>
          ) : (
            <div
              className="sticky bottom-0 pb-5 z-20 backdrop-blur-lg w-full px-20"
              onScroll={onServiceSelectedScrolled}
            >
              <span className="w-full flex justify-center my-3">
                Costo total aproximado:{" $"}
                {selectedService
                  .map((service) => {
                    const serviceData = servicesData
                      .flatMap((category) => category.options)
                      .find((s) => s.name === service);
                    return serviceData?.price || 0;
                  })
                  .reduce((acc, price) => acc + price, 0)}
              </span>
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mb-3">
                {selectedService.map((service) => {
                  const serviceData = servicesData
                    .flatMap((category) => category.options)
                    .find((s) => s.name === service);
                  return (
                    <Badge
                      key={service}
                      className="flex justify-between px-3 py-1 text-sm font-medium"
                    >
                      {`${serviceData?.name} - $${serviceData?.price}`}
                      <Button
                        className="bg-transparent hover:bg-transparent hover:scale-110 transition-transform cursor-pointer"
                        onClick={() => {
                          const newServices = selectedService.filter(
                            (s) => s !== service
                          );
                          setSelectedService(newServices);
                        }}
                      >
                        <X />
                      </Button>
                    </Badge>
                  );
                })}
              </section>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
