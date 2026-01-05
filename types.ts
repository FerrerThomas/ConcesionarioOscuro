
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  kilometers: number;
  price: number | 'Consultar';
  currency: 'USD' | 'ARS';
  condition: 'Usado' | '0km';
  fuel: string;
  transmission: string;
  image: string;
  isFeatured?: boolean;
  status: 'Activo' | 'Pausado' | 'Vendido';
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  rating: number;
  comment: string;
  date: string;
}
