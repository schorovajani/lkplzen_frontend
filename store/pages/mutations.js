export default {
  setPublicArchery(state, data) {
    state.publicArchery = data.attributes
  },

  setStartMembership(state, data) {
    state.startMembership = data.attributes
  },

  setStartCourse(state, data) {
    state.startCourse = data.attributes
  },

  setCompanyCourse(state, data) {
    state.companyCourse = data.attributes
  },
}
