//--------------------------Consts--------------------------------//
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
let playerRed = 'red'
let playerBlack = 'black'

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".cell")
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("button")
const body = document.querySelector('body')

  //columns
  const column0 = [squareEls[35], squareEls[28], squareEls[21], squareEls[14], squareEls[7], squareEls[0]];
  const column1 = [squareEls[36], squareEls[29], squareEls[22], squareEls[15], squareEls[8], squareEls[1]];
  const column2 = [squareEls[37], squareEls[30], squareEls[23], squareEls[16], squareEls[9], squareEls[2]];
  const column3 = [squareEls[38], squareEls[31], squareEls[24], squareEls[17], squareEls[10], squareEls[3]];
  const column4 = [squareEls[39], squareEls[32], squareEls[25], squareEls[18], squareEls[11], squareEls[4]];
  const column5 = [squareEls[40], squareEls[33], squareEls[26], squareEls[19], squareEls[12], squareEls[5],];
  const column6 = [squareEls[41], squareEls[34], squareEls[27], squareEls[20], squareEls[13], squareEls[6]];
  const columnsArr = [column0, column1, column2, column3, column4, column5, column6];
  
  //rows
  const row0 = [squareEls[0], squareEls[1], squareEls[2], squareEls[3], squareEls[4], squareEls[5], squareEls[6]];
  const row1 = [squareEls[7], squareEls[8], squareEls[9], squareEls[10], squareEls[11], squareEls[12], squareEls[13]];
  const row2 = [squareEls[14], squareEls[15], squareEls[16], squareEls[17], squareEls[18], squareEls[19], squareEls[20]];
  const row3 = [squareEls[21], squareEls[22], squareEls[23], squareEls[24], squareEls[25], squareEls[26], squareEls[27]];
  const row4 = [squareEls[28], squareEls[29], squareEls[30], squareEls[31], squareEls[32], squareEls[33], squareEls[34]];
  const row5 = [squareEls[35], squareEls[36], squareEls[37], squareEls[38], squareEls[39], squareEls[40], squareEls[41]];
  const rowsArr = [row0, row1, row2, row3, row4, row5];
  


/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square){square.addEventListener("click", handleClick)})
resetBtnEl.addEventListener('click', resetGame)




/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

function render() {
  getWinner()
  board.forEach((sqr, idx) => {
      if (sqr === 1) {
        squareEls[idx].classList.add('red')
      } else if (sqr === -1) {
        squareEls[idx].classList.add('black')
      } else {
        squareEls[idx].className = ('cell')
        body.style.backgroundColor = ('lightgrey')
        messageEl.style.color = ('')
      } 
  })
  if (winner === null) {
    messageEl.textContent = `It is ${turn === 1 ? "Red's turn!" : "Black's turn!"}`
  } else if (winner === 'T') {
    messageEl.textContent = "It's a tie! Play again!" 
    resetBtnEl.removeAttribute('hidden')
  } else if (winner === -1) {
    messageEl.textContent = `Congrats! Red won!`
    resetBtnEl.removeAttribute('hidden')
    body.style.backgroundColor = ('red')
    confetti.start(3000)
  } else if (winner === 1) {
    messageEl.textContent = `Congrats! Black won!`
    messageEl.style.color = ('lightgrey')
    resetBtnEl.removeAttribute('hidden')
    body.style.backgroundColor = ('black')
    confetti.start(3000)
  }
}





function handleClick(evt) {
  let spIdx = parseInt(evt.target.id.replace('sp', ''))
  console.log('the clicked space is ',spIdx)
  if (board[spIdx] || winner) {
    return
  } 
  // get the piece to go to the bottom of the column
  // get the piece if placed below have new piece go on the next row of column 
  // write a new function that will correspond to a piece being put above in the columns 

  const corrIdx = handlePlacement(spIdx)
  console.log('the correct space', corrIdx)
  board[corrIdx] = turn
  turn *= -1
  render()
}

function handlePlacement(spIdx){
console.log('bottom space', spIdx + 35)
let opnPos = spIdx + 35 
// for each column it needs to check if row below is filled 
if (board[opnPos] !== null) {
  opnPos = (spIdx + 28)
}
if (board[opnPos] !== null) {
  opnPos = (spIdx + 21)
}
if (board[opnPos] !== null) {
  opnPos = (spIdx + 14)
}
if (board[opnPos] !== null) {
  opnPos = (spIdx + 7)
}
if (board[opnPos] !== null) {
  opnPos = (spIdx)
}

return opnPos
}


function getWinner() {
  winningCombos.forEach(function(combo){
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]] + board[combo[3]]) === 4){
			winner = turn
		}else if(!board.includes(null) && winner === null){
			winner = 'T'
		}
  })
}

function resetGame() {
  init()
  resetBtnEl.hidden = true
}

