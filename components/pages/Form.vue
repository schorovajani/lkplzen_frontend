<template>
  <div class="form">
    <h3>{{ title }}</h3>
    <form @submit.prevent="submit" novalidate="true">
      <div class="form-input">
        <label>{{
          type === 'contact' ? 'Jméno a příjmení*' : 'Jméno a příjmení zájemce*'
        }}</label>
        <input
          :class="{ inputErr: errors.name !== '' }"
          v-model="formData.name"
          type="text"
          name="name"
          required
        />
        <p class="form-error" v-if="errors.name !== ''">
          {{ errors.name }}
        </p>
      </div>

      <div v-if="type !== 'contact'" class="form-input">
        <label>Věk zájemce*</label>
        <input
          :class="{ inputErr: errors.age !== '' }"
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
        v-if="formData.age !== '' && formData.age < 18 && type !== 'contact'"
        class="form-input"
      >
        <label>Jméno a příjmení zákonného zástupce</label>
        <input v-model="formData.parent" type="text" name="parent" required />
      </div>
      <div class="form-input">
        <label>Kontaktní e-mail*</label>
        <input
          :class="{ inputErr: errors.email !== '' }"
          v-model="formData.email"
          type="email"
          name="email"
          required
        />
        <p class="form-error" v-if="errors.email !== ''">
          {{ errors.email }}
        </p>
      </div>
      <div class="form-input">
        <label>Telefonní číslo</label>
        <input v-model="formData.phone" type="tel" name="phone" />
      </div>
      <div v-if="type === 'public'" class="form-input">
        <label>Vyber datum a čas*</label>
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
        <label>Vyber si kurz*</label>
        <select v-model="formData.term">
          <option v-for="o in options" :key="o.id" :value="o.id">
            {{ o.firstTime }}
          </option>
        </select>
      </div>
      <div class="form-input">
        <label>{{
          type === 'contact' ? 'Dotaz/zpráva' : 'Poznámky/zpráva'
        }}</label>
        <textarea v-model="formData.message" name="message" rows="8"></textarea>
      </div>
      <div class="form-check">
        <input v-model="gdpr" type="checkbox" name="gdpr" />
        <label>Souhlasím se <a href="">zpracováním osobních údajů</a>.</label>
        <p class="form-error" v-if="errors.gdpr !== ''">
          {{ errors.gdpr }}
        </p>
      </div>
      <div class="form-button">
        <button type="submit">
          {{ type === 'contact' ? 'Odeslat zprávu' : 'Odeslat přihlášku' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
const initialState = function () {
  return {
    formData: {
      name: '',
      age: '',
      parent: '',
      email: '',
      phone: '',
      date: new Date().toLocaleDateString('en-CA'),
      time: '15',
      term: 1,
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
}

export default {
  props: {
    title: String,
    type: String,
    options: Array,
  },
  data() {
    return initialState()
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
        Object.assign(this.$data, initialState())
      }
    },
    validateName() {
      if (!this.formData.name) {
        this.errors.name = 'Prosím, vyplňte jméno a příjmení zájemce.'
        return false
      } else {
        this.errors.name = ''
        return true
      }
    },
    validateAge() {
      if (!this.formData.age) {
        this.errors.age = 'Prosím, vyplňte věk zájemce.'
        return false
      } else if (this.formData.age < 6) {
        this.errors.age =
          'Omlouváme se, děti do 6 let se bohužel nemohou zúčastnit.'
        return false
      } else if (this.formData.age > 120) {
        this.errors.age = 'Prosím, zadejte skutečný věk.'
        return false
      } else {
        this.errors.age = ''
        return true
      }
    },
    validateEmail() {
      if (!this.formData.email) {
        this.errors.email = 'Prosím, vyplňte emailovou adresu.'
        return false
      } else if (!this.formData.email.includes('@')) {
        this.errors.email = 'Prosím, zadejte platný e-mail.'
        return false
      } else {
        this.errors.email = ''
        return true
      }
    },
    validateGdpr() {
      if (!this.gdpr) {
        this.errors.gdpr = 'Prosíme o souhlas se zpracováním údajů.'
        return false
      } else {
        this.errors.gdpr = ''
        return true
      }
    },
    validate() {
      this.validateName()
      this.validateAge()
      this.validateEmail()
      this.validateGdpr()
    },
  },
  watch: {
    'formData.name'() {
      if (this.errors.name && this.validateName()) {
        this.errors.name = ''
      }
    },
    'formData.age'() {
      if (this.errors.age && this.validateAge()) {
        this.errors.age = ''
      }
    },
    'formData.email'() {
      if (this.errors.email && this.validateEmail()) {
        this.errors.email = ''
      }
    },
    gdpr() {
      if (this.errors.gdpr && this.validateGdpr()) {
        this.errors.gdpr = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: $black;
  color: $white;
  padding: 4rem;
  border-radius: 10px;

  h3 {
    text-align: center;
    margin: 1rem 0 2rem 0;
  }

  a {
    color: $white;

    &:hover {
      color: $secondary;
    }
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
    padding: 0.8rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    //transition: 0.1s;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid $secondary;
  }
}

.form-check {
  display: flex;
  align-items: center;
  input[type='checkbox'] {
    appearance: none;
    background-color: #fff;
    margin-right: 0.5rem;
    font: inherit;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 5px;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      transform: scale(0);
      transition: 0.12s transform ease-in-out;
      box-shadow: inset 1rem 1rem $secondary;
      transform-origin: bottom left;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked::before {
      transform: scale(1);
    }
  }
}

.form-button {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  button {
    border: none;
    background-color: $primary;
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 1rem 1.3rem;
  }
}

.inputErr {
  outline: 2px solid $error;
}

.form-error {
  margin: 0.2rem 0;
  font-size: 0.8rem;
  color: $error;
}
</style>
