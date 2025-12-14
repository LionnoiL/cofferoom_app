<template>
  <div class="login-page">
    <h2>Авторизація</h2>

    <div v-if="step === 1" class="step">
      <p>Введіть номер телефону:</p>
      <input v-model="phone" type="tel" placeholder="+380XXXXXXXXX" />
      <button @click="sendCode">Отримати код</button>
    </div>

    <div v-else class="step">
      <p>Введіть код з SMS:</p>
      <input v-model="code" type="text" placeholder="1234" maxlength="4" />
      <button @click="login">Увійти</button>
    </div>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const step = ref(1)
const phone = ref('')
const code = ref('')
const error = ref('')

const router = useRouter()
const user = useUserStore()

const sendCode = () => {
  if (!phone.value.match(/^\+380\d{9}$/)) {
    error.value = 'Введіть правильний номер телефону'
    return
  }
  error.value = ''
  step.value = 2
  // Тут можна інтегрувати SMS API
}

const login = () => {
  const success = user.login(phone.value, code.value)
  if (success) {
    router.push('/menu')
  } else {
    error.value = 'Невірний код'
  }
}
</script>

<style scoped>
.login-page {
  padding: 16px;
  max-width: 360px;
  margin: 0 auto;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin: 12px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: #d9534f;
  margin-top: 8px;
}
</style>
