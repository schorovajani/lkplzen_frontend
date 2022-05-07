<template>
  <div class="modal" @click="hideModal" v-if="isVisible">
    <div class="modal-info">
      <div class="modal-content">
        <h4 :class="{ error: !status }">{{ title }}</h4>
        <p>{{ message }}</p>
        <button @click="hideModal">Rozumím</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isVisible() {
      return this.$store.getters['modals/show']
    },
    status() {
      return this.$store.getters['modals/status']
    },
    title() {
      return this.$store.getters['modals/title']
    },
    message() {
      return this.$store.getters['modals/message']
    },
  },
  methods: {
    hideModal() {
      this.$store.dispatch('modals/hideModal')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #50505050;
}

.modal-info {
  max-width: 90%;
  padding: 4rem;
  background-color: $white;
  display: flex;
  flex-direction: column;
  text-align: center;

  h4 {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  p {
    max-width: 30rem;
    font-size: 1rem;
  }

  button {
    background: none;
    border: none;
    margin-top: 2rem;

    font-size: 1rem;
    padding: 0.8rem 1.3rem;
    background-color: $primary;
    border-radius: 5px;
  }
}

.error {
  color: $error;
}

// .cross-icon {
//   align-self: flex-end;
//   margin-bottom: 0.5rem;
// }

// .cross-icon img {
//   height: 1.5rem;
// }
</style>
