export const state = () => ({

  menuOpen : false,

})

export const mutations = {

  DisplayMenu(state, data) {

    state.menuOpen = true;

  },

  UnDisplayMenu(state, data) {

    state.menuOpen = false;

  }

}