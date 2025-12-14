<template>
  <div class="app">
    <AppHeader />

    <main class="content">
      <RouterView />
    </main>

    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import BottomNav from '@/components/layout/BottomNav.vue'
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
  overflow-y: auto;
}
</style>
