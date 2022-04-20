<template>
  <div class="profile-container">
    <div class="profile-head">
      <img :src="imgUrl" alt="profile-photo" />
      <h4>{{ profile.name }}</h4>
      <span>{{ profile.clubRole }}</span>
    </div>
    <div class="profile-body">
      <p>"{{ profile.about }}"</p>
    </div>
    <nuxt-link class="profile-more" :to="moreUrl">více o mně</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
  },
  computed: {
    imgUrl() {
      const url = this.profile.profilePhoto.data.attributes.url
      //console.log(url)
      return `http://localhost:1337${url}`
    },
    moreUrl() {
      return `/club/people/${this.profile.slug}`
    },
  },
}
</script>

<style lang="scss">
.profile-container {
  background-color: $black;
  color: $white;
  padding: 4rem;

  display: flex;
  flex-direction: column;

  a {
    color: $white;
    align-self: flex-end;
  }
}

.profile-head {
  text-align: center;
  img {
    width: 60%;
    border-radius: 50%;
  }

  h4 {
    font-size: 1.5rem;
    margin: 0.8rem 0;
  }
}

.profile-body {
  margin: 2rem 0;
}
</style>
