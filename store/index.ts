export const state = () => ({
  isSearchPanelOpen: false,
})

export const mutations = {
  toggleSearchPanel(state: any) {
    state.isSearchPanelOpen = !state.isSearchPanelOpen
  },
}

export const getters = {
  getSearchPanelState(state: any) {
    return state.isSearchPanelOpen
  },
}
