import PacMan from './PacMan'
import Board from './Board'

class Game {
    constructor() {
        this.PacMan = new PacMan()
        this.Board = new Board(3)
    }
}

export default Game