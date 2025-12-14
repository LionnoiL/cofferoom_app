<template>
  <div class="menu-page">
    <h2>Меню</h2>

    <div
      v-for="category in categories"
      :key="category"
      class="category"
    >
      <h3>{{ category }}</h3>

      <div
        v-for="item in itemsByCategory(category)"
        :key="item.id"
        class="menu-item"
      >
        <div class="info">
          <div class="name">{{ item.name }}</div>
          <div class="description" v-if="item.description">
            {{ item.description }}
          </div>
        </div>

        <div class="price">
          {{ item.price }} ₴
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { menu } from '@/data/menu'

const categories = computed(() => {
  return [...new Set(menu.map(item => item.category))]
})

const itemsByCategory = (category: string) => {
  return menu.filter(item => item.category === category)
}
</script>

<style scoped>
.menu-page {
  padding: 16px;
}

.category {
  margin-bottom: 24px;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.name {
  font-weight: 600;
}

.description {
  font-size: 13px;
  color: #777;
}

.price {
  font-weight: bold;
  white-space: nowrap;
}
</style>
