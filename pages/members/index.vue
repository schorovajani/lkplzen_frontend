<template>
  <main>
    <!-- intro -->
    <PagesHead title="Pro členy" image="start.jpg" />

    <!-- section with calendars -->
    <section id="calendars" class="page-section">
      <div class="page-layout">
        <h3>Kalendáře</h3>
        <div class="calendar-cols">
          <div class="calendar-column">
            <h4>Dospělí</h4>
            <iframe
              src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=500&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=lkplzen%40gmail.com&ctz=Europe%2FPrague"
              style="border: 0"
              width="100%"
              height="500"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
          <div class="calendar-column">
            <h4>Mládež</h4>
            <iframe
              src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=500&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=7i4nfv4833m48sgmcs95a4j620%40group.calendar.google.com&ctz=Europe%2FPrague"
              style="border: 0"
              width="100%"
              height="500"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
          <div class="calendar-column">
            <h4>Žactvo</h4>
            <iframe
              src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=500&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=knct6sg9r18d6msrjla9qklpuc%40group.calendar.google.com&ctz=Europe%2FPrague"
              style="border: 0"
              width="100%"
              height="500"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- sport camp information for members -->
    <section id="members-camp" class="page-section">
      <div class="page-layout page-cols">
        <div class="page-column">
          <img alt="sport-camp" src="~/assets/photos/club-photo.jpg" />
        </div>
        <article class="page-column">
          <h3>{{ sportCamp.title }}</h3>
          <p>{{ sportCamp.bodyMembers }}</p>
        </article>
      </div>
    </section>

    <!-- section with important documents and links -->
    <section id="documents" class="page-section">
      <div class="page-layout page-cols">
        <div class="page-column">
          <h3>Důležité dokumenty</h3>
          <ul class="documents-list" v-if="forMember.documents">
            <li v-for="document in forMember.documents.data" :key="document.id">
              <img alt="document-icon" src="~/assets/icons/document.svg" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="`${$axios.defaults.baseURL}${document.attributes.url}`"
                >{{ document.attributes.caption }}</a
              >
            </li>
          </ul>
        </div>
        <div class="page-column">
          <h3>Důležité odkazy</h3>
          <ul class="links-list" v-if="forMember.links">
            <li v-for="link in forMember.links" :key="link.id">
              <a target="_blank" rel="noopener noreferrer" :href="link.url">{{
                link.displayName
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    sportCamp() {
      return this.$store.getters['pages/sportCamp']
    },
    forMember() {
      return this.$store.getters['pages/forMember']
    },
  },

  /*
   * On create state of component, call two functions for getting content
   */
  created() {
    this.$store.dispatch('pages/sportCamp')
    this.$store.dispatch('pages/forMember')
  },
}
</script>

<style lang="scss" scoped>
#members-camp {
  background-color: $secondary;
  color: $white;
}

.calendar-cols {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;

  h4 {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1rem;
  }
}

.calendar-column {
  margin-top: 3rem;
}

a {
  color: $black;

  &:hover {
    color: $secondary;
  }
}

.documents-list {
  li {
    display: flex;
    align-items: center;
    margin: 1rem;

    img {
      width: 1rem;
    }

    a {
      margin-left: 1rem;
    }
  }
}

.links-list {
  list-style-type: disc;

  li {
    margin: 1rem 1rem 1rem 2rem;
  }
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  .calendar-cols {
    flex-direction: row;
    width: 100%;
  }

  .calendar-column {
    margin: 2rem;
  }
}

@media (min-width: 1200px) {
}
</style>
