const tiles = document.querySelectorAll('.tile')

const GameBoard = (() => {
    let gameBoard = ['x', 'x', 'o', 'o', 'x', 'o', 'x', 'o', 'x'];
    const displayBoard = () => {
        for(let i = 0; i < gameBoard.length; i++) {
            tiles[i].textContent = gameBoard[i]
        }
    }
    return {displayBoard}
})()

const Player = (name, marker) => {

}

GameBoard.displayBoard()