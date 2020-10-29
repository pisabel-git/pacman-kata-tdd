<template>
<div class="Gameboard">
  <GameVue></GameVue>
</div>
</template>

<script>
import GameVue from '@/components/GameVue'

export default {
  name: 'Gameboard',
  props: ['size'],
  data() {
      return{
        table:  Array(this.size).fill().map(()=>Array(this.size).fill('•'))
      }
  },
  beforeMount() {
    this.table[0][0] = 'V'
  },
  components: {
    GameVue
  }
}
</script>

<style>

</style>
