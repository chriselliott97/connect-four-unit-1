/*-------------------------------- Constants --------------------------------*/
const column0 = [allCells[35], allCells[28], allCells[21], allCells[14], allCells[7], allCells[0], topCells[0]];
const column1 = [allCells[36], allCells[29], allCells[22], allCells[15], allCells[8], allCells[1], topCells[1]];
const column2 = [allCells[37], allCells[30], allCells[23], allCells[16], allCells[9], allCells[2], topCells[2]];
const column3 = [allCells[38], allCells[31], allCells[24], allCells[17], allCells[10], allCells[3], topCells[3]];
const column4 = [allCells[39], allCells[32], allCells[25], allCells[18], allCells[11], allCells[4], topCells[4]];
const column5 = [allCells[40], allCells[33], allCells[26], allCells[19], allCells[12], allCells[5], topCells[5]];
const column6 = [allCells[41], allCells[34], allCells[27], allCells[20], allCells[13], allCells[6], topCells[6]];
const columns = [column0, column1, column2, column3, column4, column5, column6];


const winningCombos = [ 
  [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
  [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
  [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
  [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
  [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
  [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
  [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
  [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
  [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
  [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
  [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
  [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
  [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
  [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
  [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
  [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
  [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
  [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
  [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
  [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
  [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
  [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
  [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
  ]



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".cell:not(.row-top")
const topRow = document.querySelectorAll(".cell.row-top")
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("button")
const displayPlayerTurn = document.querySelector("#player-turn")

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square){square.addEventListener("click", handleClick)})

for ()


/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  turn = 1
  winner = null
  board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  render()
}

function render() {
  board.forEach((sqr, idx) => {
      if (sqr === 1) {
        squareEls[idx].classList.add('red')
        squareEls[idx].classList.add('player-one')
      } else if (sqr === -1) {
        squareEls[idx].classList.add('black')
        squareEls[idx].classList.add('player-two')
      } else {
        squareEls[idx] = ''
        squareEls[idx] = ''
      } 
  })
  if (winner === null) {
    messageEl.textContent = `It is ${turn === 1 ? "Red's turn!" : "Black's turn!"}`
  } else if (winner === 'T') {
    messageEl.textContent = "It's a tie! Play again!" 
    resetBtnEl.removeAttribute('hidden')
  } else {
    messageEl.textContent = `Congrats! ${winner === -1 ? 'Red' : 'Black'} won!`
    resetBtnEl.removeAttribute('hidden')
  }
}

function handleClick(evt) {
  if(board[(evt.target.class.replace("cell", ''))] !== null){
		return
  }
  turn *= -1

  render()
}


function getWinner() {

}

function resetGame() {

}