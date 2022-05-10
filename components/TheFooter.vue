<template>
  <footer>
    <div class="footer-main">
      <div class="footer-col footer-box">
        <h3>Kontakt</h3>
        <ul class="footer-contact">
          <li>
            <img alt="mail-icon" src="~/assets/icons/mail-light.svg" />
            <span
              ><a href="mailto:kontakt@lkplzen.cz">kontakt@lkplzen.cz</a></span
            >
          </li>
          <li>
            <img alt="phone-icon" src="~/assets/icons/phone-light.svg" />
            <span
              ><a href="tel:+420123456789"
                >+420 123 456 789 (šéftrenér Jan Šípek)</a
              ></span
            >
          </li>
          <li>
            <img alt="place-icon" src="~/assets/icons/place-light.svg" />
            <span>Sportovní areál Štruncovy sady, 301 00 Plzeň</span>
          </li>
        </ul>
        <div class="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.860409288471!2d13.384424515931649!3d49.75107024539009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af1d2fb23b903%3A0xc7f4883aac083c19!2s1.LK%20Plze%C5%88%201935!5e0!3m2!1scs!2scz!4v1649582776106!5m2!1scs!2scz"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-box">
          <h3>Sledujte nás</h3>
          <div class="footer-social">
            <a
              href="https://www.facebook.com/lkplzen/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <a
              href="https://www.instagram.com/lkplzen/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        <div class="footer-box">
          <h3>Důležité odkazy</h3>
          <ul class="footer-links">
            <li>
              <a
                href="https://toksotis.cz/"
                target="_blank"
                rel="noopener noreferrer"
                >Toksotis</a
              >
              (partnerský eshop)
            </li>
            <li>
              <a
                href="https://toksotis.cz/"
                target="_blank"
                rel="noopener noreferrer"
                >Český lukostřelecký svaz</a
              >
              (ČLS)
            </li>
            <li>
              <a
                href="https://toksotis.cz/"
                target="_blank"
                rel="noopener noreferrer"
                >World Archery</a
              >
              (WA)
            </li>
            <li>
              <a
                href="https://toksotis.cz/"
                target="_blank"
                rel="noopener noreferrer"
                >Rcherz</a
              >
              (výsledky závodů)
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-col footer-partners">
        <div class="footer-box logo">
          <img alt="logo-white" src="~/assets/logo-text-white.svg" />
        </div>
        <div class="footer-box">
          <h3>Hlavní partneři</h3>
          <div class="partners">
            <a
              href="https://www.plzen.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="~/assets/partners/sportovni-plzen.png"
                alt="sportovni-plzen"
              />
            </a>
            <a
              href="https://www.petrol-plzen.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="~/assets/partners/petrol.png" alt="petrol-plzen" />
            </a>
            <a
              href="https://www.sudop.cz/cs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="~/assets/partners/sudop-praha-white.png"
                alt="sudop-praha"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-little">
      <a href="">sitemap</a>
      <a href="">admin</a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background-color: #282823;
}

.footer-main {
  background-color: $black;
  color: $white;
  padding: 3rem 10vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo {
  display: none;
}

h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  li {
    margin: 1rem 0;
  }
}

.footer-box {
  margin-bottom: 5rem;
}

.footer-map {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.footer-contact {
  margin-bottom: 1rem;

  li {
    display: flex;
    align-items: center;
  }

  img {
    // height: 1.3rem;
    width: 1.3rem;
  }

  span {
    margin-left: 1rem;

    a {
      color: $white;
      text-decoration: none;
    }
  }
}

.footer-social a {
  margin: 0 1rem;
}

.footer-links {
  list-style-type: disc;
  margin-left: 2rem;

  a {
    color: $white;
  }
  a:hover {
    color: $secondary;
  }
}

.footer-little {
  margin: 0 10vh;
  padding: 0.4rem;
  display: flex;
  justify-content: flex-end;

  a {
    color: $white;
    font-size: 0.7rem;
    margin: 0 2rem;
  }
}

.partners {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  a {
    margin: 1rem 0;
  }

  img {
    height: 2rem;
  }
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
  .footer-col {
    width: 40%;
  }
}

@media (min-width: 992px) {
  .footer-col {
    width: 40%;
  }
}

@media (min-width: 1200px) {
  .footer-col {
    width: auto;
    margin-bottom: 0;
  }
  .logo {
    display: block;

    img {
      height: 3rem;
    }
  }
}
</style>
