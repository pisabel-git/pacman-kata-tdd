<template>
<div class="Gameboard">
  <GameVue></GameVue>
</div>
</template>

<script>
import Board from '@/Classes/Board'
import GameVue from '@/components/GameVue'

export default {
  name: 'Gameboard',
  data() {
      return{
        board:  new Board()
      }
  },
  mounted() {},
  components: {
    GameVue
  }
}
</script>

<style>

</style>
