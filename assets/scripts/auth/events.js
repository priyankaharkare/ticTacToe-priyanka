'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api1')
const authUi = require('./ui')
const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}
const onSignOut = function (data) {
  console.log('does this work')
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const resetGame = function () {
  let currentPlayer = 'X'
  store.game.cells = []
  $('.box').empty('data-cells')
  currentPlayer = 'X'
  // console.log(store.game.cells)
}
// console.log('is this working')
const onCreateGame = function (event) {
  event.preventDefault()
  // console.log('is the new game up yet')

  authApi.createGame(event)
    .then(authUi.createGameSuccess)
    .catch(authUi.createGameFail)
  resetGame()
}
const onUpdateGame = function (event) {
  event.preventDefault()
  // console.log('check check..is the game updated')

  authApi.updateGame(event)
    .then(authUi.updateGameSuccess)
    .catch(authUi.updateGameFail)
}
const onGetGames = function (event) {
  // console.log('did this click?', onGetGames)
  event.preventDefault()

  authApi.getGames(event)
    .then(authUi.getGamesSuccess)
    .catch(authUi.getGamesFail)
}
module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onCreateGame: onCreateGame,
  onUpdateGame: onUpdateGame,
  onGetGames: onGetGames
}
