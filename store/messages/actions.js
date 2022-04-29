export default {
  async sendMessage(context, payload) {
    let response
    try {
      response = await this.$axios.post('/message', payload)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  },
}
