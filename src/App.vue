<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <vk-button>text</vk-button>
  </div>
</template>

<script>

import VkButton from './components/Forms/vkButton/vkButton'
export default {
  name: 'App',
  components: {
    VkButton
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
