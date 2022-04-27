<template>
  <div class="form">
    <h3>{{ title }}</h3>
    <form @submit.prevent="submit" novalidate="true">
      <div class="form-input">
        <label>Jméno a příjmení zájemce</label>
        <input v-model="formData.name" type="text" name="name" required />
        <p class="form-error" v-if="errors.name !== ''">
          {{ errors.name }}
        </p>
      </div>

      <div class="form-input">
        <label>Věk zájemce</label>
        <input
          v-model.lazy="formData.age"
          type="number"
          min="3"
          max="100"
          name="age"
          required
        />
        <p class="form-error" v-if="errors.age !== ''">
          {{ errors.age }}
        </p>
      </div>
      <div
        v-if="(formData.age !== '') & (formData.age < 18)"
        class="form-input"
      >
        <label>Jméno a příjmení zákonného zástupce</label>
        <input v-model="formData.parent" type="text" name="parent" required />
      </div>
      <div class="form-input">
        <label>Kontaktní e-mail</label>
        <input v-model="formData.email" type="email" name="email" required />
        <p class="form-error" v-if="errors.email !== ''">
          {{ errors.email }}
        </p>
      </div>
      <div class="form-input">
        <label>Telefonní číslo</label>
        <input v-model="formData.phone" type="tel" name="phone" />
      </div>
      <div v-if="type === 'public'" class="form-input">
        <label>Vyber datum a čas</label>
        <div>
          <input v-model="formData.date" type="date" name="date" />
          <select v-model="formData.time">
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
          </select>
        </div>
      </div>
      <div v-if="type === 'start'" class="form-input">
        <label>Vyber si kurz</label>
        <select v-model="formData.term">
          <option v-for="o in options" :key="o.id" :value="o.id">
            {{ o.firstTime }}
          </option>
        </select>
      </div>
      <div class="form-input">
        <label>Poznámky / zpráva</label>
        <textarea v-model="formData.message" name="message" rows="5"></textarea>
      </div>
      <div class="form-check">
        <input v-model="gdpr" type="checkbox" name="gdpr" />
        <label>Souhlasím se <a href="">zpracováním osobních údajů</a>.</label>
        <p class="form-error" v-if="errors.gdpr !== ''">
          {{ errors.gdpr }}
        </p>
      </div>
      <button type="submit">Odeslat přihlášku</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    options: Array,
  },
  data() {
    return {
      formData: {
        name: '',
        age: '',
        parent: '',
        email: '',
        phone: '',
        date: new Date().toLocaleDateString('en-CA'),
        time: '15',
        term: 0,
        message: '',
      },
      gdpr: false,
      errors: {
        name: '',
        age: '',
        email: '',
        gdpr: '',
      },
    }
  },
  computed: {
    checkValidation() {
      // true
      return (
        this.errors.name === '' &&
        this.errors.age === '' &&
        this.errors.email === '' &&
        this.errors.gdpr === ''
      )
    },
  },
  methods: {
    submit() {
      console.log(this.formData)
      this.validate()
      if (!this.checkValidation) {
        console.log(this.errors)
        console.log('chyba')
      } else {
        console.log('poslano')
        this.$emit('sendMail', this.formData)
      }
    },
    validate() {
      if (!this.formData.name) {
        this.errors.name = 'Prosím, vyplňte jméno a příjmení zájemce.'
      } else {
        this.errors.name = ''
      }

      if (!this.formData.age) {
        this.errors.age = 'Prosím, vyplňte věk zájemce.'
      } else if (this.formData.age < 6) {
        this.errors.age =
          'Omlouváme se, děti do 6 let se bohužel nemohou zúčastnit.'
      } else if (this.formData.age > 120) {
        this.errors.age = 'Prosím, zadejte skutečný věk.'
      } else {
        this.errors.age = ''
      }

      if (!this.formData.email) {
        this.errors.email = 'Prosím, vyplňte emailovou adresu.'
      } else if (!this.formData.email.includes('@')) {
        this.errors.email = 'Prosím, zadejte platný e-mail.'
      } else {
        this.errors.email = ''
      }

      if (!this.gdpr) {
        this.errors.gdpr = 'Prosíme o souhlas se zpracováním údajů.'
      } else {
        this.errors.gdpr = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  background-color: $black;
  color: $white;
  padding: 2rem;

  h3 {
    text-align: center;
  }
}

.form-input {
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;

  label {
    margin-bottom: 0.25rem;
  }

  input,
  textarea,
  select {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    //transition: 0.1s;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid $primary;
  }
}

.form-check {
  // customize checkbox
}

button {
  border: none;
  background-color: $grey;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.7rem 1rem;
}
</style>
