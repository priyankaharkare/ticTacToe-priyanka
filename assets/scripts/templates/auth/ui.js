'use strict'
const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
}
const signUpFail = function (error) {
  console.log('Error in sign up is ', error)
}
const signInSuccess = function (response) {
  console.log('signInResponse is ', response)
  store.user = response.user
}
const signInFail = function (error) {
  console.log('Error in sign in is ', error)
}

const changePasswordSuccess = function (response) {
  delete store.user
  console.log('changePasswordSuccess is ', response)
}

const changePasswordFail = function (error) {
  console.log('Error in sign up is ', error)
}
module.exports = {
  signUpSuccess,
  signUpFail,
  signInFail,
  signInSuccess,
  changePasswordFail,
  changePasswordSuccess
}
