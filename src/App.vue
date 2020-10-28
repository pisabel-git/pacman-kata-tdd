<template>
  <div id="app">
    <GameVue></GameVue>
  </div>
</template>

<script>
import GameVue from '@/components/GameVue.vue'
export default {
  name: 'App',
  components: {
    GameVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-weight:bold;
}
</style>
