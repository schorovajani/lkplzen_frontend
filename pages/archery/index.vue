<template>
  <main>
    <!-- intro -->
    <PagesHead title="Lukostřelba" image="start.jpg" />

    <!-- about archery -->
    <section id="archery" class="page-section">
      <div class="page-cols page-layout">
        <article class="page-column">
          <h3>O lukostřelbě</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
            bibendum elit eget erat. Nunc tincidunt ante vitae massa. Nunc
            auctor. Mauris elementum mauris vitae tortor. Duis pulvinar. Fusce
            consectetuer risus a nunc. Maecenas libero. Nulla est. Sed vel
            lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem.
            Fusce suscipit libero eget elit. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel,
            aliquam a, posuere eu, velit. Nunc auctor. In laoreet, magna id
            viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien
            wisi sed libero. Etiam neque. Nunc auctor. Proin mattis lacinia
            justo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
            bibendum elit eget erat. Nunc tincidunt ante vitae massa. Nunc
            auctor. Mauris elementum mauris vitae tortor. Duis pulvinar. Fusce
            consectetuer risus a nunc. Maecenas libero. Nulla est. Sed vel
            lectus. Donec odio tempus molestie, porttitor ut.
          </p>
        </article>
        <div class="page-column">
          <img alt="archery" src="~/assets/photos/home-archery.jpg" />
        </div>
      </div>
    </section>

    <!-- age categories -->
    <section id="age-category" class="page-section">
      <div class="page-layout">
        <h3>Věkové kategorie</h3>
        <div class="categories-container">
          <PagesAgeCard
            v-for="(category, i) in ageCategories"
            :key="i"
            :item="category"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      ageCategories: [
        {
          category: 'senioři/seniorky',
          age: '50+ let',
        },
        {
          category: 'muži/ženy',
          age: '21-49 let',
        },
        {
          category: 'junioři/juniorky',
          age: '18-20 let',
        },
        {
          category: 'kadeti/kadetky',
          age: '15-17 let',
        },
        {
          category: 'starší žáci/žákyně',
          age: '13-14 let',
        },
        {
          category: 'mladší žáci/žákyně',
          age: '11-12 let',
        },
        {
          category: 'žáci/žákyně do 10 let',
          age: '9-10 let',
        },
        {
          category: 'žáci/žákyně do 8 let',
          age: '6-8 let',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#age-category {
  background-color: $thirdy;
  color: $white;
}

.categories-container {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
