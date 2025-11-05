// Language types
export type Language = 'en' | 'es' | 'de' | 'ko'

// FIFA Event types
export interface FIFAEvent {
  id: string
  title: string
  date: Date
  venue: string
  teams: {
    home: string
    away: string
  }
}

// Venue types
export interface Venue {
  id: string
  name: string
  lat: number
  lng: number
}

// Transit types
export interface TransitVehicle {
  id: string
  route: string
  lat: number
  lng: number
  type: 'bus' | 'train'
}
