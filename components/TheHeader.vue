<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="logo" :class="{ scrolllogo: isScrolled }">
      <img src="~/assets/logo-text.svg" alt="logo" />
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
    /*
     * Observe scroll position from top of page
     * Set status to change header style
     */
    updateScroll() {
      this.scrollPosition = window.scrollY
      this.isScrolled = this.scrollPosition > 50
    },
  },

  /*
   *  Add event listener to observe scroll position and its change
   */
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },

  /*
   *   Remove event listener to observe scroll position and its change
   */
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
  //background-color: $white;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.4) 80%,
    rgba(255, 255, 255, 0) 100%
  );
}

.logo {
  display: flex;
  align-items: center;

  img {
    height: 3.7rem;
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
