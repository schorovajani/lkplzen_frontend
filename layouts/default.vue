<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
button {
  border: none;
  background-color: $primary;
  color: $black;
}

h3 {
  font-size: 2rem;
  font-weight: 600;
}

p {
  font-size: 1.1rem;
  line-height: 150%;
}
</style>
