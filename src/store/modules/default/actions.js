export default {
  toggleMenu(context, payload) {
    console.log('toggleMenu', payload);
    context.commit('toggleMenu');
  }
}