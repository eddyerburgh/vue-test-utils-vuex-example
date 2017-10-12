import { shallow, createLocalVue } from 'vue-test-utils'
import sinon from 'sinon'
import Vuex from 'vuex'
import Actions from '../../../src/components/Actions'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      actionClick: sinon.stub(),
      actionInput: sinon.stub()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it('calls store action actionInput when input value is input and an input even is fired', () => {
    const wrapper = shallow(Actions, { store, localVue })
    const input = wrapper.find('input')
    input.element.value = 'input'
    input.trigger('input')
    expect(actions.actionInput.calledOnce).toBe(true)
  })

  it('does not call store action actionInput when input value is not input and an input even is fired', () => {
    const wrapper = shallow(Actions, { store, localVue })
    const input = wrapper.find('input')
    input.element.value = 'not input'
    input.trigger('input')
    expect(actions.actionInput.calledOnce).toBe(false)
  })

  it('calls store action actionClick when button is clicked', () => {
    const wrapper = shallow(Actions, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.actionClick.calledOnce).toBe(true)
  })
})
