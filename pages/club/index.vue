<template>
  <main>
    <PagesHead title="Klub 1.LK Plzeň" image="club.jpg" />
    <section class="page-section">
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
          <nuxt-link to="/club/start" tag="button" class="page-button"
            >Jak začít střílet?</nuxt-link
          >
        </article>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.page-section {
  padding: 6rem 0;
}

.page-layout {
  width: 85%;
  margin: auto;
}
.page-cols {
  display: flex;
  justify-content: space-between;
  //align-items: center;
  padding: 2rem 0;
}

.page-column {
  width: 45%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
  }
  p {
    margin: 1rem 0;
  }

  button {
    margin: 2rem 0;
    align-self: flex-end;
  }
}
</style>
