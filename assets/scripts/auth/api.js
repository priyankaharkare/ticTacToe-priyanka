'use strict'

// const store = require('../store.js')
// const config = require('../../config')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-in',
    data: data
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn
}
