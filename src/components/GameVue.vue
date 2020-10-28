<template>
  <div>
    <div
      class="game"
      v-for="(line, indexLine) in board"
      :key="indexLine"
      :id="indexLine"
    >
      <div
        class="game-row"
        v-for="(cell, indexRow) in line"
        :key="indexRow"
        :id="'cell_'+indexRow + '' +indexLine"
      >
        {{ cell }}
      </div>
    </div>
    <button v-on:click="moveToRight" id="buttonMoveToRight">Move to right</button>
  </div>
</template>

<script>
import Game from "@/Classes/Game";

export default {
  name: "GameVue",
  data() {
    return {
      game: new Game(),
      board: [],
    };
  },

  methods: {
    moveToRight(){
      this.game.pacManMoveToRight()
    }
  },

  mounted() {
    this.board = this.game.Board.getTable() 
  },

  components: {},
};
</script>

<style>
.game {
  display: flex;
  justify-content: space-evenly;
}
</style>
