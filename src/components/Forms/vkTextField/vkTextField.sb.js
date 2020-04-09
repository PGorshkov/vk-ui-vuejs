import * as knob from '@storybook/addon-knobs'
import vkTextField from './vkTextField'

export default () => ({
  components: { vkTextField },
  props: {
    isError: {
      default: knob.boolean('Ошибка валидации', false)
    },
    isDisabled: {
      default: knob.boolean('Disabled', false)
    },
    line: {
      default: knob.boolean('В строчку', false)
    },
    detailsHide: {
      default: knob.boolean('Спрятать описание поля', true)
    },
    detailsText: {
      default: knob.text('Описание поля', 'Описание поля')
    },
    errorText: {
      default: knob.text('Описание ошибки', 'Описание ошибки')
    },
    label: {
      default: knob.text('Тител', 'Тител')
    },
    placeholder: {
      default: knob.text('Placeholder', 'Описание')
    },
    icon: {
      default: knob.text('Иконка после поля', 'Box')
    },
    size: {
      default: knob.select('Размер', {
        default: 'default',
        large: 'large',
        'x-large': 'x-large'
      }, 'default')
    }
  },
  template: `
    <vk-text-field
      :label="label"
      :placeholder="placeholder"
      :line="line"
      :size="size"
      :isError="isError"
      :detailsHide="detailsHide"
      :detailsText="detailsText"
      :errorText="errorText"
      :icon="icon"
      :isDisabled="isDisabled"/>
  `
})
