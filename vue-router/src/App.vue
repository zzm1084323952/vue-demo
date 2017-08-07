<template>
  <div class="app">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from './components/Header/Header.vue'

export default {
  name: 'app',
  components: {
  	NavHeader
  }
}
</script>

<style scoped>
@import url("./assets/css/reset.css");

</style>
