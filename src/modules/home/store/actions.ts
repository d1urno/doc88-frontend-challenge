import { ActionTree } from 'vuex'
import { HomeState } from './state'
import { ADD_ITEM } from '@/modules/home/store/action-types'
import { Item } from 'vue-modules'

export const actions: ActionTree<any, HomeState> = {
  [ADD_ITEM]({ commit }, item: Item) {
    commit(ADD_ITEM, item)
  }
}
