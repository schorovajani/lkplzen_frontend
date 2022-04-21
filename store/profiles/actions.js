export default {
  async getHomepageProfiles(context) {
    const qs = require('qs')
    const profileQuery = qs.stringify(
      {
        populate: '*',
        filters: {
          onHomepage: {
            $eq: true,
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    )
    let response
    try {
      response = await this.$axios.$get(`/profiles?${profileQuery}`)
    } catch (err) {
      console.log(err)
    }

    context.commit('setHomepageProfiles', response.data)
  },
}
