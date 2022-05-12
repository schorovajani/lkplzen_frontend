<template>
  <!-- intro of every page -->
  <div class="head-page">
    <img class="head-img" :src="imageUrl" />
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
  },
  computed: {
    imageUrl() {
      return require(`~/assets/pages/${this.image}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.head-page {
  width: calc(100vw - (100vw - 100%));
  height: 18rem;

  h2 {
    position: absolute;
    top: 10rem;
    left: 50%;
    transform: translate(-50%, 0);
    text-transform: uppercase;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
  }
}

.head-img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  opacity: 0.25;
}
</style>
