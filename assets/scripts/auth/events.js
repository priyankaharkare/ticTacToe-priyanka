'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api1')
const authUi = require('./ui')
// const authLogic = require('./logic')
//
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

// let currentTurn = 1 // need to know whose turn it is
// let movesMade = 0 // how many moves made needed to later calculate the min/max
// // moves made
//
// const switchPlayer = function (value) {
//   movesMade++
//   if (currentTurn === 1) {
//     event.target.innerHTML = playerX
//     currentTurn++ // we check which player's turn it is.
//   } else {
//     event.target.innerHTML = playerY
//     currentTurn--
//   }
// }

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
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('is the new game up yet')

  authApi.createGame(event)
    .then(authUi.createGameSuccess)
    .catch(authUi.createGameFail)
}
const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('check check..is the game updated')

  authApi.updateGame(event)
    .then(authUi.updateGameSuccess)
    .catch(authUi.updateGameFail)
}
const onGetGames = function (event) {
  console.log('did this click?', onGetGames)
  event.preventDefault()
  console.log('why do you want to know when you last lost')

  authApi.getGames(event)
    .then(authUi.getGamesSuccess)
    .catch(authUi.getGamesFail)
}
module.exports = {
  changeSymbol: changeSymbol,
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onCreateGame: onCreateGame,
  onUpdateGame: onUpdateGame,
  onGetGames: onGetGames
}
