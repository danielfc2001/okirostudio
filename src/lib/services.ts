export interface OptionsType {
  name: string;
  price: number;
  description: string;
  category?: string;
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
        description:
          "Dale rostro y alma a tu marca con una identidad que cuente tu historia a primera vista.",
      },
      {
        name: "Diseño de logotipo",
        price: 100,
        description:
          "Creamos logotipos memorables que hablan sin palabras y se quedan en la mente.",
      },
      {
        name: "Diseño de papelería corporativa",
        price: 150,
        description:
          "Convierte cada documento en una extensión profesional y elegante de tu marca.",
      },
      {
        name: "Diseño de packaging",
        price: 120,
        description:
          "Haz que tus productos brillen en el estante con empaques que seducen a primera vista.",
      },
      {
        name: "Diseño UX/UI para apps",
        price: 180,
        description:
          "Transformamos pantallas en experiencias intuitivas y placenteras para tus usuarios.",
      },
      {
        name: "Manual de marca",
        price: 90,
        description:
          "El libro sagrado de tu marca: reglas, estilo y esencia en un solo documento.",
      },
      {
        name: "Diseño de presentaciones",
        price: 70,
        description:
          "Convierte tus ideas en diapositivas que capturan atención y dejan huella.",
      },
      {
        name: "Diseño de banners publicitarios",
        price: 60,
        description:
          "Imposible ignorarlos: banners que invitan, impactan y convierten.",
      },
    ],
  },
  {
    service: "Desarrollo",
    options: [
      {
        name: "Sitios web empresariales",
        price: 200,
        description:
          "Tu vitrina digital: profesional, funcional y pensada para destacar en la red.",
      },
      {
        name: "Desarrollo de landing pages",
        price: 100,
        description:
          "Páginas diseñadas para una sola misión: convertir visitantes en clientes.",
      },
      {
        name: "E-commerce con pasarela de pago",
        price: 300,
        description:
          "Tu tienda abierta 24/7, con pagos seguros y experiencia de compra impecable.",
      },
      {
        name: "Aplicaciones móviles (iOS/Android)",
        price: 500,
        description:
          "Lleva tu idea al bolsillo del mundo con una app funcional y atractiva.",
      },
      {
        name: "Integración con APIs",
        price: 150,
        description:
          "Conectamos tu sistema al mundo para que funcione como una orquesta sincronizada.",
      },
      {
        name: "Desarrollo backend (Node.js)",
        price: 250,
        description:
          "El motor invisible que hace que todo funcione, rápido y sin errores.",
      },
      {
        name: "Mantenimiento y soporte técnico",
        price: 80,
        description:
          "Estamos detrás del telón, asegurándonos de que todo funcione como debe.",
      },
      {
        name: "Desarrollo frontend (React/Vue)",
        price: 200,
        description:
          "Interfaces modernas, dinámicas y listas para enamorar a tus usuarios.",
      },
    ],
  },
  {
    service: "Marketing",
    options: [
      {
        name: "Gestión de redes sociales",
        price: 100,
        description:
          "Conecta con tu audiencia, cuenta historias y construye comunidad todos los días.",
      },
      {
        name: "Campañas publicitarias (Meta Ads, Google Ads)",
        price: 250,
        description:
          "Pon tu marca frente a los ojos correctos, en el momento perfecto.",
      },
      {
        name: "Email marketing y newsletters",
        price: 70,
        description:
          "Haz que cada correo cuente: contenido atractivo directo a la bandeja de entrada.",
      },
      {
        name: "SEO y posicionamiento web",
        price: 150,
        description:
          "Sube en los rankings y sé encontrado antes que tu competencia.",
      },
      {
        name: "Marketing de contenidos",
        price: 130,
        description:
          "Crea valor, educa y enamora con contenido que realmente importa.",
      },
      {
        name: "Análisis de métricas y reportes",
        price: 90,
        description:
          "Descubre qué funciona y qué no, con datos que te hablan claro.",
      },
      {
        name: "Estrategia de marca digital",
        price: 110,
        description:
          "Un plan con propósito para destacar en el universo digital.",
      },
      {
        name: "Gestión de crisis en RRSS",
        price: 120,
        description:
          "Cuando todo arde, nosotros enfriamos el ambiente y salvamos tu reputación.",
      },
    ],
  },
  {
    service: "Producción audiovisual",
    options: [
      {
        name: "Filmación de eventos",
        price: 400,
        description:
          "Capturamos momentos irrepetibles con calidad cinematográfica.",
      },
      {
        name: "Edición de video profesional",
        price: 120,
        description:
          "Convertimos horas de grabación en historias poderosas y emocionantes.",
      },
      {
        name: "Animación 2D/3D",
        price: 300,
        description:
          "Dale vida a tus ideas con movimiento, color y mucha creatividad.",
      },
      {
        name: "Videos corporativos",
        price: 250,
        description:
          "Tu empresa contada como una gran historia en formato audiovisual.",
      },
      {
        name: "Spots publicitarios",
        price: 350,
        description: "Impacta en segundos con anuncios que emocionan y venden.",
      },
      {
        name: "Cobertura audiovisual en vivo",
        price: 500,
        description:
          "Transmite tu evento al mundo con calidad y emoción en tiempo real.",
      },
      {
        name: "Grabación con drones",
        price: 450,
        description:
          "Vistas aéreas espectaculares que le dan otra dimensión a tu contenido.",
      },
      {
        name: "Producción de podcasts en video",
        price: 200,
        description:
          "Convierte tus conversaciones en contenido visualmente irresistible.",
      },
    ],
  },
];
