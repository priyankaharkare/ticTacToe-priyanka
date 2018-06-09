'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')
//
// let startGame;
// const game = [
//   const player_x: 'x',
//   const player_y: 'y'
//   const winningLine: [
//     [1,2,3],
//     [1,5,9],
//     [1,4,7],
//     [2,5,8],
//     [4,5,6],
//     [7,5,3],
//     [3,6,9],
//     [7,8,9]
//     ]
// ]

const changeSymbol = function (data) {
  event.preventDefault()
  console.log('I need to switch symbol')
  console.log('On signIn function data is', data)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('clicked on this form')

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

  authApi.signIn(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}

module.exports = {
  changeSymbol: changeSymbol,
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword
}
