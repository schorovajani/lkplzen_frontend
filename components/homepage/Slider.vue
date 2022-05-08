<template>
  <div class="slider-container">
    <div class="slider-button btn-prev">
      <button v-show="!first" @click="prev">
        <svg
          fill="none"
          height="50"
          viewBox="0 0 20 20"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3544 15.8527C12.1594 16.0484 11.8429 16.0489 11.6472 15.854L6.16276 10.389C5.94705 10.1741 5.94705 9.82477 6.16276 9.60982L11.6472 4.14484C11.8429 3.94993 12.1594 3.95049 12.3544 4.1461C12.5493 4.34171 12.5487 4.65829 12.3531 4.85321L7.18851 9.99942L12.3531 15.1456C12.5487 15.3406 12.5493 15.6571 12.3544 15.8527Z"
            fill="#212121"
          />
        </svg>
      </button>
      <div>&nbsp;</div>
    </div>
    <div class="slider-inner">
      <HomepageSliderItem
        v-for="(profile, index) in profiles"
        :key="profile.id"
        :profile="profile.attributes"
        :index="index"
        :currentSlide="currentSlide"
      />
    </div>
    <div class="slider-button btn-next">
      <button v-show="!last" @click="next">
        <svg
          fill="none"
          height="50"
          viewBox="0 0 20 20"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.64582 4.14708C7.84073 3.95147 8.15731 3.9509 8.35292 4.14582L13.8374 9.6108C14.0531 9.82574 14.0531 10.1751 13.8374 10.39L8.35292 15.855C8.15731 16.0499 7.84073 16.0493 7.64582 15.8537C7.4509 15.6581 7.45147 15.3415 7.64708 15.1466L12.8117 10.0004L7.64708 4.85418C7.45147 4.65927 7.4509 4.34269 7.64582 4.14708Z"
            fill="#212121"
          />
        </svg>
      </button>
      <div>&nbsp;</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profiles: Array,
  },
  data() {
    return {
      currentSlide: 1,
      // slideInterval: null,
    }
  },
  computed: {
    arrLength() {
      return this.profiles.length
    },
    last() {
      return this.currentSlide === this.arrLength - 2
    },
    first() {
      return this.currentSlide === 1
    },
  },
  methods: {
    setIndex(index) {
      this.currentSlide = index
    },
    next() {
      if (this.currentSlide !== this.last) {
        this.currentSlide++
      }
    },
    prev() {
      if (this.currentSlide !== this.first) {
        this.currentSlide--
      }
    },
  },
  mounted() {
    // this.slideInterval = setInterval(() => {
    //   const index =
    //     this.currentSlide < this.arrLength - 1 ? this.currentSlide + 1 : 0
    //   this.setIndex(index)
    // }, 3000)
  },
  beforeUnmount() {
    // clearInterval(this.slideInterval)
  },
}
</script>

<style lang="scss" scoped>
.slider-container {
  display: flex;
  justify-content: center;
}

.slider-inner {
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: space-evenly;
}

.slider-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    width: 12vw;
  }
  button {
    border: none;
    background: none;
  }
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
  .slider-button {
    div {
      width: 5rem;
    }
  }
  .btn-prev {
    margin-left: 3rem;
  }

  .btn-next {
    margin-right: 3rem;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>
