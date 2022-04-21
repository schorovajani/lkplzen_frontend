export default {
  async loadMembers(context) {
    let response
    try {
      response = await this.$axios.$get(`/members`)
    } catch (err) {
      console.log(err)
    }
    context.commit('setMembers', response.data)
  },

  async loadCoaches(context) {
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
      response = await this.$axios.$get(`/coaches?${query}`)
    } catch (err) {
      console.log(err)
    }
    context.commit('setCoaches', response.data)
  },

  async loadCommittee(context) {
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
      response = await this.$axios.$get(`/committees?${query}`)
    } catch (err) {
      console.log(err)
    }

    context.commit('setCommittee', response.data)
  },

  async loadLeague(context) {
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
      response = await this.$axios.$get(`/league-teams?${query}`)
    } catch (err) {
      console.log(err)
    }
    console.log(response)
    context.commit('setLeague', response.data)
  },
}
