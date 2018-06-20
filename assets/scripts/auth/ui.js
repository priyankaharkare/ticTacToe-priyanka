'use strict'
const store = require('../store.js')
// store is a js object. you can add keys to it.
const signUpSuccess = function (signUpResponse) {
  // console.log('signUpResponse is ', signUpResponse)
  $('#content').html("You've signed up, Please Sign In to begin the game!")
}
const signUpFail = function (error) {
  console.log('Error in sign up is ', error)
  $('#content').html(`Sorry, please try again!,
      <br/> If you already have an account, please SIGN IN`)
}
const signInSuccess = function (response) {
  store.user = response.user
  $('#content').html("Yaay! You're signed in! Click on the New Game Button",
    'and begin the game ! Good Luck !')
}
const signInFail = function (response) {
  $('#content').html(`Oh no !Check your username and password and try again !`)
}

const changePasswordSuccess = function (response) {
  delete store.user
  $('#content').html('Your Password has been updated',
    'Please use the new Password the next time you login !')
}

const changePasswordFail = function (response) {
  $('#content').html('Sorry, you were not able to change your password,',
    'Please try again !')
}

const signOutSuccess = function (response) {
  delete store.user
  console.log('you were successfully signed out')
  $('#content').html('You have successfully signed out ! See you soon')
}

const signOutFailure = function (response) {
  // console.log('something went wrong.Here is your error :', error)
  $('#content').html('Sorry, try again to Sign Out !!')
}

const createGameSuccess = function (response) {
  console.log('create game success is ', createGameSuccess)
  store.game = response.game
  // console.log(`store.user is `, store.game)
  $('#content').html('Good Luck on the game !!')
}

const createGameFail = function (error) {
  console.log('The error is ', error)
  $('#content').html(`Sorry, couldnt load the game. Please try again !`)
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
  // console.log(response)
  // console.log(`getGamesSuccess is`, response.game.player_x.email)
  $('#content').html(`Current Game id is : ${response.game.id} <br/> Your email id is: ${response.game.player_x.email}`)
}
const getGamesFail = function (response) {
  // console.log('getGamesFail is ', error)
  $('#content').html('We could not load the user board. Please try again later !')
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
