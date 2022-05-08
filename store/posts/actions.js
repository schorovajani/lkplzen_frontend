export default {
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
      response = await this.$axios.$get(`/posts?${postQuery}`)
    } catch (err) {
      console.log(err)
    }

    context.commit('setPosts', response.data)
  },
}
