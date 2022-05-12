<template>
  <div class="slide-container">
    <vueper-slides
      autoplay
      class="no-shadow"
      :bullets="false"
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
.slide-container {
  // width: 90vw;
  // height: 100%;
  // margin-top: 3rem;
  display: none;
}

@media (min-width: 992px) {
  .slide-container {
    display: block;
    margin-top: 8rem;
    width: 80%;
  }
}
</style>
