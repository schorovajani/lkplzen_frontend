import state from './state'

export default {
  coaches(state) {
    return state.coaches
  },
  members(state) {
    return state.members
  },
  committee(state) {
    return state.committee
  },
  menLeague(state) {
    return state.menLeague
  },
  womenLeague(state) {
    return state.womenLeague
  },
  youthLeague(state) {
    return state.youthLeague
  },

  isCoachesLoaded(state) {
    return state.loadCoaches
  },
  isCommitteeLoaded(state) {
    return state.loadCommittee
  },
  isLeagueLoaded(state) {
    return state.loadLeague
  },
}
