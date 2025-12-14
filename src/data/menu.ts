// src/data/menu.ts
export interface MenuItem {
  id: number
  name: string
  description?: string
  price: number
  category: string
  image: string
}

export const menu: MenuItem[] = [
  {
    id: 1,
    name: 'Еспресо',
    description: 'Класична міцна кава',
    price: 40,
    category: 'Кава',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Американо',
    description: 'Еспресо з гарячою водою',
    price: 45,
    category: 'Кава',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Капучино',
    description: 'Еспресо з молоком та піною',
    price: 55,
    category: 'Кава',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Лате',
    description: 'Молочна кава',
    price: 60,
    category: 'Кава',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    name: 'Чай чорний',
    description: 'Ароматний класичний чай',
    price: 35,
    category: 'Чай',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    name: 'Чай зелений',
    description: 'Свіжий зелений чай',
    price: 35,
    category: 'Чай',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop'
  },
  {
    id: 7,
    name: 'Круасан',
    description: 'Свіжий, з маслом',
    price: 50,
    category: 'Десерти',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop'
  },
  {
    id: 8,
    name: 'Чізкейк',
    description: 'Ніжний сирний торт',
    price: 70,
    category: 'Десерти',
    image: 'https://images.unsplash.com/photo-1533134286178-c2b0e3d22c2f?w=400&h=400&fit=crop'
  },
  {
    id: 9,
    name: 'Маффін',
    description: 'З шоколадною крихтою',
    price: 45,
    category: 'Десерти',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=400&fit=crop'
  },
  {
    id: 10,
    name: 'Флет Вайт',
    description: 'Подвійний еспресо з молоком',
    price: 65,
    category: 'Кава',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=400&fit=crop'
  }
]