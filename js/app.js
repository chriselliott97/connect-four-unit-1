/*-------------------------------- Constants --------------------------------*/




/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll("section > div")
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("button")
const displayPlayerTurn = document.querySelector("#player-turn")

/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  turn = 1
  winner = null
  board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, , null, null, null, null, null, null, null, null, null, null, 1]
  render()
}

function render() {
  board.forEach((sqr, idx) => {
    if (squareEls[idx].classList.contains('used')) {
      if (sqr === 1) {
        squareEls[idx].classList.add('player-one')
      }
    }  
  })
}

function handleClick() {

}

function getWinner() {

}

function resetGame() {

}