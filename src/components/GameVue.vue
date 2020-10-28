<template>
  <div>
    <div class="game" v-for="line in game.Board.getTable()" :key="line">
      <div class="game-line" v-for="cell in line" :key="cell">
        {{cell}}
      </div>
    </div>
  </div>
</template>

<script>
import Game from '@/Classes/Game'

export default {
  name: 'GameVue',
  data() {
      return{
        game:  new Game()
      }
  },
  mounted() {},
  components: {}
}
</script>

<style>
  .game{
    display:flex;
    justify-content:space-evenly;
  }
</style>
