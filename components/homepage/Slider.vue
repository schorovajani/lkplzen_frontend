<template>
  <div class="slider-container">
    <vueper-slides
      autoplay
      class="no-shadow"
      :visible-slides="3"
      :gap="3"
      :slide-ratio="0.2"
      :dragging-distance="200"
      :breakpoints="{ 1450: { visibleSlides: 2 }, 850: { visibleSlides: 1 } }"
      fixed-height="850px"
    >
      <vueper-slide v-for="(profile, i) in profiles" :key="i">
        <template v-slot:content>
          <Profile :profile="profile.attributes" />
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  props: {
    profiles: Array,
  },
}
</script>

<style lang="scss" scoped>
.slider-container {
  width: 100vw;
  height: 100%;
  margin-top: 3rem;
}

@media (min-width: 576px) {
  .slider-container {
    width: 80vw;
  }
}
</style>
