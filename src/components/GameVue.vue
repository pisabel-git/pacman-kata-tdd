<template>
  <div>
    <div
      class="game"
      v-for="(line, indexLine) in game.Board.getTable()"
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
  </div>
</template>

<script>
import Game from "@/Classes/Game";

export default {
  name: "GameVue",
  data() {
    return {
      game: new Game(),
    };
  },
  mounted() {},
  components: {},
};
</script>

<style>
.game {
  display: flex;
  justify-content: space-evenly;
}
</style>
