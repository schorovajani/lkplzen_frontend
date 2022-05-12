<template>
  <main>
    <!-- intro -->
    <PagesHead title="Kontakt" image="contact.jpg" />

    <!-- where to find club -->
    <section id="map" class="page-section">
      <div class="page-cols page-layout">
        <div class="page-column">
          <h3>Kde nás najdete</h3>
          <p>
            Naše střelnice se nachází ve sportovním areálu ve Štruncových sadech
            vedle fotbalového stadionu.
          </p>
          <div class="address">
            <img alt="place-icon" src="~/assets/icons/place.svg" />
            <span>
              Sportovní areál, Štruncovy sady,<br />
              301 00 Plzeň
            </span>
          </div>
          <p>
            V létě nás najdete ve Štruncových sadech a v zimě na 1. ZŠ v
            Bolevci. Více se dozvíte v sekci
            <nuxt-link to="/trainings">Tréninky</nuxt-link>.
          </p>
        </div>
        <div class="page-column">
          <div class="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.860409288471!2d13.384424515931649!3d49.75107024539009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af1d2fb23b903%3A0xc7f4883aac083c19!2s1.LK%20Plze%C5%88%201935!5e0!3m2!1scs!2scz!4v1649582776106!5m2!1scs!2scz"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- contacts and contact form -->
    <section id="contacts" class="page-section">
      <div class="page-cols page-layout">
        <PagesForm
          class="page-column"
          title="Máš nějaký dotaz? Napiš nám!"
          type="contact"
          @sendMail="sendMessage"
        />
        <div class="page-column">
          <h3>Kontakt</h3>
          <div class="contact-item">
            <img alt="mail-icon" src="~assets/icons/mail-light.svg" />
            <a href="mailto:kontakt@lkplzen.cz">kontakt@lkplzen.cz</a>
          </div>
          <div class="contact-item">
            <img alt="phone-icon" src="~assets/icons/phone-light.svg" />
            <div>
              <p><span>Šéftrenér</span> Jan Šípek</p>
              <a href="tel:+420123456789">+420 123 456 789</a>
            </div>
          </div>
          <div class="contact-item">
            <img alt="phone-icon" src="~assets/icons/phone-light.svg" />
            <div>
              <p><span>Předseda</span> Jiří Holický</p>
              <a href="tel:+420123456789">+420 123 456 789</a>
            </div>
          </div>
          <div class="contact-item">
            <img alt="phone-icon" src="~assets/icons/phone-light.svg" />
            <div>
              <p><span>Hospodářka</span> Hana Boučková</p>
              <a href="tel:+420123456789">+420 123 456 789</a>
            </div>
          </div>
          <div class="letter-address">
            <h4>Korespondenční adresa</h4>
            <p>1. LUKOSTŘELECKÝ KLUB PLZEŇ 1935, z.s.</p>
            <p>Toužimská 1690/22</p>
            <p>323 00 Plzeň</p>
          </div>
          <div class="law-info">
            <p><span>Bankovní spojení:</span> 1020747093/6100</p>
            <p><span>IČ:</span> 45333335</p>
            <p>
              <small
                >1. lukostřelecký klub Plzeň 1935 je registrován u Krajského
                soudu Plzeň, spisová značka L 1378.</small
              >
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- import of modal window -->
    <UiModal />
  </main>
</template>

<script>
export default {
  methods: {
    /*
     * Call function for sending data from contact form
     */
    sendMessage(data) {
      console.log('send contact')
      const message = {
        data: data,
      }

      this.$store.dispatch('messages/sendMessageContact', message)
    },
  },
}
</script>

<style lang="scss" scoped>
.address {
  display: flex;
  align-items: center;
  margin: 1rem 0 3rem 2rem;
  span {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  img {
    height: 2.1rem;
    max-width: 4rem;
  }
}

.contact-map {
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

#contacts {
  background-color: $secondary;
  color: $white;
}

p {
  margin: 0.5rem 0;
  text-align: left;

  span {
    font-weight: 600;
  }

  small {
    font-size: 0.9rem;
  }
}

.contact-item {
  display: flex;
  align-items: center;

  margin: 1.8rem 2rem;

  img {
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 2rem;
  }

  a {
    color: $white;
    font-size: 1.1rem;

    &:hover {
      color: $primary;
    }
  }
}

.letter-address {
  margin: 4rem 0;
  h4 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
}
</style>
