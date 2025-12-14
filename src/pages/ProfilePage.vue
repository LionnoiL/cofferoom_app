<template>
  <div class="profile-page">
    <h2>Профіль</h2>
    
    <div class="profile-card">
      <p><strong>Ім'я:</strong> {{ user.name }}</p>
      <p><strong>Телефон:</strong> {{ user.phone }}</p>
      <p><strong>Бонуси:</strong> {{ user.bonusBalance }}</p>
    </div>

    <div class="qr-card">
      <qrcode-vue
        :value="qrValue"
        :size="220"
        level="H"
      />
      <p class="hint">
        Покажіть цей код касиру для ідентифікації
      </p>
    </div>

    <button class="logout-btn" @click="logout">Вийти</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import QrcodeVue from 'qrcode.vue'

const user = useUserStore()
const router = useRouter()

const qrValue = computed(() => {
  return `coffeeapp:user:${user.id}`
})

const logout = () => {
  user.logout()
  router.push('/login')
}
</script>

<style scoped>
.profile-page {
  padding: 16px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.profile-card {
  background: #f0f8ff;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 24px;
  text-align: left;
}

.profile-card p {
  margin: 8px 0;
  font-size: 16px;
}

.qr-card {
  margin: 24px auto;
  padding: 20px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.qr-card h3 {
  margin-bottom: 16px;
  font-size: 18px;
  color: #333;
}

.hint {
  margin-top: 12px;
  color: #666;
  font-size: 14px;
}

.logout-btn {
  background-color: #dc3545;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
}

.logout-btn:hover {
  background-color: #b02a37;
}
</style>