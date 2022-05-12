<template>
  <div class="age-card">
    <span class="category">{{ item.category }}</span>
    <span class="age"> {{ item.age }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
}
</script>

<style lang="scss" scoped>
.age-card {
  width: 100%;
  margin: 1rem;
  padding: 1.5rem;
  background-color: $secondary;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.1rem;
    margin: 0.5rem;
    text-align: center;
  }
}

.age {
  font-weight: 600;
}

@media (min-width: 476px) {
  .age-card {
    width: 40%;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  .age-card {
    width: 20%;
  }
}

@media (min-width: 1200px) {
}
</style>
