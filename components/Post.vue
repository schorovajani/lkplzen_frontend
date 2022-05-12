<template>
  <!-- post card -->
  <div class="post">
    <div class="post-thumb">
      <img :src="photoURL" />
    </div>
    <div class="post-info">
      <h4>{{ title }}</h4>
      <p>{{ shortBody }}</p>
      <nuxt-link class="post-more" :to="'/competitions/posts/' + slug">
        více
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    slug: String,
    body: String,
    photo: String,
  },
  computed: {
    /*
     * Cut body text
     */
    shortBody() {
      return this.body.length > 150
        ? this.body.slice(0, 150) + '...'
        : this.body
    },

    /*
     * Retrive photo url, if is not exists, return random photo
     */
    photoURL() {
      if (this.photo) {
        // return `${this.$axios.defaults.baseURL}${this.photo}`
        return this.photo
      } else {
        const num = Math.floor(Math.random() * 2)
        return require(`~/assets/postPhotos/photo-${num}.jpg`)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.post {
  color: $black;
  background-color: $white;

  border-radius: 10px;
}

.post-thumb {
  width: 100%;
  max-height: 15rem;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  img {
    width: 100%;
  }
}

.post-info {
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    margin: 1.5rem 0;
  }

  a {
    text-align: right;
    align-self: flex-end;
    color: $thirdy;
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
}
</style>
