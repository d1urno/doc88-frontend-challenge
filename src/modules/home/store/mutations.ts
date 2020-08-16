import { HomeState } from './state'
import { ADD_ITEM } from '@/modules/home/store/action-types'
import { Item } from 'vue-modules'

export const mutations = {
  [ADD_ITEM](state: HomeState, item: Item) {
    state.items.unshift(item)
  }
}
