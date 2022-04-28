export default {
  async publicArchery(context) {
    const qs = require('qs')
    const postQuery = qs.stringify(
      {
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      }
    )

    let response
    try {
      response = await this.$axios.$get(`/public-archery?${postQuery}`)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    context.commit('setPublicArchery', response.data)
  },
}
