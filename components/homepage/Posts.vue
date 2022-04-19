<template>
  <div class="posts-container">
    <HomepagePostItem
      v-for="post in shortPosts"
      :key="post.id"
      :title="post.titlePost"
      :slug="post.slug"
      :body="post.body"
    />
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
  computed: {
    shortPosts() {
      return this.posts.slice(0, 3)
    },
  },
}
</script>

<style lang="scss" scoped>
.posts-container {
  display: flex;
  flex-direction: column;

  div {
    margin-top: 3rem;
    width: 100%;
  }
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
  .posts-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
      width: 48%;
      //margin: 2rem 2rem 0 0;
    }

    div:last-child {
      margin: 3rem auto;
    }
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
  .posts-container {
    div {
      width: 30%;
    }

    div:last-child {
      margin: 3rem 0 0 0;
    }
  }
}
</style>
