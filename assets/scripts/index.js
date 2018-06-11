'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events1') // your JS code goes here
//
// $('.box').on('click', authEvents.switchSymbol)

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#box1').on('click', authEvents.changeSymbol)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.box').on('click', authEvents.onClick) // trying to create a function

}) // for clickon each box
