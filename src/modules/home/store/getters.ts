import { GetterTree } from 'vuex'
import { HomeState } from './state'

export const GET_ITEMS = 'GET_ITEMS'
export const getters: GetterTree<any, HomeState> = {
  [GET_ITEMS]: (state: HomeState) => state.items
}
