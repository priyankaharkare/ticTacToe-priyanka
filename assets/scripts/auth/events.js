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
  console.log(`in sign out function`)
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const resetGame = function () {
  store.game.cells = []
  $('.box').empty('data-cells')
}
const onCreateGame = function (event) {
  event.preventDefault()
  authApi.createGame(event)
    .then(authUi.createGameSuccess)
    .catch(authUi.createGameFail)
  resetGame()
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
}
