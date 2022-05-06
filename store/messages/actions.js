export default {
  async sendMessagePublic(context, payload) {
    let response
    try {
      response = await this.$axios.post('/message/public-archery', payload)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  },

  async sendMessageStart(context, payload) {
    let response
    try {
      response = await this.$axios.post('/message/start-course', payload)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
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
