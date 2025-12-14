<template>
  <nav class="bottom-nav">
    <RouterLink to="/menu">Меню</RouterLink>
    <RouterLink to="/orders">Замовлення</RouterLink>
    <RouterLink to="/map">Мапа</RouterLink>
    <RouterLink to="/profile">Профіль</RouterLink>
  </nav>
</template>

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ddd;
  padding: 10px 0;
}

a {
  text-decoration: none;
  color: #555;
}

.router-link-active {
  font-weight: bold;
  color: #000;
}
</style>
