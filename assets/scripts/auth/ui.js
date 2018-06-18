'use strict'
const store = require('../store.js')
// store is a js object. you can add keys to it.
const signUpSuccess = function (signUpResponse) {
  // console.log('signUpResponse is ', signUpResponse)
  $('#content').html("You've signed up, Please sign in to begin the game!")
}
const signUpFail = function (error) {
  // console.log('Error in sign up is ', error)
  $('#content').html('Please try signing up again ! The error is ', error)
}
const signInSuccess = function (response) {
  // console.log('signInResponse is ', response)
  store.user = response.user
  console.log(`token is `, store.user.token)
  $('#content').html("Yaay! You're signed in! Click on the New Game Button",
    'and begin the game ! Good Luck !')
}
const signInFail = function (error) {
  // console.log('Error in sign in is ', error)
  $('#content').html('Oh no !Check your username and password and try again',
    'The error is ', error)
}

const changePasswordSuccess = function (response) {
  delete store.user
  // console.log('changePasswordSuccess is ', response)
  $('#content').html('Your Password has been updated',
    'Please use the new Password the next time you login !')
}

const changePasswordFail = function (error) {
//   console.log('Error in change pw ', error)
  $('#content').html('Sorry, you were not able to change your password,',
    'Please try again ! The error is ', error)
}

const signOutSuccess = function (response) {
  delete store.user
  console.log('you were successfully signed out')
  $('#content').html('You have successfully signed out ! See you soon')
}

const signOutFailure = function (error) {
  console.log('something went wrong.Here is your error :', error)
  $('#content').html('sorry, could not sign you out !!')
}

const createGameSuccess = function (response) {
  console.log('create game success is ', createGameSuccess)
  store.game = response.game
  // console.log(`store.user is `, store.game)
  $('#content').html('Good Luck on the game !!')
}

const createGameFail = function (error) {
  // console.log('The error is ', error)
  $('#content').html(' Sorry, couldnt load the game. The error is ', error, 'Try again')
}

const updateGameSuccess = function (response) {
  // console.log('updateGameSuccess is ', updateGameSuccess)
  $('#content').html(' Game has been updated !')
}
const updateGameFail = function (response) {
  // console.log('update fail error is  ', response)
  $('#content').html(' Sorry, game update not possible at this time!')
}
const getGamesSuccess = function (response) {
  console.log('getGamesSuccess is ', response)
  $('#content').html('Here is all the information for you: ', store.user)
}
const getGamesFail = function (error) {
  // console.log('getGamesFail is ', response)
  $('#content').html(" Sorry, no Game History for you. Here's your ", error)
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInFail,
  signInSuccess,
  changePasswordFail,
  changePasswordSuccess,
  createGameSuccess,
  createGameFail,
  updateGameSuccess,
  updateGameFail,
  getGamesSuccess,
  getGamesFail,
  signOutSuccess,
  signOutFailure
}
