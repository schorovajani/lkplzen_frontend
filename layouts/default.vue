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
.page-button {
  border: none;
  background-color: $primary;
  color: $black;
  font-size: 1rem;
  width: 12rem;
  padding: 0.6rem;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

h3 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 150%;
  text-align: justify;
}
</style>
