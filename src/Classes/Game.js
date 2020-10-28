import PacMan from './PacMan'
import Board from './Board'

class Game {
    constructor() {
        this.PacMan = new PacMan()
        this.Board = new Board(3)
    }

    pacManMoveToRight(){
        let formerPosition = this.PacMan.getPosition()
        this.PacMan.moveRight()
        let newPosition = this.PacMan.getPosition()
        this.Board.updateTable(formerPosition, newPosition)
    }
}

export default Game