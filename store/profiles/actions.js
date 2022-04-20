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
      response = await this.$axios.$get(
        `http://localhost:1337/api/profiles?${profileQuery}`
      )
    } catch (err) {
      console.log(err)
    }

    context.commit('setHomepageProfiles', response.data)
  },
}
