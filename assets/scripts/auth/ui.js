'use strict'
const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
}
const signUpFail = function (error) {
  console.log('Error in sign up is ', error)
}
const signInSuccess = function (signInResponse) {
  console.log('signInResponse is ', signInResponse)
}
const signInFail = function (error) {
  console.log('Error in sign up is ', error)
}

const changePasswordSuccess = function (signInResponse) {
  console.log('changePasswordSuccess is ', signInResponse)
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
