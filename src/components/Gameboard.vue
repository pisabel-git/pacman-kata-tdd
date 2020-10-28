<template>
<div class="Gameboard">
</div>
</template>

<script>
import Gameboard from '@/Classes/Gameboard'

export default {
  name: 'Gameboard',
  data() {
      return{
        gameboard:  new Gameboard()
      }
  },
  mounted() {},
  components: {}
}
</script>

<style>

</style>
