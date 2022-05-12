export default {
  /*
   * Get members from backend
   */
  async loadMembers(context) {
    let response
    try {
      response = await this.$axios.$get(`/api/members`)
    } catch (err) {
      console.log(err)
    }
    context.commit('setMembers', response.data)
  },

  /*
   * Get coaches populated with member type and its profile
   */
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

  /*
   * Get committee members populated with member type and its profile
   */
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
    } catch (err) {
      console.log(err)
    }

    context.commit('setCommittee', response.data)
  },

  /*
   * Get league teams populated with member type and its profile
   */
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
    context.commit('setLeague', response.data)
  },
}
