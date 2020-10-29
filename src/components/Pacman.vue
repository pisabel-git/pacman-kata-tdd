<template>
<p class="pacman">V</p>
</template>

<script>

export default {
  name: 'Pacman',
  data() {
    return {
      posX: 0,
      posY: 0
    }
  },
  methods: {
    getPosition(){
        let position = [this.posX, this.posY]
        return position  
    },

    moveRight(){
        this.posX ++
    },
    moveLeft(){
        this.posX --
    },
    moveBottom(){
        this.posY ++
    },
    moveUp(){
        this.posY --
    }
  }
}
</script>

<style>

</style>
