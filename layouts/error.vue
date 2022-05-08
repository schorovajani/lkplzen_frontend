<template>
  <div>
    <div class="intro">
      <img alt="img-error" src="~/assets/photos/error.jpg" />
      <div>
        <h2 v-if="error.statusCode === 404">Stránka nenalezena</h2>
        <h2 v-else>Chyba</h2>
        <p>Omlouváme se. Přejděte prosím na jinou stránku.</p>
        <nuxt-link to="/">Domovská stránka</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
}
</script>

<style lang="scss" scoped>
.intro {
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
  overflow: hidden;
  img {
    opacity: 0.1;
  }

  div {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 0);

    text-align: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    p {
      text-align: center;
    }

    a {
      color: $thirdy;
    }
  }
}
</style>
