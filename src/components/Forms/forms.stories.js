import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import vkButton from './vkButton/vkButton.sb'
import vkTextField from './vkTextField/vkTextField.sb'

export default {
  title: 'Forms',
  decorators: [withA11y, withKnobs]
}

export const Button = vkButton
export const TextField = vkTextField
