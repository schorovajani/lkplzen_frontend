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
      response = await this.$axios.$get(`/api/public-archery?${postQuery}`)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    context.commit('setPublicArchery', response.data)
  },
  async startMembership(context) {
    let response
    try {
      response = await this.$axios.$get(`/api/start-membership`)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    context.commit('setStartMembership', response.data)
  },

  async startCourse(context) {
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
      response = await this.$axios.$get(`/api/start-course?${postQuery}`)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    context.commit('setStartCourse', response.data)
  },

  async companyCourse(context) {
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
      response = await this.$axios.$get(`/api/company-course?${postQuery}`)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    context.commit('setCompanyCourse', response.data)
  },
}
