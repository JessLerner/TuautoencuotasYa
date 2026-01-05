
import { Car, Brand } from './types';

export const BRANDS: Brand[] = ['Fiat', 'Citroën', 'Peugeot', 'Jeep', 'Renault'];

export const BRAND_LOGOS: Record<string, string> = {
  'Fiat': 'https://logo.clearbit.com/fiat.com',
  'Peugeot': 'https://logo.clearbit.com/peugeot.com',
  'Jeep': 'https://logo.clearbit.com/jeep.com',
  'Renault': 'https://logo.clearbit.com/renault.com',
  'Citroën': 'https://logo.clearbit.com/citroen.com'
};

export const CARS: Car[] = [
  // 0KM 2026
  { id: 'p1', brand: 'Peugeot', model: '208 Turbo', year: 2026, price: 27500000, condition: '0km', segment: 'Hatchback', imageUrl: 'https://images.unsplash.com/photo-1619973278770-6da9a4d6ef56?q=80&w=1000', description: 'El hatch más vendido con motor Turbo 200.', features: ['i-Cockpit 3D', 'Cámara 360', 'Cuero'] },
  { id: 'f1', brand: 'Fiat', model: 'Cronos Precision', year: 2026, price: 24800000, condition: '0km', segment: 'Sedán', imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000', description: 'El auto de los argentinos, ahora con más tecnología.', features: ['Caja CVT', 'Climatizador', 'Llantas 16"'] },
  { id: 'j1', brand: 'Jeep', model: 'Renegade Longitude', year: 2026, price: 39500000, condition: '0km', segment: 'SUV', imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000', description: 'Aventura urbana con el ADN Jeep intacto.', features: ['7 Airbags', 'Motor 1.3T', 'Full LED'] },
  { id: 'r1', brand: 'Renault', model: 'Kardian', year: 2026, price: 29800000, condition: '0km', segment: 'SUV', imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000', description: 'El nuevo SUV compacto de Renault con tecnología europea.', features: ['Caja EDC', 'ADAS', 'Multi-sense'] },
  { id: 'c1', brand: 'Citroën', model: 'Nuevo C3', year: 2026, price: 22400000, condition: '0km', segment: 'Hatchback', imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000', description: 'Actitud SUV con el mejor precio del mercado.', features: ['Touch 10"', 'Espacio XL', 'Diseño bitono'] },
];

export const USED_CARS: Car[] = [
  { id: 'u1', brand: 'Toyota', model: 'Hilux SRX 4x4', year: 2022, km: 45000, price: 52000000, condition: 'Usado', segment: 'Pickup', imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000', description: 'Inmaculada, servicios oficiales. Lista para transferir.', features: ['Caja Automática', 'Tapizado Cuero', 'Estribos'] },
  { id: 'u2', brand: 'Volkswagen', model: 'Vento GLI', year: 2021, km: 32000, price: 44500000, condition: 'Usado', segment: 'Sedán', imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000', description: 'Performance pura, único dueño. Tratamiento cerámico.', features: ['Motor 2.0 TSI', 'Techo Solar', 'Virtual Cockpit'] },
  { id: 'u3', brand: 'Ford', model: 'Ranger Raptor', year: 2023, km: 12000, price: 89000000, condition: 'Usado', segment: 'Pickup', imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000', description: 'Igual a 0km. La pickup más extrema.', features: ['Fox Shocks', 'Modo Baja', 'Audio B&O'] },
  { id: 'u4', brand: 'Honda', model: 'HR-V EXL', year: 2020, km: 58000, price: 28900000, condition: 'Usado', segment: 'SUV', imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000', description: 'Excelente estado, cubiertas nuevas.', features: ['Paddle Shift', 'Magic Seats', 'Navegador'] }
];
