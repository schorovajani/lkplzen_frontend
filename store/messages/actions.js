export default {
  async sendMessagePublic(context, payload) {
    let response
    let alert
    console.log('context')
    console.log(context)
    try {
      response = await this.$axios.post('/message/public-archery', payload)
      console.log('response')
      console.log(response)
      alert = {
        status: true,
        title: 'Vaše rezervace byla zaznamenána',
        message:
          'Děkujeme za váš zájem o lekci lukostřelby pro veřejnost. Následně vás bude kontaktovat trenér s dalšími informacemi',
      }
    } catch (err) {
      console.log('rerror')
      console.log(err)
      alert = {
        status: false,
        title: 'Špatná data ve formuláři',
        message:
          'Do formuláře pro lekci lukostřelby pro veřejnost jste vyplnil/a špatná data, zkuste to prosím znovu.',
      }
    }

    context.dispatch('modals/showModal', alert, { root: true })
  },

  async sendMessageStart(context, payload) {
    let response
    let alert
    try {
      response = await this.$axios.post('/message/start-course', payload)
      console.log(response)
      alert = {
        status: true,
        title: 'Vaše rezervace byla zaznamenána',
        message:
          'Děkujeme za váš zájem o jurz lukostřelby pro začátečníky. Následně vás bude kontaktovat trenér s dalšími informacemi',
      }
    } catch (err) {
      console.log(err)
      alert = {
        status: false,
        title: 'Špatná data ve formuláři',
        message:
          'Do formuláře pro přihlášení na kurz pro začátečníky jste vyplnil/a špatná data, zkuste to prosím znovu.',
      }
    }
    context.dispatch('modals/showModal', alert, { root: true })
  },

  async sendMessageContact(context, payload) {
    let response
    try {
      response = await this.$axios.post('/message/contact', payload)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  },
}
