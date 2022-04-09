<template>
  <nav>
    <nuxt-link to="/">Domů</nuxt-link>
    <nuxt-link to="/club">O klubu</nuxt-link>
    <nuxt-link to="/start">Chci střílet z luku</nuxt-link>
    <nuxt-link to="/partners">Partneři</nuxt-link>
    <nuxt-link to="/contact">Kontakty</nuxt-link>
    <button class="nav-icon">
      <svg
        width="27"
        height="25"
        viewBox="0 0 27 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1.13636C0 0.508773 0.377764 0 0.84375 0H26.1562C26.6222 0 27 0.508773 27 1.13636C27 1.76395 26.6222 2.27273 26.1562 2.27273H0.84375C0.377764 2.27273 0 1.76395 0 1.13636ZM0 12.5C0 11.8724 0.377764 11.3636 0.84375 11.3636H26.1562C26.6222 11.3636 27 11.8724 27 12.5C27 13.1276 26.6222 13.6364 26.1562 13.6364H0.84375C0.377764 13.6364 0 13.1276 0 12.5ZM0.84375 22.7273C0.377764 22.7273 0 23.2361 0 23.8636C0 24.4911 0.377764 25 0.84375 25H26.1562C26.6222 25 27 24.4911 27 23.8636C27 23.2361 26.6222 22.7273 26.1562 22.7273H0.84375Z"
          fill="#212121"
        />
      </svg>
    </button>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  color: $black;
  text-transform: uppercase;
  font-size: 1.15rem;
  margin: 0 1.1rem;
}

button {
  border: none;
  background: none;
  margin: 0 1.1rem;
}

.nav-icon {
  margin-left: 4rem;
}

.nuxt-link-exact-active {
  color: $green;
}
</style>
