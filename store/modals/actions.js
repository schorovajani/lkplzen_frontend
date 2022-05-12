export default {
  /*
   * Set modal window to visible state
   * @param payload Information for modal window
   */
  showModal(context, payload) {
    context.commit('setShow', true)
    context.commit('setStatus', payload.status)
    context.commit('setTitle', payload.title)
    context.commit('setMessage', payload.message)
  },

  /*
   * Set modal to invisible state
   */
  hideModal(context) {
    context.commit('setShow', false)
    context.commit('setMessage', '')
  },
}
