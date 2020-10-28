import Game from '@/Classes/Game'
import PacMan from '@/Classes/PacMan'
import Board from '@/Classes/Board'

describe("Game", () => {
    let game;
    beforeEach(()=> {
        game = new Game()
    })
    it("should exist", ()=> {
        expect(game).toBeTruthy()
    })
    it("should contain PacMan", ()=> {
        expect(game.PacMan).toBeInstanceOf(PacMan)
    })
    it("should contain a board", ()=> {
        expect(game.Board).toBeInstanceOf(Board)
    })
})