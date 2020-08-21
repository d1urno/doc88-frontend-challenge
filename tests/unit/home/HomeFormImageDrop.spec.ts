import { shallowMount } from '@vue/test-utils'
import HomeFormImageDrop from '@/modules/home/components/HomeFormImageDrop.vue'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

describe('HomeFormImageDrop.vue', () => {
  let wrapper: any = null

  beforeEach(() => {
    wrapper = shallowMount(HomeFormImageDrop, {
      propsData: {
        image: ''
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  const createEvent = (type: string, props = {}) => {
    const event = new Event(type, {})
    Object.assign(event, props)
    return event
  }

  it('emits invalid image when selected file is not PNG or JPG', () => {
    const fileContents = 'chucknorris.txt'
    const file = new Blob([fileContents], { type: 'text/html' })
    const event = createEvent('change') as HTMLInputEvent
    Object.defineProperty(event, 'target', {
      writable: false,
      value: { files: [file] }
    })
    wrapper.vm.onChange(event)
    expect(wrapper.emitted()['invalid-image']).toBeDefined()
  })

  it('emits an image when selected file is PNG or JPG', async () => {
    const fileContents = 'chucknorris.png'
    const file = new Blob([fileContents], { type: 'image/png' })
    const event = createEvent('change') as HTMLInputEvent
    Object.defineProperty(event, 'target', {
      writable: false,
      value: { files: [file] }
    })
    wrapper.vm.onChange(event)

    let image: string | ArrayBuffer = ''
    const reader: FileReader = new FileReader()

    await new Promise((resolve) => {
      reader.onload = () => {
        image = reader.result!
        resolve()
      }
      reader.readAsDataURL(file)
    })
    expect(wrapper.emitted()['image-change']).toEqual([[image]])
  })

  it('emits invalid image when dropped file is not PNG or JPG', () => {
    const fileContents = 'chucknorris.txt'
    const file = new Blob([fileContents], { type: 'text/html' })
    const dragEvent = createEvent('drop', {
      dataTransfer: { files: [file] }
    }) as DragEvent
    wrapper.vm.onDrop(dragEvent)
    expect(wrapper.emitted()['invalid-image']).toBeDefined()
  })

  it('emits an image when dropped file is PNG or JPG', async () => {
    const fileContents = 'chucknorris.png'
    const file = new Blob([fileContents], { type: 'image/png' })
    const dragEvent = createEvent('drop', {
      dataTransfer: { files: [file] }
    }) as DragEvent
    await wrapper.vm.onDrop(dragEvent)

    let image: string | ArrayBuffer = ''
    const reader: FileReader = new FileReader()

    await new Promise((resolve) => {
      reader.onload = () => {
        image = reader.result!
        resolve()
      }
      reader.readAsDataURL(file)
    })
    expect(wrapper.emitted()['image-change']).toEqual([[image]])
  })

  it('emits reset event when remove method is called', () => {
    wrapper.vm.removeFile()
    expect(wrapper.emitted()['image-change']).toEqual([['']])
  })
})
