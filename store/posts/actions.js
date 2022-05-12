export default {
  /*
   * Get all post  in descending order sorted by date of publishing from backend
   * Populate to get post title photo
   * Call context for save data to state
   */
  async getPosts(context) {
    const qs = require('qs')
    const postQuery = qs.stringify(
      {
        sort: 'publishedAt:desc',
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      }
    )

    let response
    try {
      response = await this.$axios.$get(`/api/posts?${postQuery}`)
    } catch (err) {
      console.log(err)
    }

    context.commit('setPosts', response.data)
  },
}
