'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api1')
const authUi = require('./ui')
const authLogic = require('./logic')
//

// const gameBoard = ['', '', '', '', '', '', '', '', '']
const playerX = 'X' // assign each player a string
const playerY = 'O'

// const onClick = function myBoard () {
//   let symbol = $(this).prop('box' + 1) // pulling out only the ids after clicking
//     return // on the div box
// }
// // we check if board[i]has as assigned value
//
//   let board = [] // if it doesnt, then we want to assign the'x' or 'y'

// add a function to cehck if board is empty
//   if (board[i] === '') { +
//     originalBoard[i] = document.getElementById('box'+i)
//     console.log('this position is occupied')
//   }
// }

let currentTurn = 1 // need to know whose turn it is
let movesMade = 0 // how many moves made needed to later calculate the min/max
// moves made

const switchPlayer = function (value) {
  movesMade++
  if (currentTurn === 1) {
    event.target.innerHTML = playerX
    currentTurn++ // we check which player's turn it is.
  } else {
    event.target.innerHTML = playerY
    currentTurn--
  }
}

function winLines (symbol) {
  return false
  if((board[0]===board[1]===[2]) || (board[0]===board[3]===[6] )|| (board[0]===board[4]===[8]) ||
  (board[1]===b === d[4]===board[7]) || (board[6]===board[7]===board[8]) ||
  (board[2]===board[5]===board[8]) ||(board[3]===board[4]===board[5])||
  (board[2]===board[4]===board[6])) {
  } else {
 return true
  }
}
// function checkForWinner(){
//   if(movesMade)>4 {
//
//   }
// }
// function startGame(){
//   document.turn = 'X'; //create a function to start the game . we wnat the box to have an event handler
// }
// function playGame(){
//   displayOutput()
// }
// f
//   box.inner
// const game = function(board, coords) {   //no need for it.too complicated
//     const y = point[0]
//     const x = point[1]
//     const index = 3 * y + x // assign coordinates and get the location
//     const symbol = board[index]
//     combinations += symbol // this will help figure out the location the user clicks
//   })
//   return combinations
// }
// console.log(gameBoard[2 + (1 * 3)])
//
// //
// // 2d const game = [         // wanted to ideally do it in a 2 d format.
// is it possible to create a call back and convert the 2d to single array?

// //   const winCombinations: [
// //     [1,2,3],
// //     [1,5,9],
// //     [1,4,7],
// //     [2,5,8],
// //     [4,5,6],
// //     [7,5,3],
// //     [3,6,9],
// //     [7,8,9]
// //     ]
// // ]

const changeSymbol = function (data) {
  event.preventDefault()
  console.log('I need to switch symbol')
  console.log('On signIn function data is', data)
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('I am trying to sign up')
  const data = getFormFields(event.target)

  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Did you sign in?')

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('change your pw')

  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}

const onSignOut = function (data) {
  event.preventDefault()
  authApi.signOut()
    .then(authApi.signOutSuccess)
    .catch(authApi.signOutFailure)
}

module.exports = {
  changeSymbol: changeSymbol,
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut
}
