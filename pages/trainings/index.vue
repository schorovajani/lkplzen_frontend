<template>
  <main>
    <!-- intro -->
    <PagesHead title="Tréninky" image="trainings.jpg" />
    <!-- start information on page -->
    <section class="page-section training-info">
      <p>doplňující Informace</p>
    </section>
    <!-- information about summer trainings -->
    <section id="summer" class="page-section">
      <div class="page-layout">
        <div class="page-cols">
          <div class="page-column">
            <h3>Letní měsíce</h3>
            <p>text a mapa</p>
          </div>
          <div class="page-column">
            <p>tabulka s časy tréninků</p>
          </div>
        </div>
        <div class="other-photos">
          <p>zde budou doplňující foto a video</p>
        </div>
      </div>
    </section>
    <!-- information about winter trainings -->
    <section id="winter" class="page-section">
      <div class="page-layout">
        <div class="page-cols">
          <div class="page-column">
            <p>tabulka s časy tréninků</p>
          </div>
          <div class="page-column">
            <h3>Zimní měsíce</h3>
            <p>text a mapa</p>
          </div>
        </div>
        <div class="other-photos">
          <p>zde budou doplňující foto a video</p>
        </div>
      </div>
    </section>
    <!-- information about camp for public -->
    <section id="camp" class="page-section">
      <div class="page-cols page-layout">
        <div class="page-column">
          <h3>Soustředění</h3>
          <p>text</p>
        </div>
        <div class="page-column">
          <p>foto</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
#winter {
  background-color: $secondary;
  color: $white;
}

.training-info {
  p {
    text-align: center;
  }
}
</style>
