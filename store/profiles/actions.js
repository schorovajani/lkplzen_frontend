export default {
  /*
   * Get profiles having truthy onHomepage attribute from backend
   * Populate to get profile photo
   * Call context for save data to state
   */
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
      response = await this.$axios.$get(`/api/profiles?${profileQuery}`)
    } catch (err) {
      console.log(err)
    }

    context.commit('setHomepageProfiles', response.data)
  },
}
