import { shallowMount, createLocalVue } from '@vue/test-utils'
import HomeForm from '@/modules/home/components/HomeForm.vue'
import Vuex from 'vuex'

// Prepare mock store
const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  ADD_ITEM: jest.fn()
}

const store = new Vuex.Store({
  modules: {
    home: {
      namespaced: true,
      actions
    }
  }
})

describe('HomeForm.vue', () => {
  it('fails title validation when its input field has less than 3 characters', () => {
    const wrapper: any = shallowMount(HomeForm)
    wrapper.setData({ item: { title: ' '.repeat(3) } })
    wrapper.vm.validateForm()
    expect(wrapper.vm.$data.errors.title).toBeTruthy()
  })

  it('passes title validation when its input field has at least 3 characters', () => {
    const wrapper: any = shallowMount(HomeForm)
    wrapper.setData({ item: { title: 'a'.repeat(3) } })
    wrapper.vm.validateForm()
    expect(wrapper.vm.$data.errors.title).toBeFalsy()
  })

  it('fails flavor validation when its input field has less than 3 characters', () => {
    const wrapper: any = shallowMount(HomeForm)
    wrapper.setData({ item: { flavor: ' '.repeat(3) } })
    wrapper.vm.validateForm()
    expect(wrapper.vm.$data.errors.flavor).toBeTruthy()
  })

  it('passes flavor validation when its input field has at least 3 characters', () => {
    const wrapper: any = shallowMount(HomeForm)
    wrapper.setData({ item: { flavor: 'a'.repeat(3) } })
    wrapper.vm.validateForm()
    expect(wrapper.vm.$data.errors.flavor).toBeFalsy()
  })

  it('fails price validation when its input field has no characters', () => {
    const wrapper: any = shallowMount(HomeForm)
    wrapper.setData({ item: { price: '' } })
    wrapper.vm.validateForm()
    expect(wrapper.vm.$data.errors.price).toBeTruthy()
  })

  it('passes price validation when its input field has at least 1 character', () => {
    const wrapper: any = shallowMount(HomeForm)
    wrapper.setData({ item: { price: '1'.repeat(3) } })
    wrapper.vm.validateForm()
    expect(wrapper.vm.$data.errors.price).toBeFalsy()
  })

  it('resets all models when reset method is called', () => {
    const wrapper: any = shallowMount(HomeForm)
    wrapper.setData({
      item: {
        title: 'a'.repeat(3),
        flavor: 'a'.repeat(3),
        price: '1',
        description: 'a',
        image: 'a'
      }
    })
    wrapper.vm.resetForm()
    expect(wrapper.vm.$data.item.title).toBe('')
    expect(wrapper.vm.$data.item.flavor).toBe('')
    expect(wrapper.vm.$data.item.price).toBe('')
    expect(wrapper.vm.$data.item.description).toBe('')
    expect(wrapper.vm.$data.item.image).toBe('')
  })

  it('dispatches "ADD_ITEM" when submit method is called and validation passed', () => {
    const wrapper: any = shallowMount(HomeForm, { store, localVue })
    wrapper.setData({
      item: {
        title: 'a'.repeat(3),
        flavor: 'a'.repeat(3),
        price: '1',
        description: 'a',
        image: 'a'
      }
    })
    wrapper.vm.submit()
    expect(actions.ADD_ITEM).toHaveBeenCalled()
  })

  it('shows success message when form is successfully submitted', () => {
    const wrapper: any = shallowMount(HomeForm, { store, localVue })
    expect(wrapper.vm._message).toBe('CADASTRAR')
    wrapper.setData({
      item: {
        title: 'a'.repeat(3),
        flavor: 'a'.repeat(3),
        price: '1',
        description: 'a',
        image: 'a'
      }
    })
    wrapper.vm.submit()
    expect(wrapper.vm._message).toBe('ADICIONADO!')
  })

  it('resets all models after form is successfully submitted', () => {
    const wrapper: any = shallowMount(HomeForm, { store, localVue })
    wrapper.setData({
      item: {
        title: 'a'.repeat(3),
        flavor: 'a'.repeat(3),
        price: '1',
        description: 'a',
        image: 'a'
      }
    })
    wrapper.vm.submit()
    expect(wrapper.vm.$data.item.title).toBe('')
    expect(wrapper.vm.$data.item.flavor).toBe('')
    expect(wrapper.vm.$data.item.price).toBe('')
    expect(wrapper.vm.$data.item.description).toBe('')
    expect(wrapper.vm.$data.item.image).toBe('')
  })
})
