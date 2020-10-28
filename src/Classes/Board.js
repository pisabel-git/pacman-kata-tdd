class Board {
    constructor(size){
        this.table = Array(size).fill().map(()=>Array(size).fill('.'))
        this.table[0][0] = 'V'
    }

    getTable(){
       return this.table 
    }

    updateTable(formerPosition, newPosition){
        this.table[newPosition[1]][newPosition[0]] = 'V'
        this.table[formerPosition[1]][formerPosition[0]] = ' '
        console.log(this.table)
    }
}

export default Board