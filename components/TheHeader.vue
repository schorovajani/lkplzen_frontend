<template>
  <header>
    <div class="logo">
      <img src="~/assets/logo.png" alt="logo" />
      <h1 class="header-head">1. lukostřelecký klub<br />Plzeň 1935</h1>
    </div>
    <UiNavigation />
  </header>
</template>

<style>
header {
  margin: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.header-head {
  font-size: 1.5rem;
}
</style>
