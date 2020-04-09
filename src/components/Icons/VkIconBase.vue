<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 18 18"
       :aria-labelledby="iconName"
       role="presentation"
  >
    <title
      :id="iconName"
      lang="en" />
    <g fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'vk-icon-base',
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 16
    },
    height: {
      type: [Number, String],
      default: 16
    },
    iconColor: {
      type: String
    }
  }
}
</script>
