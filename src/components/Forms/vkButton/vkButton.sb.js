import { action } from '@storybook/addon-actions'
import * as knob from '@storybook/addon-knobs'
import vkButton from './vkButton'

const GRID_DEFAULT = 'Типовые'
const GRID_STYLE = 'Стили'

const actionsData = {
  clickAction: action('click')
}

export default () => ({
  components: { vkButton },
  props: {
    text: {
      default: knob.text('Текст', 'Hello Storybook', GRID_DEFAULT)
    },
    icon: {
      default: knob.text('Иконка', 'Box', GRID_DEFAULT)
    },
    isDisabled: {
      default: knob.boolean('Disabled', false, GRID_DEFAULT)
    },
    type: {
      default: knob.select('Тип', {
        button: 'button',
        submit: 'submit'
      }, 'button', GRID_DEFAULT)
    },
    view: {
      default: knob.select('Вид', {
        button: 'button',
        text: 'text',
        outline: 'outline'
      }, 'button', GRID_STYLE)
    },
    rounded: {
      default: knob.boolean('Округление', false, GRID_STYLE)
    },
    block: {
      default: knob.boolean('На всю ширину', false, GRID_STYLE)
    },
    color: {
      default: knob.select('Цвет', {
        primary: 'primary',
        secondary: 'secondary'
      }, 'primary', GRID_STYLE)
    },
    size: {
      default: knob.select('Размер', {
        default: 'default',
        large: 'large',
        'x-large': 'x-large'
      }, 'default', GRID_STYLE)
    }
  },
  template: `
    <vk-button
      :type="type"
      :isDisabled="isDisabled"
      :view="view"
      :size="size"
      :color="color"
      :icon="icon"
      :rounded="rounded"
      :block="block"
      @click="clickAction">
      {{ text }}
    </vk-button>
  `,
  methods: actionsData
})
