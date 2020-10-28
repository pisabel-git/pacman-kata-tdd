class Board {
    constructor(size){
        this.table = Array(size).fill(0).map(()=>Array(size).fill(0))
    }

    getTable(){
       return this.table 
    }
}

export default Board