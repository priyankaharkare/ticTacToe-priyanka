'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')
// const events = require('./events')

let playerTurn = 0 // to figure out who starts
// let gameBoard = [] // empty array so that we can add the winning index/key
// let gameWinner // to track who wins
let currentPlayer = 'X' // a ssign a string to the player

const switchPlayer = function (event) {
  console.log(`store.game.is`, store.game)
  if (event.target.innerHTML === '' && store.game.over === false) {
    if (currentPlayer === 'X') {
      store.game.cells[event.target.id] = 'X'
      event.target.innerHTML = 'X'
      playerTurn++ // we add a turn each time a player plays
      didAnyoneWin(event)
      currentPlayer = 'O'
     } else {
     store.game.cells[event.target.id] = 'O'
      event.target.innerHTML = 'O'
      playerTurn++
      didAnyoneWin(event)
      currentPlayer = 'X'
    }
    // console.log('current player 2 is ' + currentPlayer)
    // console.log(event.target.id)
  }
}

/// / gameWinner $('.message').html('Play er ' + currentPlayer + 'Wins !!')
// }
// putting in all win cobinations now,but want to check if i can just loop
const didAnyoneWin = function (event) {
  // console.log('gameboard is ', store.game.cells[0])
  if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    console.log(currentPlayer + 'wins')
    store.game.over = true
    $('#content').html(' Congratulations! You Won ' + currentPlayer + '! Do you want to play again?')
  }
  if (store.game.cells[0] === 'X' && store.game.cells[2] === 'X' && store.game.cells[1] === 'X') {
    // console.log(currentPlayer + 'wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    // console.log(currentPlayer + 'wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
    // console.log(currentPlayer + 'wins')
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
    store.game.over = true
  }
  if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    // console.log(currentPlayer + ' wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    // console.log(currentPlayer + ' wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    // console.log(currentPlayer + ' wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    // console.log(currentPlayer + ' wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    // console.log(currentPlayer + ' wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    // console.log(currentPlayer + ' wins')
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
    store.game.over = true
  }
  if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    // console.log(currentPlayer + ' wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    // console.log(currentPlayer + ' wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    // console.log(currentPlayer + ' wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    // console.log(currentPlayer + ' wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O') {
    // console.log(currentPlayer + ' wins')
    store.game.over = true
    $('#content').html(' Congratulations! You won ', currentPlayer, '! Do you want to play again?')
  }
  if (playerTurn === 9) {
    // console.log('its a tie')
    store.game.over = true
    $('#content').html(' Its a tie! Do you want to play again?')
  }
  // console.log(store.game)
}

// const resetGame = function () {
//   store.game.cells = []
//   $('.box').empty('data-cells')
//   currentPlayer = 'X'
//   console.log(store.game.cells)
// }
// console.log('is this working')

module.exports = {
  switchPlayer: switchPlayer,
  didAnyoneWin: didAnyoneWin
  // resetGame: resetGame
}
