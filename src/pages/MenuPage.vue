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
        <img 
          :src="item.image" 
          :alt="item.name"
          class="menu-item-image"
          loading="lazy"
        />

        <div class="menu-item-info">
          <div class="name">{{ item.name }}</div>
          <div class="description" v-if="item.description">
            {{ item.description }}
          </div>
        </div>

        <div class="menu-item-price">
          <div class="price">{{ item.price }} ₴</div>
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
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 24px;
  font-size: 2rem;
  background: linear-gradient(135deg, var(--coffee-dark), var(--accent-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.category {
  margin-bottom: 32px;
}

.category h3 {
  position: sticky;
  top: 0;
  background-color: var(--bg-secondary);
  padding: 12px 0;
  z-index: 10;
  backdrop-filter: blur(8px);
}

/* Додатковий стиль для мобільних */
@media (max-width: 768px) {
  .menu-item {
    flex-wrap: wrap;
  }
  
  .menu-item-image {
    width: 100%;
    height: 200px;
  }
  
  .menu-item-info {
    width: 100%;
    margin-top: 12px;
  }
  
  .menu-item-price {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }
  
  .menu-item .add-btn {
    padding: 8px 24px;
    font-size: 1rem;
  }
}
</style>