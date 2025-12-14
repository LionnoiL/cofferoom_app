<template>
  <div class="bonuses-page">
    <h2>Мої бонуси</h2>

    <div class="balance-card">
      <p>Баланс бонусів:</p>
      <h3>{{ user.bonusBalance }}</h3>
    </div>

    <div class="history">
      <h3>Історія нарахувань</h3>
      <div
        v-for="entry in user.bonusHistory"
        :key="entry.id"
        class="history-item"
      >
        <div class="left">
          <p class="description">{{ entry.description }}</p>
          <p class="date">{{ entry.date }}</p>
        </div>
        <div class="points">
          +{{ entry.points }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const user = useUserStore()
</script>

<style scoped>
.bonuses-page {
  padding: 16px;
}

.balance-card {
  background: #f0f8ff;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 24px;
}

.balance-card p {
  margin: 0;
  font-weight: 500;
  color: #555;
}

.balance-card h3 {
  margin: 8px 0 0 0;
  font-size: 28px;
  color: #007bff;
}

.history h3 {
  margin-bottom: 12px;
}

.history-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 12px 0;
}

.left .description {
  font-weight: 500;
}

.left .date {
  font-size: 13px;
  color: #777;
}

.points {
  font-weight: bold;
  color: #28a745;
}
</style>
