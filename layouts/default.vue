<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
main {
  overflow: hidden;
}
.page-button {
  border: none;
  background-color: $primary;
  font-size: 1rem;
  width: 12rem;
  padding: 0.6rem;
  cursor: pointer;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    color: $white;
  }
}

h3 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 150%;
  text-align: justify;
}

.page-section {
  padding: 6rem 0;
}

.page-layout {
  width: 85%;
  margin: auto;
}
.page-cols {
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  //align-items: center;
  padding: 2rem 0;
}

.page-column {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  img {
    width: 100%;
    height: auto;
  }
  p {
    margin: 1rem 0;
  }
}

.page-button {
  margin: 2rem 0;
  align-self: flex-end;
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  .page-cols {
    flex-direction: row;
    justify-content: space-between;
  }

  .page-column {
    width: 45%;
    padding: 0 0;
  }
}

@media (min-width: 1200px) {
}
</style>
