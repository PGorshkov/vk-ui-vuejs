<template>
  <section :class="[`${baseClassName}`, size, { line, 'error': isError }]">
    <label
      :class="[`${baseClassName}__label`]"
      :for="generateID"
      v-if="label"
    >
      {{ label }}
    </label>
    <div :class="[`${baseClassName}__content`, { 'error': isError }]">
      <div
        :class="[`${baseClassName}__input`]">
        <input
          :placeholder="placeholder"
          :disabled="isDisabled"
          :id="generateID"
        />
        <div :class="`${baseClassName}__icon`" v-if="icon">
          <vk-icon-base
            :icon-name="icon">
            <component :is="getIcon" />
          </vk-icon-base>
        </div>
      </div>
      <span :class="[`${baseClassName}__details`]" v-if="detailsHide">
        {{ getDetailsText }}
      </span>
    </div>
  </section>
</template>

<script>
import VkIconBase from '../../Icons/VkIconBase'
const baseClassName = 'vk-text-field'
export default {
  name: baseClassName,
  components: { VkIconBase },
  data: () => ({
    baseClassName
  }),
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    detailsText: {
      type: String
    },
    errorText: {
      type: String
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: 'default'
    },
    detailsHide: {
      type: Boolean,
      default: true
    },
    line: {
      type: Boolean
    },
    isDisabled: {
      type: Boolean
    },
    isError: {
      type: Boolean
    }
  },
  computed: {
    generateID () {
      return `input-${(+new Date()).toString(16)}`
    },
    getDetailsText () {
      return this.isError
        ? this.errorText || this.detailsText
        : this.detailsText
    },
    getIcon () {
      if (!this.icon) {
        return null
      }
      return () => import(`../../Icons/MaterialIcon${this.icon}`)
    }
  }
}
</script>

<style lang="scss" src="./scss/vkTextField.scss" />
