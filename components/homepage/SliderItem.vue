<template>
  <div
    class="slider-item"
    :class="{ nonactive: isNotActive }"
    v-show="showItem"
  >
    <Profile :profile="profile" />
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
    index: Number,
    currentSlide: Number,
  },
  computed: {
    showItem() {
      //   // if (this.currentSlide === 0) {
      //   //   return (
      //   //     this.index === this.currentSlide ||
      //   //     this.index === this.length - 1 ||
      //   //     this.index === this.currentSlide + 1
      //   //   )
      //   // } else if (this.currentSlide === this.length - 1) {
      //   //   return (
      //   //     this.index === this.currentSlide ||
      //   //     this.index === this.currentSlide - 1 ||
      //   //     this.index === 0
      //   //   )
      //   // } else {
      //   //   return (
      //   //     this.index === this.currentSlide ||
      //   //     this.index === this.currentSlide - 1 ||
      //   //     this.index === this.currentSlide + 1
      //   //   )
      //   // }
      return (
        this.index === this.currentSlide ||
        this.index === this.currentSlide - 1 ||
        this.index === this.currentSlide + 1
      )
    },
    isNotActive() {
      return this.index !== this.currentSlide
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-item {
  width: 30%;
  overflow: hidden;
}
.nonactive {
  transform: scale(0.8);
}
</style>
