export default {
  /*
   * Get content populated with components for public archery section
   * Call context for save data to state
   */
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
    } catch (err) {
      console.log(err)
    }

    context.commit('setPublicArchery', response.data)
  },

  /*
   * Get content for information how to start membership
   * Call context for save data to state
   */
  async startMembership(context) {
    let response
    try {
      response = await this.$axios.$get(`/api/start-membership`)
    } catch (err) {
      console.log(err)
    }

    context.commit('setStartMembership', response.data)
  },

  /*
   * Get content populated with components for course for begginers section
   * Call context for save data to state
   */
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
    } catch (err) {
      console.log(err)
    }

    context.commit('setStartCourse', response.data)
  },

  /*
   * Get content populated with components for company course section
   * Call context for save data to state
   */
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
    } catch (err) {
      console.log(err)
    }

    context.commit('setCompanyCourse', response.data)
  },

  /*
   * Get content for sport camp
   * Call context for save data to state
   */
  async sportCamp(context) {
    let response
    try {
      response = await this.$axios.$get(`/api/sport-camp`)
    } catch (err) {
      console.log(err)
    }

    context.commit('setSportCamp', response.data)
  },

  /*
   * Get content populated with components for section with information for members
   * Call context for save data to state
   */
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
    } catch (err) {
      console.log(err)
    }

    context.commit('setForMember', response.data)
  },
}
