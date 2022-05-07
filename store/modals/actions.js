export default {
  showModal(context, payload) {
    context.commit('setShow', true)
    context.commit('setStatus', payload.status)
    context.commit('setTitle', payload.title)
    context.commit('setMessage', payload.message)
  },
  hideModal(context) {
    context.commit('setShow', false)
    context.commit('setMessage', '')
  },
}
