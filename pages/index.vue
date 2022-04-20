<template>
  <main>
    <section class="hero">
      <img src="~/assets/photos/theme-photo.jpg" alt="theme-photo" />
      <div class="hero-text">
        <h2>Lukostřelecký klub sídlící v Plzni<br />ve Štruncových sadech</h2>
        <a class="hero-more" href="#home-club">
          <span>zjisti o nás více</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="20"
            viewBox="0 0 20 20"
            width="20"
          >
            <path
              d="M10.8371 2.63074C10.6332 2.44456 10.3169 2.45895 10.1307 2.66289C9.94456 2.86683 9.95895 3.18309 10.1629 3.36927L16.3307 9H2.5C2.22386 9 2 9.22386 2 9.5C2 9.77614 2.22386 10 2.5 10H16.3279L10.1629 15.6281C9.95895 15.8143 9.94456 16.1305 10.1307 16.3345C10.3169 16.5384 10.6332 16.5528 10.8371 16.3666L17.7535 10.0526C17.8934 9.92482 17.9732 9.75728 17.993 9.58414C17.9976 9.55678 18 9.52867 18 9.5C18 9.47313 17.9979 9.44675 17.9938 9.42103C17.9756 9.24512 17.8955 9.07446 17.7535 8.94478L10.8371 2.63074Z"
              fill="#ffffff"
            />
          </svg>
        </a>
      </div>
    </section>
    <section id="home-club">
      <div class="page-cols">
        <article class="column">
          <h3>Klub 1. LK Plzeň</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,
            nec bibendum odio risus sit amet ante. Morbi imperdiet, mauris ac
            auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus
            in lacus. Vestibulum erat nulla, ullamcorper nec, rutrum non,
            nonummy ac, erat.
          </p>
          <nuxt-link class="page-button" tag="button" to="/club"
            >Více o klubu</nuxt-link
          >
          <p>
            Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel
            sapien. Nulla turpis magna, cursus sit amet, suscipit a, interdum
            id, felis. Etiam commodo dui eget wisi. Pellentesque sapien.
          </p>
          <nuxt-link class="page-button" tag="button" to="/start"
            >Staň se členem</nuxt-link
          >
        </article>
        <div class="column">
          <img
            class="col-image"
            src="~/assets/photos/club-photo.jpg"
            alt="club-photo"
          />
        </div>
      </div>
    </section>
    <section id="home-archery">
      <div class="page-cols" id="archery">
        <div class="column">
          <img
            class="col-image"
            src="~/assets/photos/home-archery.jpg"
            alt="archery"
          />
        </div>
        <article class="column">
          <h3>Lukostřelba</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,
            nec bibendum odio risus sit amet ante. Morbi imperdiet, mauris ac
            auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus
            in lacus. Vestibulum erat nulla, ullamcorper nec, rutrum non,
            nonummy ac, erat.
          </p>
          <div class="bow-types">
            <div class="bow recurve-bow">
              <img
                class="rounded-img"
                src="~/assets/photos/recurve-bow-thumb.jpg"
                alt="recurve-bow"
              />
              <span>Reflexní luk</span>
            </div>
            <div class="bow bare-bow">
              <img
                class="rounded-img"
                src="~/assets/photos/bare-bow-thumb.jpg"
                alt="bare-bow"
              />
              <span>Holý luk</span>
            </div>
            <div class="bow compound-bow">
              <img
                class="rounded-img"
                src="~/assets/photos/compound-bow-thumb.jpg"
                alt="recurve-bow"
              />
              <span>Kladkový luk</span>
            </div>
          </div>
          <nuxt-link class="page-button" tag="button" to="/archery"
            >Více o lukostřelbě</nuxt-link
          >
        </article>
      </div>
    </section>
    <section id="people" class="homepage-section">
      <h3>Lidé v klubu</h3>
      <HomepageSlider :profiles="profiles" />
    </section>
    <section id="posts" class="homepage-section">
      <h3>Aktuality</h3>
      <HomepagePosts :posts="posts" />
      <div class="page-button-div">
        <nuxt-link class="page-button" tag="button" to="/competetions/posts"
          >Více aktualit</nuxt-link
        >
      </div>
    </section>
    <section id="partners" class="homepage-section">
      <h3>Podporují nás</h3>
      <HomepagePartners />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    profiles() {
      return this.$store.getters['profiles/homepageProfiles']
    },
    posts() {
      return this.$store.getters['posts/posts']
    },
  },
  created() {
    this.$store.dispatch('profiles/getHomepageProfiles')
    this.$store.dispatch('posts/getPosts')
  },
}
</script>

<style lang="scss" scoped>
// hero
.hero {
  position: relative;
  max-height: 100vh;
  overflow: hidden;
}

.hero-text {
  position: absolute;
  top: 70%;
  left: 0;
  margin: 2rem;
  text-align: center;
  color: $white;
  text-shadow: 3px 3px 6px #111111;
  h2 {
    font-size: 1.8rem;
  }
  a {
    color: $white;
    text-decoration: none;
  }
}

.hero-more {
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin: 1rem 0.3rem;
  }
}

//club and archery

.page-button {
  align-self: center;
  margin: 2rem 0 2.5rem 0;
}

.page-cols {
  width: 85%;
  margin: auto;
  padding: 6rem 0;
  display: block;

  article {
    display: flex;
    flex-direction: column;
  }
}

#archery {
  display: flex;
  flex-direction: column-reverse;
}

.column {
  width: 100%;
  margin: 2rem 0;
}

.col-image {
  width: 100%;
  height: auto;
}

#home-archery {
  background-color: $grey;
  color: $white;
}

.bow-types {
  margin: 3rem 0rem 2rem 0rem;
  display: flex;
  justify-content: space-between;
}

.bow {
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    text-align: center;
    margin-top: 0.6rem;
  }
}

.rounded-img {
  width: 4rem;
  border-radius: 50%;
}

.homepage-section {
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    align-self: flex-start;
    width: 85%;
    margin: auto;
    //padding-bottom: 4rem;
  }
}

#posts {
  background-color: $grey;
  color: $white;

  div {
    width: 85%;
    margin: auto;
    // padding: 0 4rem;
    //text-align: end;
  }
}

.page-button-div {
  display: flex;
  justify-content: center;
}

#partners {
  div {
    width: 85%;
    margin: auto;
  }
}

@media (min-width: 576px) {
  .bow-types {
    margin: 3rem 2rem 2rem 2rem;
  }

  .rounded-img {
    width: 6rem;
  }
}

@media (min-width: 768px) {
  .hero img {
    width: 100%;
  }

  .hero-text {
    top: 40%;
  }

  .bow-types {
    margin: 3rem 2rem 2rem 2rem;
  }
}

@media (min-width: 992px) {
  .hero-text {
    top: 60%;
    left: 5%;

    h2 {
      font-size: 2.5rem;
    }
  }

  .page-button {
    align-self: flex-end;
  }

  .page-cols {
    display: flex;
    justify-content: space-between;
    align-items: center;

    article {
      padding: 0;
    }
  }

  #archery {
    flex-direction: row;
  }

  .column {
    width: 45%;
  }
  .col-image {
    box-shadow: 4rem 4rem #999999;
  }

  .page-button-div {
    justify-content: flex-end;
  }
}

@media (min-width: 1200px) {
  .page-cols {
    article {
      padding: 0 4rem 0 0;
    }
  }

  .bow-types {
    margin: 3rem 2rem 2rem 2rem;
  }
}
</style>
