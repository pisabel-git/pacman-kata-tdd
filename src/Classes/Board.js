class Board {
    constructor(size){
        this.table = Array(size).fill().map(()=>Array(size).fill('.'))
        this.table[0][0] = 'V'
    }

    getTable(){
       return this.table 
    }
}

export default Board