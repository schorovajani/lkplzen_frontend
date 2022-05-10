<template>
  <main>
    <PagesHead title="Jak začít s lukostřelbou" image="start.jpg" />
    <section class="page-faq">
      <div class="page-faq-item">
        <div class="question">
          <img
            class="faq-icon"
            alt="number1"
            src="~/assets/icons/number1.svg"
          />
          <h3>Chceš si lukostřelbu vyzkoušet?</h3>
        </div>
        <div class="answer">
          <p>
            V tom případě Ti doporučujeme hodinovou lekci se zkušeným trenérem.
            Více informací nalezneš v sekci
            <a href="#public-archery">Lukostřelba pro veřejnost</a>.
          </p>
        </div>
      </div>
      <div class="page-faq-item">
        <div class="question">
          <img
            class="faq-icon"
            alt="number2"
            src="~/assets/icons/number2.svg"
          />
          <h3>Líbí se ti lukostřelba a chtěl/a bys střílet pravidelně?</h3>
        </div>
        <div class="answer">
          <p>
            Měl/a bys zvážit členství v klubu. Informace, jak se stát členem
            klubu, najdeš v sekci
            <a href="#start-membership">Jak se stát členem klubu</a>.
          </p>

          <div class="sub-faq">
            <h4>Jak často střílíme?</h4>
            <div class="sub-answer">
              <p>V klubu máme dvě varianty, jak často střelci střílí.</p>
              <div class="subsub-faq">
                <h5><span>1. varianta:</span> 1x týdně</h5>
                <p>
                  Tato varianta je preferovaná střelci, co chtějí střílet
                  rekreačně.
                </p>
              </div>
              <div class="subsub-faq">
                <h5><span>2. varianta:</span> 2x a vícekrát týdně</h5>
                <p>
                  Tuto variantu volí střelci, kteří chtějí lukostřelbu
                  provozovat závodně
                </p>
              </div>
            </div>
          </div>

          <div class="sub-faq">
            <h4>Kdy a kde střílíme?</h4>
            <p>
              Místo, kde trénujeme, a časy tréninků se mění podle ročního
              období. Více informací najdeš na stránce
              <nuxt-link to="/trainings">Tréninky</nuxt-link>.
            </p>
          </div>

          <div class="sub-faq">
            <h4>Kolik mě bude stát členství v klubu?</h4>
            <p>
              Celková částka se skládá s kurzovného a případně půjčovného.
              Odvíjí se také od toho, kolikrát týdně se rozhodnete trénovat.
              Více informací najdete v dokumentu
              <a href="">Finanční stránka sportu</a>.
            </p>
          </div>
        </div>
      </div>
      <div class="page-faq-item">
        <div class="question">
          <img
            class="faq-icon"
            alt="number3"
            src="~/assets/icons/number3.svg"
          />
          <h3>Chceš uspořádat firemní akci s lukostřelbou?</h3>
        </div>
        <div class="answer">
          <p>
            Můžeme pro vás připravit zážitek, na který kolegové nezapomenou.
            Více informací najdeš v sekci
            <a href="#company-course">Firemní akce</a>.
          </p>
        </div>
      </div>
    </section>
    <section id="public-archery" class="page-section">
      <div class="page-layout page-cols">
        <PagesForm
          class="page-column"
          title="Zarezervuj si lekci pro veřejnost"
          type="public"
          @sendMail="sendPublic"
        />
        <PagesCourseInfo
          class="page-column"
          :info="publicArchery"
          :light="true"
        >
          <img src="~/assets/photos/theme-photo.jpg" />
        </PagesCourseInfo>
      </div>
    </section>
    <section id="start-membership" class="page-section">
      <div class="page-layout page-cols">
        <div class="page-column">
          <h3>{{ startMembership.title }}</h3>
          <p>{{ startMembership.body }}</p>
          <PagesCourseInfo
            class="start-course"
            :info="startCourse"
            :light="false"
          >
            <h4>Dostupné termíny:</h4>
            <div class="course-terms">
              <div
                class="term-box"
                v-for="term in startCourse.courseTerms"
                :key="term.id"
              >
                <div class="term-time">
                  <span class="bold">První termín: </span>
                  <span>{{ term.firstTime }}</span>
                </div>
                <div class="term-time">
                  <span class="bold">Další termíny: </span>
                  <ul>
                    <li>{{ term.secondTime }}</li>
                    <li>{{ term.thirdTime }}</li>
                    <li>{{ term.fourthTime }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </PagesCourseInfo>
        </div>
        <PagesForm
          class="page-column"
          title="Přihlaš se na kurz lukostřelby pro začátečníky"
          type="start"
          :options="startCourse.courseTerms"
          @sendMail="sendStart"
        />
      </div>
    </section>
    <section id="company-course" class="page-section">
      <div class="page-layout page-cols">
        <div class="page-column">
          <img src="~/assets/photos/theme-photo.jpg" />
        </div>
        <PagesCourseInfo
          class="page-column"
          :info="companyCourse"
          :light="true"
        />
      </div>
    </section>
    <UiModal />
  </main>
</template>

<script>
export default {
  computed: {
    publicArchery() {
      return this.$store.getters['pages/publicArchery']
    },
    startMembership() {
      return this.$store.getters['pages/startMembership']
    },
    startCourse() {
      return this.$store.getters['pages/startCourse']
    },
    companyCourse() {
      return this.$store.getters['pages/companyCourse']
    },
  },
  methods: {
    async sendPublic(data) {
      console.log('sendpublic')
      const message = {
        data: data,
      }

      this.$store.dispatch('messages/sendMessagePublic', message)
    },
    sendStart(data) {
      console.log('sendStart')
      const message = {
        data: data,
      }
      this.$store.dispatch('messages/sendMessageStart', message)
    },
  },
  created() {
    this.$store.dispatch('pages/publicArchery')
    this.$store.dispatch('pages/startMembership')
    this.$store.dispatch('pages/startCourse')
    this.$store.dispatch('pages/companyCourse')
  },
}
</script>

<style lang="scss" scoped>
.page-faq {
  margin: auto;
  width: 90%;
  padding: 4rem 0 6rem 0;
}

.page-faq-item {
  max-width: 90%;
  margin: auto;

  a {
    color: $secondary;
  }
}

h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.question {
  display: flex;
  align-items: flex-end;
  margin: 4rem 0 1rem 0;

  img {
    margin-right: 1rem;
  }
}

.answer {
  margin-left: 5rem;
}

.sub-faq {
  margin: 3rem 2rem;

  h4 {
    margin-bottom: 0.8rem;
  }
}

.subsub-faq {
  margin-top: 0.8rem;

  h5 {
    font-size: 1.1rem;

    span {
      font-weight: 600;
    }
  }
}

#public-archery {
  background-color: $secondary;
  color: $white;
}

#company-course {
  background-color: $thirdy;
  color: $white;
}

.course-terms {
  display: flex;
  flex-wrap: wrap;
}

.term-box {
  background-color: $secondary;
  padding: 1.8rem;
  margin: 0.5rem;
  color: $white;
  border-radius: 10px;
}

.term-time {
  margin: 0.8rem 0;
  display: flex;

  li {
    margin-bottom: 0.5rem;
  }
}

.bold {
  font-weight: 600;
  margin-right: 0.3rem;
}

.start-course {
  margin-top: 2rem;
}

@media (min-width: 576px) {
  .page-faq-item {
    max-width: 80%;
  }
}

@media (min-width: 768px) {
  .page-faq-item {
    max-width: 55%;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>
