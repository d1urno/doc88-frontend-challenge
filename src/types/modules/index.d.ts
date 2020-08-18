declare module 'vue-modules' {
  import { Vue as _Vue } from 'vue/types/vue'

  export interface VueModule<T = Record<string, any>> {
    readonly name: string
    install(Vue: typeof _Vue): void;
    install(Vue: typeof _Vue, options: T): void;
  }

  export interface Item {
    id: number
    isDrink: boolean
    title: string
    flavor: string
    price: string
    description: string
  }
}

declare module 'vue-parallax-js' {
  const n: any
  export = n
}

declare module 'vue-kinesis' {
  export const KinesisContainer: any
  export const KinesisElement: any
}
