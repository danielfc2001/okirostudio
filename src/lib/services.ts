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
        name: "Identidad",
        price: 50,
      },
      {
        name: "Bla bla",
        price: 100,
      },
      {
        name: "Blu blu",
        price: 150,
      },
    ],
  },
  {
    service: "Desarrollo",
    options: [
      {
        name: "Bli bli",
        price: 50,
      },
      {
        name: "Sitios empresariales",
        price: 200,
      },
      {
        name: "ASD",
        price: 100,
      },
    ],
  },
  {
    service: "Marketing",
    options: [
      {
        name: "Blo blo",
        price: 150,
      },
      {
        name: "Ble ble",
        price: 30,
      },
      {
        name: "Mantenimiento de RRSS",
        price: 100,
      },
    ],
  },
  {
    service: "Produccion audiovisual",
    options: [
      {
        name: "Tralalero tralala",
        price: 100,
      },
      {
        name: "Tun tun tun tun sahur",
        price: 500,
      },
    ],
  },
];
