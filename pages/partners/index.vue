<template>
  <main>
    <!-- intro -->
    <PagesHead title="Partneři" image="partners.jpg" />

    <!-- start information of page -->
    <section class="partners-intro">
      <span
        >Všech našich partnerů si nesmírně vážíme a bez nich by se nám
        sportovalo o něco hůře. Děkujeme!</span
      >
    </section>

    <!-- sections with partners -->
    <section class="partners-cols">
      <div class="shop-col">
        <h3>Partnerský shop</h3>
        <span>s lukostřeleckým vybavením</span>
        <div class="partner-box">
          <img alt="Toksotis" src="~/assets/partners/toksotis.png" />
          <div>
            <h4>Toksotis</h4>
            <a href="https://toksotis.cz/">www.toksotis.cz</a>
          </div>
        </div>
      </div>
      <div class="partner-col">
        <h3>Partneři</h3>
        <div class="partners-container">
          <div
            class="partner-box"
            v-for="partner in partnersPrivate"
            :key="partner.id"
          >
            <img
              :alt="partner.name"
              :src="require(`~/assets/partners/${partner.logo}`)"
            />
            <div>
              <h4>{{ partner.name }}</h4>
              <a :href="partner.url">{{
                partner.url.includes('https')
                  ? partner.url.replace('https://', '')
                  : partner.url.replace('http://', '')
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3>Podporují nás</h3>
      <div class="partners-container">
        <div
          class="partner-box"
          v-for="partner in partnersPublic"
          :key="partner.id"
        >
          <img
            :alt="partner.name"
            :src="require(`~/assets/partners/${partner.logo}`)"
          />
          <div>
            <h4>{{ partner.name }}</h4>
            <a :href="partner.url">{{
              partner.url.includes('https')
                ? partner.url.replace('https://', '')
                : partner.url.replace('http://', '')
            }}</a>
          </div>
        </div>
      </div>
    </section>
    <section class="partners-motivation">
      <span>
        Chtěli byste nás podpořit? Staňte se našimi partnery a podpořte tím
        lukostřelce, které v klubu trénujeme.
      </span>
      <p>
        Pro více informací kontaktujete nás na adrese
        <a href="mailto:konkakt@lkplzen.cz">konkakt@lkplzen.cz</a>
      </p>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      partnersPrivate: [
        {
          id: 1,
          name: 'Petrol Plzeň',
          logo: 'petrol-black.png',
          url: 'https://www.petrol-plzen.cz',
        },
        {
          id: 2,
          name: 'Sympakt',
          logo: 'sympaktcz.png',
          url: 'https://www.sympakt.cz',
        },
        {
          id: 3,
          name: 'Plzeňské městské dopravní podniky',
          logo: 'pmdp.png',
          url: 'https://www.pmdp.cz',
        },
        {
          id: 4,
          name: 'Color Parket',
          logo: 'color-parket.png',
          url: 'http://www.colorparket.cz',
        },
        {
          id: 5,
          name: 'Sudop Praha',
          logo: 'sudop-praha.png',
          url: 'https://www.sudop.cz',
        },
      ],
      partnersPublic: [
        {
          id: 1,
          name: 'Město Plzeň',
          logo: 'sportovni-plzen.png',
          url: 'https://www.plzen.eu',
        },
        {
          id: 2,
          name: 'ÚMO Plzeň 1',
          logo: 'plzen-umo-1.png',
          url: 'https://umo1.plzen.eu',
        },
        {
          id: 3,
          name: 'ÚMO Plzeň 3',
          logo: 'plzen-umo-1.png',
          url: 'https://umo3.plzen.eu',
        },
        {
          id: 4,
          name: 'ÚMO Plzeň 4',
          logo: 'plzen-umo-1.png',
          url: 'https://umo4.plzen.eu',
        },
        {
          id: 5,
          name: 'Plzeňský kraj',
          logo: 'sportovni-plzen.png',
          url: 'https://www.plzensky-kraj.cz',
        },
        {
          id: 6,
          name: 'Nadační fond Plzeňská lukostřelba',
          logo: 'sportovni-plzen.png',
          url: 'https://www.plzenskalukostrelba.cz',
        },
        {
          id: 7,
          name: 'Nadace sportující mládeže',
          logo: 'sportovni-plzen.png',
          url: 'https://www.nsm.cz',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  width: 85%;
  margin: auto;
  padding: 6rem 0;

  a {
    color: $thirdy;
  }

  a:hover {
    color: $secondary;
  }
}

.partners-intro {
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 0;
}

.partners-cols {
  display: flex;
}

.partner-box {
  display: flex;
  align-items: center;
  padding: 3rem;
  max-width: 30rem;
  img {
    max-width: 8rem;
    max-height: 8rem;
  }

  div {
    padding-left: 2rem;
    h4 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }
}

.shop-col {
  margin-right: 8rem;
  padding: 4rem;
  background-color: $primary;
  .partner-box {
    padding: 3rem 0;
  }
}

.partner-col {
  padding: 4rem;
}

.partners-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.partners-motivation {
  text-align: center;

  span {
    font-size: 1.3rem;
  }

  p {
    text-align: center;
    margin-top: 2rem;
  }
}
</style>
