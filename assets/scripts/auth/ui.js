'use strict'
const store = require('../store.js')
// store is a js object. you can add keys to it.
const signUpSuccess = function (signUpResponse) {
  $('#content').html("You've signed up, Please Login to begin the game!")
}
const signUpFail = function (response) {
  $('#content').html(`Sorry, please try again !,
      <br/> Please Login if you already have an account !`)
}
const signInSuccess = function (response) {
  store.user = response.user
  $('#content').html(`Yaay! You're signed in! <br/> Click on the New Game Button,
    and begin the game ! Good Luck !`)
}
const signInFail = function (response) {
  $('#content').html(`Oh no ! Check your username and password and try again !`)
}

const changePasswordSuccess = function (response) {
  delete store.user
  $('#content').html('Your Password has been updated',
    'Please login with your new password and play the game !')
}

const changePasswordFail = function (response) {
  $('#content').html('Sorry, you were not able to change your password,',
    'Please try again !')
}

const signOutSuccess = function (response) {
  delete store.user
  $('#content').html('You have successfully signed out ! See you soon')
}

const signOutFailure = function (response) {
  $('#content').html('Sorry, try again to Sign Out !!')
}

const createGameSuccess = function (response) {
  store.game = response.game
  $('#content').html('Good Luck on the game !!')
}

const createGameFail = function (response) {
  $('#content').html(`Sorry, could not load the game. Please try again !`)
}

const updateGameSuccess = function (response) {
  $('#content').html(' Game has been updated !')
}
const updateGameFail = function (response) {
  $('#content').html(' Sorry, game update not possible at this time!')
}
const getGamesSuccess = function (response) {
  $('#content').html(`Current Game id is : ${response.game.id} <br/> Your email id is: ${response.game.player_x.email}`)
}
const getGamesFail = function (response) {
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
