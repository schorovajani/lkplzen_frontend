<template>
  <div>
    <div
      id="big-slider"
      class="slider-item"
      :class="{ nonactive: isNotActive }"
      v-if="showItem"
    >
      <Profile :profile="profile" />
    </div>
    <div
      id="small-slider"
      class="slider-item"
      :class="{ nonactive: isNotActive }"
      v-if="showItemSmall"
    >
      <Profile :profile="profile" />
    </div>
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
    showItemSmall() {
      return this.index === this.currentSlide
    },
    isNotActive() {
      return this.index !== this.currentSlide
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-item {
  overflow: hidden;
}
.nonactive {
  transform: scale(0.8);
}

#big-slider {
  display: none;
}

@media (min-width: 576px) {
  .slider-item {
    margin-top: 3rem;
    width: 60vw;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
  #big-slider {
    display: block;
  }

  #small-slider {
    display: none;
  }

  .slider-item {
    width: 30vw;
  }
}
</style>
