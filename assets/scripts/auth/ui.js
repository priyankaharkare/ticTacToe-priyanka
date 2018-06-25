'use strict'
const store = require('../store.js')
const authLogic1 = require('./Logic1')

// store is a js object. you can add keys to it.
// creating UI for fail and success events
const signUpSuccess = function (signUpResponse) {
  $('#content').html("You've signed up, Please Login to begin the game!")
  $('#sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').hide()
}

const signUpFail = function (response) {
  $('#content').html(`Sorry, please try again !,
      <br/> Please Login if you already have an account !`)
  $('#sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
  $('#change-password-form').find('input').val('')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#content').html(`Yaay! You're signed in! <br/> Click on the New Game Button,
    and begin the game ! Good Luck !`)
  $('#sign-in-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').hide()
  $('#sign-out-form').show()
  $('#change-password-form').show()
  $('#hidden').show()
  $('#hide-navbar').show()
  $('#sign-in-form').hide()
}

const signInFail = function (response) {
  $('#content').html(`Oh no ! Check your username and password and try again !`)
  $('#sign-in-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#change-password-form').find('input').val('')
}

const changePasswordSuccess = function (response) {
  $('#content').html('Your Password has been updated')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
}

const changePasswordFail = function (response) {
  $('#content').html('Sorry, you were not able to change your password,',
    'Please try again !')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
}

const signOutSuccess = function (response) {
  delete store.user
  $('#content').html('You have successfully signed out ! See you soon')
  store.game.over = true
  $('#sign-in-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#sign-up-form').show()
  $('#hide-navbar').hide()
  $('#hidden').hide()
  $('#get-games-form').hide()
  $('#sign-in-form').show()
  authLogic1.resetGame()
}

const signOutFailure = function (response) {
  $('#content').html('Sorry, try again to Sign Out !!')
}

const createGameSuccess = function (response) {
  store.game = response.game
  $('#content').html('Good Luck with the game !!')
  $('#get-games-form').show()
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
