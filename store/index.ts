export const state = () => ({
  isSearchPanelOpen: false,
  isSidebarOpen: true,
})

export const mutations = {
  toggleSearchPanel(state: any) {
    state.isSearchPanelOpen = !state.isSearchPanelOpen
  },
  toggleSidebar(state: any) {
    state.isSidebarOpen = !state.isSidebarOpen
  },
}

export const getters = {
  getSearchPanelState(state: any) {
    return state.isSearchPanelOpen
  },
  getSidebarState(state: any) {
    return state.isSidebarOpen
  },
}
