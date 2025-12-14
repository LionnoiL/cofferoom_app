<template>
  <div class="orders-page">
    <h2>Мої замовлення</h2>

    <div
      v-for="order in user.orders"
      :key="order.id"
      class="order-item"
    >
      <div class="left">
        <p class="date">{{ order.date }}</p>
        <p class="total">Сума: {{ order.total }} ₴</p>
      </div>

      <div class="right" :class="statusClass(order.status)">
        {{ order.status }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const statusClass = (status: string) => {
  switch (status) {
    case 'Виконано':
      return 'status-completed'
    case 'Готується':
      return 'status-pending'
    case 'Скасовано':
      return 'status-cancelled'
    default:
      return ''
  }
}
</script>

<style scoped>
.orders-page {
  padding: 16px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.left .date {
  font-weight: 500;
}

.left .total {
  font-size: 14px;
  color: #555;
}

.right {
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
  text-align: center;
  min-width: 90px;
}

.status-completed {
  background-color: #d4edda;
  color: #155724;
}

.status-pending {
  background-color: #fff3cd;
  color: #856404;
}

.status-cancelled {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
