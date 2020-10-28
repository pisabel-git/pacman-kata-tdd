class PacMan {
    constructor(){
        this.posX = 0
        this.posY = 0
    }

    getPosition(){
        let position = [this.posX, this.posY]
        return position  
    }

    moveRight(){
        this.posX ++
    }

    moveLeft(){
        this.posX --
    }

    moveBottom(){
        this.posY ++
    }

    moveUp(){
        this.posY --
    }
}

export default PacMan