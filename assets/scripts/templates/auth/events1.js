'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api1')
const authUi = require('./ui')
//


//
const playerX = 'X'
const playerY = 'O'
let currentTurn = 1
let movesMade = 0


// function startGame(){
//   document.turn = 'X'; //create a function to start the game . we wnat the box to have an event handler
// }
function playGame(){
  displayOutput()
}
function switchTurn(){
  box.inner

}

const gameBoard = ['0', '1', '2', '3', '4', '5', '6  ', ' 7', '8']
const game = function(board, coords) {
  let combinations = ''
  coords.forEach((point) => {
    const y = point[0]
    const x = point[1]
    const index = 3 * y + x // assign coordinates and get the location
    const symbol = board[index]
    combinations += symbol // this will help figure out the location the user clicks
  })
  return combinations
}

const gameReset
// console.log(gameBoard[2 + (1 * 3)])
//
// //
// // 2d const game = [         // wanted to ideally do it in a 2 d format.
// is it possible to create a call back and convert the 2d to single array?

// //   const player_x: 'x',
// //   const player_y: 'y'
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


function resetGame() {
  clearBoard()
}

var checkForSymbol[] // check if that box has anything in it first
  function onClick(box) = {
    if (document.getElementById(box).innerHTML !=" "){
      console.log("Choose another box")
      $('#content').html('This box is taken,Choose another box')
    } else} n m hkn,mjb
    if (player)
  }

function isBoardEmpty(board){
  let

}

const changeSymbol = function(data) {
  event.preventDefault()
  console.log('I need to switch symbol')
  console.log('On signIn function data is', data)
}

const onSignUp = function(event) {
  event.preventDefault()
  console.log('I am trying to sign up')
  const data = getFormFields(event.target)

  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFail)
}

const onSignIn = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Did you sign in?')

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
}
const onChangePassword = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('change your pw')

  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}

const onSignOut = function(data) {
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
