export default {
  setMembers(state, members) {
    state.members = members
  },

  setCoaches(state, coaches) {
    const tmpArray = []
    coaches.forEach((c) => {
      let member = c.attributes.member.data.attributes
      let item = {
        id: c.id,
        education: c.attributes.education,
        name: member.name,
        slug: member.slug,
        haveProfile: member.profile.data !== null,
      }
      tmpArray.push(item)
    })
    state.coaches = tmpArray
  },

  setCommittee(state, committee) {
    const tmpArray = []
    committee.forEach((c) => {
      let member = c.attributes.member.data.attributes
      let item = {
        id: c.id,
        role: c.attributes.committeeRole,
        name: member.name,
        slug: member.slug,
        haveProfile: member.profile.data !== null,
      }
      tmpArray.push(item)
    })
    state.committee = tmpArray
  },

  setLeague(state, league) {
    state.menLeague = league.filter(
      (team) => team.attributes.type === 'Muži'
    )[0].attributes.members.data

    state.womenLeague = league.filter(
      (team) => team.attributes.type === 'Ženy'
    )[0].attributes.members.data

    state.youthLeague = league.filter(
      (team) => team.attributes.type === 'Mládež'
    )[0].attributes.members.data
  },
}

//archer.attributes.profile.data.attributes.slug
