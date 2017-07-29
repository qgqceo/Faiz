<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './styles/reset.scss';
@import './styles/index.scss';
#app {
  width: 100%;
  height: 100%;
}
</style>
