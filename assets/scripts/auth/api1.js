'use strict'

const store = require('../store.js')
const config = require('../config.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + 'games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateGame = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: event.target.id,
          value: event.target.innerHTML
        },
        over: store.game.over
      }
    }
  })
}
module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword,
  signOut: signOut,
  createGame: createGame,
  updateGame: updateGame,
  getGames: getGames
}
