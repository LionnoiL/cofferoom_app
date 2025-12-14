export interface MenuItem {
  id: number
  name: string
  description?: string
  price: number
  category: string
}

export const menu: MenuItem[] = [
  {
    id: 1,
    name: 'Еспресо',
    description: 'Класична міцна кава',
    price: 40,
    category: 'Кава'
  },
  {
    id: 2,
    name: 'Американо',
    description: 'Еспресо з гарячою водою',
    price: 45,
    category: 'Кава'
  },
  {
    id: 3,
    name: 'Капучино',
    description: 'Еспресо з молоком та піною',
    price: 55,
    category: 'Кава'
  },
  {
    id: 4,
    name: 'Лате',
    description: 'Молочна кава',
    price: 60,
    category: 'Кава'
  },
  {
    id: 5,
    name: 'Чай чорний',
    price: 35,
    category: 'Чай'
  },
  {
    id: 6,
    name: 'Чай зелений',
    price: 35,
    category: 'Чай'
  },
  {
    id: 7,
    name: 'Круасан',
    description: 'Свіжий, з маслом',
    price: 50,
    category: 'Десерти'
  }
]
