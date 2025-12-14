export interface Cafe {
  id: number
  name: string
  lat: number
  lng: number
}

export const cafes: Cafe[] = [
  { id: 1, name: 'Кав’ярня Центральна', lat: 49.987, lng: 36.182 },
  { id: 2, name: 'Кав’ярня Молодіжна', lat: 49.985, lng: 36.185 },
  { id: 3, name: 'Кав’ярня Студентська', lat: 49.988, lng: 36.180 }
]
