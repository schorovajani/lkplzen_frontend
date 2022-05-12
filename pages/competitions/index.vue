<template>
  <main>
    <!-- intro -->
    <PagesHead title="Závody" image="club.jpg" />

    <!-- all posts with pagination -->
    <section id="posts" class="page-section">
      <div class="page-layout">
        <h3>Aktuality</h3>
        <p>zde budou aktuality</p>
      </div>
    </section>

    <!-- table with our success -->
    <section id="success" class="page-section">
      <div class="page-layout">
        <h3>Naše úspěchy</h3>
        <p>zde budou naše úspěchy</p>
      </div>
    </section>

    <!-- table with club records -->
    <section id="records" class="page-section">
      <div class="page-layout">
        <h3>Klubové rekordy</h3>
        <p>zde budou klubové rekordy</p>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
#success {
  background-color: $secondary;
  color: $white;
}
</style>
