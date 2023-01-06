export const state = () => ({

  menuOpen : false,
  filterOpen : false,

})

export const mutations = {

  DisplayMenu(state, data) {

    state.menuOpen = true;

  },

  UnDisplayMenu(state, data) {

    state.menuOpen = false;

  },

  UnDisplayFilter(state, data) {

    state.filterOpen = false;

  },

  displayFilter(state, data) {

    state.filterOpen = true;

  }

}