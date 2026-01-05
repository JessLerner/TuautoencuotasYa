
export type Brand = 'Fiat' | 'Citroën' | 'Peugeot' | 'Jeep' | 'Renault' | 'Volkswagen' | 'Toyota' | 'Ford' | 'Chevrolet' | 'Honda';

export interface Car {
  id: string;
  brand: Brand;
  model: string;
  year: number;
  price: number;
  condition: '0km' | 'Usado';
  km?: number;
  segment: 'Hatchback' | 'SUV' | 'Pickup' | 'Sedán' | 'Utilitario';
  imageUrl: string;
  description: string;
  features: string[];
}

export interface Lead {
  id: string;
  timestamp: string;
  type: 'Consulta Web' | 'Tasación Usado' | 'Chatbot';
  name: string;
  email?: string;
  phone: string;
  interest?: string;
  observations?: string;
  vehicleDetails?: string;
}

export interface FormData {
  name: string;
  phone: string;
  brandOfInterest: Brand | 'General';
  observations: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface UsedQuote {
  year: string;
  brand: string;
  model: string;
  name: string;
  email: string;
  phone: string;
}
