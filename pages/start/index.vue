<template>
  <main>
    <PagesHead title="Jak začít s lukostřelbou" image="club.jpg" />
    <section>
      <div class="page-faq">
        <div class="question">
          <!-- icon 1 -->1.
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
      <div class="page-faq">
        <div class="question">
          <!-- icon 2 -->2.
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
            <div class="answer">
              <p>V klubu máme dvě varianty, jak často střelci střílí.</p>
              <div class="subsub-faq">
                <h5><span>1. varianta:</span> 1x týdně</h5>
                <p>
                  Tato varianta je preferovaná střelci, co chtějí střílet
                  rekreačně.
                </p>
              </div>
              <div class="subsub-faq">
                <h4><span>2. varianta:</span> 2x a vícekrát týdně</h4>
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
      <div class="page-faq">
        <div class="question">
          <!-- icon 3 -->3.
          <h3>Chceš uspořádat firemní akci s lukostřelbou?</h3>
        </div>
        <div class="answer">
          <p>
            Můžeme pro vás připravit zážitek, na který kolegové nezapomenou.
            Více informací najdeš v sekci
            <a href="#public-archery">Firemní akce</a>.
          </p>
        </div>
      </div>
    </section>
    <section id="public-archery" class="page-section">
      <div class="page-cols">
        <PagesForm
          class="page-column"
          title="Zarezervuj si lekci pro veřejnost"
          type="public"
          @sendMail="sendPublic"
        />
        <PagesCourseInfo class="page-column" :info="publicArchery">
          <img src="~/assets/photos/theme-photo.jpg" />
        </PagesCourseInfo>
      </div>
    </section>
    <section id="start-membership" class="page-section">
      <!-- <PagesCourseInfo class="page-column" :info="startCourse">
      </PagesCourseInfo> -->
      <PagesForm
        title="Přihlaš se na kurz lukostřelby pro začátečníky"
        type="start"
        :options="terms"
        @sendMail="sendStart"
      />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      terms: [
        {
          id: 0,
          firstTime: '18.10.2022 15:00-16:30',
        },
        {
          id: 1,
          firstTime: '18.10.2022 16:30-18:00',
        },
        {
          id: 2,
          firstTime: '19.10.2022 15:00-16:30',
        },
      ],
    }
  },
  computed: {
    publicArchery() {
      console.log(this.$store.getters['pages/publicArchery'])
      return this.$store.getters['pages/publicArchery']
    },
  },
  methods: {
    sendPublic(data) {
      console.log('sendpublic')
      console.log(data)
    },
    sendStart(data) {
      console.log('sendStart')
      console.log(data)
    },
  },
  created() {
    this.$store.dispatch('pages/publicArchery')
  },
}
</script>

<style lang="scss" scoped>
.page-faq {
  margin: auto;
  width: 90%;
}

#public-archery {
  margin: 5rem;
}
</style>
