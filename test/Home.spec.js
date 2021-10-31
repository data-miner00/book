import { mount } from '@vue/test-utils'
import Home from '../pages/index.vue'

describe('Home page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.vm).toBeTruthy()
  })
})
