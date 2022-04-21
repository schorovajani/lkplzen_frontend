export default {
  setMembers(state, members) {
    state.members = members
  },

  setCoaches(state, coaches) {
    state.coaches = coaches
    state.loadCoaches = true
  },

  setCommittee(state, committee) {
    state.committee = committee
    state.loadCommittee = true
  },

  setLeague(state, league) {
    state.menLeague = league.filter(
      (archer) => archer.attributes.type === 'muži'
    )

    state.womenLeague = league.filter(
      (archer) => archer.attributes.type === 'ženy'
    )

    state.youthLeague = league.filter(
      (archer) => archer.attributes.type === 'mládež'
    )

    state.loadLeague = true
  },
}

//archer.attributes.profile.data.attributes.slug
