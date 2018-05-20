import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import MyComponent from '../../../src/components/MyComponent'
import mymodule from '../../../src/store/mymodule'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Modules.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      module: {
        clicks: 2
      }
    }

    actions = {
      moduleActionClick: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        mymodule: {
          state,
          actions,
          getters: module.getters
        }
      }
    })
  })

  it('calls store action moduleActionClick when button is clicked', () => {
    const wrapper = shallow(MyComponent, { store, localVue })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(actions.moduleActionClick).toHaveBeenCalled()
  })

  it('Renders state.inputValue in first p tag', () => {
    const wrapper = shallow(MyComponent, { store, localVue })
    const p = wrapper.find('p')
    expect(p.text()).toBe(state.module.clicks.toString())
  })
})
