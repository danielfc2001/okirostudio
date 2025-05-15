export interface OptionsType {
  name: string;
  price: number;
}

export interface ServiceType {
  service: string;
  options: Array<OptionsType>;
}

export const servicesData: ServiceType[] = [
  {
    service: "Diseño",
    options: [
      {
        name: "Identidad visual",
        price: 50,
      },
      {
        name: "Diseño de logotipo",
        price: 100,
      },
      {
        name: "Diseño de papelería corporativa",
        price: 150,
      },
      {
        name: "Diseño de packaging",
        price: 120,
      },
      {
        name: "Diseño UX/UI para apps",
        price: 180,
      },
      {
        name: "Manual de marca",
        price: 90,
      },
      {
        name: "Diseño de presentaciones",
        price: 70,
      },
      {
        name: "Diseño de banners publicitarios",
        price: 60,
      },
    ],
  },
  {
    service: "Desarrollo",
    options: [
      {
        name: "Sitios web empresariales",
        price: 200,
      },
      {
        name: "Desarrollo de landing pages",
        price: 100,
      },
      {
        name: "E-commerce con pasarela de pago",
        price: 300,
      },
      {
        name: "Aplicaciones móviles (iOS/Android)",
        price: 500,
      },
      {
        name: "Integración con APIs",
        price: 150,
      },
      {
        name: "Desarrollo backend (Node.js)",
        price: 250,
      },
      {
        name: "Mantenimiento y soporte técnico",
        price: 80,
      },
      {
        name: "Desarrollo frontend (React/Vue)",
        price: 200,
      },
    ],
  },
  {
    service: "Marketing",
    options: [
      {
        name: "Gestión de redes sociales",
        price: 100,
      },
      {
        name: "Campañas publicitarias (Meta Ads, Google Ads)",
        price: 250,
      },
      {
        name: "Email marketing y newsletters",
        price: 70,
      },
      {
        name: "SEO y posicionamiento web",
        price: 150,
      },
      {
        name: "Marketing de contenidos",
        price: 130,
      },
      {
        name: "Análisis de métricas y reportes",
        price: 90,
      },
      {
        name: "Estrategia de marca digital",
        price: 110,
      },
      {
        name: "Gestión de crisis en RRSS",
        price: 120,
      },
    ],
  },
  {
    service: "Producción audiovisual",
    options: [
      {
        name: "Filmación de eventos",
        price: 400,
      },
      {
        name: "Edición de video profesional",
        price: 120,
      },
      {
        name: "Animación 2D/3D",
        price: 300,
      },
      {
        name: "Videos corporativos",
        price: 250,
      },
      {
        name: "Spots publicitarios",
        price: 350,
      },
      {
        name: "Cobertura audiovisual en vivo",
        price: 500,
      },
      {
        name: "Grabación con drones",
        price: 450,
      },
      {
        name: "Producción de podcasts en video",
        price: 200,
      },
    ],
  },
];
