import Board from "../../src/Classes/Board.js"

describe("Board", () => {

    it("should be an array 3x3", () => {
        let newBoard = new Board(3)
        let boardTable = newBoard.getTable()
        expect(boardTable).toHaveLength(3)
        expect(boardTable[0]).toHaveLength(3)
    })

})