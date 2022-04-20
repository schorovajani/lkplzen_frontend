<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="logo" :class="{ scrolllogo: isScrolled }">
      <img src="~/assets/logo-text.svg" alt="logo" />
      <!-- <h1 class="header-head">1. lukostřelecký klub<br />Plzeň 1935</h1> -->
    </div>
    <UiNavigation />
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      isScrolled: false,
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      this.isScrolled = this.scrollPosition > 50
    },
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.updateScroll)
  },
}
</script>

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
    height: 4rem;
  }
}

.header-head {
  font-size: 1.5rem;
}

.scrolled {
  background-color: rgba($white, 0.95);
  position: fixed;
  top: 0;
  left: 0;
}

.scrolllogo {
  img {
    height: 3rem;
  }
}
</style>
