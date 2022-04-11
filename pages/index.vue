<template>
  <main>
    <section class="hero">
      <img src="~/assets/theme-photo.jpg" alt="theme-photo" />
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
    <div class="content">
      <section class="two-col club">
        <div class="col-text">
          <h3>Klub 1. LK Plzeň</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,
            nec bibendum odio risus sit amet ante. Morbi imperdiet, mauris ac
            auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus
            in lacus. Vestibulum erat nulla, ullamcorper nec, rutrum non,
            nonummy ac, erat.
          </p>
          <nuxt-link tag="button" to="/club">Více o klubu</nuxt-link>
          <p>
            Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel
            sapien. Nulla turpis magna, cursus sit amet, suscipit a, interdum
            id, felis. Etiam commodo dui eget wisi. Pellentesque sapien.
          </p>
          <nuxt-link tag="button" to="/club/start">Staň se členem</nuxt-link>
        </div>
        <div class="col-image">
          <img src="~/assets/club-photo.jpg" alt="club-photo" />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {}
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

//content

.content {
  width: 90vw;
  margin: auto;
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
  .hero img {
    width: 100%;
  }

  .hero-text {
    top: 40%;
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

  .content {
    width: 70vw;
  }
}

@media (min-width: 1200px) {
}
</style>
