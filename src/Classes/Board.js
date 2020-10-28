class Board {
    constructor(size){
        this.table = Array(size).fill().map(()=>Array(size).fill('.'))
    }

    getTable(){
       return this.table 
    }
}

export default Board