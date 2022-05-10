<template>
  <main>
    <PagesHead title="Klub 1.LK Plzeň" image="club.jpg" />
    <section id="about-club" class="page-section">
      <div class="page-layout page-cols">
        <article class="page-column">
          <h3>O klubu</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis
            sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.
            Duis pulvinar. Donec vitae arcu. Sed elit dui, pellentesque a,
            faucibus vel, interdum nec, diam. Duis risus. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Quisque porta. Nulla non lectus sed nisl molestie
            malesuada. Aenean vel massa quis mauris vehicula lacinia. Nullam
            sapien sem, ornare ac, nonummy non, lobortis a enim.Maecenas ipsum
            velit, consectetuer eu lobortis ut, dictum at dui. Duis pulvinar.
            Phasellus faucibus molestie nisl. Sed ac dolor sit amet purus
            malesuada congue.
          </p>

          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Aliquam erat volutpat. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Fusce nibh. Mauris metus.
          </p>
          <nuxt-link to="/club/history" tag="button" class="page-button"
            >Více z historie</nuxt-link
          >
        </article>
        <div class="page-column">
          <img src="~assets/photos/club-photo.jpg" />
        </div>
      </div>
      <div class="page-layout page-cols">
        <div class="page-column">
          <img src="~assets/photos/club-photo.jpg" />
        </div>
        <article class="page-column">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis
            sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.
            Duis pulvinar. Donec vitae arcu. Sed elit dui, pellentesque a,
            faucibus vel, interdum nec, diam. Duis risus. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Quisque porta. Nulla non lectus sed nisl molestie
            malesuada. Aenean vel massa quis mauris vehicula lacinia. Nullam
            sapien sem, ornare ac, nonummy non, lobortis a enim.Maecenas ipsum
            velit, consectetuer eu lobortis ut, dictum at dui. Duis pulvinar.
            Phasellus faucibus molestie nisl. Sed ac dolor sit amet purus
            malesuada congue.
          </p>

          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Aliquam erat volutpat. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Fusce nibh. Mauris metus. Quisque porta. Sed ac dolor sit
            amet purus malesuada congue.
          </p>
          <nuxt-link to="/start" tag="button" class="page-button">
            Jak začít střílet?
          </nuxt-link>
        </article>
      </div>
    </section>
    <section id="club-people" class="page-section page-second">
      <div class="page-layout page-cols">
        <div class="page-column">
          <h3>Lidé v klubu</h3>
          <div class="people">
            <div class="people-menu">
              <button
                @click="changeTable('members')"
                class="people-button"
                :class="{ active: activeTable === 'members' }"
              >
                Členové
              </button>
              <button
                @click="
                  changeTable('coaches')
                  loadCoaches()
                "
                class="people-button"
                :class="{ active: activeTable === 'coaches' }"
              >
                Trenéři
              </button>
              <button
                @click="
                  changeTable('committee')
                  loadCommittee()
                "
                class="people-button"
                :class="{ active: activeTable === 'committee' }"
              >
                Předsednictvo
              </button>
              <button
                @click="
                  changeTable('league')
                  loadLeague()
                "
                class="people-button"
                :class="{ active: activeTable === 'league' }"
              >
                Ligová družstva
              </button>
            </div>
            <div
              id="members"
              class="people-list"
              :class="{ hide: activeTable !== 'members' }"
            >
              <table>
                <thead>
                  <tr>
                    <th>Příjmení a jméno</th>
                    <th>Věková kategorie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="member in members" :key="member.id">
                    <td>{{ member.attributes.name }}</td>
                    <td>{{ member.attributes.ageCategory }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              id="coaches"
              class="people-list"
              :class="{ hide: activeTable !== 'coaches' }"
            >
              <table>
                <thead>
                  <tr>
                    <th>Příjmení a jméno</th>
                    <th>Vzdělání</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="coach in coaches" :key="coach.id">
                    <td>
                      <nuxt-link
                        v-if="coach.haveProfile"
                        :to="'/club/people/' + coach.slug"
                      >
                        {{ coach.name }}
                      </nuxt-link>
                      <span v-else>{{ coach.name }}</span>
                    </td>
                    <td>{{ coach.education }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              id="committee"
              class="people-list"
              :class="{ hide: activeTable !== 'committee' }"
            >
              <table>
                <thead>
                  <tr>
                    <th>Příjmení a jméno</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="person in committee" :key="person.id">
                    <td>
                      <nuxt-link
                        v-if="person.haveProfile"
                        :to="'/club/people/' + person.slug"
                      >
                        {{ person.name }}
                      </nuxt-link>
                      <span v-else>{{ person.name }}</span>
                    </td>
                    <td>{{ person.role }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              id="league"
              class="people-list"
              :class="{ hide: activeTable !== 'league' }"
            >
              <h4>Liga mužů</h4>
              <table>
                <tbody>
                  <tr v-for="archer in menLeague" :key="archer.id">
                    <td>
                      <nuxt-link
                        v-if="archer.attributes.profile.data !== null"
                        :to="'/club/people/' + archer.attributes.slug"
                      >
                        {{ archer.attributes.name }}
                      </nuxt-link>
                      <span v-else>{{ archer.attributes.name }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h4>Liga žen</h4>
              <table>
                <tbody>
                  <tr v-for="archer in womenLeague" :key="archer.id">
                    <td>
                      <nuxt-link
                        v-if="archer.attributes.profile.data !== null"
                        :to="'/club/people/' + archer.attributes.slug"
                      >
                        {{ archer.attributes.name }}
                      </nuxt-link>
                      <span v-else>{{ archer.attributes.name }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h4>Liga mládeže</h4>
              <table>
                <tbody>
                  <tr v-for="archer in youthLeague" :key="archer.id">
                    <td>
                      <nuxt-link
                        v-if="archer.attributes.profile.data !== null"
                        :to="'/club/people/' + archer.attributes.slug"
                      >
                        {{ archer.attributes.name }}
                      </nuxt-link>
                      <span v-else>{{ archer.attributes.name }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="page-column profile-list">
          <!-- <PagesProfileList :profiles="profiles" /> -->
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeTable: 'members',
    }
  },
  computed: {
    members() {
      return this.$store.getters['people/members']
    },
    coaches() {
      return this.$store.getters['people/coaches']
    },
    committee() {
      return this.$store.getters['people/committee']
    },
    menLeague() {
      return this.$store.getters['people/menLeague']
    },
    womenLeague() {
      return this.$store.getters['people/womenLeague']
    },
    youthLeague() {
      return this.$store.getters['people/youthLeague']
    },
    profiles() {
      return this.$store.getters['profiles/homepageProfiles']
    },
  },
  methods: {
    changeTable(type) {
      this.activeTable = type
    },
    loadMembers() {
      this.$store.dispatch('people/loadMembers')
    },
    loadCoaches() {
      this.$store.dispatch('people/loadCoaches')
    },
    loadCommittee() {
      this.$store.dispatch('people/loadCommittee')
    },
    loadLeague() {
      this.$store.dispatch('people/loadLeague')
    },
  },
  created() {
    this.loadMembers()
    this.loadCoaches()
    this.loadCommittee()
    this.loadLeague()
    this.$store.dispatch('profiles/getHomepageProfiles')
  },
}
</script>

<style lang="scss" scoped>
.page-second {
  background-color: $thirdy;
  color: $white;
}

.people-menu {
  margin: 0.8rem 0;
}
.people-button {
  background: none;
  border: none;

  color: $white;
  font-size: 1rem;
  margin: 0.2rem 0rem;
  padding: 0.5rem 0.8rem;
}

.active {
  color: $black;
  background-color: $primary;
  border-radius: 20px;
}

.people-list {
  table {
    color: $black;
    width: 100%;
    background-color: #e3e9ff;
    //border-radius: 10px;

    a {
      color: $thirdy;
    }

    thead {
      border-bottom: 1px solid $black;

      tr th {
        text-align: left;
        padding: 0.8rem 1rem;
        font-weight: 600;
      }
    }
    tbody {
      tr td {
        padding: 0.6rem 1rem;
      }
      tr:nth-child(odd) {
        background: #ffffff75;
      }
    }
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 2rem 0 0.8rem 0;
  }
}

.hide {
  display: none;
}

.profile-list {
  justify-content: center;
  align-items: center;
}

// @keyframes slideInFromLeft {
//   0% {
//     transform: translateX(10%);
//   }
//   100% {
//     transform: translateX(0);
//   }
// }

// .diy-img {
//   img {
//     animation: 1s ease-out 0s 1 slideInFromLeft;
//   }
// }
</style>
