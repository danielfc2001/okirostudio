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
import { OptionsType, servicesData } from "@/lib/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { useState, useRef } from "react";
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

  const [searchServicesResult, setSearchServicesResult] = useState<
    OptionsType[]
  >([]);

  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<OptionsType[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleCardClick = (e: any) => {
    const card = e.currentTarget?.dataset.card;
    const match = selectedService.find((service) => service === card);
    if (!match) {
      const services = [...selectedService, card];
      setSelectedService(services);
    } else {
      toast({
        title: "Advertencia",
        description: "El servicio ya ha sido seleccionado",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleRemoveServices = () => {
    setSelectedService([]);
    toast({
      title: "Servicios removidos",
      description: "Los servicios han sido removidos correctamente.",
      variant: "destructive",
      duration: 3000,
    });
  };

  const handleSearchServices = (e: React.FormEvent<HTMLFormElement>) => {
    setSuggestions([]);
    e.preventDefault();
    const searchInput = e.currentTarget.querySelector(
      "input[type='search']"
    ) as HTMLInputElement;
    const searchTerm = searchInput.value.toLowerCase().trim();
    const data = servicesData.flatMap((category) => category.options);
    setCurrentSearchTerm(searchTerm);
    if (searchTerm === "") {
      setSearchServicesResult([]);
      toast({
        title: "Búsqueda vacia.",
        description: "No se ha ingresado un término de búsqueda.",
        variant: "destructive",
      });
      return;
    }
    const filteredServices = data.filter(
      (service) =>
        service.name.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm)
    );
    if (filteredServices.length === 0) {
      setSearchServicesResult([]);
      toast({
        title: "No se encontraron resultados",
        description: `No se encontraron servicios que coincidan con "${searchTerm}".`,
        variant: "destructive",
      });
      return;
    } else {
      setSearchServicesResult(
        filteredServices.map((service) => {
          return {
            category:
              servicesData.find((cat) => cat.options.includes(service))
                ?.service || "no category",
            ...service,
          };
        })
      );
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    if (searchTerm === "") {
      setSuggestions([]);
      setSearchServicesResult([]);
      return;
    }
    const data = servicesData.flatMap((category) => category.options);
    const filtered = data.filter(
      (service) =>
        service.name.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm)
    );
    setSuggestions(filtered.slice(0, 5)); // Limita a 5 sugerencias
  };

  const handleSuggestionClick = (service: OptionsType) => {
    setSuggestions([]);
    setCurrentSearchTerm(service.name);
    if (searchInputRef.current) {
      searchInputRef.current.value = service.name;
    }
    setSearchServicesResult([
      {
        category:
          servicesData.find((cat) => cat.options.includes(service))?.service ||
          "no category",
        ...service,
      },
    ]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      <main className="w-full container flex-grow py-28">
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
          <form
            onSubmit={handleSearchServices}
            className="flex flex-row items-center justify-center gap-5 w-full relative"
            autoComplete="off"
          >
            <div className="w-2/3 relative">
              <input
                ref={searchInputRef}
                type="search"
                className="w-full bg-transparent border border-gray-500 px-3 py-2 rounded-md"
                placeholder="Buscar un servicio"
                onChange={handleSearchInputChange}
                autoComplete="off"
              />
              {suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-1 bg-background border border-gray-300 rounded-md shadow-lg z-20 max-h-56 overflow-y-auto">
                  {suggestions.map((service) => (
                    <li
                      key={service.name}
                      className="px-4 py-2 cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => handleSuggestionClick(service)}
                    >
                      <span className="font-medium">{service.name}</span>
                      <span className="ml-2 text-xs text-muted-foreground">
                        {service.description}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Button>Buscar</Button>
          </form>
          <section className="flex flex-row col-span-3">
            {searchServicesResult.length > 0 ? (
              <div className="">
                <h2 className="flex flex-col md:flex-row gap-2 justify-center items-center text-2xl font-bold text-foreground text-center my-5">
                  Resultados de la búsqueda para:{" "}
                  <span className="text-primary">{currentSearchTerm}</span>
                  <span className="flex items-center text-sm text-primary">
                    ( {searchServicesResult.length} Coincidencias)
                  </span>
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-20 mt-5">
                  {searchServicesResult.map((service) => (
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
                      <CardContent className="flex flex-col justify-between items-right">
                        <span className="text-sm text-muted-foreground">
                          Categoria:
                          <span className="ml-2 text-primary">
                            {service.category}
                          </span>
                        </span>
                        <CardDescription className="text-sm text-muted-foreground">
                          {service.description}
                        </CardDescription>
                        <div className="flex flex-row justify-between items-center mt-3">
                          <Badge className="text-sm font-medium">
                            {`Desde: $${service.price.toString()}`}
                          </Badge>
                          {selectedService.includes(service.name) && (
                            <Badge className="text-sm font-medium">
                              <span className="hidden md:flex">
                                Seleccionado
                              </span>
                              <CircleCheck className="block md:hidden" />
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
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
                          <CardContent className="flex flex-col justify-between items-right">
                            <CardDescription className="text-sm text-muted-foreground">
                              {service.description}
                            </CardDescription>
                            <div className="flex flex-row justify-between items-center mt-3">
                              <Badge className="text-sm font-medium">
                                {`Desde: $${service.price.toString()}`}
                              </Badge>
                              {selectedService.includes(service.name) && (
                                <Badge className="text-sm font-medium">
                                  <span className="hidden md:flex">
                                    Seleccionado
                                  </span>
                                  <CircleCheck className="block md:hidden" />
                                </Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            )}
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
                      onClick={() => {
                        const newServices = selectedService.filter(
                          (s) => s !== service
                        );
                        setSelectedService(newServices);
                      }}
                    >
                      {`${serviceData?.name} - $${serviceData?.price}`}
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
