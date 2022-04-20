<template>
  <header>
    <div class="logo">
      <img src="~/assets/logo-text.svg" alt="logo" />
      <!-- <h1 class="header-head">1. lukostřelecký klub<br />Plzeň 1935</h1> -->
    </div>
    <UiNavigation />
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  position: absolute;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;

  img {
    height: 4.5rem;
  }
}

.header-head {
  font-size: 1.5rem;
}
</style>
