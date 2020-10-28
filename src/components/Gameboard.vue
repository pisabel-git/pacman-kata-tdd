<template>
<div class="Gameboard"></div>
</template>

<script>
import Board from '@/Classes/Board'

export default {
  name: 'Gameboard',
  data() {
      return{
        board:  new Board()
      }
  },
  mounted() {},
  components: {}
}
</script>

<style>

</style>
