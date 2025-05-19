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
import { CircleCheck, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import WhatsappIcon from "@/components/icons/whatsapp-icon";
import MailIcon from "@/components/icons/mail-icon";
import { DialogClose } from "@radix-ui/react-dialog";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    servicesData[0].service
  );
  const [selectedService, setSelectedService] = useState<string[]>([]);

  const handleCardClick = (e: any) => {
    console.log("Card clicked");
    const card = e.currentTarget?.dataset.card;
    console.log(card);
    const match = selectedService.find((service) => service === card);
    if (!match) {
      const services = [...selectedService, card];
      setSelectedService(services);
    } else {
      toast({
        title: "Advertencia",
        description: "El servicio ya ha sido seleccionado",
        variant: "destructive",
      });
    }
  };

  const handleRemoveServices = () => {
    setSelectedService([]);
    toast({
      title: "Servicios removidos",
      description: "Los servicios han sido removidos correctamente.",
      variant: "destructive",
    });
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
                        className={`h-full hover:scale-105 transition-transform cursor-pointer ${
                          selectedService.includes(service.name)
                            ? `border border-primary`
                            : ``
                        }`}
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
                              <span className="hidden md:flex">
                                Seleccionado
                              </span>
                              <CircleCheck className="block md:hidden" />
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
            <div className="sticky bottom-0 pb-5 z-20 backdrop-blur-lg w-full px-20">
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
              <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mb-3">
                {selectedService.map((service) => {
                  const serviceData = servicesData
                    .flatMap((category) => category.options)
                    .find((s) => s.name === service);
                  return (
                    <Badge
                      key={service}
                      className="flex justify-between px-3 py-1 text-xs md:text-sm font-medium rounded-sm md:rounded-md"
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
              <div className="flex justify-center items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-red-500 hover:bg-red-600">
                      Cancelar solicitud
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Remover servicios</DialogTitle>
                    <DialogDescription>
                      Estas seguro que deseas remover los servicios
                      seleccionados?.
                    </DialogDescription>
                    <Button
                      className="bg-red-500 hover:bg-red-600"
                      onClick={handleRemoveServices}
                    >
                      Remover
                    </Button>
                    <DialogClose asChild>
                      <Button>Cerrar</Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
                      Enviar servicios
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Plan de servicios</DialogTitle>
                    <DialogDescription>blablabla</DialogDescription>
                    <h2>Los servicios seleccionados son:</h2>
                    <section>
                      <ul className="text-sm list-disc list-inside">
                        {selectedService.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                    </section>
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
                    <Button className="flex justify-center items-center">
                      <MailIcon width={24} height={24} />
                      Recibir correo
                    </Button>
                    <span className="text-center text-muted-foreground underline">
                      o
                    </span>
                    <Button className="flex justify-center items-center">
                      <WhatsappIcon width={24} height={24} /> Ir a Whatsapp
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
