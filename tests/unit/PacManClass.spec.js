const { default: PacMan } = require("../../src/Classes/PacMan")

describe("PacMan", () => {
    let pacman
    beforeEach(() => {
        pacman = new PacMan()
    })
    
    it("should exist", () => {
        expect(pacman).toBeTruthy()
    })

    it("should have as position 0 0 on game begin", () => {
        let position = pacman.getPosition()
        expect(position).toEqual([0, 0])
    })

    it("should move the pacman horizontally or vertically", () => {
        pacman.moveRight()
        expect(pacman.getPosition()).toEqual([1, 0])
        pacman.moveLeft()
        expect(pacman.getPosition()).toEqual([0, 0])
        pacman.moveBottom()
        expect(pacman.getPosition()).toEqual([0, 1])
        pacman.moveUp()
        expect(pacman.getPosition()).toEqual([0, 0])
    })
})