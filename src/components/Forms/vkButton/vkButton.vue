<template>
  <button
    :class="[`${baseClassName}`, size, view, color, { rounded, block }]"
    @click="$emit('click', $event)"
    :disabled="isDisabled"
    :type="type">
    <div :class="`${baseClassName}__container`">
      <div :class="`${baseClassName}__icon`" v-if="icon">
        <vk-icon-base
          :icon-name="icon">
          <component :is="getIcon" />
        </vk-icon-base>
      </div>
      <div :class="`${baseClassName}__content`">
        <slot/>
      </div>
    </div>
  </button>
</template>

<script>
import VkIconBase from '../../Icons/VkIconBase'
const baseClassName = 'vk-button'
export default {
  name: baseClassName,
  components: { VkIconBase },
  data: () => ({
    baseClassName
  }),
  props: {
    isDisabled: {
      type: Boolean
    },
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'button'
    },
    view: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String
    },
    rounded: {
      type: Boolean
    },
    block: {
      type: Boolean
    }
  },
  computed: {
    getIcon () {
      if (!this.icon) {
        return null
      }
      return () => import(`../../Icons/MaterialIcon${this.icon}`)
    }
  }
}
</script>

<style lang="scss" src="./scss/vkButton.scss" />
