export default {
  /*
   * Send message to backend from form which is on section public archery
   * Set information for modal window and call function to show it
   */
  async sendMessagePublic(context, payload) {
    let response
    let alert
    try {
      response = await this.$axios.post('/api/message/public-archery', payload)
      alert = {
        status: true,
        title: 'Vaše rezervace byla zaznamenána',
        message:
          'Děkujeme za váš zájem o lekci lukostřelby pro veřejnost. Následně vás bude kontaktovat trenér s dalšími informacemi',
      }
    } catch (err) {
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

  /*
   * Send message to backend from form which is on section course for begginers
   * Set information for modal window and call function to show it
   */
  async sendMessageStart(context, payload) {
    let response
    let alert
    try {
      response = await this.$axios.post('/api/message/start-course', payload)
      alert = {
        status: true,
        title: 'Vaše rezervace byla zaznamenána',
        message:
          'Děkujeme za váš zájem o kurz lukostřelby pro začátečníky. Následně vás bude kontaktovat trenér s dalšími informacemi',
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

  /*
   * Send message to backend from form which is on contact page
   * Set information for modal window and call function to show it
   */
  async sendMessageContact(context, payload) {
    let response
    let alert
    try {
      response = await this.$axios.post('/api/message/contact', payload)
      alert = {
        status: true,
        title: 'Vaše zpráva byla zaznamenána',
        message: 'Děkujeme za váši zprávu. Odpovíme Vám v následujících dnech.',
      }
    } catch (err) {
      console.log(err)
      alert = {
        status: false,
        title: 'Špatná data ve formuláři',
        message:
          'Do kontaktního formuláře jste vyplnil/a špatná data, zkuste to prosím znovu.',
      }
    }

    context.dispatch('modals/showModal', alert, { root: true })
  },
}
