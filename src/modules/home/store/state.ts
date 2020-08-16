import { Item } from 'vue-modules'

export interface HomeState {
  items: Item[]
}

export const initialState: HomeState = {
  items: []
}
