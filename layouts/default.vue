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
.page-button {
  border: none;
  background-color: $primary;
  color: $black;
  font-size: 1rem;
  width: 12rem;
  padding: 0.6rem;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
}

.page-button {
  margin: 2rem 0;
  align-self: flex-end;
}
</style>
