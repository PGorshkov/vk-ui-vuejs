<template>
  <section :class="`${baseClassName}`">
    <div
      ref="tooltip-activator"
      :class="`${baseClassName}__activator`"
      @click="openClickActivator"
      @mouseover="openHoverActivator(true)"
      @mouseleave="openHoverActivator(false)">
      <slot name="activator" v-if="$slots.activator"></slot>
      <vk-icon-base
        width="24px"
        height="24px"
        icon-color="#4986cc"
        v-else
        icon-name="info">
        <material-icon-info />
      </vk-icon-base>
    </div>
    <div
      ref="tooltip-content"
      :style="styleContent"
      :class="`${baseClassName}__content`"
      v-show="open">
      <slot />
    </div>
  </section>
</template>

<script>
import VkIconBase from '../../Icons/VkIconBase'
import MaterialIconInfo from '../../Icons/MaterialIconInfo'
const baseClassName = 'vk-tooltip'
export default {
  name: baseClassName,
  components: { VkIconBase, MaterialIconInfo },
  mounted () {
    this.positionBody()
    this.open = false
  },
  data: () => ({
    baseClassName,
    open: true,
    styleContent: {
      top: '100%',
      left: 0
    }
  }),
  props: {
    openClick: {
      type: Boolean
    }
  },
  computed: {},
  methods: {
    openClickActivator () {
      if (!this.openClick) { return }
      this.open = !this.open
    },
    openHoverActivator (val) {
      if (this.openClick) { return }
      this.open = val
    },
    positionBody () {
      let style = {}
      const w = window.innerWidth
      const h = window.innerHeight
      const activator = this.$refs['tooltip-activator'].getBoundingClientRect()
      const content = this.$refs['tooltip-content'].getBoundingClientRect()
      if (w - (activator.x + content.width) < content.width) {
        style = { ...style, right: '0px' }
      }
      if (h - (activator.y + content.height) < content.height) {
        style = { ...style, top: `-${content.height}px` }
      }
      this.styleContent = style
    }
  }
}
</script>

<style lang="scss" src="./scss/vkTooltip.scss"></style>
