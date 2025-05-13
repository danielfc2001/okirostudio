import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/services";

export const runtime = "edge";

export default function ServicesPage() {
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
            {servicesData.map((service, i) => (
              <button key={i} className="">
                {service.service}
              </button>
            ))}
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
