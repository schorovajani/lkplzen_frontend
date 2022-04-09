<template>
  <div class="menu-overlay">
    <div class="menu-top">
      <button @click="$emit('hide')">
        <svg
          width="27"
          height="25"
          viewBox="0 0 27 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.199323 0.44935L0.329508 0.3051C0.720018 -0.0565044 1.32624 -0.0966709 1.76469 0.184559L1.92048 0.3051L13.5 11.0271L25.0794 0.3051C25.47 -0.0565044 26.0762 -0.0966709 26.5147 0.184559L26.6706 0.3051C27.061 0.666684 27.1044 1.228 26.8007 1.63398L26.6706 1.77823L15.0908 12.5L26.6706 23.2217C27.061 23.5833 27.1044 24.1446 26.8007 24.5506L26.6706 24.695C26.28 25.0565 25.6739 25.0967 25.2353 24.8154L25.0794 24.695L13.5 13.9729L1.92048 24.695C1.52997 25.0565 0.923756 25.0967 0.485298 24.8154L0.329508 24.695C-0.0610248 24.3333 -0.104405 23.7721 0.199323 23.3661L0.329508 23.2217L11.9093 12.5L0.329508 1.77823C-0.0610248 1.41664 -0.104405 0.85533 0.199323 0.44935L0.329508 0.3051L0.199323 0.44935Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    <div class="menu-body">
      <div class="body-column">
        <div class="menu-box">
          <nuxt-link @click.native="$emit('hide')" class="menu-title" to="/"
            >Domů</nuxt-link
          >
        </div>
        <div class="menu-box">
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-title"
            to="/club"
          >
            Klub
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/club', hash: '#about' }"
          >
            O klubu
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/club', hash: '#people' }"
          >
            Lidé v klubu
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/club/start', hash: '#membership' }"
          >
            Jak se stát členem
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/club/start', hash: '#public' }"
          >
            Nabízíme pro veřejnost
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/club/start', hash: '#company' }"
          >
            Firemní akce
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            to="/club/history"
          >
            Historie a osobnosti
          </nuxt-link>
          <a class="menu-item" href="">Fotogalerie</a>
        </div>
        <div class="menu-box">
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-title"
            to="/archery"
            >Lukostřelba</nuxt-link
          >
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/archery', hash: '#what' }"
          >
            O lukostřelbě
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/archery', hash: '#age' }"
          >
            Věkové kategorie
          </nuxt-link>
        </div>
      </div>
      <div class="body-column">
        <div class="menu-box">
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-title"
            to="/trainings"
            >Tréninky</nuxt-link
          >
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/trainings', hash: '#where' }"
          >
            Kdy a kde trénujeme
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/trainings', hash: '#camp' }"
          >
            Soustředění
          </nuxt-link>
        </div>
        <div class="menu-box">
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-title"
            to="/competitions"
            >Závody</nuxt-link
          >
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/competitions', hash: '#posts' }"
          >
            Aktuality
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/competitions', hash: '#success' }"
          >
            Naše úspěchy
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/competitions', hash: '#records' }"
          >
            Klubové rekordy
          </nuxt-link>
        </div>
        <div class="menu-box">
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-title"
            to="/members"
            >Pro členy</nuxt-link
          >
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/members', hash: '#calendars' }"
          >
            Kalendáře
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/members', hash: '#memberscamp' }"
          >
            Soustředění
          </nuxt-link>
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-item"
            :to="{ path: '/members', hash: '#documents' }"
          >
            Dokumenty a odkazy
          </nuxt-link>
        </div>
      </div>
      <div class="body-column">
        <div class="menu-box">
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-title"
            to="/partners"
            >Partneři a sponzoři</nuxt-link
          >
        </div>
        <div class="menu-box">
          <nuxt-link
            @click.native="$emit('hide')"
            class="menu-title"
            to="/contact"
            >Kontakty</nuxt-link
          >
        </div>
        <div class="menu-box">
          <span class="menu-title">Sledujte nás</span>
          <div class="menu-social">
            <a href="https://www.facebook.com/lkplzen/">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 22.1368C44 9.9171 34.1442 0 22 0C9.85582 0 0 9.9171 0 22.1368C0 33.1938 8.04325 42.3585 18.5788 44V28.5202H12.9598V22.1368H18.5788V17.258C18.5788 11.7181 21.8414 8.64041 26.8713 8.64041C29.2729 8.64041 31.7652 9.09637 31.7652 9.09637V14.4995H29.001C26.2595 14.4995 25.3986 16.2321 25.3986 17.9648V22.114H31.516L30.5417 28.4974H25.3986V43.9772C35.9567 42.3586 44 33.1938 44 22.1368Z"
                  fill="white"
                /></svg
            ></a>
            <a href="https://www.instagram.com/lkplzen/">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 3.96404C27.8742 3.96404 28.57 3.9864 30.8898 4.09224C33.0348 4.19014 34.1997 4.54854 34.975 4.84974C36.0018 5.24883 36.7347 5.72565 37.5045 6.49545C38.2744 7.26526 38.7512 7.99821 39.1502 9.02503C39.4515 9.80034 39.8099 10.9652 39.9078 13.1101C40.0136 15.43 40.036 16.1258 40.036 22C40.036 27.8743 40.0136 28.5701 39.9078 30.8899C39.8099 33.0349 39.4515 34.1997 39.1502 34.9751C38.7512 36.0019 38.2744 36.7348 37.5045 37.5046C36.7347 38.2744 36.0018 38.7513 34.975 39.1503C34.1997 39.4515 33.0348 39.8099 30.8898 39.9078C28.5703 40.0137 27.8746 40.036 22 40.036C16.1253 40.036 15.4296 40.0137 13.1101 39.9078C10.9651 39.8099 9.80025 39.4515 9.02503 39.1503C7.99813 38.7513 7.26517 38.2744 6.49537 37.5046C5.72556 36.7348 5.24874 36.0019 4.84974 34.9751C4.54845 34.1997 4.19005 33.0349 4.09216 30.89C3.98631 28.5701 3.96396 27.8743 3.96396 22C3.96396 16.1258 3.98631 15.43 4.09216 13.1102C4.19005 10.9652 4.54845 9.80034 4.84974 9.02503C5.24874 7.99821 5.72556 7.26526 6.49537 6.49545C7.26517 5.72565 7.99813 5.24883 9.02503 4.84974C9.80025 4.54854 10.9651 4.19014 13.11 4.09224C15.4299 3.9864 16.1257 3.96404 22 3.96404ZM22 0C16.0251 0 15.276 0.0253255 12.9294 0.132391C10.5877 0.239282 8.98853 0.611129 7.58908 1.15502C6.14238 1.71724 4.91549 2.46949 3.69245 3.69254C2.46941 4.91558 1.71715 6.14247 1.15493 7.58916C0.611042 8.98861 0.239195 10.5878 0.132304 12.9295C0.0252381 15.276 0 16.0252 0 22C0 27.9749 0.0252381 28.7241 0.132304 31.0706C0.239195 33.4123 0.611042 35.0115 1.15493 36.4109C1.71715 37.8575 2.46941 39.0845 3.69245 40.3075C4.91549 41.5306 6.14238 42.2828 7.58908 42.8451C8.98853 43.389 10.5877 43.7608 12.9294 43.8677C15.276 43.9748 16.0251 44 22 44C27.9748 44 28.724 43.9748 31.0705 43.8677C33.4122 43.7608 35.0114 43.389 36.4108 42.8451C37.8575 42.2828 39.0844 41.5306 40.3075 40.3075C41.5305 39.0845 42.2828 37.8576 42.845 36.4109C43.3889 35.0115 43.7607 33.4123 43.8676 31.0706C43.9747 28.7241 44 27.9749 44 22C44 16.0252 43.9747 15.276 43.8676 12.9295C43.7607 10.5878 43.3889 8.98861 42.845 7.58916C42.2828 6.14247 41.5305 4.91558 40.3075 3.69254C39.0844 2.46949 37.8575 1.71724 36.4108 1.15502C35.0114 0.611129 33.4122 0.239282 31.0705 0.132391C28.724 0.0253255 27.9748 0 22 0ZM22 10.7027C15.7606 10.7027 10.7026 15.7607 10.7026 22C10.7026 28.2394 15.7606 33.2974 22 33.2974C28.2393 33.2974 33.2973 28.2394 33.2973 22C33.2973 15.7607 28.2393 10.7027 22 10.7027ZM22 29.3334C17.9499 29.3334 14.6666 26.0501 14.6666 22C14.6666 17.95 17.9499 14.6667 22 14.6667C26.05 14.6667 29.3333 17.95 29.3333 22C29.3333 26.0501 26.05 29.3334 22 29.3334ZM36.3836 10.2564C36.3836 11.7144 35.2017 12.8964 33.7436 12.8964C32.2856 12.8964 31.1036 11.7144 31.1036 10.2564C31.1036 8.79832 32.2856 7.61641 33.7436 7.61641C35.2017 7.61641 36.3836 8.79832 36.3836 10.2564Z"
                  fill="white"
                /></svg
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-bot"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.menu-overlay {
  top: 0;
  left: 0;
  width: 100vw;
  height: 200vh;
  position: absolute;
  z-index: 100;
  background-color: $black;
  color: $white;

  a {
    text-decoration: none;
    color: $white;
  }
}

.menu-top {
  display: flex;
  justify-content: flex-end;
  margin: 2.5rem 3rem;
}

.menu-body {
  width: 80vw;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.body-column {
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
}

.menu-box {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
}

.menu-title {
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.menu-item:before {
  content: '• ';
}

.menu-item {
  font-size: 1.3rem;
  margin: 0.8rem;
}

.menu-social {
  margin-top: 1rem;

  a {
    margin: 0 1rem;
  }
}

span.menu-title {
  text-transform: capitalize;
  font-size: 1.5rem;
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
  .menu-overlay {
    overflow: hidden;
    height: 100vh;
  }

  .menu-top {
    margin: 2.5rem 4.1rem;
  }

  .menu-body {
    flex-direction: row;
  }

  .body-column {
    width: 33%;
    margin: 3rem auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu-box {
    margin-bottom: 0;
  }
}
</style>
