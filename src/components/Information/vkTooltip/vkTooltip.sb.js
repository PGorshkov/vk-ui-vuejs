// import { action } from '@storybook/addon-actions'
// import * as knob from '@storybook/addon-knobs'
import vkTooltip from './vkTooltip'
import * as knob from '@storybook/addon-knobs'

export default () => ({
  components: { vkTooltip },
  props: {
    openClick: {
      default: knob.boolean('Показать по клику', false)
    }
  },
  template: `
    <vk-tooltip
      :open-click="openClick"
    >
    </vk-tooltip>
  `
})
