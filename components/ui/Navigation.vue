<template>
  <nav>
    <div class="nav-desktop">
      <nuxt-link to="/" exact>Domů</nuxt-link>
      <nuxt-link to="/club">O klubu</nuxt-link>
      <nuxt-link to="/start">Chci střílet z luku</nuxt-link>
      <nuxt-link to="/partners">Partneři</nuxt-link>
      <nuxt-link to="/contact">Kontakty</nuxt-link>
    </div>
    <button class="nav-icon" @click="showMenu">
      <img alt="menu-icon" src="~/assets/icons/menu.svg" />
    </button>
    <transition name="trans">
      <UiHamburgerMenu v-if="show" @hide="hideMenu" />
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showMenu() {
      this.show = true
    },
    hideMenu() {
      this.show = false
    },
  },
}
</script>

<style lang="scss" scoped>
.trans-enter-active,
.trans-leave-active {
  transition: all 0.5s ease;
}
.trans-enter,
.trans-leave-to {
  transform: translateX(100vw);
  opacity: 0.4;
}

nav {
  display: flex;
  align-items: center;
}

.nav-desktop {
  display: none;
}

button {
  all: unset;
  cursor: pointer;
  img {
    height: 1.3rem;
  }
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
  .nav-desktop {
    display: inline;
  }

  a {
    text-decoration: none;
    color: $black;
    text-transform: uppercase;
    font-size: 1.15rem;
    margin: 0 1.1rem;
  }

  button {
    margin: 0 1.1rem;
  }

  .nav-icon {
    margin-left: 4rem;
  }

  .nuxt-link-active {
    color: $primary;
  }
}
</style>
