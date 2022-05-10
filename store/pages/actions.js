export default {
  async publicArchery(context) {
    const qs = require('qs')
    const query = qs.stringify(
      {
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      }
    )

    let response
    try {
      response = await this.$axios.$get(`/api/public-archery?${query}`)
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
    const query = qs.stringify(
      {
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      }
    )

    let response
    try {
      response = await this.$axios.$get(`/api/start-course?${query}`)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    context.commit('setStartCourse', response.data)
  },

  async companyCourse(context) {
    const qs = require('qs')
    const query = qs.stringify(
      {
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      }
    )

    let response
    try {
      response = await this.$axios.$get(`/api/company-course?${query}`)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    context.commit('setCompanyCourse', response.data)
  },

  async sportCamp(context) {
    let response
    try {
      response = await this.$axios.$get(`/api/sport-camp`)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    context.commit('setSportCamp', response.data)
  },

  async forMember(context) {
    const qs = require('qs')
    const query = qs.stringify(
      {
        populate: '*',
      },
      {
        encodeValuesOnly: true,
      }
    )
    let response
    try {
      response = await this.$axios.$get(`/api/for-member?${query}`)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    context.commit('setForMember', response.data)
  },
}
