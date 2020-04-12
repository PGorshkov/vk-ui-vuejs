import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import vkTooltip from './vkTooltip/vkTooltip.sb'

export default {
  title: 'Information',
  decorators: [withA11y, withKnobs]
}

export const Tooltip = vkTooltip
