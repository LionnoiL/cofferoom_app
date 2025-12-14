import { defineStore } from 'pinia'

export interface BonusEntry {
  id: number
  date: string
  description: string
  points: number
}

export interface Order {
  id: number
  date: string
  total: number
  status: 'Виконано' | 'Готується' | 'Скасовано'
}

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '', // пусто до авторизації
    name: '',
    phone: '',
    bonusBalance: 0,
    bonusHistory: [] as BonusEntry[],
    orders: [] as Order[],
    isLoggedIn: false
  }),
  
  getters: {
    // Корисні геттери
    totalOrders: (state) => state.orders.length,
    activeOrders: (state) => state.orders.filter(o => o.status === 'Готується'),
    completedOrders: (state) => state.orders.filter(o => o.status === 'Виконано')
  },
  
  actions: {
    login(phone: string, code: string) {
      // mock логіка: код завжди "1234"
      if (code === '1234') {
        this.id = 'user-' + phone
        this.phone = phone
        this.name = 'Андрій Гапонов'
        this.isLoggedIn = true

        // mock дані
        this.bonusBalance = 100
        this.bonusHistory = [
          { id: 1, date: '2025-12-10', description: 'Замовлення Еспресо', points: 10 }
        ]
        this.orders = [
          { id: 1, date: '2025-12-10', total: 50, status: 'Виконано' }
        ]
        return true
      }
      return false
    },
    
    logout() {
      this.$reset() // або вручну:
    },

  },
  
  persist: true
})