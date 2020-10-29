import Board from "../../src/Classes/Board.js"

describe("Board", () => {

    it("should be an array 3x3", () => {
        let newBoard = new Board(3)
        let table = newBoard.getTable()
        expect(table).toHaveLength(3)
        expect(table[0]).toHaveLength(3)
    })
    it('should be filled with dots', () => {
        let newBoard = new Board(3)
        let table = newBoard.getTable()
        console.log(table)
        let count = 0
        table.forEach(line => count += line.filter(cell => cell === '.').length)
        expect(count).toEqual(8)
    });

})