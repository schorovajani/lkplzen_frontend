export default {
  async loadMembers(context) {
    let response
    try {
      response = await this.$axios.$get(`/api/members`)
    } catch (err) {
      console.log(err)
    }
    context.commit('setMembers', response.data)
  },

  async loadCoaches(context) {
    const qs = require('qs')
    const query = qs.stringify(
      {
        populate: ['member', 'member.profile'],
      },
      {
        encodeValuesOnly: true,
      }
    )

    let response
    try {
      response = await this.$axios.$get(`/api/coaches?${query}`)
    } catch (err) {
      console.log(err)
    }
    context.commit('setCoaches', response.data)
  },

  async loadCommittee(context) {
    const qs = require('qs')
    const query = qs.stringify(
      {
        populate: ['member', 'member.profile'],
      },
      {
        encodeValuesOnly: true,
      }
    )

    let response
    try {
      response = await this.$axios.$get(`/api/committees?${query}`)
      // console.log(response)
    } catch (err) {
      console.log(err)
    }

    context.commit('setCommittee', response.data)
  },

  async loadLeague(context) {
    const qs = require('qs')
    const query = qs.stringify(
      {
        populate: ['members', 'members.profile'],
      },
      {
        encodeValuesOnly: true,
      }
    )

    let response
    try {
      response = await this.$axios.$get(`/api/league-teams?${query}`)
    } catch (err) {
      console.log(err)
    }
    // console.log(response)
    context.commit('setLeague', response.data)
  },
}
