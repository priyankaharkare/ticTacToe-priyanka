'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api1')
const authUi = require('./ui')
const authLogic1 = require('./logic1')

// const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFail)
  $('#sign-up-form').find('input').val('')
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
  $('#sign-in-form').find('input').val('')
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
  $('#change-password-form').find('input').val('')
}

const onSignOut = function (data) {
  console.log(`in sign out function`)
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
  $('#sign-out-form').find('input').val('')
}

// const resetGame = function () {
//   store.game.cells = []
//   $('.box').empty('data-cells')
//   // playerTurn = 0
// }

const onCreateGame = function (event) {
  event.preventDefault()
  authApi.createGame(event)
    .then(authUi.createGameSuccess)
    .catch(authUi.createGameFail)
  authLogic1.resetGame()
}
const onUpdateGame = function (event) {
  event.preventDefault()
  authApi.updateGame(event)
    .then(authUi.updateGameSuccess)
    .catch(authUi.updateGameFail)
}

const onGetGames = function (event) {
  // console.log('did this click?', onGetGames)
  event.preventDefault()
  // console.log('why do you want to know when you last lost')

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
  // clearField: clearField
}
