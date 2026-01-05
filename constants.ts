
import { Vehicle, Review } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: '1',
    brand: 'Volkswagen',
    model: 'Golf',
    version: '1.4 TSI Highline',
    year: 2020,
    kilometers: 35000,
    price: 23800,
    currency: 'USD',
    condition: 'Usado',
    fuel: 'Nafta',
    transmission: 'Automático',
    image: 'https://i.ytimg.com/vi/-tjfK-7UKt8/hq720.jpg',
    isFeatured: true,
    status: 'Activo',
    createdAt: '2023-11-20'
  },
  {
    id: '2',
    brand: 'Toyota',
    model: 'Corolla',
    version: 'XEI Premium',
    year: 2022,
    kilometers: 15000,
    price: 26500,
    currency: 'USD',
    condition: 'Usado',
    fuel: 'Nafta',
    transmission: 'Automático',
    image: 'https://visionmotors.com.ar/wp-content/uploads/2024/11/TOYOTA-COROLLA-1.8-XEI-PACK-CVT-2018-100.000KM-2-scaled.jpeg',
    status: 'Activo',
    createdAt: '2023-11-15'
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'A3',
    version: 'Sportback 35 TFSI',
    year: 2019,
    kilometers: 48000,
    price: 28900,
    currency: 'USD',
    condition: 'Usado',
    fuel: 'Nafta',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1200',
    status: 'Activo',
    createdAt: '2023-11-10'
  },
  {
    id: '4',
    brand: 'BMW',
    model: 'X3',
    version: 'xDrive30i',
    year: 2024,
    kilometers: 0,
    price: 85000,
    currency: 'USD',
    condition: '0km',
    fuel: 'Nafta',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200',
    status: 'Activo',
    createdAt: '2023-11-25'
  },
  {
    id: '5',
    brand: 'Ford',
    model: 'Ranger',
    version: 'Limited 4x4',
    year: 2024,
    kilometers: 0,
    price: 'Consultar',
    currency: 'ARS',
    condition: '0km',
    fuel: 'Diesel',
    transmission: 'Automático',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200',
    status: 'Activo',
    createdAt: '2023-11-28'
  },
  {
    id: '6',
    brand: 'Mercedes-Benz',
    model: 'Clase A',
    version: 'A 250 AMG Line',
    year: 2024,
    kilometers: 0,
    price: 54000000,
    currency: 'ARS',
    condition: '0km',
    fuel: 'Nafta',
    transmission: 'Automático',
    image: 'https://www.mercedes-benz.com.ar/content/dam/argentina/passengercars/mercedes-benz-cars/a-class/hatchback-w177-fl-pi/mercedes-benz-a-class-w177-teaser-exterior-3302x1858-03-2023.jpg/1740110143296.jpg',
    status: 'Activo',
    createdAt: '2023-10-15'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Juan D.',
    initials: 'JD',
    rating: 5,
    comment: 'Excelente atención y proceso de compra. ¡Mi nuevo auto es perfecto! Totalmente recomendados.',
    date: 'Hace 3 días'
  },
  {
    id: '2',
    author: 'Ana M.',
    initials: 'AM',
    rating: 4,
    comment: 'Muy buena experiencia, el personal fue muy amable y me ayudó a encontrar el vehículo ideal para mi familia.',
    date: 'Hace 1 semana'
  },
  {
    id: '3',
    author: 'Luis P.',
    initials: 'LP',
    rating: 5,
    comment: 'Rápido, transparente y sin sorpresas. Compré un usado y funciona de maravilla. ¡Gracias!',
    date: 'Hace 2 semanas'
  }
];
